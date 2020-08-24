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
var ScrollPaneHeader = (function (_super) {
    __extends(ScrollPaneHeader, _super);
    function ScrollPaneHeader() {
        return _super.call(this) || this;
    }
    ScrollPaneHeader.prototype.onConstruct = function () {
        this._c1 = this.getController("c1");
        this.addEventListener(fgui.GObject.SIZE_CHANGED, this.onSizeChanged, this);
    };
    ScrollPaneHeader.prototype.onSizeChanged = function () {
        if (this._c1.selectedIndex == 2 || this._c1.selectedIndex == 3)
            return;
        if (this.height > this.sourceHeight)
            this._c1.selectedIndex = 1;
        else
            this._c1.selectedIndex = 0;
    };
    Object.defineProperty(ScrollPaneHeader.prototype, "readyToRefresh", {
        get: function () {
            return this._c1.selectedIndex == 1;
        },
        enumerable: true,
        configurable: true
    });
    ScrollPaneHeader.prototype.setRefreshStatus = function (value) {
        this._c1.selectedIndex = value;
    };
    return ScrollPaneHeader;
}(fgui.GComponent));
__reflect(ScrollPaneHeader.prototype, "ScrollPaneHeader");
//# sourceMappingURL=ScrollPaneHeader.js.map