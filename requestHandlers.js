'use strict';

// function start() {
//   console.log("Request handler 'start' was called.");
// }
// function upload() {
//   console.log("Request handler 'upload' was called.");
// }
// exports.start = start;
// exports.upload = upload;

function start() {
  console.log("Request handler 'start' was called.");
  return "Hello start";
}
function upload() {
  console.log("Request handler 'upload' was called.");
  return "hello upload";
}
exports.start = start;
exports.upload = upload;
