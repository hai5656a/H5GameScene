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
var PullToRefreshDemo = (function () {
    function PullToRefreshDemo() {
    }
    PullToRefreshDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("PullToRefresh")];
                    case 1:
                        _a.sent();
                        fgui.UIObjectFactory.setExtension("ui://PullToRefresh/Header", ScrollPaneHeader);
                        this._view = fgui.UIPackage.createObject("PullToRefresh", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._list1 = this._view.getChild("list1").asList;
                        this._list1.itemRenderer = this.renderListItem1;
                        this._list1.callbackThisObj = this;
                        this._list1.setVirtual();
                        this._list1.numItems = 1;
                        this._list1.scrollPane.addEventListener(fgui.ScrollPane.PULL_DOWN_RELEASE, this.onPullDownToRefresh, this);
                        this._list2 = this._view.getChild("list2").asList;
                        this._list2.itemRenderer = this.renderListItem2;
                        this._list2.callbackThisObj = this;
                        this._list2.setVirtual();
                        this._list2.numItems = 1;
                        this._list2.scrollPane.addEventListener(fgui.ScrollPane.PULL_UP_RELEASE, this.onPullUpToRefresh, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PullToRefreshDemo.prototype.renderListItem1 = function (index, item) {
        item.text = "Item " + (this._list1.numItems - index - 1);
    };
    PullToRefreshDemo.prototype.renderListItem2 = function (index, item) {
        item.text = "Item " + index;
    };
    PullToRefreshDemo.prototype.onPullDownToRefresh = function (evt) {
        var header = (this._list1.scrollPane.header);
        if (header.readyToRefresh) {
            header.setRefreshStatus(2);
            this._list1.scrollPane.lockHeader(header.sourceHeight);
            //Simulate a async resquest
            fgui.GTimers.inst.add(2000, 1, function () {
                this._list1.numItems += 5;
                //Refresh completed
                header.setRefreshStatus(3);
                this._list1.scrollPane.lockHeader(35);
                fgui.GTimers.inst.add(2000, 1, function () {
                    header.setRefreshStatus(0);
                    this._list1.scrollPane.lockHeader(0);
                }, this);
            }, this);
        }
    };
    PullToRefreshDemo.prototype.onPullUpToRefresh = function (evt) {
        var footer = this._list2.scrollPane.footer.asCom;
        footer.getController("c1").selectedIndex = 1;
        this._list2.scrollPane.lockFooter(footer.sourceHeight);
        //Simulate a async resquest
        fgui.GTimers.inst.add(2000, 1, function () {
            this._list2.numItems += 5;
            //Refresh completed
            footer.getController("c1").selectedIndex = 0;
            this._list2.scrollPane.lockFooter(0);
        }, this);
    };
    return PullToRefreshDemo;
}());
__reflect(PullToRefreshDemo.prototype, "PullToRefreshDemo");
//# sourceMappingURL=PullToRefreshDemo.js.map