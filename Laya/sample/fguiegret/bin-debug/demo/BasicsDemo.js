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
var BasicDemo = (function () {
    function BasicDemo() {
    }
    BasicDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnt, i, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("Basics")];
                    case 1:
                        _a.sent();
                        fgui.UIConfig.verticalScrollBar = "ui://Basics/ScrollBar_VT";
                        fgui.UIConfig.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
                        fgui.UIConfig.popupMenu = "ui://Basics/PopupMenu";
                        fgui.UIConfig.buttonSound = "ui://Basics/click";
                        this._view = fgui.UIPackage.createObject("Basics", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._backBtn = this._view.getChild("btn_Back");
                        this._backBtn.visible = false;
                        this._backBtn.addClickListener(this.onClickBack, this);
                        this._demoContainer = this._view.getChild("container").asCom;
                        this._cc = this._view.getController("c1");
                        cnt = this._view.numChildren;
                        for (i = 0; i < cnt; i++) {
                            obj = this._view.getChildAt(i);
                            if (obj.group != null && obj.group.name == "btns")
                                obj.addClickListener(this.runDemo, this);
                        }
                        this._demoObjects = {};
                        return [2 /*return*/];
                }
            });
        });
    };
    BasicDemo.prototype.destroy = function () {
        fgui.UIConfig.verticalScrollBar = "";
        fgui.UIConfig.horizontalScrollBar = "";
        fgui.UIConfig.popupMenu = "";
        fgui.UIConfig.buttonSound = "";
        fgui.UIPackage.removePackage("Basics");
    };
    BasicDemo.prototype.runDemo = function (evt) {
        var type = (evt.currentTarget).name.substr(4);
        var obj = this._demoObjects[type];
        if (obj == null) {
            obj = fgui.UIPackage.createObject("Basics", "Demo_" + type);
            this._demoObjects[type] = obj;
        }
        this._demoContainer.removeChildren();
        this._demoContainer.addChild(obj);
        this._cc.selectedIndex = 1;
        this._backBtn.visible = true;
        switch (type) {
            case "Button":
                this.playButton();
                break;
            case "Text":
                this.playText();
                break;
            case "Window":
                this.playWindow();
                break;
            case "Popup":
                this.playPopup();
                break;
            case "Drag&Drop":
                this.playDragDrop();
                break;
            case "Depth":
                this.playDepth();
                break;
            case "Grid":
                this.playGrid();
                break;
            case "ProgressBar":
                this.playProgressBar();
                break;
        }
    };
    BasicDemo.prototype.onClickBack = function (evt) {
        this._cc.selectedIndex = 0;
        this._backBtn.visible = false;
    };
    //------------------------------
    BasicDemo.prototype.playButton = function () {
        var obj = this._demoObjects["Button"];
        obj.getChild("n34").addClickListener(this.__clickButton, this);
    };
    BasicDemo.prototype.__clickButton = function (evt) {
        console.log("click button");
    };
    //------------------------------
    BasicDemo.prototype.playText = function () {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").asRichTextField.addEventListener(egret.TextEvent.LINK, this.__clickLink, this);
        obj.getChild("n25").addClickListener(this.__clickGetInput, this);
    };
    BasicDemo.prototype.__clickLink = function (evt) {
        var obj = (evt.currentTarget);
        obj.text = "[img]ui://9leh0eyft9fj5f[/img][color=#FF0000]你点击了链接[/color]：" + evt.text;
    };
    BasicDemo.prototype.__clickGetInput = function (evt) {
        var obj = this._demoObjects["Text"];
        obj.getChild("n24").text = obj.getChild("n22").text;
    };
    BasicDemo.prototype.playWindow = function () {
        var obj = this._demoObjects["Window"];
        obj.getChild("n0").addClickListener(this.__clickWindowA, this);
        obj.getChild("n1").addClickListener(this.__clickWindowB, this);
    };
    BasicDemo.prototype.__clickWindowA = function (evt) {
        if (this._winA == null)
            this._winA = new WindowA();
        this._winA.show();
    };
    BasicDemo.prototype.__clickWindowB = function (evt) {
        if (this._winB == null)
            this._winB = new WindowB();
        this._winB.show();
    };
    BasicDemo.prototype.playPopup = function () {
        if (this._pm == null) {
            this._pm = new fgui.PopupMenu();
            this._pm.addItem("Item 1");
            this._pm.addItem("Item 2");
            this._pm.addItem("Item 3");
            this._pm.addItem("Item 4");
            if (this._popupCom == null) {
                this._popupCom = fgui.UIPackage.createObject("Basics", "Component12").asCom;
                this._popupCom.center();
            }
        }
        var obj = this._demoObjects["Popup"];
        var btn = obj.getChild("n0");
        btn.addClickListener(this.__clickPopup1, this);
        var btn2 = obj.getChild("n1");
        btn2.addClickListener(this.__clickPopup2, this);
    };
    BasicDemo.prototype.__clickPopup1 = function (evt) {
        var btn = evt.currentTarget;
        this._pm.show(btn);
    };
    BasicDemo.prototype.__clickPopup2 = function (evt) {
        fgui.GRoot.inst.showPopup(this._popupCom);
    };
    //------------------------------
    BasicDemo.prototype.playDragDrop = function () {
        var obj = this._demoObjects["Drag&Drop"];
        var btnA = obj.getChild("a");
        btnA.draggable = true;
        var btnB = obj.getChild("b");
        btnB.draggable = true;
        btnB.addEventListener(fgui.DragEvent.DRAG_START, this.__onDragStart, this);
        var btnC = obj.getChild("c");
        btnC.icon = null;
        btnC.addEventListener(fgui.DropEvent.DROP, this.__onDrop, this);
        var btnD = obj.getChild("d");
        btnD.draggable = true;
        var bounds = obj.getChild("bounds");
        var rect = new egret.Rectangle();
        bounds.localToGlobalRect(0, 0, bounds.width, bounds.height, rect);
        fgui.GRoot.inst.globalToLocalRect(rect.x, rect.y, rect.width, rect.height, rect);
        //因为这时候面板还在从右往左动，所以rect不准确，需要用相对位置算出最终停下来的范围
        rect.x -= obj.parent.x;
        btnD.dragBounds = rect;
    };
    BasicDemo.prototype.__onDragStart = function (evt) {
        //取消对原目标的拖动，换成一个替代品
        evt.preventDefault();
        var btn = evt.currentTarget;
        fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon);
    };
    BasicDemo.prototype.__onDrop = function (evt) {
        var btn = evt.currentTarget;
        btn.icon = evt.source;
    };
    //------------------------------
    BasicDemo.prototype.playDepth = function () {
        var obj = this._demoObjects["Depth"];
        var testContainer = obj.getChild("n22").asCom;
        var fixedObj = testContainer.getChild("n0");
        fixedObj.sortingOrder = 100;
        fixedObj.draggable = true;
        var numChildren = testContainer.numChildren;
        var i = 0;
        while (i < numChildren) {
            var child = testContainer.getChildAt(i);
            if (child != fixedObj) {
                testContainer.removeChildAt(i);
                numChildren--;
            }
            else
                i++;
        }
        var startPos = new egret.Point(fixedObj.x, fixedObj.y);
        obj.getChild("btn0").addClickListener(function () {
            var graph = new fgui.GGraph();
            startPos.x += 10;
            startPos.y += 10;
            graph.setXY(startPos.x, startPos.y);
            graph.setSize(150, 150);
            graph.drawRect(1, 0, 1, 0xFF0000, 1);
            obj.getChild("n22").asCom.addChild(graph);
        }, this);
        obj.getChild("btn1").addClickListener(function () {
            var graph = new fgui.GGraph();
            startPos.x += 10;
            startPos.y += 10;
            graph.setXY(startPos.x, startPos.y);
            graph.setSize(150, 150);
            graph.drawRect(1, 0, 1, 0x00FF00, 1);
            graph.sortingOrder = 200;
            obj.getChild("n22").asCom.addChild(graph);
        }, this);
    };
    //------------------------------
    BasicDemo.prototype.playGrid = function () {
        var obj = this._demoObjects["Grid"];
        var list1 = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames = ["苹果手机操作系统", "安卓手机操作系统", "微软手机操作系统", "微软桌面操作系统", "苹果桌面操作系统", "未知操作系统"];
        var testColors = [0xFFFF00, 0xFF0000, 0xFFFFFF, 0x0000FF];
        var cnt = testNames.length;
        for (var i = 0; i < cnt; i++) {
            var item = list1.addItemFromPool().asButton;
            item.getChild("t0").text = "" + (i + 1);
            item.getChild("t1").text = testNames[i];
            item.getChild("t2").asTextField.color = testColors[Math.floor(Math.random() * 4)];
            item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3) + 1) / 3 * 100;
        }
        var list2 = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for (var i = 0; i < cnt; i++) {
            var item = list2.addItemFromPool().asButton;
            item.getChild("cb").asButton.selected = false;
            item.getChild("t1").text = testNames[i];
            item.getChild("mc").asMovieClip.playing = i % 2 == 0;
            item.getChild("t3").text = "" + Math.floor(Math.random() * 10000);
        }
    };
    //------------------------------
    BasicDemo.prototype.playProgressBar = function () {
        var obj = this._demoObjects["ProgressBar"];
        fgui.GTimers.inst.add(40, 0, this.__playProgress, this);
        obj.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.__removeTimer, this);
    };
    BasicDemo.prototype.__removeTimer = function () {
        fgui.GTimers.inst.remove(this.__playProgress, this);
    };
    BasicDemo.prototype.__playProgress = function () {
        var obj = this._demoObjects["ProgressBar"];
        var cnt = obj.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = obj.getChildAt(i);
            if (child instanceof fgui.GProgressBar) {
                child.value += 1;
                if (child.value > child.max)
                    child.value = 0;
            }
        }
    };
    return BasicDemo;
}());
__reflect(BasicDemo.prototype, "BasicDemo");
//# sourceMappingURL=BasicsDemo.js.map