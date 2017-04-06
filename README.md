# one-ready

[![one-ready on NPM](https://img.shields.io/npm/v/one-ready.svg?style=flat-square)](https://www.npmjs.com/package/one-ready) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A Promise wrapper for DOMContentLoaded that prevents event duplication.

## Install

```sh
$ npm i one-ready --save
```

## Use

Respond to the DOM being ready in different JS modules without binding multiple `DOMContentLoaded` handlers.

```javascript
import ready from 'one-ready'

ready.then(() => console.log('Only one DOMContentLoaded event handler is bound.'))
ready.then(() => console.log('Even if imported and called in other modules.'))
```

## See Also

* [hsx](https://github.com/callmecavs/hsx) - JSX, webpack, and static Components without React.

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
