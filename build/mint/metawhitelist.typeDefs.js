"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

var _default = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type metawhitelist {\n    id: Int!\n    email: String\n    sol_address: String!\n    nft_amount: Int\n    nationality: String\n    discord_username: String\n    twitter_username: String\n  }\n  type Query {\n    whitelists: [metawhitelist]\n    whitelist(sol_address: String!): metawhitelist\n    verifywhitelist(sol_address: String!): MutationResponse\n  }\n  type Mutation {\n    updateWhitelist(\n      sol_address: String!\n      email: String\n      nft_amount: Int\n      nationality: String\n      discord_username: String\n      twitter_username: String\n    ): MutationResponse\n    createWhitelist(\n      sol_address: String!\n      email: String\n      nft_amount: Int\n      nationality: String\n      discord_username: String\n      twitter_username: String\n    ): MutationResponse\n    updateWhitelistNft_Amount(sol_address: String!): MutationResponse\n  }\n"])));

exports["default"] = _default;