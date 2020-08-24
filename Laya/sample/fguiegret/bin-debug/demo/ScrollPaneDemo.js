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
var ScrollPaneDemo = (function () {
    function ScrollPaneDemo() {
    }
    ScrollPaneDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("ScrollPane")];
                    case 1:
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("ScrollPane", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._list = this._view.getChild("list").asList;
                        this._list.itemRenderer = this.renderListItem;
                        this._list.callbackThisObj = this;
                        this._list.setVirtual();
                        this._list.numItems = 1000;
                        this._list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClickList, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrollPaneDemo.prototype.renderListItem = function (index, item) {
        item.title = "Item " + index;
        item.scrollPane.posX = 0; //reset scroll pos
        item.getChild("b0").addClickListener(this.onClickStick, this);
        item.getChild("b1").addClickListener(this.onClickDelete, this);
    };
    ScrollPaneDemo.prototype.onClickList = function (evt) {
        //点击列表时，查找是否有项目处于编辑状态， 如果有就归位
        var touchTarget = fgui.GRoot.inst.getObjectUnderPoint(evt.stageX, evt.stageY);
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
            var item = this._list.getChildAt(i).asButton;
            if (item.scrollPane.posX != 0) {
                //Check if clicked on the button
                if (item.getChild("b0").asButton.isAncestorOf(touchTarget)
                    || item.getChild("b1").asButton.isAncestorOf(touchTarget)) {
                    return;
                }
                item.scrollPane.setPosX(0, true);
                //取消滚动面板可能发生的拉动。
                item.scrollPane.cancelDragging();
                this._list.scrollPane.cancelDragging();
                break;
            }
        }
    };
    ScrollPaneDemo.prototype.onClickStick = function (evt) {
        this._view.getChild("txt").text = "Stick " + evt.currentTarget.parent.text;
    };
    ScrollPaneDemo.prototype.onClickDelete = function (evt) {
        this._view.getChild("txt").text = "Delete " + evt.currentTarget.parent.text;
    };
    return ScrollPaneDemo;
}());
__reflect(ScrollPaneDemo.prototype, "ScrollPaneDemo");
//# sourceMappingURL=ScrollPaneDemo.js.map