"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dbZero = exports.dbNow = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _client = _interopRequireDefault(require("../client"));

var dbNow = function dbNow() {
  return (0, _dayjs["default"])().add(9, "hour").toDate();
};

exports.dbNow = dbNow;

var dbZero = function dbZero() {
  return (0, _dayjs["default"])(0).toDate();
};

exports.dbZero = dbZero;
var _default = {
  Mutation: {
    updateWhitelist: function () {
      var _updateWhitelist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var sol_address, email, nft_amount, nationality, discord_username, twitter_username, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sol_address = _ref.sol_address, email = _ref.email, nft_amount = _ref.nft_amount, nationality = _ref.nationality, discord_username = _ref.discord_username, twitter_username = _ref.twitter_username;
                _context.next = 3;
                return _client["default"].metawhitelist.update({
                  where: {
                    sol_address: sol_address
                  },
                  data: {
                    email: email,
                    nft_amount: nft_amount,
                    nationality: nationality,
                    discord_username: discord_username,
                    twitter_username: twitter_username
                  }
                });

              case 3:
                data = _context.sent;
                return _context.abrupt("return", {
                  ok: true
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function updateWhitelist(_x, _x2) {
        return _updateWhitelist.apply(this, arguments);
      }

      return updateWhitelist;
    }(),
    createWhitelist: function () {
      var _createWhitelist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref2) {
        var sol_address, email, nft_amount, nationality, discord_username, twitter_username;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sol_address = _ref2.sol_address, email = _ref2.email, nft_amount = _ref2.nft_amount, nationality = _ref2.nationality, discord_username = _ref2.discord_username, twitter_username = _ref2.twitter_username;
                _context2.next = 3;
                return _client["default"].metawhitelist.create({
                  data: {
                    sol_address: sol_address,
                    email: email,
                    nft_amount: nft_amount,
                    nationality: nationality,
                    discord_username: discord_username,
                    twitter_username: twitter_username
                  }
                });

              case 3:
                return _context2.abrupt("return", {
                  ok: true
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createWhitelist(_x3, _x4) {
        return _createWhitelist.apply(this, arguments);
      }

      return createWhitelist;
    }(),
    updateWhitelistNft_Amount: function () {
      var _updateWhitelistNft_Amount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref3) {
        var sol_address, data, nft, idx;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sol_address = _ref3.sol_address;
                _context3.next = 3;
                return _client["default"].metawhitelist.findUnique({
                  where: {
                    sol_address: sol_address
                  }
                });

              case 3:
                data = _context3.sent;
                console.log(data.nft_amount);

                if (!(data.nft_amount >= 0)) {
                  _context3.next = 13;
                  break;
                }

                nft = data.nft_amount - 1;
                idx = data.id;
                _context3.next = 10;
                return _client["default"].metawhitelist.update({
                  where: {
                    id: idx
                  },
                  data: {
                    nft_amount: nft
                  }
                });

              case 10:
                return _context3.abrupt("return", {
                  ok: true
                });

              case 13:
                return _context3.abrupt("return", {
                  ok: false,
                  error: "it can`t be"
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateWhitelistNft_Amount(_x5, _x6) {
        return _updateWhitelistNft_Amount.apply(this, arguments);
      }

      return updateWhitelistNft_Amount;
    }()
  }
};
exports["default"] = _default;