/**
 * Created by carribus on 06/04/15.
 */

module.exports = (function Singleton() {
    var o = {};

    o.stringValue = 'Default String Value';
    o.numberValue = 0;

    o.output = function() {
        console.log('string: ' + o.stringValue + '\nnumber: ' + o.numberValue);
    };

    return o;
})();