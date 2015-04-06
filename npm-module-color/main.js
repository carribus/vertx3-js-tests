/**
 * Created by carribus on 06/04/15.
 */

// This is a hack at the moment since I can't figure out how to get npm-js to load modules out of the
// app-local ./node_modules/ folder
Require.NODE_PATH = './node_modules/';

//
// Some environment logging
console.log('vertx.disableNodeJSProcessENV = ' + java.lang.System.getProperty("vertx.disableNodeJSProcessENV"))
console.log('user.home = ' + java.lang.System.getProperty("user.home"))
console.log('user.dir = ' + java.lang.System.getProperty("user.dir"))
console.log(java.lang.System.getenv("user.home"))

// lets load the npm module
var colors = require('colors')

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass