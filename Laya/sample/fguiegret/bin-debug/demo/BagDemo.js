var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var BagDemo = (function () {
    function BagDemo() {
    }
    BagDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("Bag")];
                    case 1:
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("Bag", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._bagWindow = new BagWindow();
                        this._view.getChild("bagBtn").addClickListener(function () { _this._bagWindow.show(); }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    BagDemo.prototype.destroy = function () {
        fgui.UIPackage.removePackage("Bag");
    };
    return BagDemo;
}());
__reflect(BagDemo.prototype, "BagDemo");
var BagWindow = (function (_super) {
    __extends(BagWindow, _super);
    function BagWindow() {
        return _super.call(this) || this;
    }
    BagWindow.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Bag", "BagWin").asCom;
        this.center();
    };
    BagWindow.prototype.onShown = function () {
        var list = this.contentPane.getChild("list").asList;
        list.addEventListener(fgui.ItemEvent.CLICK, this.onClickItem, this);
        list.itemRenderer = this.renderListItem;
        list.callbackThisObj = this;
        list.setVirtual();
        list.numItems = 45;
    };
    BagWindow.prototype.renderListItem = function (index, obj) {
        obj.icon = "resource/assets/Icons/i" + Math.floor(Math.random() * 10) + ".png";
        obj.text = "" + Math.floor(Math.random() * 100);
    };
    BagWindow.prototype.onClickItem = function (evt) {
        this.contentPane.getChild("n11").asLoader.url = evt.itemObject.icon;
        this.contentPane.getChild("n13").text = evt.itemObject.icon;
    };
    return BagWindow;
}(fgui.Window));
__reflect(BagWindow.prototype, "BagWindow");
//# sourceMappingURL=BagDemo.js.map