pushd ..
docker build . -t snowpack
docker run -it -v=${PWD}:/app -p 127.0.0.1:9229:9229 -p 127.0.0.1:8080:8080 snowpack $@
popd
