/**
 * Created by carribus on 06/04/15.
 */

module.exports = function TestObject() {
    var o = {};

    o.dumpConfig = function() {
        var config = vertx.getOrCreateContext().config()
        console.log('TestObject.dumpConfig: ' + JSON.stringify(config));
    };

    return o;
};