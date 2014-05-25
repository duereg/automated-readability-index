[![Build Status](https://travis-ci.org/duereg/automated-readability-index.svg?branch=master)](https://travis-ci.org/duereg/automated-readability-index)
[![devDependencies](https://david-dm.org/duereg/automated-readability-index/dev-status.png)](https://david-dm.org/duereg/automated-readability-index#info=devDependencies&view=table)
[![NPM version](https://badge.fury.io/js/automated-readability-index.svg)](http://badge.fury.io/js/automated-readability-index)


# Automated Readability Index

npm module for calcuating the [automated readability index](http://en.wikipedia.org/wiki/Automated_Readability_Index).

## Install

```shell
npm install automated-readability-index
```

## Use

```javascript
var ari = require('automated-readability-index');

var problems = ari('An incredibly long winded and boring sentence....');
// problems -> [{ type: "readabilityError", index: 3, offset: 400 }]
```

## License
MIT
