"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "List" },
        _react2.default.createElement(
          "table",
          { id: "movie-list" },
          _react2.default.createElement("tr", null)
        )
      );
    }
  }]);

  return List;
}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7OzZCQUNHO0FBQ0wsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsWUFBTyxJQUFHLFlBQVY7QUFDQztBQUREO0FBREYsT0FERjtBQU9GOzs7O0VBVGlCQyxnQiIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0XCI+XG4gICAgICAgIDx0YWJsZSBpZD1cIm1vdmllLWxpc3RcIj5cblx0ICAgICAgICA8dHI+PC90cj5cblx0ICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcblx0fVxufSJdfQ==