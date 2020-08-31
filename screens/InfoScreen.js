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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var InfoScreen = /** @class */ (function (_super) {
    __extends(InfoScreen, _super);
    function InfoScreen(props) {
        return _super.call(this, props) || this;
    }
    InfoScreen.prototype.render = function () {
        var _a = this.props.route.params, firstName = _a.firstName, lastName = _a.lastName, city = _a.city, street = _a.street, streetNumber = _a.streetNumber, country = _a.country, email = _a.email, phoneNumber = _a.phoneNumber, photo = _a.photo;
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.View, { style: styles.skyBlue }),
                react_1.default.createElement(react_native_1.View, { style: styles.imageWrapper },
                    react_1.default.createElement(react_native_1.Image, { style: styles.image, source: { uri: photo } }),
                    react_1.default.createElement(react_native_1.Text, { style: styles.name },
                        firstName,
                        " ",
                        lastName))),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.View, { style: styles.metadataWrapper },
                    react_1.default.createElement(react_native_1.Text, { style: styles.metadata }, "Address: "),
                    react_1.default.createElement(react_native_1.Text, { style: styles.detailData },
                        street,
                        " ",
                        streetNumber,
                        ", ",
                        city)),
                react_1.default.createElement(react_native_1.View, { style: styles.metadataWrapper },
                    react_1.default.createElement(react_native_1.Text, { style: styles.metadata }, "Email: "),
                    react_1.default.createElement(react_native_1.Text, { style: styles.detailData }, email)),
                react_1.default.createElement(react_native_1.View, { style: styles.metadataWrapper },
                    react_1.default.createElement(react_native_1.Text, { style: styles.metadata }, "Phone: "),
                    react_1.default.createElement(react_native_1.Text, { style: styles.detailData }, phoneNumber)))));
    };
    return InfoScreen;
}(react_1.Component));
exports.default = InfoScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    skyBlue: {
        backgroundColor: '#003459',
        height: 100,
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100,
    },
    name: {
        fontSize: 40,
        color: 'black',
    },
    metadataWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});
