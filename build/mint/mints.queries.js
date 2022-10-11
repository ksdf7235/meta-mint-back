"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../client"));

var _default = {
  Query: {
    whitelists: function whitelists() {
      return _client["default"].metawhitelist.findMany();
    },
    whitelist: function whitelist(_, _ref) {
      var sol_address = _ref.sol_address;
      return _client["default"].metawhitelist.findUnique({
        where: {
          sol_address: sol_address
        }
      });
    },
    verifywhitelist: function () {
      var _verifywhitelist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref2) {
        var sol_address, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sol_address = _ref2.sol_address;
                _context.next = 3;
                return _client["default"].metawhitelist.findUnique({
                  where: {
                    sol_address: sol_address
                  }
                });

              case 3:
                data = _context.sent;

                if (!data) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", {
                  ok: true
                });

              case 8:
                return _context.abrupt("return", {
                  ok: false,
                  error: "not allow mintingpage"
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function verifywhitelist(_x, _x2) {
        return _verifywhitelist.apply(this, arguments);
      }

      return verifywhitelist;
    }()
  }
};
exports["default"] = _default;