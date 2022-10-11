"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _schema = _interopRequireDefault(require("./schema"));

var _fs = _interopRequireDefault(require("fs"));

var _https = _interopRequireDefault(require("https"));

var _http = _interopRequireDefault(require("http"));

require("dotenv").config();

var configurations = {
  // Note: You may need sudo to run on port 443
  production: {
    ssl: true,
    port: 4000,
    hostname: "api.metaaxel.online"
  },
  testserver: {
    ssl: true,
    port: 4000,
    hostname: "api.metaaxel.online"
  },
  development: {
    ssl: false,
    port: 4000,
    hostname: "localhost"
  }
};
var environment = process.env.NODE_ENV || "production";
var config = configurations[environment];
var server = new _apolloServerExpress.ApolloServer({
  schema: _schema["default"],
  csrfPrevention: true
});
server.start();
var app = (0, _express["default"])();
server.applyMiddleware({
  app: app
}); // Create the HTTPS or HTTP server, per configuration

var httpServer;

if (config.ssl && environment === "production") {
  // Assumes certificates are in a .ssl folder off of the package root.
  // Make sure these files are secured.
  httpServer = _https["default"].createServer({
    key: _fs["default"].readFileSync("/etc/letsencrypt/live/api.metaaxel.online/privkey.pem"),
    cert: _fs["default"].readFileSync("/etc/letsencrypt/live/api.metaaxel.online/cert.pem")
  }, app);
} else if (config.ssl && environment === "testserver") {
  httpServer = _https["default"].createServer({
    key: _fs["default"].readFileSyncfs.readFileSync("/etc/letsencrypt/live/api.metaaxel.online/privkey.pem"),
    cert: _fs["default"].readFileSync("/etc/letsencrypt/live/api.metaaxel.online/cert.pem")
  }, app);
} else {
  httpServer = _http["default"].createServer(app);
}

new Promise(function (resolve) {
  return httpServer.listen({
    port: config.port
  }, resolve);
});
console.log("🚀 Server ready at", "http".concat(config.ssl ? "s" : "", "://").concat(config.hostname, ":").concat(config.port).concat(server.graphqlPath));