'use strict';

// var http = require('http');
//
// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }).listen(8888);


//EXAMPLE 2-----------------
// var http = require('http');
//
//   function onRequest(request, response){
//   console.log('Request received.');
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello world');
//   response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log('Server has started');
//this printed 'Request received' twice every time I refreshed the browser

//EXAMPLE 3-----------------

// var http = require('http');
//
// function start(){
//   function onRequest(request, response) {
//     console.log('Request received.');
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
// exports.start = start;

//EXAMPLE 4=-------------

// var http = require('http');
// var url = require ('url');
//
// function start() {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for  ' + pathname + 'received.');
//     response.writeHead(200, {'Content-Type': 'text/plan'});
//     response.write('Hello World');
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
// exports.start = start;

//example 5

// var http = require('http');
// var url = require('url');
//
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');
//
//     route(pathname);
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
// exports.start = start;

//example 6

// var http = require('http');
// var url = require('url');
//
// function start(route, handle) {
//   function onRequest(request, response){
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + 'received.');
//
//     route(handle, pathname);
//
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
// exports.start = start;

//example 7
// var http = require("http");
// var url = require("url");
//
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     var content = route(handle, pathname)
//     response.write(content);
//     response.end();
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
// exports.start = start;


//example 8
//
// var http = require ('http');
// var url = require ('url');
//
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for  ' + pathname + ' received.');
//
//     route(handle, pathname, response);
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started.');
// }
// exports.start = start;
//
//

//example 9

var http = require("http");
var url = requiere("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for  " + pathname + " received.");

    request.setEncoding("utf8");
    // this defines that we expect that the encodeing of the received data will be in utf-8

    request.addListener("data", function(postDataChunk) {
      //this adds an event listener for the data event  which will fill the postdata variable whenever a chunk of post data arrives
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });
    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
exports.start = start;


















//jjj
