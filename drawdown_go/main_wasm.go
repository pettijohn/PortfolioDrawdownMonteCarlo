//go:build js && wasm

package main

import (
	"encoding/json"
	"syscall/js"
)

func main() {
	js.Global().Set("runSimulationShard", js.FuncOf(runSimulationShard))
	select {}
}

func runSimulationShard(_this js.Value, args []js.Value) any {
	if len(args) != 3 {
		panic("runSimulationShard expects config, simulationRounds, and historicalData")
	}

	config := decodeJSValue[SimulationConfig](args[0])
	config.SimulationRounds = args[1].Int()
	historicalData := decodeJSValue[[]HistoricalMarketData](args[2])

	return encodeJSValue(ComputeSimulationShard(config, historicalData))
}

func decodeJSValue[T any](value js.Value) T {
	jsonText := js.Global().Get("JSON").Call("stringify", value).String()
	var decoded T
	if err := json.Unmarshal([]byte(jsonText), &decoded); err != nil {
		panic(err)
	}

	return decoded
}

func encodeJSValue(value any) js.Value {
	bytes, err := json.Marshal(value)
	if err != nil {
		panic(err)
	}

	return js.Global().Get("JSON").Call("parse", string(bytes))
}
