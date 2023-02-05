// let fetch = require("node-fetch");

// exports.handler = async function (event, context) {
//   let url = event.path;
//   url = url.split(".netlify/functions/cors/")[1];
//   url = decodeURIComponent(url);
//   url = new URL(url);

//   for (let i in event.queryStringParameters) {
//     url.searchParams.append(i, event.queryStringParameters[i]);
//   }

//   let cookie_string = event.headers.cookie || '';
//   let useragent = event.headers["user-agent"] || '';

//   let headers_to_send = {
//     "User-Agent": useragent,
//     "Cookie": cookie_string,
//     "content-type": "application/json",
//     "accept": "*/*",
//     "host": url.host,
//   };

//   let options = {
//     method: event.httpMethod.toUpperCase(),
//     headers: headers_to_send,
//     body: event.body
//   };

//   if (event.httpMethod === "GET" || event.httpMethod === "HEAD") {
//     delete options.body;
//   }

//   let response = await fetch(url, options);
//   let response_buffer = await response.buffer();
//   let base64_encoded = response_buffer.toString("base64");
//   let headers = response.headers.raw();
//   let cookie_header = headers["set-cookie"] || [];

//   return {
//     statusCode: 200,
//     isBase64Encoded: true,
//     body: base64_encoded,
//     headers: {
//       "content-type": String(headers["content-type"]) || "text/plain",
//     },
//     multiValueHeaders: {
//       "set-cookie": cookie_header,
//     },
//   };
// }
