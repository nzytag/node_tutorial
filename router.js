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

function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname]=== 'function') {
    return handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
    return "404 not found";
  }
}
exports.route = route;






//foo
