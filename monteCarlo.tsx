// /** @jsxImportSource https://esm.sh/react@17.0.2 */
// Shouldn't need above on every .tsx file - https://github.com/denoland/deno/issues/13389

import React from "https://esm.sh/react@17.0.2?target=deno";
import ReactDOM from "https://esm.sh/react-dom@17.0.2?target=deno";

import { Allocation } from "./allocation.tsx";

function App() {
  return (
    <div>
      <Allocation stocksPercent={50} bondsPercent={30} cashPercent={20}
        startingBalance={1000000} drawdownRate={4}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);