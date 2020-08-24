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
var EmojiParser = (function (_super) {
    __extends(EmojiParser, _super);
    function EmojiParser() {
        var _this = _super.call(this) || this;
        TAGS.forEach(function (element) {
            _this._handlers[":" + element] = _this.onTag_Emoji;
        });
        return _this;
    }
    EmojiParser.prototype.onTag_Emoji = function (tagName, end, attr) {
        return "<img src='" + fgui.UIPackage.getItemURL("Chat", tagName.substring(1).toLowerCase()) + "'/>";
    };
    return EmojiParser;
}(fgui.UBBParser));
__reflect(EmojiParser.prototype, "EmojiParser");
var TAGS = ["88", "am", "bs", "bz", "ch", "cool", "dhq", "dn", "fd", "gz", "han", "hx", "hxiao", "hxiu"];
//# sourceMappingURL=EmojiParser.js.map