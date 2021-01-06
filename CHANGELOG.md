<a name="unreleased"></a>
## [Unreleased]


<a name="v0.3.0"></a>
## v0.3.0 - 2021-01-06
### Feature
- **bot:** add dependabot
- **core:** add next logic to auto get next date if date already passed
- **core:** support end=<defined-special-day> from db/json
- **init:** initial new project

### Fixes Bug
- **ci:** add caching and cname
- **ci:** forget to install node_modules
- **config:** change default homepage to countdown.kamontat.net
- **core:** move default logic to setInterval in timing
- **core:** support non unit interval and update some internal logic
- **test:** completed simple test
- **ui:** reduce margin on timing container
- **ui:** background not full screen when scrollbar exist
- **ui:** page is not centerize
- **ui:** add margin to timestamp
- **ui:** change text to color white
- **ui:** negative value cause padding zero not render correctly

### Improving performance
- **comp:** implement margin/padding on internal instead
- **comp:** remove margin/padding on glassily container
- **core:** move background image to images folder
- **core:** add google tag manager
- **typo:** update description meta
- **ui:** add new output type = week (w)
- **ui:** add repository as link in footer
- **ui:** change short time unit to long
- **ui:** update some design in container
- **ui:** move data to package.json and add more margin
- **ui:** update minor styles

### Pull Requests
- Merge pull request [#1](https://github.com/kamontat/countdown/issues/1) from kamontat/dependabot/github_actions/actions/setup-node-v2.1.4


[Unreleased]: https://github.com/kamontat/countdown/compare/v0.3.0...HEAD
