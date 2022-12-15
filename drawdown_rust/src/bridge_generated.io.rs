use super::*;
// Section: wire functions

#[no_mangle]
pub extern "C" fn wire_simulation(port_: i64, simulation_config: *mut wire_SimulationConfig) {
    wire_simulation_impl(port_, simulation_config)
}

// Section: allocate functions

#[no_mangle]
pub extern "C" fn new_box_autoadd_simulation_config_0() -> *mut wire_SimulationConfig {
    support::new_leak_box_ptr(wire_SimulationConfig::new_with_null_ptr())
}

// Section: related functions

// Section: impl Wire2Api

impl Wire2Api<SimulationConfig> for *mut wire_SimulationConfig {
    fn wire2api(self) -> SimulationConfig {
        let wrap = unsafe { support::box_from_leak_ptr(self) };
        Wire2Api::<SimulationConfig>::wire2api(*wrap).into()
    }
}

impl Wire2Api<SimulationConfig> for wire_SimulationConfig {
    fn wire2api(self) -> SimulationConfig {
        SimulationConfig {
            savings: self.savings.wire2api(),
            withdrawal_rate: self.withdrawal_rate.wire2api(),
            stocks: self.stocks.wire2api(),
            bonds: self.bonds.wire2api(),
            cash: self.cash.wire2api(),
            simulation_rounds: self.simulation_rounds.wire2api(),
            simulation_years: self.simulation_years.wire2api(),
            quantiles: self.quantiles.wire2api(),
        }
    }
}
// Section: wire structs

#[repr(C)]
#[derive(Clone)]
pub struct wire_SimulationConfig {
    savings: f64,
    withdrawal_rate: f64,
    stocks: f64,
    bonds: f64,
    cash: f64,
    simulation_rounds: i32,
    simulation_years: i32,
    quantiles: i32,
}

// Section: impl NewWithNullPtr

pub trait NewWithNullPtr {
    fn new_with_null_ptr() -> Self;
}

impl<T> NewWithNullPtr for *mut T {
    fn new_with_null_ptr() -> Self {
        std::ptr::null_mut()
    }
}

impl NewWithNullPtr for wire_SimulationConfig {
    fn new_with_null_ptr() -> Self {
        Self {
            savings: Default::default(),
            withdrawal_rate: Default::default(),
            stocks: Default::default(),
            bonds: Default::default(),
            cash: Default::default(),
            simulation_rounds: Default::default(),
            simulation_years: Default::default(),
            quantiles: Default::default(),
        }
    }
}

// Section: sync execution mode utility

#[no_mangle]
pub extern "C" fn free_WireSyncReturnStruct(val: support::WireSyncReturnStruct) {
    unsafe {
        let _ = support::vec_from_leak_ptr(val.ptr, val.len);
    }
}
