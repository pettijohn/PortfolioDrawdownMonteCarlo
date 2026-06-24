FROM ubuntu:26.04

# These args are supplied by Compose so each developer can build the container
# with a user that matches their host UID/GID. Matching numeric ownership is
# the key to making Linux bind mounts behave sanely for shared editor state.
ARG DEBIAN_FRONTEND=noninteractive
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=1000
ARG DENO_VERSION=2.8.3
ARG RUST_TOOLCHAIN=stable

# Install a small baseline toolset for an interactive development container.
# We also generate a UTF-8 locale up front so shells and editors behave
# consistently across machines.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        bash-completion \
        build-essential \
        ca-certificates \
        curl \
        git \
        less \
        locales \
        sudo \
        unzip \
        wget \
    && locale-gen en_US.UTF-8 \
    && update-locale LANG=en_US.UTF-8 \
    && rm -rf /var/lib/apt/lists/*

# Install Deno directly from the official release artifacts. The VS Code build
# task uses `deno bundle`, which is available again in the pinned 2.x release.
RUN set -eux; \
    case "$(dpkg --print-architecture)" in \
        amd64) deno_target="x86_64-unknown-linux-gnu" ;; \
        arm64) deno_target="aarch64-unknown-linux-gnu" ;; \
        *) echo "Unsupported architecture: $(dpkg --print-architecture)" >&2; exit 1 ;; \
    esac; \
    deno_zip="deno-${deno_target}.zip"; \
    curl -fsSLo "/tmp/${deno_zip}" "https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/${deno_zip}"; \
    curl -fsSLo "/tmp/${deno_zip}.sha256sum" "https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/${deno_zip}.sha256sum"; \
    cd /tmp; \
    sha256sum -c "${deno_zip}.sha256sum"; \
    unzip -q "${deno_zip}" -d /usr/local/bin; \
    chmod 0755 /usr/local/bin/deno; \
    rm -f "/tmp/${deno_zip}" "/tmp/${deno_zip}.sha256sum"; \
    deno --version

# Normalize the container user to the requested UID/GID.
#
# Why this exists:
# Ubuntu 26.04 already ships with an "ubuntu" user on UID/GID 1000. If we
# blindly create a second user like "vscode", it often ends up as 1001, which
# then breaks write access on Linux bind mounts owned by the host's UID 1000.
#
# The logic below "takes over" the requested numeric IDs so the final dev user
# always matches the host account's ownership model:
# - If the target GID already exists, rename that group to USERNAME.
# - Otherwise create the group fresh.
# - If the target UID already exists, rename that user to USERNAME and move its
#   home directory into /home/USERNAME.
# - If USERNAME already exists under a different UID, rewrite it to the
#   requested UID/GID.
# - Otherwise create USERNAME from scratch.
#
# After that we grant passwordless sudo and pre-create VS Code server paths so
# the remote extension does not trip over root-owned directories on first boot.
RUN set -eux; \
    if getent group "${USER_GID}" >/dev/null; then \
        existing_group="$(getent group "${USER_GID}" | cut -d: -f1)"; \
        if [ "${existing_group}" != "${USERNAME}" ]; then \
            groupmod -n "${USERNAME}" "${existing_group}"; \
        fi; \
    else \
        groupadd --gid "${USER_GID}" "${USERNAME}"; \
    fi; \
    if getent passwd "${USER_UID}" >/dev/null; then \
        existing_user="$(getent passwd "${USER_UID}" | cut -d: -f1)"; \
        if [ "${existing_user}" != "${USERNAME}" ]; then \
            usermod -l "${USERNAME}" "${existing_user}"; \
        fi; \
        usermod --gid "${USER_GID}" --home "/home/${USERNAME}" --move-home --shell /bin/bash "${USERNAME}"; \
    elif getent passwd "${USERNAME}" >/dev/null; then \
        usermod --uid "${USER_UID}" --gid "${USER_GID}" --home "/home/${USERNAME}" --move-home --shell /bin/bash "${USERNAME}"; \
    else \
        useradd --uid "${USER_UID}" --gid "${USER_GID}" -m -s /bin/bash "${USERNAME}"; \
    fi; \
    usermod -aG sudo "${USERNAME}"; \
    echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" >"/etc/sudoers.d/90-${USERNAME}"; \
    chmod 0440 "/etc/sudoers.d/90-${USERNAME}"; \
    mkdir -p "/home/${USERNAME}/.vscode-server/data/Machine"; \
    mkdir -p "/home/${USERNAME}/.vscode-server/data/User"; \
    mkdir -p "/home/${USERNAME}/.vscode-server/extensions"; \
    mkdir -p "/home/${USERNAME}/.vscode-server/extensionsCache"; \
    mkdir -p "/home/${USERNAME}/.vscode-server/bin"; \
    chown -R "${USER_UID}:${USER_GID}" "/home/${USERNAME}"

# Keep the container's locale explicit and run the final image as the
# normalized non-root development user.
ENV LANG=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8
USER ${USERNAME}


# Install Rust and WASM tooling as the unprivileged dev user.
RUN curl --proto '=https' --tlsv1.2 -fsSL https://sh.rustup.rs | sh -s -- -y --profile minimal --default-toolchain "${RUST_TOOLCHAIN}" \
    && /home/${USERNAME}/.cargo/bin/rustup target add wasm32-unknown-unknown \
    && /home/${USERNAME}/.cargo/bin/rustup component add rustfmt \
    && /home/${USERNAME}/.cargo/bin/cargo install wasm-pack --locked

# Install bun runtime and the pi.dev CLI as the unprivileged dev user.
RUN curl -fsSL https://bun.sh/install | bash \
    && /home/${USERNAME}/.bun/bin/bun install -g --ignore-scripts @earendil-works/pi-coding-agent

ENV PATH=/home/${USERNAME}/.cargo/bin:/home/${USERNAME}/.bun/bin:${PATH}
