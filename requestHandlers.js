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

// var exec = require("child_process").exec;
//
// function start() {
//   console.log("Request handler 'start' was called.");
//   var content = "empty";
//   exec(" Is -iah", function (error, stdout, stderr){
//     content = stdout;
//   });
//   return content;
// }
// function upload(){
//   console.log("Request handler 'upload' was called.");
//   return "Hello upload";
// }
// exports.start = start;
// exports.upload = upload;


// another example

// var exec = require('child_process').exec;
//
// function start(response) {
//   console.log("Request handler 'start' was called.");
//
//   exec('is -iah', function (error, stdout, stderr){
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write(stdout);
//     response.end();
//   });
// }
//
// function  upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write('Hello upload');
//   response.end();
// }
//
// exports.start = start;
// exports.upload = upload;
// //

//another example, in this case /start doesnt block requests for /upload and /upload will answe immediately

var exec = require("child_process").exec;
function start(response) {
  console.log("Request handler 'start' was called.");
  exec("find /",
    { timeout: 10000, maxBuffer: 20000 * 1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}
exports.start = start;
exports.upload = upload;

var querystring = require("querystring"),
fs = require("fs"),
formidable = require("formidable");


function start(response) {
console.log("Request handler 'start' was called.");
var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" '+ 'content="text/html; charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" enctype="multipart/form-data" '+ 'method="post">'+
'<input type="file" name="upload" multiple="multiple">'+ '<input type="submit" value="Upload file" />'+
'</form>'+
'</body>'+
'</html>';

response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");
var form = new formidable.IncomingForm();
console.log("about to parse");
form.parse(request, function(error, fields, files){
  console.log("parsing done");
  //possible error on windows systems: tried to rename to an already existing files
  fs.rename(files.upload.path, "/tmp/test.png", function(error) {
    if (error) {
      fs.unlink("/tmp/test.png");
      fs.rename(files.upload.path, "/tmp/text.png");
    }
});

response.writeHead(200, {"Content-Type": "text/html"});
 response.write(body);
 response.end();
});
}

 function upload(response, request) {
 console.log("Request handler 'upload' was called.");

 var form = new formidable.IncomingForm();
 console.log("about to parse");
 form.parse(request, function(error, fields, files) {
 console.log("parsing done");

 /* Possible error on Windows systems:
 tried to rename to an already existing file */
 fs.rename(files.upload.path, "/tmp/test.png", function(error) {
 if (error) {
 fs.unlink("/tmp/test.png");
 fs.rename(files.upload.path, "/tmp/test.png");
}
 });
response.writeHead(200, {"Content-Type": "text/html"});
 response.write("received image:<br/>");
 response.write("<img src='/show' />");
 response.end();
 });
}
function show(response) {
console.log("Request handler 'show' was called.");
response.writeHead(200, {"Content-Type": "image/png"});
fs.createReadStream("/tmp/test.png").pipe(response);
}
exports.start = start;
exports.upload = upload;
exports.show = show;

















//anothe EXAMPLE


var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("You've sent: " + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;











//this was from the previous example
// function start(response) {
//   console.log("Request handler 'start' was called.");
//
//   var body = '<html>' +
//   '<head>' +
//   '<meta http-equiv="Content-Type" content="text/html; ' +
//   'charset=UTF-8" />' +
//   '</head>' +
//   '<body>' +
//   '<form action="/upload" method="post">' +
//   '<textarea name="text" rows="20" cols="60"></textarea>' +
//   '<input type="submit" value="Submit text" />' +
//   '</form>' +
//   '</body>' +
//   '</html>';
//
//   response.writeHead(200, {
//     "Content-Type": "text/html"
//   });
//   response.write(body);
//   response.end();
// }
//
// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("Hello Upload");
//     response.end();
//   }
//
//   exports.start = start;
//   exports.upload = upload;

//foo
