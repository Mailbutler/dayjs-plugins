# dayjs-plugin-mailbutler-calendar

Dayjs plugin adding custom calendar formatting to Dayjs.

More informations about CORB [here](https://www.chromestatus.com/feature/5629709824032768) and [here](https://www.chromium.org/Home/chromium-security/extension-content-script-fetches).

## Getting Started

### Prerequisites

This plugin depends on those dayjs plugins:
- **localizedFormat**
- **calendar**

You also need to import the following locales (at least) before registering the plugin:
- **de**
- **en**
- **fr**

### Installation

#### With npm (or yarn)

```
$ npm install --save dayjs-plugin-mailbutler-calendar
$ # Or
$ yarn add dayjs-plugin-mailbutler-calendar
```

#### With a CDN

Dayjs must be available as a global object so you will need to import it from a CDN too, we use **unpkg** here as an example.

```html
<script src="https://unpkg.com/dayjs@1.8.15/dayjs.min.js"></script>
<script src="https://unpkg.com/dayjs-plugin-mailbutler-calendar@0.1.0/dist/dayjs-plugin-mailbutler-calendar.min.js"></script>
```

### Quick start 

If you are using a bundler, like webpack or rollup you'll just need to **`require`** the lib.

If you are using a CDN, the lib will be available under **`window.dayjsPluginMailbutlerCalendar`**.

```javascript
const dayjs = require('dayjs')
const dayjsPluginMailbutlerCalendar = require('dayjs-plugin-mailbutler-calendar')
const dayjsLocalizedFormat = require('dayjs/plugin/localizedFormat');
const dayjsCalendar = require('dayjs/plugin/calendar');

// import required translation files
require('dayjs/locale/de')
require('dayjs/locale/en')
require('dayjs/locale/fr')

// register required plugins
dayjs.extends(dayjsLocalizedFormat)
dayjs.extends(dayjsCalendar)

// register the plugin
dayjs.extends(dayjsPluginMailbutlerCalendar)
```

## Development

Clone the project to the directory and install dependencies

```bash
$ git clone https://github.com/Mailbutler/dayjs-plugin-mailbutler-calendar
$ cd dayjs-plugin-mailbutler-calendar
$ yarn # or npm install
$ npm i --no-save dayjs # install dayjs peer dependency
```

Start typescript compilation in watch mode

```bash
$ npm run watch
```