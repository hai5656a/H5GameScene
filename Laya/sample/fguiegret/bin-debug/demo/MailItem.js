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
var MailItem = (function (_super) {
    __extends(MailItem, _super);
    function MailItem() {
        return _super.call(this) || this;
    }
    MailItem.prototype.onConstruct = function () {
        this._timeText = this.getChild("timeText").asTextField;
        this._readController = this.getController("IsRead");
        this._fetchController = this.getController("c1");
        this._trans = this.getTransition("t0");
    };
    MailItem.prototype.setTime = function (value) {
        this._timeText.text = value;
    };
    MailItem.prototype.setRead = function (value) {
        this._readController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.setFetched = function (value) {
        this._fetchController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.playEffect = function (delay) {
        this.visible = false;
        this._trans.play(null, null, null, 1, delay);
    };
    return MailItem;
}(fgui.GButton));
__reflect(MailItem.prototype, "MailItem");
//# sourceMappingURL=MailItem.js.map