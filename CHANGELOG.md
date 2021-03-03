<a name="unreleased"></a>
## [Unreleased]


<a name="v0.5.0"></a>
## [v0.5.0] - 2021-03-03
### Improving performance
- **models:** change how output calculate

### Pull Requests
- Merge pull request [#14](https://github.com/kamontat/countdown/issues/14) from kamontat/dependabot/npm_and_yarn/web-vitals-1.1.0
- Merge pull request [#12](https://github.com/kamontat/countdown/issues/12) from kamontat/dependabot/npm_and_yarn/testing-library/react-11.2.3
- Merge pull request [#13](https://github.com/kamontat/countdown/issues/13) from kamontat/dependabot/npm_and_yarn/dayjs-1.10.3
- Merge pull request [#3](https://github.com/kamontat/countdown/issues/3) from kamontat/dependabot/npm_and_yarn/types/react-17.0.0
- Merge pull request [#6](https://github.com/kamontat/countdown/issues/6) from kamontat/dependabot/npm_and_yarn/types/react-dom-17.0.0
- Merge pull request [#4](https://github.com/kamontat/countdown/issues/4) from kamontat/dependabot/npm_and_yarn/types/node-14.14.20


<a name="v0.4.2"></a>
## [v0.4.2] - 2021-01-07
### Feature
- **ui:** add `progressive web app` supported

### Improving performance
- **core:** implement logger with logging object to support debug mode
- **core:** remove all console.log in service worker registration

### Pull Requests
- Merge pull request [#8](https://github.com/kamontat/countdown/issues/8) from kamontat/add-license-1


<a name="v0.4.0"></a>
## [v0.4.0] - 2021-01-06
### Feature
- **model:** expose special day name to Datetime object
- **ui:** add date name to website header

### Fixes Bug
- **perf:** reduce loading size
- **ui:** open new tab when click on the link
- **ui:** add more padding on card in mobile device

### Improving performance
- **core:** pass endDate as object to use name of date
- **model:** rollback date if not shiftable, add support date and month shift
- **ui:** move date name to page title

### Pull Requests
- Merge pull request [#7](https://github.com/kamontat/countdown/issues/7) from kamontat/dependabot/npm_and_yarn/ini-1.3.8
- Merge pull request [#2](https://github.com/kamontat/countdown/issues/2) from kamontat/dependabot/npm_and_yarn/node-notifier-8.0.1


<a name="v0.3.1"></a>
## [v0.3.1] - 2021-01-06
### Fixes Bug
- **ui:** tmp fixed negative duration (iamkun/dayjs[#1317](https://github.com/kamontat/countdown/issues/1317))


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


[Unreleased]: https://github.com/kamontat/countdown/compare/v0.5.0...HEAD
[v0.5.0]: https://github.com/kamontat/countdown/compare/v0.4.2...v0.5.0
[v0.4.2]: https://github.com/kamontat/countdown/compare/v0.4.0...v0.4.2
[v0.4.0]: https://github.com/kamontat/countdown/compare/v0.3.1...v0.4.0
[v0.3.1]: https://github.com/kamontat/countdown/compare/v0.3.0...v0.3.1
