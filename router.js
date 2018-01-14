'use strict';

// function route(handle, pathname) {
//   console.log('About to route a request for ' + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname]();
//   } else {
//     console.log('No request handler found for ' + pathname);
//   }
// }
// exports.route = route;

// function route(handle, pathname) {
//   console.log("About to route a request for " + pathname);
//   if (typeof handle[pathname]=== 'function') {
//     return handle[pathname]();
//   } else {
//     console.log("No request handler found for " + pathname);
//     return "404 not found";
//   }
// }
// exports.route = route;

// another example:

// function route(handle, pathname, response) {
//   console.log('About to route a request for ' + pathname);
//   if (typeof handle[pathname] === 'function') {
//     handle[pathname](response);
//   } else {
//     console.log('No request handler found for ' + pathname);
//     response.writeHead(404, {'Content-Type': 'text/plain'});
//     response.write('404 Not found');
//     response.end();
//   }
// }
// exports.route = route;


//this is another one!
function route(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not found");
    response.end();
  }
}
exports.route = route;













//foo
