# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %})  [![Build Status](http://github.com/assemble/{%= name %}.png?branch=master)](http://github.com/assemble/{%= name %})

> {%= description %}


## Getting Started

```shell
npm install {%= name %} --save
```

and use it as follows:

```js
var yfm = require('{%= name %}');
var data = yfm.extract("./file.hbs");
```

Visit [Assemble's documentation](http://assemble.io) for many more examples and pointers on getting started.


{% if (changelog) { %}
## Release History
{%= _.include("docs-changelog.md") %} {% } %}

## Author

+ [github/{%= _.username() %}]({%= _.username() %})
+ [twitter/{%= _.username() %}](http://twitter.com/{%= _.username() %})

## License
{%= _.include("docs-license.md") %}

***

_This file was generated on {%= grunt.template.today() %}._

