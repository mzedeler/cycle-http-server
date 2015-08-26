# cycle-http-server
Cycle.js driver that wraps around node's http server.

# Very simple example
```javascript
import {run} from '@cycle/core';
import {makeServerDriver} from 'cycle-http-server';

function main({Server}) {
  Server.subscribe(function({req, res}) {
    res.end("Hello, world!");
  });
}

let drivers = {
  Server: makeServerDriver()
};

run(main, drivers);
```
