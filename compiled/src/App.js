"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "App" },
        _react2.default.createElement(
          "div",
          { id: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Movie List"
          ),
          _react2.default.createElement(
            "div",
            null,
            "here is my container blaaaaaa"
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7NkJBQ0k7QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsV0FBUjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQURGLE9BREY7QUFRRDs7OztFQVZlQyxnQjs7a0JBYUhELEciLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuXHQgICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cblx0ICAgICAgICA8ZGl2PmhlcmUgaXMgbXkgY29udGFpbmVyIGJsYWFhYWFhPC9kaXY+XG5cdCAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19