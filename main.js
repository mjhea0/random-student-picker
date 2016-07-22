const _ = require('lodash');
const colors = require('colors');
const students = require('./students');

let randomCount = parseInt(process.argv[2]) || 1;
let messageOpts = [
  'Calling On...',
  'I Choose You...',
  'Randomizing Selection...',
  'Victim Selection Starting...'
];
let selectionMsg = '\n  ' + _.sample(messageOpts).underline + '\n';
let ol = 1;
let results = new Map();

for (var i = 0; i < randomCount; i++) {
  let student = _.sample(students);

  if ( results.has(student) ) {
    randomCount++;
    continue;
  }

  let color = ( ol % 2 ) ? 'magenta' : 'blue';
  let prefix = ( randomCount > 1 ) ? colors[color](`${ol++}: `): "";
  let msg = '\t' + prefix + colors[color](student);

  results.set(student, msg);
}

console.log(selectionMsg);
results.forEach((msg) => console.log(msg));
console.log('');