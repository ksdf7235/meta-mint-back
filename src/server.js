require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import fs from "fs";
import https from "https";
import http from "http";

const configurations = {
  // Note: You may need sudo to run on port 443
  production: { ssl: true, port: 4000, hostname: "api.metaaxel.online" },
  testserver: { ssl: true, port: 4000, hostname: "api.metaaxel.online" },
  development: { ssl: false, port: 4000, hostname: "localhost" },
};
const environment = process.env.NODE_ENV || "production";
const config = configurations[environment];

const server = new ApolloServer({ schema, csrfPrevention: true });
server.start();

const app = express();
server.applyMiddleware({ app });

// Create the HTTPS or HTTP server, per configuration
let httpServer;
if (config.ssl && environment === "production") {
  // Assumes certificates are in a .ssl folder off of the package root.
  // Make sure these files are secured.
  httpServer = https.createServer(
    {
      key: fs.readFileSync(
        `/etc/letsencrypt/live/api.metaaxel.online/privkey.pem`
      ),
      cert: fs.readFileSync(
        `/etc/letsencrypt/live/api.metaaxel.online/cert.pem`
      ),
    },

    app
  );
} else if (config.ssl && environment === "testserver") {
  httpServer = https.createServer(
    {
      key: fs.readFileSyncfs.readFileSync(
        `/etc/letsencrypt/live/api.metaaxel.online/privkey.pem`
      ),
      cert: fs.readFileSync(
        `/etc/letsencrypt/live/api.metaaxel.online/cert.pem`
      ),
    },

    app
  );
} else {
  httpServer = http.createServer(app);
}

new Promise((resolve) => httpServer.listen({ port: config.port }, resolve));

console.log(
  "🚀 Server ready at",
  `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
    server.graphqlPath
  }`
);
