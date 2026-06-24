import { SimulationConfig, SimulationStatus, StatResults } from "./monteCarlo.ts";

export type RunSimulationRequest = {
    type: "run";
    requestId: number;
    config: SimulationConfig;
};

export type SimulationStateMessage = {
    type: "state";
    requestId: number;
    state: SimulationStatus;
};

export type SimulationResultMessage = {
    type: "result";
    requestId: number;
    results: StatResults | null;
};

export type SimulationErrorMessage = {
    type: "error";
    requestId: number;
    message: string;
};

export type SimulationWorkerRequest = RunSimulationRequest;

export type SimulationWorkerMessage =
    | SimulationStateMessage
    | SimulationResultMessage
    | SimulationErrorMessage;
