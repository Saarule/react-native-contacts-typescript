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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Contact_1 = __importDefault(require("../components/Contact"));
var ContactsScreen = /** @class */ (function (_super) {
    __extends(ContactsScreen, _super);
    function ContactsScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactsScreen.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.ScrollView, null,
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })),
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })),
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })),
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })),
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })),
                react_1.default.createElement(react_native_1.View, { style: styles.container },
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation }),
                    react_1.default.createElement(Contact_1.default, { navigation: this.props.navigation })))));
    };
    return ContactsScreen;
}(react_1.Component));
exports.default = ContactsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 50
    },
    wrapper: {
        flex: 1,
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600',
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
});
