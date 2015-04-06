/**
 * Created by carribus on 06/04/15.
 */

var ctx = vertx.getOrCreateContext(),
    config = ctx.config()
    Test = require('testobject'),
    to = new Test(config),

config.timestamp = Date.now();
console.log(JSON.stringify(config));

to.dumpConfig();

