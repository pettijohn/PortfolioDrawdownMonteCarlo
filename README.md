# PortfolioDrawdownMonteCarlo
Run a Monte Carlo simulation of a portfolio drawn down during retirement and visualize the results. 

## Live 

This runs live at https://pettijohn.github.io/PortfolioDrawdownMonteCarlo/ 

**Current status**: Janky visualization on hard-coded inputs.

## Backlog
* Accept inputs!
* Add visualiztion, normalized to today's dollars
* Make the colors not horrible
* Explain what you're looking at

## Lessons Learned
* To import a Node package, use a deno-friendly CDN, which does all the translation on the backend: `import { Chart, ChartItem, registerables } from "https://esm.sh/chart.js@3.7.1?target=deno";`
* To compile Deno with DOM compatibility, edit set the `lib` property in `deno.json`, and set `deno.config` to the same path in `.vscode/settings.json` to enable the linter to use the property. See [Targeting Deno and the Browser](https://deno.land/manual/typescript/configuration#targeting-deno-and-the-browser)