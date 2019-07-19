# @mailbutler/dayjs-plugins

Dayjs plugin adding custom calendar formatting to Dayjs.

## Getting Started

### Prerequisites

The plugins in this package depends on the following dayjs plugins:
- **calendar**
- **localizedFormat**

You also need to import the following locales before registering the plugin:
- **de**
- **en**
- **fr**

> You need to import those dependencies **before** you import the plugins from this package.

### Installation

#### With npm (or yarn)

```
$ npm install --save @mailbutler/dayjs-plugins
$ # Or
$ yarn add @mailbutler/dayjs-plugins
```

#### With a CDN

Dayjs must be available as a global object so you will need to import it from a CDN too, we use **unpkg** here as an example.

```html
<script src="https://unpkg.com/dayjs@1.8.15/dayjs.min.js"></script>
<script src="https://unpkg.com/@mailbutler/dayjs-plugins@0.1.0/dist/dayjs-plugin-mailbutler-calendar.min.js"></script>
```

### Quick start 

If you are using a bundler, like webpack or rollup you'll just need to **`require`** the lib.

If you are using a CDN, the lib will be available under **`window.dayjsPluginMailbutlerCalendar`**.

```javascript
const dayjs = require('dayjs')
const localizedFormat = require('dayjs/plugin/localizedFormat');
const calendar = require('dayjs/plugin/calendar');
const { relative, calendarLocalization } = require('@mailbutler/dayjs-plugins')

// import required translation files
require('dayjs/locale/de')
require('dayjs/locale/en')
require('dayjs/locale/fr')

// register required plugins
dayjs.extends(localizedFormat)
dayjs.extends(calendar)

// register the plugins
dayjs.extends(calendarLocalization)
dayjs.extends(relative)
```

### The `calendarLocalization` plugin

> Depends on `calendar` and `localizedFormat` plugins.

Adds localized formatting for the calendar for the folllowing languages:
- en
- de
- fr

When using `calendar` with one of these languages, the output string will be localized.

Example:

```js
const localized = dayjs('2019-05-01').calendar();
```

### The `relative` plugin

> Depends on the `calendarLocalization` plugin.

adds two new methods to the dayjs instance.

- `relative` allows the user to format the date relatively to another date.
- `relativeNow` allows the user to format the date relatively to the current date.

Example:

```js
// relative
dayjs('2018-12-12').relative(dayjs('2018-12-25'))
dayjs('2018-12-12').relativeNow()
```

## Development

Clone the project to the directory and install dependencies

```bash
$ git clone https://github.com/Mailbutler/dayjs-plugins
$ cd dayjs-plugins
$ yarn # or npm install
$ npm i --no-save dayjs # install dayjs peer dependency
```

Start bundling in watch mode

```bash
$ npm run watch
```