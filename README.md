# vertx3-js-tests

A bunch of tests for vertx3's JS capabilities.

This side project came about as a result of many frustrations with the JS support in vert.x 2.1.x builds and I'm 
using it for the dual purpose of testing how vert.x 3 handles JS based verticles as well as exploring the new API
and functionality that has been built into vert.x 3.

## Tests

* Singleton objects - PASS
* Modified config - FAIL
    * Should be using a local shared map to achieve this
    * See Julien Viet's reply here: https://groups.google.com/forum/?fromgroups=#!topic/vertx/OjSkhAFO1QE
* NPM module usage - IN PROGRESS (currently failed)
    * Using colors module as I thought that would be a simple, nice example
    * Seems that vert.x's process object needs some work
