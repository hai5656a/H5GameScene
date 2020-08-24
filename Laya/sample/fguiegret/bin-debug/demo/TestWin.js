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
var TestWin = (function (_super) {
    __extends(TestWin, _super);
    function TestWin() {
        return _super.call(this) || this;
    }
    TestWin.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("ModalWaiting", "TestWin").asCom;
        this.contentPane.getChild("n1").addClickListener(this.onClickStart, this);
        this.center();
    };
    TestWin.prototype.onClickStart = function () {
        //这里模拟一个要锁住当前窗口的过程，在锁定过程中，窗口仍然是可以移动和关闭的
        this.showModalWait();
        fgui.GTween.delayedCall(3).onComplete(function () { this.closeModalWait(); }, this);
    };
    return TestWin;
}(fgui.Window));
__reflect(TestWin.prototype, "TestWin");
var WindowA = (function (_super) {
    __extends(WindowA, _super);
    function WindowA() {
        return _super.call(this) || this;
    }
    WindowA.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowA").asCom;
        this.center();
    };
    WindowA.prototype.onShown = function () {
        var list = this.contentPane.getChild("n6").asList;
        list.removeChildrenToPool();
        for (var i = 0; i < 6; i++) {
            var item = list.addItemFromPool().asButton;
            item.title = "" + i;
            item.icon = fgui.UIPackage.getItemURL("Basics", "r4");
        }
    };
    return WindowA;
}(fgui.Window));
__reflect(WindowA.prototype, "WindowA");
var WindowB = (function (_super) {
    __extends(WindowB, _super);
    function WindowB() {
        return _super.call(this) || this;
    }
    WindowB.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowB").asCom;
        this.center();
        //弹出窗口的动效已中心为轴心
        this.setPivot(0.5, 0.5);
    };
    WindowB.prototype.doShowAnimation = function () {
        this.setScale(0.1, 0.1);
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.onShown, this);
    };
    WindowB.prototype.doHideAnimation = function () {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.hideImmediately, this);
    };
    WindowB.prototype.onShown = function () {
        this.contentPane.getTransition("t1").play();
    };
    WindowB.prototype.onHide = function () {
        this.contentPane.getTransition("t1").stop();
    };
    return WindowB;
}(fgui.Window));
__reflect(WindowB.prototype, "WindowB");
//# sourceMappingURL=TestWin.js.map