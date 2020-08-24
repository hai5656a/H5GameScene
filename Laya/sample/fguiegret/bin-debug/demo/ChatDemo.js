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
var ChatDemo = (function () {
    function ChatDemo() {
    }
    ChatDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fgui.UIPackage.loadPackage("Chat")];
                    case 1:
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("Chat", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._messages = new Array();
                        this._emojiParser = new EmojiParser();
                        this._list = this._view.getChild("list").asList;
                        this._list.setVirtual();
                        this._list.itemProvider = this.getListItemResource;
                        this._list.itemRenderer = this.renderListItem;
                        this._list.callbackThisObj = this;
                        this._input = this._view.getChild("input1").asTextInput;
                        this._view.getChild("btnSend1").addClickListener(this.onClickSendBtn, this);
                        this._view.getChild("btnEmoji1").addClickListener(this.onClickEmojiBtn, this);
                        this._emojiSelectUI = fgui.UIPackage.createObject("Chat", "EmojiSelectUI").asCom;
                        this._emojiSelectUI.getChild("list").addEventListener(fgui.ItemEvent.CLICK, this.onClickEmoji, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatDemo.prototype.addMsg = function (sender, senderIcon, msg, fromMe) {
        var isScrollBottom = this._list.scrollPane.isBottomMost;
        var newMessage = {};
        newMessage.sender = sender;
        newMessage.senderIcon = senderIcon;
        newMessage.msg = msg;
        newMessage.fromMe = fromMe;
        this._messages.push(newMessage);
        if (newMessage.fromMe) {
            if (this._messages.length == 1 || Math.random() < 0.5) {
                var replyMessage = {};
                replyMessage.sender = "FairyGUI";
                replyMessage.senderIcon = "r1";
                replyMessage.msg = "Today is a good day. ";
                replyMessage.fromMe = false;
                this._messages.push(replyMessage);
            }
        }
        if (this._messages.length > 100)
            this._messages.splice(0, this._messages.length - 100);
        this._list.numItems = this._messages.length;
        if (isScrollBottom)
            this._list.scrollPane.scrollBottom();
    };
    ChatDemo.prototype.getListItemResource = function (index) {
        var msg = this._messages[index];
        if (msg.fromMe)
            return "ui://Chat/chatRight";
        else
            return "ui://Chat/chatLeft";
    };
    ChatDemo.prototype.renderListItem = function (index, item) {
        var msg = this._messages[index];
        if (!msg.fromMe)
            item.getChild("name").text = msg.sender;
        item.icon = fgui.UIPackage.getItemURL("Chat", msg.senderIcon);
        var txtObj = item.getChild("msg").asRichTextField;
        txtObj.width = txtObj.initWidth;
        txtObj.text = this._emojiParser.parse(msg.msg);
        if (txtObj.textWidth < txtObj.width)
            txtObj.width = txtObj.textWidth;
    };
    ChatDemo.prototype.onClickSendBtn = function () {
        var msg = this._input.text;
        if (!msg)
            return;
        this.addMsg("Creator", "r0", msg, true);
        this._input.text = "";
    };
    ChatDemo.prototype.onClickEmojiBtn = function (evt) {
        fgui.GRoot.inst.showPopup(this._emojiSelectUI, evt.currentTarget, false);
    };
    ChatDemo.prototype.onClickEmoji = function (evt) {
        this._input.text += "[:" + evt.itemObject.text + "]";
    };
    ChatDemo.prototype.onSubmit = function () {
        this.onClickSendBtn();
    };
    return ChatDemo;
}());
__reflect(ChatDemo.prototype, "ChatDemo");
//# sourceMappingURL=ChatDemo.js.map