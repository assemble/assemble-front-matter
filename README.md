# assemble-front-matter [![NPM version](https://badge.fury.io/js/assemble-front-matter.png)](http://badge.fury.io/js/assemble-front-matter)  [![Build Status](https://travis-ci.org/assemble/assemble-front-matter.png)](https://travis-ci.org/assemble/assemble-front-matter)

> Utilities for extracting front matter from source files.

Visit [Assemble's documentation](http://assemble.io) for many more examples and pointers on getting started.

## Getting Started
```shell
npm install assemble-front-matter --save
```

and use it as follows:

```js
var yfm = require('assemble-front-matter');
```


## Methods
#### extract
Extract YAML front matter and content from files.

```js
var raw = yfm.extract("./file.hbs", opts);
```
**Parameters**:

* `String`: The file to read.
* `Object`: The options object to pass to [js-yaml](https://github.com/nodeca/js-yaml)

**Returns**:

Object with three properties

```js
{
 "context": {}         // Object. YAML front matter returned as a JSON object.
 "content": ""         // String. File content, stripped of YAML front matter
 "originalContent": "" // String. Both content and YAML front matter.
}
```

#### context

Return YAML front matter as a JSON object.

```js
var data = yfm.extract("./file.hbs").context;
```

Alias:

```js
var data = yfm.extractJSON("./file.hbs");
```

#### content

Return the content of a file, with YAML front matter removed.

```js
var content = yfm.extract("./file.hbs").content;
```

Alias:

```js
var data = yfm.stripYFM("./file.hbs");
```



## Release History

 * 2013-09-22   v0.1.2   Adds grunt-readme and grunt-pkg-sync
 * 2013-09-02   v0.1.1   Updates tests and example files
 * 2013-08-11   v0.1.0   Initial setup
 

## Author

+ [github.com/doowb](https://github.com/doowb)
+ [twitter.com/doowb](http://twitter.com/doowb)

## License
Copyright (c) 2013 Brian Woodward, contributors.
Released under the MIT license

***

_This file was generated on Mon Sep 02 2013 09:44:51._
