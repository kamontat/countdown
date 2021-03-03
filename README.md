# Countdown (Timing)

- [Usage](#usage)
  - [Date format](#date-format)
  - [Interval format](#interval-format)
  - [Example](#example)
- [Contributions](#contributions)
  - [Deployment](#deployment)

## Usage

The website already deployed to https://countdown.kamontat.net via Github Pages. This website accepted a couple of query in url as following..

1. `end` - Finish date (default = end of current year) [format](#date-format)
2. `format` - Custom format of `end` (default = null) [format][ex-dayjs-format]
3. `interval` - Refresh rate (default = 100 ms) [format](#interval-format)
4. `output` - formatting output panel [format](#output-format)
5. `debug` - Open debug log (default = false)

### Date format

On date format we have special case where you can specify date with string listed below

1. `now` - current date and time
2. `endYear` - end of current year
3. `startYear` - beginning of current year
4. `endMonth` - end of current month
5. `startMonth` - beginning of current month

### Interval format

Accepted interval will be formatted as `<number><unit>` (without any space)

1. Accepted number is only digit without any dot (.) or comma (,)
2. Accepted unit is `ms` (millisecond), `s` (second), `m` (minute), and `h` (hour)

### Output format

Output format is listed on [Output.ts][output-ts].

### Example

1. https://countdown.kamontat.net?end=endMonth&interval=10ms - count to end of current month and refresh every 10 millisecond
2. https://countdown.kamontat.net?debug=true&end=2020-02-02&interval=1h - count to **Feb 02, 2020** and refresh every 1 hour

## Contributions

### Deployment

Automatic steps
1. update **package.json** version
2. run `bash deploy.sh`

Manually steps
1. update **package.json** version
2. run `gitgo changelog --tag <v0.0.0>`
3. run `git commit -m "chore: release v0.0.0"`
4. run `git tag v0.0.0`
5. run `git push && git push --tags`

<!-- LINK -->
[ex-dayjs-format]: https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens
[output-ts]: https://github.com/kamontat/countdown/blob/main/src/models/Output.ts
