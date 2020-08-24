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
var JoystickModule = (function (_super) {
    __extends(JoystickModule, _super);
    function JoystickModule(mainView) {
        var _this = _super.call(this) || this;
        _this._button = mainView.getChild("joystick").asButton;
        _this._button.changeStateOnClick = false;
        _this._thumb = _this._button.getChild("thumb");
        _this._touchArea = mainView.getChild("joystick_touch");
        _this._center = mainView.getChild("joystick_center");
        _this._InitX = _this._center.x + _this._center.width / 2;
        _this._InitY = _this._center.y + _this._center.height / 2;
        _this.touchId = -1;
        _this.radius = 150;
        _this._curPos = new egret.Point();
        _this._touchArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchDown, _this);
        return _this;
    }
    JoystickModule.prototype.Trigger = function (evt) {
        this.onTouchDown(evt);
    };
    JoystickModule.prototype.onTouchDown = function (evt) {
        if (this.touchId == -1) {
            this.touchId = evt.touchPointID;
            if (this._tweener != null) {
                this._tweener.setPaused(true);
                this._tweener = null;
            }
            fgui.GRoot.inst.globalToLocal(evt.stageX, evt.stageY, this._curPos);
            var bx = this._curPos.x;
            var by = this._curPos.y;
            this._button.selected = true;
            if (bx < 0)
                bx = 0;
            else if (bx > this._touchArea.width)
                bx = this._touchArea.width;
            if (by > fgui.GRoot.inst.height)
                by = fgui.GRoot.inst.height;
            else if (by < this._touchArea.y)
                by = this._touchArea.y;
            this._lastStageX = bx;
            this._lastStageY = by;
            this._startStageX = bx;
            this._startStageY = by;
            this._center.visible = true;
            this._center.x = bx - this._center.width / 2;
            this._center.y = by - this._center.height / 2;
            this._button.x = bx - this._button.width / 2;
            this._button.y = by - this._button.height / 2;
            var deltaX = bx - this._InitX;
            var deltaY = by - this._InitY;
            var degrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            this._thumb.rotation = degrees + 90;
            fgui.GRoot.inst.nativeStage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
            fgui.GRoot.inst.nativeStage.addEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchUp, this);
        }
    };
    JoystickModule.prototype.OnTouchUp = function (evt) {
        if (this.touchId != -1 && evt.touchPointID == this.touchId) {
            this.touchId = -1;
            this._thumb.rotation = this._thumb.rotation + 180;
            this._center.visible = false;
            this._tweener = egret.Tween.get(this._button)
                .to({ x: this._InitX - this._button.width / 2, y: this._InitY - this._button.height / 2 }, 300, egret.Ease.circOut)
                .call(function () {
                this._tweener = null;
                this._button.selected = false;
                this._thumb.rotation = 0;
                this._center.visible = true;
                this._center.x = this._InitX - this._center.width / 2;
                this._center.y = this._InitY - this._center.height / 2;
            }, this);
            fgui.GRoot.inst.nativeStage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnTouchMove, this);
            fgui.GRoot.inst.nativeStage.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnTouchUp, this);
            this.dispatchEventWith(JoystickModule.JoystickUp, false);
        }
    };
    JoystickModule.prototype.OnTouchMove = function (evt) {
        if (this.touchId != -1 && evt.touchPointID == this.touchId) {
            var bx = evt.stageX / fgui.GRoot.contentScaleFactor;
            var by = evt.stageY / fgui.GRoot.contentScaleFactor;
            var moveX = bx - this._lastStageX;
            var moveY = by - this._lastStageY;
            this._lastStageX = bx;
            this._lastStageY = by;
            var buttonX = this._button.x + moveX;
            var buttonY = this._button.y + moveY;
            var offsetX = buttonX + this._button.width / 2 - this._startStageX;
            var offsetY = buttonY + this._button.height / 2 - this._startStageY;
            var rad = Math.atan2(offsetY, offsetX);
            var degree = rad * 180 / Math.PI;
            this._thumb.rotation = degree + 90;
            var maxX = this.radius * Math.cos(rad);
            var maxY = this.radius * Math.sin(rad);
            if (Math.abs(offsetX) > Math.abs(maxX))
                offsetX = maxX;
            if (Math.abs(offsetY) > Math.abs(maxY))
                offsetY = maxY;
            buttonX = this._startStageX + offsetX;
            buttonY = this._startStageY + offsetY;
            if (buttonX < 0)
                buttonX = 0;
            if (buttonY > fgui.GRoot.inst.height)
                buttonY = fgui.GRoot.inst.height;
            this._button.x = buttonX - this._button.width / 2;
            this._button.y = buttonY - this._button.height / 2;
            this.dispatchEventWith(JoystickModule.JoystickMoving, false, degree);
        }
    };
    JoystickModule.JoystickMoving = "JoystickMoving";
    JoystickModule.JoystickUp = "JoystickUp";
    return JoystickModule;
}(egret.EventDispatcher));
__reflect(JoystickModule.prototype, "JoystickModule");
//# sourceMappingURL=JoystickModule.js.map