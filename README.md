# Material Share
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-share.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-share)
[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-share.svg)](https://greenkeeper.io/)

![Example](santa-phone.png)
[![Alt text](https://img.youtube.com/vi/lhUzYxCvWew/0.jpg)](https://www.youtube.com/watch?v=lhUzYxCvWew)

With chrome 61 on mobile the Web Share Api was deployed. You can now invoke the native share action inside your browser.
You can read more about [here](https://developers.google.com/web/updates/2016/09/navigator-share)

[other browsers will follow](https://caniuse.com/#feat=web-share)

To use the Web Share Api:
* you must be served over HTTPS
* you can also share any URL, not just URLs under your website's current scope: and you may also share text without a URL
* you should feature-detect it in case it's not available on your users' platform (e.g., via `navigator.share !== undefined`)

## Installation
```shell
npm i --save material-ui-share
```

## Usage
```js
import Share from 'material-ui-share'

// ...
render() {
  return(
    <Share
        title='This is a cool title'
        text='Oh you want some text for this share component'
        url='https://developers.google.com/web/updates/2016/09/navigator-share'
    />
  )
}
```

### SearchBar Properties
|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|title           | `string`   |            | Sets title for content to share.
|text            | `string`   |            | Sets text for content to share.
|url             | `string`   |            | Sets url for content to share.
|onFailure       | `func`     |            | Fired when share action returns an error.
|onSuccess       | `func`     |            | Fired when share action succeeded.
|style           | `object`   |            | Override the inline-styles of the root element.

\* required property

## License

The files included in this repository are licensed under the MIT license.