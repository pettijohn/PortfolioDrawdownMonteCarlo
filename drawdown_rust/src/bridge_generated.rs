#![allow(
    non_camel_case_types,
    unused,
    clippy::redundant_closure,
    clippy::useless_conversion,
    clippy::unit_arg,
    clippy::double_parens,
    non_snake_case,
    clippy::too_many_arguments
)]
// AUTO GENERATED FILE, DO NOT EDIT.
// Generated by `flutter_rust_bridge`@ 1.54.1.

use crate::montecarlo::*;
use core::panic::UnwindSafe;
use flutter_rust_bridge::*;
use std::ffi::c_void;
use std::sync::Arc;

// Section: imports

// Section: wire functions

fn wire_simulation_impl(
    port_: MessagePort,
    simulation_config: impl Wire2Api<SimulationConfig> + UnwindSafe,
) {
    FLUTTER_RUST_BRIDGE_HANDLER.wrap(
        WrapInfo {
            debug_name: "simulation",
            port: Some(port_),
            mode: FfiCallMode::Normal,
        },
        move || {
            let api_simulation_config = simulation_config.wire2api();
            move |task_callback| Ok(simulation(api_simulation_config))
        },
    )
}
// Section: wrapper structs

// Section: static checks

// Section: allocate functions

// Section: related functions

// Section: impl Wire2Api

pub trait Wire2Api<T> {
    fn wire2api(self) -> T;
}

impl<T, S> Wire2Api<Option<T>> for *mut S
where
    *mut S: Wire2Api<T>,
{
    fn wire2api(self) -> Option<T> {
        (!self.is_null()).then(|| self.wire2api())
    }
}

impl Wire2Api<f64> for f64 {
    fn wire2api(self) -> f64 {
        self
    }
}
impl Wire2Api<i32> for i32 {
    fn wire2api(self) -> i32 {
        self
    }
}

// Section: impl IntoDart

impl support::IntoDart for StatResults {
    fn into_dart(self) -> support::DartAbi {
        vec![self.years.into_dart()].into_dart()
    }
}
impl support::IntoDartExceptPrimitive for StatResults {}

impl support::IntoDart for StatsSingleYear {
    fn into_dart(self) -> support::DartAbi {
        vec![
            self.year.into_dart(),
            self.min.into_dart(),
            self.max.into_dart(),
            self.mean.into_dart(),
            self.median.into_dart(),
            self.stddev.into_dart(),
            self.quantiles.into_dart(),
        ]
        .into_dart()
    }
}
impl support::IntoDartExceptPrimitive for StatsSingleYear {}

// Section: executor

support::lazy_static! {
    pub static ref FLUTTER_RUST_BRIDGE_HANDLER: support::DefaultHandler = Default::default();
}

#[cfg(not(target_family = "wasm"))]
#[path = "bridge_generated.io.rs"]
mod io;
#[cfg(not(target_family = "wasm"))]
pub use io::*;