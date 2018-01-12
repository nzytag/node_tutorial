'use strict';

// function start() {
//   console.log("Request handler 'start' was called.");
// }
// function upload() {
//   console.log("Request handler 'upload' was called.");
// }
// exports.start = start;
// exports.upload = upload;
//this is another EXAMPLE
// function start() {
//   console.log("Request handler 'start' was called.");
//   return "Hello start";
// }
// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "hello upload";
// }
// exports.start = start;
// exports.upload = upload;


// this is a better explanation about blocking and non blocking
//this code below is for when you go to start, it will wait 10 seconds before displaying hello start.
// function start() {
//   console.log("request handler 'start' was called.");
//   function sleep(milliSeconds){
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//   sleep(10000);
//   return "Hello Start";
// }
// function upload(){
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }
// exports.start = start;
// exports.upload = upload;

// example 8

var exec = require("child_process").exec;

function start() {
  console.log("Request handler 'start' was called.");
  var content = "empty";
  exec(" Is -iah", function (error, stdout, stderr){
    content = stdout;
  });
  return content;
}
function upload(){
  console.log("Request handler 'upload' was called.");
  return "Hello upload";
}
exports.start = start;
exports.upload = upload;











//foo
