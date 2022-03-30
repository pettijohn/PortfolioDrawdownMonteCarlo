# Portfolio Drawdown Monte Carlo Simulation
Run a Monte Carlo simulation of a portfolio drawn down during retirement and visualize the results. 

## Live 

This runs live at https://pettijohn.github.io/PortfolioDrawdownMonteCarlo/ 

**Current status**: Janky visualization on configurable inputs.

## Backlog
* ~~Accept inputs!~~
* Add visualiztion, normalized to today's dollars
* Make the colors not horrible
* Explain what you're looking at
* Allow saving to localStorage
* Allow sharing with query string parameters 

## Lessons Learned
* To import a Node package, use a [deno-friendly CDN](), which does all the translation on the backend: `import { Chart, ChartItem, registerables } from "https://esm.sh/chart.js@3.7.1?target=deno";`
* To compile Deno with DOM compatibility, set the `lib` property in `deno.json`, and set `deno.config` to the same path in `.vscode/settings.json` to enable the linter to use the property. See [Targeting Deno and the Browser](https://deno.land/manual/typescript/configuration#targeting-deno-and-the-browser)
* JSX is not automatically resolved, import React each time. ([This partially worked](https://deno.land/manual@v1.20.3/jsx_dom/jsx), until I tried `extends React.Component`, then it couldn't find the name React.)
* Deno bundle does not include source maps for attaching debugger - use this for development https://deno.land/x/deno_bundle
* Versioning hell is real. Add ?pin=v74 to (pin the esh.sh build version)[https://esm.sh/#pin-the-build-version]

```
[ERROR]: Type 
'import("https://cdn.esm.sh/v71/chart.js@3.7.1/types/index.esm.d.ts").ChartData<"line", number[], unknown>' 
is not assignable to type 
'import("https://cdn.esm.sh/v74/chart.js@3.7.1/types/index.esm.d.ts").ChartData<"line", number[], unknown>'.
Types of property 'datasets' are incompatible.
```