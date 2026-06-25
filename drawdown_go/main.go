//go:build !(js && wasm)

package main

func main() {
	// The browser app consumes the Go implementation through main_wasm.go.
}
