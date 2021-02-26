ExpressJs Route Manager
=======================

Writing and managing express routes can be tedious most times.

Express Route Manager helps you organize your routes and middlewares
in a JSON file, helping you group routes out of the box. Express
Route Manager is instinctively read.

## Usage

### Initialization

```javascript
const express  = require('express');
const expressRouteManager = require('expressjs-route-manager')(express,option);
```

#### Options (object)

|        option              |         type      |     description     | default |
|----------------------------|-------------------|---------------------|---------|
| option.routeFile           | string (required) | Path to route file  |         |
| option.controllerDirectory | string            | Path to controllers | `./`    |
| option.middlewareDirectory | string            | Path to controllers | `./`    |

#### Route File Configuration

##### Single Level

```javascript
module.exports = {
  url: {
    middlewares: ["middleware1", "middleware2"],
    controller: {
      path: "controller",
      method: "method",
    },
    verb: "verb",
  },
};
```

The above configuration would produce a url as thus: `/url`

##### Multi-Level

A multilevel configuration can be achieved as thus:

```javascript
module.exports = {
  url1: {
    middlewares: ["middleware1", "middleware2"],
    url2: {
      "url3:params": {
        url4: {
          controller: {
            path: "auth",
            method: "login",
          },
          verb: "post",
        },
      },
    },
  },
};
```

The above configuration would produce a url as thus:
`/url/url2/url3/url4`

The **middleware** property can be applied at any level and it takes effect from that level downwards

#### Options

| option            | type               | description        |
|-------------------|--------------------|--------------------|
| url               | string or property | Url level. Takes all ExpressJs url format e.g `url/:params` |
| middlewares       | array              | Array of path to middlewares.  Note that this path is relative to the path set in `middlewareDirectory` in the initialization stage. |
| controller        | object or function | Object configuration of the controller |
| controller.path   | string             | Path to the controller file. Note that this path is relative to the path set in the initialization stage. |
| controller.method | string             | Array of path to middlewares.  Note that this path is relative to the path set in `controllerDirectory` in the initialization stage. |
| verb              | string             | Verb of the path. Takes [all ExpressJS verbs](https://expressjs.com/en/4x/api.html#app.METHOD). Defaults to GET. |
