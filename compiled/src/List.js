"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ListEntry = require("./ListEntry");

var _ListEntry2 = _interopRequireDefault(_ListEntry);

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
					this.props.movieList.map(function (movie) {
						return _react2.default.createElement(_ListEntry2.default, { movie: movie });
					})
				)
			);
		}
	}]);

	return List;
}(_react.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0LmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJwcm9wcyIsIm1vdmllTGlzdCIsIm1hcCIsIm1vdmllIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7OzsyQkFFRzs7QUFFTixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxPQUFPLElBQUcsWUFBVjtBQUNFLFVBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUI7QUFBQSxhQUN6Qiw4QkFBQyxtQkFBRCxJQUFXLE9BQU9DLEtBQWxCLEdBRHlCO0FBQUEsTUFBekI7QUFERjtBQURGLElBREQ7QUFTRDs7OztFQWJpQkMsZ0I7O2tCQWdCSkwsSSIsImZpbGUiOiJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RFbnRyeSBmcm9tIFwiLi9MaXN0RW50cnlcIlxuXG5jbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cdHJlbmRlcigpe1xuXG5cdCAgcmV0dXJuKFxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJMaXN0XCI+XG5cdFx0ICAgIDx0YWJsZSBpZD1cIm1vdmllLWxpc3RcIj5cblx0XHRcdCAgICB7dGhpcy5wcm9wcy5tb3ZpZUxpc3QubWFwKG1vdmllID0+IFxuXHRcdFx0ICAgIFx0PExpc3RFbnRyeSBtb3ZpZT17bW92aWV9IC8+XG5cdFx0XHQgICAgICApfVxuXHRcdCAgICA8L3RhYmxlPlxuXHRcdCAgPC9kaXY+XG5cdCAgKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7Il19