var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
var LoopListDemo = (function () {
    function LoopListDemo() {
    }
    LoopListDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("LoopList")];
                    case 1:
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("LoopList", "Main").asCom;
                        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                        fgui.GRoot.inst.addChild(this._view);
                        this._list = this._view.getChild("list").asList;
                        this._list.setVirtualAndLoop();
                        this._list.itemRenderer = this.renderListItem;
                        this._list.callbackThisObj = this;
                        this._list.numItems = 5;
                        this._list.scrollPane.addEventListener(fgui.ScrollPane.SCROLL, this.doSpecialEffect, this);
                        this.doSpecialEffect();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoopListDemo.prototype.doSpecialEffect = function () {
        //change the scale according to the distance to the middle
        var midX = this._list.scrollPane.posX + this._list.viewWidth / 2;
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
            var obj = this._list.getChildAt(i);
            var dist = Math.abs(midX - obj.x - obj.width / 2);
            if (dist > obj.width)
                obj.setScale(1, 1);
            else {
                var ss = 1 + (1 - dist / obj.width) * 0.24;
                obj.setScale(ss, ss);
            }
        }
        this._view.getChild("n3").text = "" + ((this._list.getFirstChildInView() + 1) % this._list.numItems);
    };
    LoopListDemo.prototype.renderListItem = function (index, obj) {
        var item = obj.asButton;
        item.setPivot(0.5, 0.5);
        item.icon = fgui.UIPackage.getItemURL("LoopList", "n" + (index + 1));
    };
    return LoopListDemo;
}());
__reflect(LoopListDemo.prototype, "LoopListDemo");
//# sourceMappingURL=LoopListDemo.js.map