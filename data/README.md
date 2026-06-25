# Historical Market Data

`historicalMarketData.json` contains annual nominal return and inflation data used by the Monte Carlo simulator. Each row has this shape:

```json
{
  "year": 1928,
  "stocks": 0.438112,
  "bonds": 0.008355,
  "cash": 0.0308,
  "cpi": -0.011561
}
```

Values are decimal annual rates, so `0.05` means `5%`.

## Current Dataset

The current dataset covers `1928-2025`.

It was sourced from Aswath Damodaran's annual historical returns workbook:

- Page: https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
- Workbook: https://pages.stern.nyu.edu/~adamodar/pc/datasets/histretSP.xls
- Sheet used: `Returns by year`

Field mapping:

- `stocks`: `S&P 500 (includes dividends)`
- `bonds`: `US T. Bond (10-year)`
- `cash`: `3-month T.Bill`
- `cpi`: `Inflation Rate`

The workbook notes that Treasury bill, Treasury bond, and CPI inputs are sourced from Federal Reserve/FRED data. The stock return series is not a government dataset; it is a total-return stock market series compiled in the workbook because the U.S. government does not publish annual S&P 500 total returns.

## Government Source Checks

The data was checked against these official/Federal Reserve sources where available:

- CPI-U, not seasonally adjusted: https://fred.stlouisfed.org/series/CPIAUCNS
- 3-month Treasury bill rate: https://fred.stlouisfed.org/series/TB3MS
- 10-year Treasury constant maturity yield: https://fred.stlouisfed.org/series/GS10

FRED's S&P 500 series is a price index, not total return, and currently provides only a limited recent history due to licensing:

- S&P 500 price index: https://fred.stlouisfed.org/series/SP500

## Previous Dataset

`historicalMarketData.original.json` preserves the prior dataset, which covered `1926-2015`. The replacement dataset starts in 1928 because that is the first year available in the Damodaran annual return workbook used for validation and extension.

