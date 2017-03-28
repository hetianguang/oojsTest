/**
 * Created by tghe on 3/28/17.
 */
const Person = require('./Person.js')
function Worker(name,age) {
    Worker.prototype = new Person(name,age)
}
Worker.prototype.introduce = function() {
    return ( 'I am a Worker. I have a job.')
}

module.exports = Worker