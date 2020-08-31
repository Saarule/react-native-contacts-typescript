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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
            person: null
        };
        _this.onPress = _this.onPress.bind(_this);
        return _this;
    }
    Contact.prototype.onPress = function () {
        this.props.navigation.navigate("Details", {
            firstName: this.state.person.name.first,
            lastName: this.state.person.name.last,
            city: this.state.person.location.city,
            street: this.state.person.location.street.name,
            streetNumber: this.state.person.location.street.number,
            email: this.state.person.email,
            phoneNumber: this.state.person.phone,
            photo: this.state.person.picture.large
        });
    };
    Contact.prototype.onPressTemp = function () {
        this.props.navigation.navigate("Details");
    };
    Contact.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, _a, url, response, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 6]);
                        url = "https://api.randomuser.me";
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _b.sent();
                        this.setState({ person: data.results[0], loading: false });
                        return [3 /*break*/, 6];
                    case 3:
                        _a = _b.sent();
                        url = "https://api.randomuser.me";
                        return [4 /*yield*/, fetch(url)];
                    case 4:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 5:
                        data = _b.sent();
                        this.setState({ person: data.results[0], loading: false });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Contact.prototype.drawRealContent = function () {
        return (react_1.default.createElement(react_native_1.TouchableNativeFeedback, { onPress: this.onPress },
            react_1.default.createElement(react_native_1.View, { style: styles.contact },
                react_1.default.createElement(react_native_1.Image, { style: styles.image, source: { uri: this.state.person.picture.large } }),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(react_native_1.Text, { style: styles.contactName },
                        this.state.person.name.first,
                        " ",
                        this.state.person.name.last)))));
    };
    Contact.prototype.drawTempContent = function () {
        return (react_1.default.createElement(react_native_1.TouchableNativeFeedback, { onPress: this.onPressTemp },
            react_1.default.createElement(react_native_1.View, { style: styles.contact },
                react_1.default.createElement(react_native_1.Image, { style: styles.image, source: { uri: "https://randomuser.me/api/portraits/women/94.jpg" } }),
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(react_native_1.Text, { style: styles.contactName }, "First Last")))));
    };
    Contact.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, null, this.state.loading || this.state.person == null ? this.drawTempContent() : this.drawRealContent()));
    };
    return Contact;
}(react_1.Component));
exports.default = Contact;
var styles = react_native_1.StyleSheet.create({
    contact: {
        width: width / 2.4,
        height: height / 3.5,
        marginHorizontal: 10
    },
    contactName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
});
