var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainMenu = (function () {
    function MainMenu() {
        fgui.UIPackage.addPackage("MainMenu");
        this._view = fgui.UIPackage.createObject("MainMenu", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n1").addClickListener(function () {
            this.startDemo(BasicDemo);
        }, this);
        this._view.getChild("n2").addClickListener(function () {
            this.startDemo(TransitionDemo);
        }, this);
        this._view.getChild("n4").addClickListener(function () {
            this.startDemo(VirtualListDemo);
        }, this);
        this._view.getChild("n5").addClickListener(function () {
            this.startDemo(LoopListDemo);
        }, this);
        this._view.getChild("n6").addClickListener(function () {
            this.startDemo(HitTestDemo);
        }, this);
        this._view.getChild("n7").addClickListener(function () {
            this.startDemo(PullToRefreshDemo);
        }, this);
        this._view.getChild("n8").addClickListener(function () {
            this.startDemo(ModalWaitingDemo);
        }, this);
        this._view.getChild("n9").addClickListener(function () {
            this.startDemo(JoystickDemo);
        }, this);
        this._view.getChild("n10").addClickListener(function () {
            this.startDemo(BagDemo);
        }, this);
        this._view.getChild("n11").addClickListener(function () {
            this.startDemo(ChatDemo);
        }, this);
        this._view.getChild("n12").addClickListener(function () {
            this.startDemo(ListEffectDemo);
        }, this);
        this._view.getChild("n13").addClickListener(function () {
            this.startDemo(ScrollPaneDemo);
        }, this);
        this._view.getChild("n14").addClickListener(function () {
            this.startDemo(TreeViewDemo);
        }, this);
        this._view.getChild("n15").addClickListener(function () {
            this.startDemo(GuideDemo);
        }, this);
        this._view.getChild("n16").addClickListener(function () {
            this.startDemo(CooldownDemo);
        }, this);
    }
    MainMenu.prototype.startDemo = function (demoClass) {
        this._view.dispose();
        var demo = new demoClass();
        demo.start().then(function () {
            fgui.GRoot.inst.dispatchEventWith("start_demo", false, demo);
        });
    };
    MainMenu.prototype.destroy = function () {
        this._view.dispose();
    };
    return MainMenu;
}());
__reflect(MainMenu.prototype, "MainMenu");
//# sourceMappingURL=MainMenu.js.map