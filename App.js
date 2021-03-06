"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var ContactsScreen_1 = __importDefault(require("./screens/ContactsScreen"));
var InfoScreen_1 = __importDefault(require("./screens/InfoScreen"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(native_1.NavigationContainer, null,
            react_1.default.createElement(Stack.Navigator, null,
                react_1.default.createElement(Stack.Screen, { name: "Contacts", component: ContactsScreen_1.default }),
                react_1.default.createElement(Stack.Screen, { name: "Details", component: InfoScreen_1.default }))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
var Stack = stack_1.createStackNavigator();
