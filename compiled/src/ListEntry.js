"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListEntry = function (_Component) {
	_inherits(ListEntry, _Component);

	function ListEntry() {
		_classCallCheck(this, ListEntry);

		return _possibleConstructorReturn(this, (ListEntry.__proto__ || Object.getPrototypeOf(ListEntry)).apply(this, arguments));
	}

	_createClass(ListEntry, [{
		key: "render",
		value: function render() {
			console.log('movie', this.props.movie);
			return _react2.default.createElement(
				"tr",
				null,
				_react2.default.createElement(
					"div",
					{ className: "ListEntry" },
					_react2.default.createElement(
						"p",
						null,
						this.props.movie.title
					)
				)
			);
		}
	}]);

	return ListEntry;
}(_react.Component);

exports.default = ListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0RW50cnkuanMiXSwibmFtZXMiOlsiTGlzdEVudHJ5IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBR01BLFM7Ozs7Ozs7Ozs7OzJCQUVHO0FBQ1BDLFdBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLEtBQUtDLEtBQUwsQ0FBV0MsS0FBaEM7QUFDQyxVQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsV0FBZjtBQUEyQjtBQUFBO0FBQUE7QUFBSSxXQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDO0FBQXJCO0FBQTNCO0FBREYsSUFERDtBQUtEOzs7O0VBVHNCQyxnQjs7a0JBWVROLFMiLCJmaWxlIjoiTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNsYXNzIExpc3RFbnRyeSBleHRlbmRzIENvbXBvbmVudHtcblxuXHRyZW5kZXIoKXtcblx0XHRjb25zb2xlLmxvZygnbW92aWUnLCB0aGlzLnByb3BzLm1vdmllKVxuXHQgIHJldHVybihcblx0XHQgIDx0cj5cblx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0RW50cnlcIj48cD57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L3A+PC9kaXY+XG5cdFx0ICA8L3RyPlxuXHQgIClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RW50cnk7Il19