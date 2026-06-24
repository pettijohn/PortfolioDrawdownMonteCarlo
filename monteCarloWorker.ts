import { MonteCarlo } from "./monteCarlo.ts";
import {
    SimulationWorkerMessage,
    SimulationWorkerRequest,
} from "./monteCarloWorkerMessages.ts";

function postMessageToApp(message: SimulationWorkerMessage) {
    self.postMessage(message);
}

self.onmessage = async (event: MessageEvent<SimulationWorkerRequest>) => {
    const message = event.data;

    if (message.type !== "run") {
        return;
    }

    try {
        const simulation = new MonteCarlo();
        simulation.onSimulationStateChange = (state) => {
            postMessageToApp({
                type: "state",
                requestId: message.requestId,
                state,
            });
        };

        const results = await simulation.computeSimulation(message.config);

        postMessageToApp({
            type: "result",
            requestId: message.requestId,
            results,
        });
    } catch (error) {
        postMessageToApp({
            type: "error",
            requestId: message.requestId,
            message: error instanceof Error ? error.message : String(error),
        });
    }
};
