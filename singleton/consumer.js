/**
 * Created by carribus on 06/04/15.
 */

module.exports = function() {
    var o = {};
    var s = require('singleton');

    o.updateSingleton = function() {
        s.numberValue++;
        s.stringValue = 'String Value set by consumer object (' + s.numberValue + ')';
    }

    o.updateSingleton();

    return o;
}