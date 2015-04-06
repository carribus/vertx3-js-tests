/**
 * Created by carribus on 06/04/15.
 */

var singleObj = require('singleton')

assertEquals(singleObj.numberValue, 0);

var consumer = new require('consumer')()

singleObj.output();
assertEquals(singleObj.numberValue, 1);
consumer.updateSingleton();
singleObj.output();
assertEquals(singleObj.numberValue, 2);
singleObj.numberValue += 10;
singleObj.output();
assertEquals(singleObj.numberValue, 12);

function assertEquals(a, b) {
    if ( a !== b ) {
        throw 'assertEquals failed: ' + a + ' is not equal to ' + b;
    }
}

//var ctx = vertx.getOrCreateContext();
//for ( k in ctx) {
//    console.log(k + ': ' + ctx[k]);
//}

