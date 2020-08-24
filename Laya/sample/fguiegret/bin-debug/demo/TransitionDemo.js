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
var TransitionDemo = (function () {
    function TransitionDemo() {
    }
    TransitionDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("Transition")];
                    case 1:
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("Transition", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._btnGroup = this._view.getChild("g0").asGroup;
                        this._g1 = fgui.UIPackage.createObject("Transition", "BOSS").asCom;
                        this._g2 = fgui.UIPackage.createObject("Transition", "BOSS_SKILL").asCom;
                        this._g3 = fgui.UIPackage.createObject("Transition", "TRAP").asCom;
                        this._g4 = fgui.UIPackage.createObject("Transition", "GoodHit").asCom;
                        this._g5 = fgui.UIPackage.createObject("Transition", "PowerUp").asCom;
                        this._g6 = fgui.UIPackage.createObject("Transition", "PathDemo").asCom;
                        //play_num_now是在编辑器里设定的名称，这里表示播放到'play_num_now'这个位置时才开始播放数字变化效果
                        this._g5.getTransition("t0").setHook("play_num_now", this.__playNum, this);
                        this._view.getChild("btn0").addClickListener(function () { this.__play(this._g1); }, this);
                        this._view.getChild("btn1").addClickListener(function () { this.__play(this._g2); }, this);
                        this._view.getChild("btn2").addClickListener(function () { this.__play(this._g3); }, this);
                        this._view.getChild("btn3").addClickListener(this.__play4, this);
                        this._view.getChild("btn4").addClickListener(this.__play5, this);
                        this._view.getChild("btn5").addClickListener(function () { this.__play(this._g6); }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransitionDemo.prototype.__play = function (target) {
        var _this = this;
        this._btnGroup.visible = false;
        fgui.GRoot.inst.addChild(target);
        var t = target.getTransition("t0");
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(target);
        }, this);
    };
    TransitionDemo.prototype.__play4 = function () {
        var _this = this;
        this._btnGroup.visible = false;
        this._g4.x = fgui.GRoot.inst.width - this._g4.width - 20;
        this._g4.y = 100;
        fgui.GRoot.inst.addChild(this._g4);
        var t = this._g4.getTransition("t0");
        //播放3次
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(_this._g4);
        }, this, null, 3);
    };
    TransitionDemo.prototype.__play5 = function () {
        var _this = this;
        this._btnGroup.visible = false;
        this._g5.x = 20;
        this._g5.y = fgui.GRoot.inst.height - this._g5.height - 100;
        fgui.GRoot.inst.addChild(this._g5);
        var t = this._g5.getTransition("t0");
        this._startValue = 10000;
        var add = Math.ceil(Math.random() * 2000 + 1000);
        this._endValue = this._startValue + add;
        this._g5.getChild("value").text = "" + this._startValue;
        this._g5.getChild("add_value").text = "+" + add;
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(_this._g5);
        }, this);
    };
    TransitionDemo.prototype.__playNum = function () {
        //这里演示了一个数字变化的过程
        fgui.GTween.to(this._startValue, this._endValue, 0.3)
            .setEase(fgui.EaseType.Linear)
            .onUpdate(function (tweener) {
            this._g5.getChild("value").text = "" + Math.floor(tweener.value.x);
        }, this);
    };
    return TransitionDemo;
}());
__reflect(TransitionDemo.prototype, "TransitionDemo");
//# sourceMappingURL=TransitionDemo.js.map