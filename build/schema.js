"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var loadedTypes = (0, _graphqlTools.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.js"));
var loadedResolvers = (0, _graphqlTools.loadFilesSync)("".concat(__dirname, "/**/*.{queries,mutations}.js"));
var typeDefs = (0, _graphqlTools.mergeTypeDefs)(loadedTypes);
var resolvers = (0, _graphqlTools.mergeResolvers)(loadedResolvers);
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
var _default = schema;
exports["default"] = _default;