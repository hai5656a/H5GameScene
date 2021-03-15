(function () {
    'use strict';

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 1200;
    GameConfig.height = 800;
    GameConfig.scaleMode = "full";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class MainView extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "MainView"));
        }
        onConstruct() {
            this.m_webset = (this.getChildAt(0));
            this.m_btngo = (this.getChildAt(1));
            this.m_holder = (this.getChildAt(2));
            this.m_list = (this.getChildAt(3));
            this.m_document = (this.getChildAt(4));
            this.m_insp = (this.getChildAt(5));
        }
    }
    MainView.URL = "ui://2pshu6oimlmb1nry31w";

    class FObjectType {
    }
    FObjectType.PACKAGE = "package";
    FObjectType.FOLDER = "folder";
    FObjectType.IMAGE = "image";
    FObjectType.GRAPH = "graph";
    FObjectType.LIST = "list";
    FObjectType.TREE = "tree";
    FObjectType.LOADER = "loader";
    FObjectType.TEXT = "text";
    FObjectType.RICHTEXT = "richtext";
    FObjectType.INPUTTEXT = "inputtext";
    FObjectType.GROUP = "group";
    FObjectType.SWF = "swf";
    FObjectType.MOVIECLIP = "movieclip";
    FObjectType.COMPONENT = "component";
    FObjectType.EXT_BUTTON = "Button";
    FObjectType.EXT_LABEL = "Label";
    FObjectType.EXT_COMBOBOX = "ComboBox";
    FObjectType.EXT_PROGRESS_BAR = "ProgressBar";
    FObjectType.EXT_SLIDER = "Slider";
    FObjectType.EXT_SCROLLBAR = "ScrollBar";
    FObjectType.SPRITE = "sprite";
    FObjectType.SPRITE3D = "sprite3D";
    FObjectType.NAME_PREFIX = {
        image: "img",
        graph: "graph",
        list: "list",
        loader: "loader",
        text: "txt",
        richtext: "txt",
        group: "group",
        swf: "swf",
        movieclip: "mc",
        component: "comp",
        Button: "btn",
        Label: "label",
        ComboBox: "combo",
        ProgressBar: "progress",
        Slider: "slider",
        ScrollBar: "scrollbar"
    };

    class FPackageItemType {
    }
    FPackageItemType.FOLDER = "folder";
    FPackageItemType.IMAGE = "image";
    FPackageItemType.SWF = "swf";
    FPackageItemType.MOVIECLIP = "movieclip";
    FPackageItemType.SOUND = "sound";
    FPackageItemType.COMPONENT = "component";
    FPackageItemType.FONT = "font";
    FPackageItemType.MISC = "misc";
    FPackageItemType.ATLAS = "atlas";
    FPackageItemType.fileExtensionMap = {
        jpg: FPackageItemType.IMAGE,
        jpeg: FPackageItemType.IMAGE,
        png: FPackageItemType.IMAGE,
        psd: FPackageItemType.IMAGE,
        tga: FPackageItemType.IMAGE,
        svg: FPackageItemType.IMAGE,
        plist: FPackageItemType.MOVIECLIP,
        eas: FPackageItemType.MOVIECLIP,
        jta: FPackageItemType.MOVIECLIP,
        gif: FPackageItemType.MOVIECLIP,
        wav: FPackageItemType.SOUND,
        mp3: FPackageItemType.SOUND,
        ogg: FPackageItemType.SOUND,
        fnt: FPackageItemType.FONT,
        swf: FPackageItemType.SWF,
        xml: FPackageItemType.COMPONENT
    };

    var TreeType;
    (function (TreeType) {
        TreeType["Laya"] = "Laya";
        TreeType["Egret"] = "Egret";
        TreeType["CC"] = "Cocos Creator";
        TreeType["FGUI"] = "FariyGui";
    })(TreeType || (TreeType = {}));
    class Consts {
        static get rectColorStr() {
            return "#" + Consts.rectColor.toString(16);
        }
        static init() {
            Consts.icons[FObjectType.FOLDER] = fairygui.UIPackage.getItemURL("Builder", "icon_folder");
            Consts.icons["folder_open"] = fgui.UIPackage.getItemURL("Builder", "icon_folder_open");
            Consts.icons[FObjectType.PACKAGE] = fgui.UIPackage.getItemURL("Builder", "icon_package");
            Consts.icons["package_open"] = fgui.UIPackage.getItemURL("Builder", "icon_package_open");
            Consts.icons[FObjectType.TREE] = fgui.UIPackage.getItemURL("Builder", "icon_branch");
            Consts.icons[FPackageItemType.SOUND] = fgui.UIPackage.getItemURL("Builder", "icon_sound");
            Consts.icons[FPackageItemType.FONT] = fgui.UIPackage.getItemURL("Builder", "icon_font");
            Consts.icons[FPackageItemType.MISC] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
            Consts.icons[FObjectType.IMAGE] = fgui.UIPackage.getItemURL("Builder", "icon_image");
            Consts.icons[FObjectType.GRAPH] = fgui.UIPackage.getItemURL("Builder", "icon_graph");
            Consts.icons[FObjectType.LIST] = fgui.UIPackage.getItemURL("Builder", "icon_list");
            Consts.icons[FObjectType.LOADER] = fgui.UIPackage.getItemURL("Builder", "icon_loader");
            Consts.icons[FObjectType.TEXT] = fgui.UIPackage.getItemURL("Builder", "icon_text");
            Consts.icons[FObjectType.RICHTEXT] = fgui.UIPackage.getItemURL("Builder", "icon_richtext");
            Consts.icons[FObjectType.RICHTEXT] = fgui.UIPackage.getItemURL("Builder", "icon_inputtext");
            Consts.icons[FObjectType.COMPONENT] = fgui.UIPackage.getItemURL("Builder", "icon_component");
            Consts.icons[FObjectType.SWF] = fgui.UIPackage.getItemURL("Builder", "icon_swf");
            Consts.icons[FObjectType.MOVIECLIP] = fgui.UIPackage.getItemURL("Builder", "icon_movieclip");
            Consts.icons[FObjectType.GROUP] = fgui.UIPackage.getItemURL("Builder", "icon_group");
            Consts.icons[FObjectType.EXT_BUTTON] = fgui.UIPackage.getItemURL("Builder", "icon_button");
            Consts.icons[FObjectType.EXT_LABEL] = fgui.UIPackage.getItemURL("Builder", "icon_label");
            Consts.icons[FObjectType.EXT_COMBOBOX] = fgui.UIPackage.getItemURL("Builder", "icon_combobox");
            Consts.icons[FObjectType.EXT_SLIDER] = fgui.UIPackage.getItemURL("Builder", "icon_slider");
            Consts.icons[FObjectType.EXT_PROGRESS_BAR] = fgui.UIPackage.getItemURL("Builder", "icon_progressbar");
            Consts.icons[FObjectType.EXT_SCROLLBAR] = fgui.UIPackage.getItemURL("Builder", "icon_scrollbar");
            Consts.icons[FObjectType.SPRITE] = fgui.UIPackage.getItemURL("Builder", "icon_Sprite");
            Consts.icons[FObjectType.SPRITE3D] = fgui.UIPackage.getItemURL("Builder", "icon_loader3D");
            Consts.icons["GObject"] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
        }
        static getClassName(obj) {
            if (obj && obj.constructor && obj.constructor.toString()) {
                if (obj.constructor.name) {
                    return obj.constructor.name;
                }
                let str = obj.constructor.toString();
                let arr;
                if (str.charAt(0) == '[') {
                    arr = str.match(/\w+\s∗(\w+)/);
                }
                else {
                    arr = str.match(/function\s*(\w+)/);
                }
                if (arr && arr.length == 2) {
                    return arr[1];
                }
            }
            return "";
        }
        static GetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        }
    }
    Consts.icons = {};
    Consts.EditorLineName = "$$EditorLine";
    Consts.EditorNodeName = "$$Node";
    Consts.rectLineSize = 4;
    Consts.rectColor = 0x1F66D1;
    Consts.rectFill = 0;

    class EditorEvent {
        static hasListener(type) {
            return EditorEvent.EventDispatcher.hasListener(type);
        }
        static event(type, data) {
            return EditorEvent.EventDispatcher.event(type, data);
        }
        static on(type, caller, listener, args) {
            return EditorEvent.EventDispatcher.on(type, caller, listener, args);
        }
        static once(type, caller, listener, args) {
            return EditorEvent.EventDispatcher.once(type, caller, listener, args);
        }
        static off(type, caller, listener, onceOnly) {
            return EditorEvent.EventDispatcher.off(type, caller, listener, onceOnly);
        }
        static offAll(type) {
            return EditorEvent.EventDispatcher.offAll(type);
        }
        static offAllCaller(caller) {
            return EditorEvent.EventDispatcher.offAllCaller(caller);
        }
    }
    EditorEvent.SelectionChanged = "SelectionChanged";
    EditorEvent.Selection = "Selection";
    EditorEvent.TreeChanged = "TreeChanged";
    EditorEvent.TreeTypeDataChanged = "TreeTypeDataChanged";
    EditorEvent.TreeTypeChanged = "TreeTypeChanged";
    EditorEvent.ClickChanged = "ClickChanged";
    EditorEvent.EventDispatcher = new Laya.EventDispatcher();

    class DisplayTreeUI {
        constructor(view) {
            this.view = view;
            this.view.m_treeView.treeNodeRender = Laya.Handler.create(this, this.renderTreeNode, null, false);
            this.view.m_treeView.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            this.view.m_btnRefresh.onClick(this, this.onRefresh);
            this.view.m_btnCollapseAll.onClick(this, this.onCollapseAll);
            this.view.m_group.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
            EditorEvent.on(EditorEvent.Selection, this, this.selectTree);
            EditorEvent.on(EditorEvent.TreeChanged, this, this.onRefresh);
            EditorEvent.on(EditorEvent.TreeTypeDataChanged, this, this.onTreeType);
        }
        initTree() {
            if (!Consts.displayList || !Consts.displayList.root)
                return;
            this.isExpand = false;
            this.view.m_btnCollapseAll.tooltips = "全部展开";
            this.view.m_treeView.numItems = 0;
            Consts.displayList.refreshList(this.view.m_treeView.rootNode);
            this.selectItem = null;
            EditorEvent.event(EditorEvent.SelectionChanged, null);
        }
        selectTree(item) {
            if (item && item[Consts.EditorNodeName]) {
                let itemNode = item[Consts.EditorNodeName];
                this.view.m_treeView.selectNode(itemNode, true);
                EditorEvent.event(EditorEvent.SelectionChanged, itemNode.data);
            }
        }
        renderTreeNode(node, obj) {
            let gobj = node.data;
            obj.text = Consts.displayList.getDisPlayName(gobj);
            obj.icon = Consts.displayList.getDisPlayIcon(gobj);
            obj.alpha = Consts.displayList.isVisable(gobj) ? 1 : 0.5;
        }
        onClickItem(item) {
            this.selectItem = item;
            if (item.treeNode && item.treeNode.data) {
                if (!Consts.displayList.isShow(item.treeNode.data)) {
                    alert("对象已不显示，请刷新列表");
                    return;
                }
                EditorEvent.event(EditorEvent.SelectionChanged, item.treeNode.data);
            }
        }
        onRefresh() {
            this.initTree();
        }
        onCollapseAll() {
            if (!this.isExpand) {
                this.isExpand = true;
                this.view.m_btnCollapseAll.tooltips = "全部折叠";
                this.view.m_treeView.expandAll();
            }
            else {
                this.isExpand = false;
                this.view.m_btnCollapseAll.tooltips = "全部展开";
                this.view.m_treeView.collapseAll();
            }
        }
        onTreeType(selectedIndex) {
            this.view.m_group.visible = true;
            this.view.m_group.items = Consts.treeTypeList;
            this.view.m_group.selectedIndex = selectedIndex;
        }
        changeType() {
            EditorEvent.event(EditorEvent.TreeTypeChanged, Consts.treeTypeList[this.view.m_group.selectedIndex]);
        }
    }

    class LayaEngine {
        constructor() {
            this.type = TreeType.Laya;
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new LayaEngine();
            }
            return this.i;
        }
        start(game) {
            this.engine = game;
        }
        end() {
            if (this.isShowfps)
                this.onFPS();
            this.removeSelectModel();
            this.engine = null;
            this.removeRect();
        }
        createRectGraph() {
            if (this.rect) {
                this.rect.destroy(true);
            }
            let line = this.rect = new this.engine.Sprite();
            line.name = Consts.EditorLineName;
            line.mouseEnabled = false;
        }
        showRect(x, y, w, h) {
            if (!this.rect || this.rect.destroyed) {
                this.createRectGraph();
            }
            this.rect.visible = true;
            let color = Consts.rectColorStr;
            this.rect.graphics.clear();
            if (w >= 0 && h >= 0) {
                this.rect.graphics.drawRect(0, 0, w, h, null, color, Consts.rectLineSize);
            }
            else {
                this.rect.graphics.drawLine(-20, 0, 20, 0, color, Consts.rectLineSize);
                this.rect.graphics.drawLine(0, -20, 0, 20, color, Consts.rectLineSize);
            }
            this.rect.x = x;
            this.rect.y = y;
            this.rect.visible = true;
            if (this.rect.parent) {
                this.rect.parent.setChildIndex(this.rect, this.rect.parent.numChildren - 1);
            }
            else {
                this.engine.stage.addChild(this.rect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.visible = false;
        }
        removeRect() {
            if (this.rect)
                this.rect.destroy(true);
            this.rect = null;
        }
        addSelectModel() {
            this.engine.MouseManager.enabled = false;
            this.touchHander = this.onMouseDown.bind(this);
            this.engine.Render.canvas.addEventListener('mousedown', this.touchHander);
        }
        onMouseDown(evt) {
            let mouseManager = this.engine.MouseManager.instance;
            mouseManager.initEvent(evt);
            if (mouseManager.check) {
                mouseManager.check(mouseManager._stage, mouseManager.mouseX, mouseManager.mouseY, () => {
                    if (mouseManager._target) {
                        let comp = mouseManager._target;
                        EditorEvent.event(EditorEvent.Selection, comp);
                    }
                });
            }
            else if (mouseManager._checkAllBaseUI) {
                mouseManager._checkAllBaseUI(mouseManager.mouseX, mouseManager.mouseY, () => {
                    if (mouseManager._target) {
                        let comp = mouseManager._target;
                        EditorEvent.event(EditorEvent.Selection, comp);
                    }
                });
            }
        }
        removeSelectModel() {
            if (this.engine) {
                this.engine.MouseManager.enabled = true;
                if (this.touchHander) {
                    this.engine.Render.canvas.removeEventListener('mousedown', this.touchHander);
                }
            }
        }
        onFPS() {
            if (!this.engine)
                return;
            if (this.isShowfps) {
                this.engine.Stat.hide();
                this.isShowfps = false;
            }
            else {
                this.isShowfps = true;
                this.engine.Stat.show();
            }
        }
        onPause() {
            if (!this.engine)
                return;
            if (this.engine.timer.scale == 0) {
                this.engine.timer.scale = 1;
            }
            else
                this.engine.timer.scale = 0;
        }
        checkFGUIVisible(gobj) {
            return gobj._displayObject && gobj.internalVisible && gobj.internalVisible2;
        }
    }

    class EgretEngine {
        constructor() {
            this.type = TreeType.Egret;
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new EgretEngine();
            }
            return this.i;
        }
        start(game) {
            this.engine = game;
        }
        end() {
            if (this.isShowfps)
                this.onFPS();
            this.removeSelectModel();
            this.engine = null;
            this.removeRect();
        }
        createRectGraph() {
            if (this.rect && this.rect.parent) {
                this.rect.parent.removeChild(this.rect);
            }
            let line = this.rect = new this.engine.Sprite();
            line.name = Consts.EditorLineName;
            line.touchEnabled = false;
        }
        showRect(x, y, w, h) {
            if (!this.rect) {
                this.createRectGraph();
            }
            this.rect.visible = true;
            let ctx = this.rect.graphics;
            ctx.clear();
            ctx.lineStyle(Consts.rectLineSize, Consts.rectColor, 1);
            ctx.beginFill(Consts.rectColor, Consts.rectFill);
            ctx.drawRect(0, 0, w, h);
            ctx.endFill();
            this.rect.x = x;
            this.rect.y = y;
            if (this.rect.parent) {
                this.rect.parent.setChildIndex(this.rect, this.rect.parent.numChildren - 1);
            }
            else {
                this.engine.lifecycle.stage.addChild(this.rect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.visible = false;
        }
        removeRect() {
            if (this.rect && this.rect.parent)
                this.rect.parent.removeChild(this.rect);
            this.rect = null;
        }
        addSelectModel() {
            var containerList = Consts.gameWindow.document.querySelectorAll(".egret-player");
            var length = containerList.length;
            if (length > 0) {
                var container = containerList[0];
                this.player = container["egret-player"];
                this.touchHander = this.onMouseDown.bind(this);
                this.player.canvas.addEventListener('mousedown', this.touchHander);
                this.player.webTouchHandler = this.player.webTouchHandler;
                this.player.webTouchHandler.touch.maxTouches = 0;
            }
        }
        onMouseDown(event) {
            var location = this.player.webTouchHandler.getLocation(event);
            var target = this.engine.lifecycle.stage.$hitTest(location.x, location.y);
            if (target) {
                let comp = target;
                EditorEvent.event(EditorEvent.Selection, comp);
            }
        }
        removeSelectModel() {
            if (this.touchHander && this.player) {
                this.player.canvas.removeEventListener('mousedown', this.touchHander);
                this.player.webTouchHandler.touch.maxTouches = 1;
                this.player = null;
            }
        }
        onFPS() {
            if (!this.engine || !Consts.gameWindow)
                return;
            let panel = Consts.gameWindow.document.getElementById('egret-fps-panel');
            if (panel) {
                if (this.isShowfps) {
                    panel.style.visibility = "hidden";
                    this.isShowfps = false;
                }
                else {
                    panel.style.visibility = "visible";
                    this.isShowfps = true;
                }
            }
            else {
                var containerList = Consts.gameWindow.document.querySelectorAll(".egret-player");
                var length = containerList.length;
                if (length > 0) {
                    var container = containerList[0];
                    let player = container["egret-player"];
                    player.player.displayFPS(true, false, "", "");
                    this.isShowfps = true;
                }
            }
        }
        onPause() {
            if (!this.engine)
                return;
            if (this.engine.ticker.isPaused) {
                this.engine.ticker.resume();
            }
            else {
                this.engine.ticker.pause();
            }
            ;
        }
        checkFGUIVisible(gobj) {
            return gobj.internalVisible && gobj.internalVisible2;
        }
    }

    class CCEngine {
        constructor() {
            this.type = TreeType.CC;
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new CCEngine();
            }
            return this.i;
        }
        start(game) {
            this.engine = game;
        }
        end() {
            this.removeSelectModel();
            this.engine = null;
            this.removeRect();
        }
        createRectGraph() {
            if (this.rect) {
                this.rect.removeFromParent();
                this.rect.destroy();
            }
            this.rect = new this.engine.Node();
            this.rect.name = Consts.EditorLineName;
            let line = this._content = this.rect.addComponent(this.engine.Graphics);
            let color = Consts.rectColorStr;
            let c = new this.engine.Color(0, 0, 0, 255);
            c.fromHEX(color);
            let c2 = new this.engine.Color(0, 0, 0, 255);
            c2.fromHEX(color);
            c2.setA(255 * Consts.rectFill);
            line.clear();
            line.lineWidth = Consts.rectLineSize;
            line.strokeColor = c;
            line.fillColor = c2;
            this.fillColor = c2;
            line.name = Consts.EditorLineName;
        }
        createfguiRectGraph() {
            if (this.fguirect) {
                this.fguirect.removeFromParent();
                this.fguirect.dispose();
            }
            let line = this.fguirect = new Consts.displayList.displayModule.GGraph();
            let color = Consts.rectColorStr;
            let c = new this.engine.Color(0, 0, 0, 255);
            c.fromHEX(color);
            let c2 = new this.engine.Color(0, 0, 0, 255);
            c2.fromHEX(color);
            c2.setA(255 * Consts.rectFill);
            line.drawRect(Consts.rectLineSize, c, c2);
            this.fillColor = c2;
            this.rectNode = line.node;
            line.name = Consts.EditorLineName;
            line.touchable = false;
        }
        showRect(x, y, w, h) {
            if (Consts.nowTreeType == TreeType.CC) {
                if (!this.rect) {
                    this.createRectGraph();
                }
                this.rect.active = true;
                var ls = Consts.rectLineSize / 2;
                this._content.clear();
                this._content.rect(ls, ls, w - Consts.rectLineSize, h - Consts.rectLineSize);
                var node = this.engine.director.getScene();
                var local = node.convertToNodeSpace(new Consts.displayList.displayModule.Vec2(x, y));
                this.rect.x = local.x;
                this.rect.y = local.y;
                this.rect.active = true;
                if (ls != 0)
                    this._content.stroke();
                if (this.fillColor.a != 0)
                    this._content.fill();
                if (this.rect.parent) {
                    this.rect.setSiblingIndex(this.rect.parent.childrenCount - 1);
                }
                else {
                    var node = this.engine.director.getScene();
                    node.addChild(this.rect);
                }
            }
            else if (Consts.nowTreeType == TreeType.FGUI) {
                if (!this.fguirect) {
                    this.createfguiRectGraph();
                }
                this.fguirect.visible = true;
                this.fguirect.setSize(w, h);
                if (this.fguirect.parent) {
                    this.fguirect.parent.setChildIndex(this.fguirect, this.fguirect.parent.numChildren - 1);
                }
                else {
                    Consts.displayList.root.addChild(this.fguirect);
                }
                let p = this.fguirect.parent.globalToLocal(x, y);
                this.fguirect.x = p.x;
                this.fguirect.y = p.y;
                console.log(this.fguirect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.active = false;
            if (this.fguirect && this.fguirect["_node"])
                this.fguirect.visible = false;
        }
        removeRect() {
            if (this.rect)
                this.rect.destroy();
            this.rect = null;
            if (this.fguirect)
                this.fguirect.dispose();
            this.fguirect = null;
        }
        addSelectModel() {
            this.touchHander = this.onMouseDown.bind(this);
            this.engine.game.canvas.addEventListener('mousedown', this.touchHander);
            let evt;
            if (this.engine.internal) {
                evt = this.engine.internal.eventManager;
            }
            else if (this.engine.eventManager) {
                evt = this.engine.eventManager;
            }
            if (evt) {
                evt._isEnabled = false;
            }
        }
        hitTestScene(pos) {
            var node = this.engine.director.getScene();
            this.target = null;
            for (let i = 0; i < node.children.length; i++) {
                this.hitTest(node.children[i], pos);
            }
        }
        hitTest(node, pos) {
            if (node.active && node != this.rectNode && node != this.rect && !node.mouseThrough) {
                if (node._hitTest(pos)) {
                    this.target = node;
                }
                for (let i = 0; i < node.children.length; i++) {
                    this.hitTest(node.children[i], pos);
                }
            }
        }
        onMouseDown(event) {
            let selfPointer;
            if (this.engine.internal)
                selfPointer = this.engine.internal.inputManager;
            else if (this.engine.inputManager)
                selfPointer = this.engine.inputManager;
            else if (Consts.gameWindow["_cc"])
                selfPointer = Consts.gameWindow["_cc"].inputManager;
            if (!selfPointer)
                return;
            var canvasBoundingRect = selfPointer._canvasBoundingRect;
            var location = selfPointer.getPointByEvent(event, canvasBoundingRect);
            var EventMouse = this.engine.Event.EventMouse;
            var mouseEvent = selfPointer.getMouseEvent(location, canvasBoundingRect, EventMouse.DOWN);
            mouseEvent.setButton(event.button);
            var pos = mouseEvent.getLocation();
            this.hitTestScene(pos);
            if (this.target) {
                let comp = this.target;
                EditorEvent.event(EditorEvent.Selection, comp);
            }
            event.stopPropagation();
            event.preventDefault();
        }
        removeSelectModel() {
            if (this.engine) {
                let evt;
                if (this.engine.internal) {
                    evt = this.engine.internal.eventManager;
                }
                else if (this.engine.eventManager) {
                    evt = this.engine.eventManager;
                }
                if (evt) {
                    evt._isEnabled = true;
                }
                if (this.touchHander) {
                    this.engine.game.canvas.removeEventListener('mousedown', this.touchHander);
                }
            }
        }
        onFPS() {
            if (!this.engine)
                return;
            var show = !this.engine.debug.isDisplayStats();
            this.engine.debug.setDisplayStats(show);
        }
        onPause() {
            if (!this.engine)
                return;
            var shouldPause = !this.engine.game.isPaused();
            if (shouldPause) {
                this.engine.game.pause();
            }
            else {
                this.engine.game.resume();
            }
        }
        checkFGUIVisible(gobj) {
            return gobj._finalVisible;
        }
    }

    class FGUIManager {
        static getInstance() {
            if (this.i == null) {
                this.i = new FGUIManager();
            }
            return this.i;
        }
        start(root, m) {
            this.root = root;
            this.displayModule = m;
            Consts.nowTreeType = TreeType.FGUI;
        }
        ;
        end() {
            this.root = null;
            this.displayModule = null;
        }
        ;
        refreshList(parent) {
            if (this.root) {
                this.createDisplay(this.root, parent);
            }
        }
        createDisplay(item, parent) {
            if (item.name == Consts.EditorLineName)
                return;
            let node = this.createNode(item);
            if (node)
                parent.addChild(node);
            if (item.asCom.numChildren > 0) {
                this.createChildren(item.asCom._children, node);
            }
        }
        createChildren(items, parent) {
            for (var i = 0; i < items.length; i++) {
                this.createDisplay(items[i], parent);
            }
        }
        createNode(item) {
            let node = new fgui.GTreeNode(item.numChildren > 0);
            node.data = item;
            let target = item._node ? item._node : item._displayObject;
            if (target) {
                target[Consts.EditorNodeName] = node;
                return node;
            }
        }
        isShow(obj) {
            return obj == this.root || obj.parent;
        }
        isVisable(obj) {
            return Consts.engineManager.checkFGUIVisible(obj);
        }
        getDisPlayName(gobj) {
            let cname = Consts.getClassName(gobj);
            if (cname) {
                cname = gobj.name + "(" + cname + ")";
            }
            else
                cname = gobj.name;
            return cname;
        }
        getDisPlayRect(item) {
            let p = item.localToGlobal(0, 0);
            let pr = item.localToGlobal(item.width, item.height);
            let x = p.x;
            let y = p.y;
            let width = pr.x - p.x;
            let height = pr.y - p.y;
            return [x, y, width, height];
        }
        getDisPlayIcon(obj) {
            let gamefgui = this.displayModule;
            if (obj instanceof gamefgui.GMovieClip) {
                return Consts.icons[FObjectType.MOVIECLIP];
            }
            if (obj instanceof gamefgui.GImage) {
                return Consts.icons[FObjectType.IMAGE];
            }
            if (obj instanceof gamefgui.GComboBox) {
                return Consts.icons[FObjectType.EXT_COMBOBOX];
            }
            if (obj instanceof gamefgui.GSlider) {
                return Consts.icons[FObjectType.EXT_SLIDER];
            }
            if (obj instanceof gamefgui.GGroup) {
                return Consts.icons[FObjectType.GROUP];
            }
            if (obj instanceof gamefgui.GGraph) {
                return Consts.icons[FObjectType.GRAPH];
            }
            if (gamefgui.GTree && obj instanceof gamefgui.GTree) {
                return Consts.icons[FObjectType.TREE];
            }
            if (obj instanceof gamefgui.GList) {
                return Consts.icons[FObjectType.LIST];
            }
            if (obj instanceof gamefgui.GLoader) {
                return Consts.icons[FObjectType.LOADER];
            }
            if (obj instanceof gamefgui.GTextInput) {
                return Consts.icons[FObjectType.INPUTTEXT];
            }
            if (obj instanceof gamefgui.GRichTextField) {
                return Consts.icons[FObjectType.RICHTEXT];
            }
            if (obj instanceof gamefgui.GTextField) {
                return Consts.icons[FObjectType.TEXT];
            }
            if (obj instanceof gamefgui.GProgressBar) {
                return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
            }
            if (obj instanceof gamefgui.GLabel) {
                return Consts.icons[FObjectType.EXT_LABEL];
            }
            if (obj instanceof gamefgui.GButton) {
                return Consts.icons[FObjectType.EXT_BUTTON];
            }
            if (obj instanceof gamefgui.GComponent) {
                return Consts.icons[FObjectType.COMPONENT];
            }
            return Consts.icons["GObject"];
        }
    }

    class LayaManager {
        static getInstance() {
            if (this.i == null) {
                this.i = new LayaManager();
            }
            return this.i;
        }
        start(root, m) {
            this.root = root;
            this.displayModule = m;
            Consts.nowTreeType = TreeType.Laya;
        }
        ;
        end() {
            this.root = null;
            this.displayModule = null;
        }
        ;
        refreshList(parent) {
            if (this.root) {
                this.createDisplay(this.root, parent);
            }
        }
        createDisplay(item, parent) {
            if (item.name == Consts.EditorLineName)
                return;
            let node = this.createNode(item);
            parent.addChild(node);
            if (item.active && this.displayModule.Camera && item instanceof this.displayModule.Camera) {
                this.camera = item;
            }
            let children = item._childs ? item._childs : item._children;
            if (children && children.length > 0) {
                this.createChildren(children, node);
            }
        }
        createChildren(items, parent) {
            for (var i = 0; i < items.length; i++) {
                this.createDisplay(items[i], parent);
            }
        }
        createNode(item) {
            let node = new fgui.GTreeNode(item.numChildren > 0);
            node.data = item;
            item[Consts.EditorNodeName] = node;
            return node;
        }
        isShow(obj) {
            return obj == this.root || obj.parent;
        }
        isVisable(item) {
            let gameModule = this.displayModule;
            if (gameModule.Sprite && item instanceof gameModule.Sprite) {
                return item.visible;
            }
            else {
                return item.active;
            }
        }
        getDisPlayName(gobj) {
            let cname = Consts.getClassName(gobj);
            if (cname) {
                cname = gobj.name + "(" + cname + ")";
            }
            else
                cname = gobj.name;
            return cname;
        }
        getDisPlayRect(item) {
            let gameLaya = this.displayModule;
            if (gameLaya.Sprite && item instanceof gameLaya.Sprite) {
                let p = item.localToGlobal(new gameLaya.Point(0, 0));
                let pr = item.localToGlobal(new gameLaya.Point(item.width, item.height));
                let x = p.x;
                let y = p.y;
                let width = pr.x - p.x;
                let height = pr.y - p.y;
                return [x, y, width, height];
            }
            else if (gameLaya.Sprite3D && item instanceof gameLaya.Sprite3D) {
                let t = item.transform;
                let camera = this.camera;
                if (camera) {
                    let outPos = new gameLaya.Vector4();
                    camera.viewport.project(t.position, camera.projectionViewMatrix, outPos);
                    return [outPos.x / gameLaya.stage.clientScaleX, outPos.y / gameLaya.stage.clientScaleY, -1, -1];
                }
                else {
                    return [0, 0, 0, 0];
                }
            }
        }
        getDisPlayIcon(obj) {
            let gameLaya = this.displayModule;
            if (gameLaya.Clip && obj instanceof gameLaya.Clip) {
                return Consts.icons[FObjectType.MOVIECLIP];
            }
            if (gameLaya.Image && obj instanceof gameLaya.Image) {
                return Consts.icons[FObjectType.IMAGE];
            }
            if (gameLaya.ComboBox && obj instanceof gameLaya.ComboBox) {
                return Consts.icons[FObjectType.EXT_COMBOBOX];
            }
            if (gameLaya.Slider && obj instanceof gameLaya.Slider) {
                return Consts.icons[FObjectType.EXT_SLIDER];
            }
            if (gameLaya.Tree && obj instanceof gameLaya.Tree) {
                return Consts.icons[FObjectType.TREE];
            }
            if (gameLaya.List && obj instanceof gameLaya.List) {
                return Consts.icons[FObjectType.LIST];
            }
            if (gameLaya.TextInput && obj instanceof gameLaya.TextInput) {
                return Consts.icons[FObjectType.INPUTTEXT];
            }
            if (gameLaya.ProgressBar && obj instanceof gameLaya.ProgressBar) {
                return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
            }
            if (gameLaya.Label && obj instanceof gameLaya.Label) {
                return Consts.icons[FObjectType.EXT_LABEL];
            }
            if (gameLaya.Button && obj instanceof gameLaya.Button) {
                return Consts.icons[FObjectType.EXT_BUTTON];
            }
            if (gameLaya.Panel && obj instanceof gameLaya.Panel) {
                return Consts.icons[FObjectType.COMPONENT];
            }
            if (obj instanceof gameLaya.Sprite) {
                return Consts.icons[FObjectType.SPRITE];
            }
            if (gameLaya.Sprite3D && obj instanceof gameLaya.Sprite3D) {
                return Consts.icons[FObjectType.SPRITE3D];
            }
            return Consts.icons["GObject"];
        }
    }

    class CCManager {
        static getInstance() {
            if (this.i == null) {
                this.i = new CCManager();
            }
            return this.i;
        }
        start(root, m) {
            this.root = root;
            this.displayModule = m;
            Consts.nowTreeType = TreeType.CC;
        }
        ;
        end() {
            this.root = null;
            this.displayModule = null;
        }
        ;
        refreshList(parent) {
            if (this.root) {
                this.createDisplay(this.root, parent);
            }
        }
        createDisplay(item, parent) {
            if (item.name == Consts.EditorLineName)
                return;
            let node = this.createNode(item);
            if (node)
                parent.addChild(node);
            if (item.childrenCount > 0) {
                this.createChildren(item.children, node);
            }
        }
        createChildren(items, parent) {
            for (var i = 0; i < items.length; i++) {
                this.createDisplay(items[i], parent);
            }
        }
        createNode(item) {
            let node = new fgui.GTreeNode(item.childrenCount > 0);
            node.data = item;
            item[Consts.EditorNodeName] = node;
            return node;
        }
        isShow(obj) {
            return obj == this.root || obj.parent;
        }
        isVisable(item) {
            return item == this.root || item.active;
        }
        getDisPlayName(gobj) {
            let cname = Consts.getClassName(gobj);
            if (cname) {
                cname = gobj.name + "(" + cname + ")";
            }
            else
                cname = gobj.name;
            return cname;
        }
        getDisPlayRect(item) {
            let p = item.convertToWorldSpace(new this.displayModule.Vec2(0, 0));
            let pr = item.convertToWorldSpace(new this.displayModule.Vec2(item.width, item.height));
            let x = p.x;
            let y = p.y;
            let width = pr.x - p.x;
            let height = pr.y - p.y;
            return [x, y, width, height];
        }
        getDisPlayIcon(obj) {
            let gamecc = this.displayModule;
            return Consts.icons["GObject"];
        }
    }

    class EgretManager {
        static getInstance() {
            if (this.i == null) {
                this.i = new EgretManager();
            }
            return this.i;
        }
        start(root, m) {
            this.root = root;
            this.displayModule = m;
            Consts.nowTreeType = TreeType.Egret;
        }
        ;
        end() {
            this.root = null;
            this.displayModule = null;
        }
        ;
        refreshList(parent) {
            if (this.root) {
                this.createDisplay(this.root, parent);
            }
        }
        createDisplay(item, parent) {
            if (item.name == Consts.EditorLineName)
                return;
            let node = this.createNode(item);
            parent.addChild(node);
            let children = item.$children;
            if (children && children.length > 0) {
                this.createChildren(children, node);
            }
        }
        createChildren(items, parent) {
            for (var i = 0; i < items.length; i++) {
                this.createDisplay(items[i], parent);
            }
        }
        createNode(item) {
            let node = new fgui.GTreeNode(item.numChildren > 0);
            node.data = item;
            item[Consts.EditorNodeName] = node;
            return node;
        }
        isShow(obj) {
            return obj == this.root || obj.parent;
        }
        isVisable(item) {
            return item.visible;
        }
        getDisPlayName(gobj) {
            let cname = Consts.getClassName(gobj);
            if (cname) {
                cname = gobj.name + "(" + cname + ")";
            }
            else
                cname = gobj.name;
            return cname;
        }
        getDisPlayRect(item) {
            let gameEgret = this.displayModule;
            let p = item.localToGlobal(0, 0);
            let pr = item.localToGlobal(item.width, item.height);
            let x = p.x;
            let y = p.y;
            let width = pr.x - p.x;
            let height = pr.y - p.y;
            return [x, y, width, height];
        }
        getDisPlayIcon(obj) {
            let gameEgret = this.displayModule;
            if (gameEgret.MovieClip && obj instanceof gameEgret.MovieClip) {
                return Consts.icons[FObjectType.MOVIECLIP];
            }
            if (gameEgret.Bitmap && obj instanceof gameEgret.Bitmap) {
                return Consts.icons[FObjectType.IMAGE];
            }
            if (obj instanceof gameEgret.Sprite) {
                return Consts.icons[FObjectType.SPRITE];
            }
            let eui = Consts.gameWindow["eui"];
            if (eui) {
                if (eui.SliderBase && obj instanceof eui.SliderBase) {
                    return Consts.icons[FObjectType.EXT_SLIDER];
                }
                if (eui.List && obj instanceof eui.List) {
                    return Consts.icons[FObjectType.LIST];
                }
                if (eui.TextInput && obj instanceof eui.TextInput) {
                    return Consts.icons[FObjectType.INPUTTEXT];
                }
                if (eui.ProgressBar && obj instanceof eui.ProgressBar) {
                    return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
                }
                if (eui.Label && obj instanceof eui.Label) {
                    return Consts.icons[FObjectType.EXT_LABEL];
                }
                if (eui.Button && obj instanceof eui.Button) {
                    return Consts.icons[FObjectType.EXT_BUTTON];
                }
                if (eui.Panel && obj instanceof eui.Panel) {
                    return Consts.icons[FObjectType.COMPONENT];
                }
            }
            return Consts.icons["GObject"];
        }
    }

    class DocumentUI {
        constructor(view) {
            this.frame = document.getElementById('gameFrame');
            if (this.frame) {
                this.frameStyle = this.frame.style;
                this.frame.onload = this.frameLoad.bind(this);
            }
            else {
                window["setGameFrame"] = this.setGameFrame.bind(this);
            }
            EditorEvent.on(EditorEvent.SelectionChanged, this, this.selectItem);
            this.view = view;
            let device = localStorage.getItem("device");
            if (device) {
                this.view.m_device.selectedIndex = Number(device);
            }
            let orientation = localStorage.getItem("orientation");
            if (orientation) {
                this.view.m_orientation.selectedIndex = Number(orientation);
            }
            this.view.m_device.on(fairygui.Events.STATE_CHANGED, this, this.resize);
            this.view.m_orientation.on(fairygui.Events.STATE_CHANGED, this, this.resize);
            this.view.m_editType.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
            this.view.m_btnfps.onClick(this, this.onFPS);
            this.view.m_btnpause.onClick(this, this.onPause);
            Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
            this.resize();
            this.view.onClick(this, this.onClick);
            EditorEvent.on(EditorEvent.ClickChanged, this, this.onClickChange);
            EditorEvent.on(EditorEvent.TreeTypeChanged, this, this.onListChange);
            document.onkeydown = this.keyDown.bind(this);
            document.onkeyup = this.keyUp.bind(this);
        }
        setGameFrame(frame) {
            if (this.frame) {
                this.reset();
                this.frame = null;
                this.onClickChange();
            }
            else {
                this.frame = frame;
                this.frameStyle = frame.style;
                this.reset();
                this.loadTimes = 100;
                this.frameLoad();
                this.resize();
            }
        }
        keyDown(e) {
            if (e.keyCode == Laya.Keyboard.CONTROL) {
                this.view.m_editType.selectedIndex = 1;
            }
        }
        keyUp(e) {
            if (e.keyCode == Laya.Keyboard.CONTROL) {
                this.view.m_editType.selectedIndex = 0;
            }
        }
        onClick() {
            EditorEvent.event(EditorEvent.ClickChanged);
        }
        onClickChange() {
            if (Consts.engineManager)
                Consts.engineManager.hideRect();
        }
        resize() {
            if (!this.frame) {
                return;
            }
            let value = this.view.m_device.value.split(":");
            let p = this.view.m_docBg.localToGlobal(0, 0);
            let w = this.view.m_docBg.width;
            let h = this.view.m_docBg.height;
            let vx = Number(value[0]);
            let vy = Number(value[1]);
            if (vx && vy) {
                let scale = Math.min(vx, vy) / Math.max(vx, vy);
                if (this.view.m_orientation.selectedIndex == 0) {
                    let sh = w * scale;
                    if (sh > h) {
                        let sw = h / scale;
                        p.x += (w - sw) * 0.5;
                        w = sw;
                    }
                    else {
                        p.y += (h - sh) * 0.5;
                        h = sh;
                    }
                }
                else {
                    let sw = h * scale;
                    if (sw > w) {
                        let sh = w / scale;
                        p.y += (h - sh) * 0.5;
                        h = sh;
                    }
                    else {
                        p.x += (w - sw) * 0.5;
                        w = sw;
                    }
                }
            }
            this.frameStyle.left = p.x / Laya.Browser.pixelRatio + "px";
            this.frameStyle.top = p.y / Laya.Browser.pixelRatio + "px";
            this.frame.width = w / Laya.Browser.pixelRatio;
            this.frame.height = h / Laya.Browser.pixelRatio;
            localStorage.setItem("device", this.view.m_device.selectedIndex + "");
            localStorage.setItem("orientation", this.view.m_orientation.selectedIndex + "");
            if (Consts.engineManager)
                Consts.engineManager.hideRect();
        }
        onFPS() {
            if (Consts.engineManager)
                Consts.engineManager.onFPS();
        }
        onPause() {
            if (Consts.engineManager)
                Consts.engineManager.onPause();
        }
        changeType() {
            if (this.view.m_editType.selectedIndex == 1) {
                EditorEvent.event(EditorEvent.TreeChanged);
                if (Consts.engineManager)
                    Consts.engineManager.addSelectModel();
            }
            else {
                if (Consts.engineManager)
                    Consts.engineManager.removeSelectModel();
            }
        }
        goweb(url) {
            this.frame.src = url;
            this.reset();
            Laya.timer.loop(100, this, this.frameLoad);
        }
        reset() {
            Consts.gameWindow = null;
            if (Consts.displayList) {
                Consts.displayList.end();
                Consts.displayList = null;
            }
            if (Consts.engineManager) {
                Consts.engineManager.end();
                Consts.engineManager = null;
            }
            Consts.treeTypeList = [];
            this.view.m_editType.selectedIndex = 0;
            this.loadTimes = 0;
        }
        frameLoad() {
            var win = this.frame.contentWindow;
            Consts.gameWindow = win;
            if (win.Laya) {
                Consts.engineManager = LayaEngine.getInstance();
                Consts.engineManager.start(win.Laya);
            }
            else if (win.egret) {
                Consts.engineManager = EgretEngine.getInstance();
                Consts.engineManager.start(win.egret);
            }
            else if (win.cc) {
                Consts.engineManager = CCEngine.getInstance();
                Consts.engineManager.start(win.cc);
                var toolbar = win.document.getElementsByClassName('toolbar')[0];
                if (toolbar)
                    toolbar.style.display = 'none';
            }
            if (Consts.engineManager) {
                this.loadTimes++;
                if (Consts.treeTypeList.indexOf(Consts.engineManager.type) == -1) {
                    Consts.treeTypeList.push(Consts.engineManager.type);
                }
            }
            var gamefgui = win.fairygui ? win.fairygui : win.fgui;
            if (gamefgui) {
                if (!gamefgui.GRoot._inst)
                    return;
                Laya.timer.clear(this, this.frameLoad);
                this.initFgui();
                if (Consts.treeTypeList.indexOf(TreeType.FGUI) == -1)
                    Consts.treeTypeList.push(TreeType.FGUI);
                EditorEvent.event(EditorEvent.TreeTypeDataChanged, Consts.treeTypeList.indexOf(TreeType.FGUI));
            }
            else {
                if (this.loadTimes > 50) {
                    Laya.timer.clear(this, this.frameLoad);
                    this.initManager();
                    EditorEvent.event(EditorEvent.TreeTypeDataChanged, Consts.treeTypeList.indexOf(Consts.engineManager.type));
                }
            }
            if (Consts.displayList) {
                this.frame.contentWindow.document.onkeydown = this.keyDown.bind(this);
                this.frame.contentWindow.document.onkeyup = this.keyUp.bind(this);
            }
        }
        initFgui() {
            if (Consts.displayList) {
                Consts.displayList.end();
                Consts.displayList = null;
            }
            var win = this.frame.contentWindow;
            var gamefgui = win.fairygui ? win.fairygui : win.fgui;
            if (gamefgui) {
                Consts.displayList = FGUIManager.getInstance();
                Consts.displayList.start(gamefgui.GRoot._inst, gamefgui);
                EditorEvent.event(EditorEvent.TreeChanged);
                return true;
            }
        }
        initManager() {
            if (Consts.displayList) {
                Consts.displayList.end();
                Consts.displayList = null;
            }
            var win = this.frame.contentWindow;
            if (win.Laya) {
                Consts.displayList = LayaManager.getInstance();
                Consts.displayList.start(win.Laya.stage, win.Laya);
                EditorEvent.event(EditorEvent.TreeChanged);
                return true;
            }
            else if (win.cc) {
                Consts.displayList = CCManager.getInstance();
                Consts.displayList.start(win.cc.director.getScene(), win.cc);
                EditorEvent.event(EditorEvent.TreeChanged);
                return true;
            }
            else if (win.egret) {
                Consts.displayList = EgretManager.getInstance();
                Consts.displayList.start(win.egret.lifecycle.stage, win.egret);
                EditorEvent.event(EditorEvent.TreeChanged);
            }
        }
        onListChange(type) {
            if (type == TreeType.FGUI) {
                this.initFgui();
            }
            else {
                this.initManager();
            }
        }
        loadCallBack() {
            this.frameLoad();
        }
        selectItem(item) {
            if (item) {
                let rect = Consts.displayList.getDisPlayRect(item);
                if (rect)
                    Consts.engineManager.showRect(rect[0], rect[1], Math.abs(rect[2]), Math.abs(rect[3]));
                else
                    Consts.engineManager.hideRect();
            }
            else {
                Consts.engineManager.hideRect();
            }
        }
    }

    class BasicPropsUI {
        constructor(view) {
            this.view = view;
            this.view.m_name.editable = false;
        }
        setData(item) {
            let gameModule = Consts.displayList.displayModule;
            if (gameModule.GObject && item instanceof gameModule.GObject) {
                this.setFGUIData(item);
            }
            else if (gameModule.DisplayObject && item instanceof gameModule.DisplayObject) {
                this.setEgretData(item);
            }
            else if (gameModule.Sprite && item instanceof gameModule.Sprite) {
                this.setLaya2DData(item);
            }
        }
        setFGUIData(item) {
            this.view.m_name.text = item.name;
            this.view.m_x.setObj(item, "x");
            this.view.m_y.setObj(item, "y");
            this.view.m_width.setObj(item, "width");
            this.view.m_height.setObj(item, "height");
            this.view.m_minWidth.setObj(item, "minWidth");
            this.view.m_minHeight.setObj(item, "minHeight");
            this.view.m_maxWidth.setObj(item, "maxWidth");
            this.view.m_maxHeight.setObj(item, "maxHeight");
            this.view.m_scaleX.setObj(item, "scaleX");
            this.view.m_scaleY.setObj(item, "scaleY");
            this.view.m_skewX.setObj(item, "skewY");
            this.view.m_pivotX.setObj(item, "pivotX");
            this.view.m_pivotY.setObj(item, "pivotY");
            this.view.m_alpha.setObj(item, "alpha");
            this.view.m_rotation.setObj(item, "rotation");
            this.view.m_anchor.setObj(item, "pivotAsAnchor", false);
            this.view.m_visible.setObj(item, "visible", true);
            this.view.m_grayed.setObj(item, "grayed", false);
            this.view.m_touchable.setObj(item, "touchable", true);
        }
        setLaya2DData(item) {
            this.view.m_name.text = item.name;
            this.view.m_x.setObj(item, "x");
            this.view.m_y.setObj(item, "y");
            this.view.m_width.setObj(item, "width");
            this.view.m_height.setObj(item, "height");
            this.view.m_scaleX.setObj(item, "scaleX");
            this.view.m_scaleY.setObj(item, "scaleY");
            this.view.m_skewX.setObj(item, "skewY");
            this.view.m_pivotX.setObj(item, "pivotX");
            this.view.m_pivotY.setObj(item, "pivotY");
            this.view.m_alpha.setObj(item, "alpha");
            this.view.m_rotation.setObj(item, "rotation");
            this.view.m_visible.setObj(item, "visible", true);
            this.view.m_touchable.setObj(item, "mouseThrough", false);
        }
        setEgretData(item) {
            this.view.m_name.text = item.name;
            this.view.m_x.setObj(item, "x");
            this.view.m_y.setObj(item, "y");
            this.view.m_width.setObj(item, "width");
            this.view.m_height.setObj(item, "height");
            this.view.m_scaleX.setObj(item, "scaleX");
            this.view.m_scaleY.setObj(item, "scaleY");
            this.view.m_skewX.setObj(item, "skewY");
            this.view.m_pivotX.setObj(item, "anchorOffsetX");
            this.view.m_pivotY.setObj(item, "anchorOffsetY");
            this.view.m_alpha.setObj(item, "alpha");
            this.view.m_rotation.setObj(item, "rotation");
            this.view.m_visible.setObj(item, "visible", true);
            this.view.m_touchable.setObj(item, "touchEnabled", true);
        }
    }

    class InfoPropsUI {
        constructor(view) {
            this.view = view;
            this.view.m_title.onClick(this, this.clickItem);
            this.view.m_btnRefresh.onClick(this, this.refClick);
        }
        setData(item) {
            this.item = item;
            this.view.m_icon.icon = Consts.displayList.getDisPlayIcon(item);
            this.view.m_title.text = Consts.getClassName(item);
        }
        clickItem() {
            console.log(this.item);
        }
        refClick() {
            if (this.item)
                EditorEvent.event(EditorEvent.SelectionChanged, this.item);
        }
    }

    class ComControllerUI {
        constructor(view) {
            this.view = view;
            this.view.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer, null, false);
        }
        itemRenderer(index, item) {
            let data = this.allController[index];
            item.data = data;
            item.text = data.name;
            item.m_pageController.off(fairygui.Events.STATE_CHANGED, this, this.onChanged);
            item.m_pageController.selectedIndex = data.selectedIndex;
            item.m_pageController.items = this.allControllerNames[index];
            item.m_pageController.on(fairygui.Events.STATE_CHANGED, this, this.onChanged, [item]);
        }
        setData(item) {
            if (item) {
                this.allController = item._controllers;
                if (this.allController && this.allController.length > 0) {
                    this.allControllerNames = [];
                    for (var i = 0; i < this.allController.length; i++) {
                        let item = [];
                        let c = this.allController[i];
                        for (let j = 0; j < c._pageNames.length; j++) {
                            item[j] = j + ":" + c._pageNames[j];
                        }
                        this.allControllerNames[i] = item;
                    }
                    this.view.m_list.numItems = this.allController.length;
                }
                else
                    this.view.m_list.numItems = 0;
                let h = this.view.m_list.numItems * 30;
                this.view.m_list.height = Math.min(h, 300);
            }
        }
        onChanged(item) {
            let c = item.data;
            c.selectedIndex = item.m_pageController.selectedIndex;
        }
    }

    class ComTransitionUI {
        constructor(view) {
            this.view = view;
            view.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer, null, false);
        }
        itemRenderer(index, item) {
            let data = this.allTransition[index];
            item.data = data;
            item.text = data.name;
            item.offClick(this, this.clickItem);
            item.m_btnPlay.onClick(this, this.clickItem, [data]);
        }
        clickItem(t) {
            t.play();
        }
        setData(item) {
            if (item) {
                this.allTransition = item._transitions;
                if (this.allTransition && this.allTransition.length > 0) {
                    this.view.m_list.numItems = this.allTransition.length;
                }
                else
                    this.view.m_list.numItems = 0;
                let h = this.view.m_list.numItems * 30;
                this.view.m_list.height = Math.min(h, 300);
            }
        }
    }

    class Basic3DPropsUI {
        constructor(view) {
            this.view = view;
            this.view.m_name.editable = false;
        }
        setData(item) {
            let gameModule = Consts.displayList.displayModule;
            if (gameModule && gameModule.Sprite3D && item instanceof gameModule.Sprite3D) {
                this.setLaya3DData(item);
            }
        }
        setLaya3DData(item) {
            this.view.m_name.text = item.name;
            let transform = item.transform;
            this.view.m_x.setObj(transform, "x", "position");
            this.view.m_y.setObj(transform, "y", "position");
            this.view.m_z.setObj(transform, "z", "position");
            this.view.m_scaleX.setObj(transform, "x", "scale");
            this.view.m_scaleY.setObj(transform, "y", "scale");
            this.view.m_scaleZ.setObj(transform, "z", "scale");
            this.view.m_rotationX.setObj(transform, "x", "rotationEuler");
            this.view.m_rotationY.setObj(transform, "y", "rotationEuler");
            this.view.m_rotationZ.setObj(transform, "z", "rotationEuler");
            this.view.m_localx.setObj(transform, "x", "localPosition");
            this.view.m_localy.setObj(transform, "y", "localPosition");
            this.view.m_localz.setObj(transform, "z", "localPosition");
            this.view.m_localscaleX.setObj(transform, "x", "localRotationEuler");
            this.view.m_localscaleY.setObj(transform, "y", "localRotationEuler");
            this.view.m_localscaleZ.setObj(transform, "z", "localRotationEuler");
            this.view.m_localrotationX.setObj(transform, "x", "localScale");
            this.view.m_localrotationY.setObj(transform, "y", "localScale");
            this.view.m_localrotationZ.setObj(transform, "z", "localScale");
            this.view.m_visible.setObj(item, "active", true);
            this.view.m_static.setObj(item, "isStatic", false);
        }
    }

    class CreatorPropsUI {
        constructor(view) {
            this.view = view;
            this.view.m_name.editable = false;
            let text = this.view.m_color.getTextField();
            text.displayObject.on(Laya.Event.BLUR, this, this.changeValue);
        }
        setData(item) {
            this.setCCData(item);
        }
        setCCData(item) {
            this.item = item;
            this.view.m_name.text = item.name;
            this.view.m_x.setObj(item, "x");
            this.view.m_y.setObj(item, "y");
            this.view.m_width.setObj(item, "width");
            this.view.m_height.setObj(item, "height");
            this.view.m_scaleX.setObj(item, "scaleX");
            this.view.m_scaleY.setObj(item, "scaleY");
            this.view.m_skewX.setObj(item, "skewX");
            this.view.m_skewY.setObj(item, "skewY");
            this.view.m_pivotX.setObj(item, "anchorX");
            this.view.m_pivotY.setObj(item, "anchorY");
            this.view.m_alpha.setObj(item, "opacity");
            this.view.m_rotation.setObj(item, "rotation");
            this.view.m_visible.setObj(item, "active", false);
            this.view.m_mouse.setObj(item, "mouseThrough", false);
            this.view.m_color.text = item.color.toCSS("#rrggbb");
        }
        changeValue() {
            this.item.color = this.item.color.fromHEX(this.view.m_color.text);
        }
    }

    class CreatorWidgetUI {
        constructor(view) {
            this.view = view;
            this.view.m_TargetValue.editable = false;
            this.view.m_AlignMode.on(fairygui.Events.STATE_CHANGED, this, this.onChanged);
        }
        setData(item) {
            this.setCCData(item);
        }
        setCCData(item) {
            let gameModule = Consts.displayList.displayModule;
            var widget = item.getComponent(gameModule.Widget);
            this.widget = widget;
            if (widget) {
                this.view.visible = true;
                this.view.m_Top.setObj(widget, "isAlignTop", false);
                this.view.m_TopValue.setObj(widget, "top");
                this.view.m_Left.setObj(widget, "isAlignLeft", false);
                this.view.m_LeftValue.setObj(widget, "left");
                this.view.m_Right.setObj(widget, "isAlignRight", false);
                this.view.m_RightValue.setObj(widget, "right");
                this.view.m_Bottom.setObj(widget, "isAlignBottom", false);
                this.view.m_BottomValue.setObj(widget, "bottom");
                this.view.m_HorizontalCenter.setObj(widget, "isAlignHorizontalCenter", false);
                this.view.m_HorizontalCenterValue.setObj(widget, "horizontalCenter");
                this.view.m_VerticlCenter.setObj(widget, "isAlignVerticalCenter", false);
                this.view.m_VerticlCenterValue.setObj(widget, "verticalCenter");
                this.view.m_TargetValue.setObj(widget, "isAlignXX", false);
                this.view.m_AlignMode.selectedIndex = this.widget.alignMode;
                if (widget.target) {
                    this.view.m_TargetValue.text = widget.target.name;
                }
                else if (item.parent) {
                    this.view.m_TargetValue.text = item.parent.name;
                }
                else
                    this.view.m_TargetValue.text = "";
            }
            else {
                this.view.visible = false;
            }
        }
        onChanged() {
            this.widget.alignMode = this.view.m_AlignMode.selectedIndex;
        }
    }

    class InspectorUI {
        constructor(view) {
            EditorEvent.on(EditorEvent.SelectionChanged, this, this.selectItem);
            this.view = view;
            this.baseProps = new BasicPropsUI(this.view.m_baseComp);
            this.base3DProps = new Basic3DPropsUI(this.view.m_base3DComp);
            this.infoComp = new InfoPropsUI(this.view.m_infoComp);
            this.controllerComp = new ComControllerUI(this.view.m_controllerComp);
            this.transitionComp = new ComTransitionUI(this.view.m_transitionComp);
            this.ccInfoComp = new CreatorPropsUI(this.view.m_nodeComp);
            this.ccWidget = new CreatorWidgetUI(this.view.m_widgetComp);
        }
        selectItem(item) {
            if (item) {
                let gameModule = Consts.displayList.displayModule;
                this.infoComp.setData(item);
                if (Consts.nowTreeType == TreeType.FGUI) {
                    this.view.m_type.selectedIndex = 0;
                    this.baseProps.setData(item);
                    this.controllerComp.setData(item);
                    this.transitionComp.setData(item);
                }
                else if (Consts.nowTreeType == TreeType.Laya) {
                    if (gameModule.Sprite && item instanceof gameModule.Sprite) {
                        this.view.m_type.selectedIndex = 1;
                        this.baseProps.setData(item);
                    }
                    else if (gameModule.Sprite3D && item instanceof gameModule.Sprite3D) {
                        this.view.m_type.selectedIndex = 2;
                        this.base3DProps.setData(item);
                    }
                    else if (gameModule.Node && item instanceof gameModule.Node) {
                        this.view.m_type.selectedIndex = 2;
                        this.base3DProps.setData(item);
                    }
                }
                else if (Consts.nowTreeType == TreeType.CC) {
                    this.view.m_type.selectedIndex = 3;
                    this.ccInfoComp.setData(item);
                    this.ccWidget.setData(item);
                }
                else if (Consts.nowTreeType == TreeType.Egret) {
                    this.view.m_type.selectedIndex = 4;
                    this.baseProps.setData(item);
                }
            }
        }
        onClick() {
            EditorEvent.event(EditorEvent.ClickChanged);
        }
    }

    class MainUI {
        constructor() {
            this.view = MainView.createInstance();
            this.view.makeFullScreen();
            this.view.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
            fgui.GRoot.inst.addChild(this.view);
            this.view.m_btngo.onClick(this, this.goweb);
            this.view.m_webset.getTextField().on(Laya.Event.KEY_DOWN, this, this.onChanged);
            this.list = new DisplayTreeUI(this.view.m_list);
            this.document = new DocumentUI(this.view.m_document);
            this.insp = new InspectorUI(this.view.m_insp);
            let str = Consts.GetQueryString("url");
            if (str) {
                this.view.m_webset.text = decodeURIComponent(str);
                this.goweb();
            }
            else {
                str = Laya.LocalStorage.getItem("webURL");
                if (str) {
                    this.view.m_webset.text = str;
                }
            }
        }
        onChanged(e) {
            if (e.keyCode == Laya.Keyboard.ENTER) {
                this.goweb();
            }
        }
        goweb() {
            if (this.view.m_webset.text) {
                Laya.LocalStorage.setItem("webURL", this.view.m_webset.text);
                let host = window.location.host;
                this.document.goweb(this.view.m_webset.text);
            }
        }
    }

    class Basic3DPropsPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "Basic3DPropsPanel"));
        }
        onConstruct() {
            this.m_showRestrictSize = this.getControllerAt(0);
            this.m_type = this.getControllerAt(1);
            this.m_name = (this.getChildAt(1));
            this.m_x = (this.getChildAt(4));
            this.m_y = (this.getChildAt(5));
            this.m_z = (this.getChildAt(6));
            this.m_rotationX = (this.getChildAt(8));
            this.m_rotationY = (this.getChildAt(9));
            this.m_rotationZ = (this.getChildAt(10));
            this.m_scaleX = (this.getChildAt(12));
            this.m_scaleY = (this.getChildAt(13));
            this.m_scaleZ = (this.getChildAt(14));
            this.m_visible = (this.getChildAt(15));
            this.m_static = (this.getChildAt(16));
            this.m_localx = (this.getChildAt(18));
            this.m_localy = (this.getChildAt(19));
            this.m_localz = (this.getChildAt(20));
            this.m_localrotationX = (this.getChildAt(22));
            this.m_localrotationY = (this.getChildAt(23));
            this.m_localrotationZ = (this.getChildAt(24));
            this.m_localscaleX = (this.getChildAt(26));
            this.m_localscaleY = (this.getChildAt(27));
            this.m_localscaleZ = (this.getChildAt(28));
        }
    }
    Basic3DPropsPanel.URL = "ui://2pshu6oi6who1nry324";

    class BasicPropsPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "BasicPropsPanel"));
        }
        onConstruct() {
            this.m_showRestrictSize = this.getControllerAt(0);
            this.m_type = this.getControllerAt(1);
            this.m_name = (this.getChildAt(3));
            this.m_x = (this.getChildAt(4));
            this.m_y = (this.getChildAt(5));
            this.m_width = (this.getChildAt(6));
            this.m_height = (this.getChildAt(7));
            this.m_showRestrictSize_2 = (this.getChildAt(9));
            this.m_minWidth = (this.getChildAt(12));
            this.m_minHeight = (this.getChildAt(13));
            this.m_maxWidth = (this.getChildAt(14));
            this.m_maxHeight = (this.getChildAt(15));
            this.m_useSourceSize = (this.getChildAt(17));
            this.m_aspectLocked = (this.getChildAt(18));
            this.m_scaleX = (this.getChildAt(24));
            this.m_scaleY = (this.getChildAt(25));
            this.m_skewX = (this.getChildAt(26));
            this.m_skewY = (this.getChildAt(27));
            this.m_pivotX = (this.getChildAt(28));
            this.m_pivotY = (this.getChildAt(29));
            this.m_anchor = (this.getChildAt(31));
            this.m_alpha = (this.getChildAt(32));
            this.m_rotation = (this.getChildAt(33));
            this.m_visible = (this.getChildAt(34));
            this.m_grayed = (this.getChildAt(35));
            this.m_touchable = (this.getChildAt(36));
        }
    }
    BasicPropsPanel.URL = "ui://2pshu6oiau3n5";

    class ComControllerPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "ComControllerPanel"));
        }
        onConstruct() {
            this.m_list = (this.getChildAt(0));
        }
    }
    ComControllerPanel.URL = "ui://2pshu6oie1jj1nry31y";

    class ComControllerItem extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "ComControllerItem"));
        }
        onConstruct() {
            this.m_pageController = (this.getChildAt(1));
        }
    }
    ComControllerItem.URL = "ui://2pshu6oie1jj1nry31z";

    class ComTransitionPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "ComTransitionPanel"));
        }
        onConstruct() {
            this.m_list = (this.getChildAt(0));
        }
    }
    ComTransitionPanel.URL = "ui://2pshu6oie1jj1nry320";

    class ComTransitionItem extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "ComTransitionItem"));
        }
        onConstruct() {
            this.m_btnPlay = (this.getChildAt(1));
        }
    }
    ComTransitionItem.URL = "ui://2pshu6oie1jj1nry321";

    class LibView_sep extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "LibView_sep"));
        }
        onConstruct() {
            this.m_sep = (this.getChildAt(0));
        }
    }
    LibView_sep.URL = "ui://2pshu6oie80aixictx";

    class TitleBar extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "TitleBar"));
        }
        onConstruct() {
            this.m_button = (this.getChildAt(0));
            this.m_line = (this.getChildAt(3));
        }
    }
    TitleBar.URL = "ui://2pshu6oiitme7iudp";

    class CreatorPropsPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "CreatorPropsPanel"));
        }
        onConstruct() {
            this.m_color = (this.getChildAt(9));
            this.m_name = (this.getChildAt(10));
            this.m_x = (this.getChildAt(11));
            this.m_y = (this.getChildAt(12));
            this.m_width = (this.getChildAt(13));
            this.m_height = (this.getChildAt(14));
            this.m_scaleX = (this.getChildAt(16));
            this.m_scaleY = (this.getChildAt(17));
            this.m_skewX = (this.getChildAt(18));
            this.m_skewY = (this.getChildAt(19));
            this.m_pivotX = (this.getChildAt(20));
            this.m_pivotY = (this.getChildAt(21));
            this.m_alpha = (this.getChildAt(22));
            this.m_rotation = (this.getChildAt(23));
            this.m_visible = (this.getChildAt(24));
            this.m_mouse = (this.getChildAt(25));
        }
    }
    CreatorPropsPanel.URL = "ui://2pshu6oiixw71nry325";

    class CreatorWidgetPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "CreatorWidgetPanel"));
        }
        onConstruct() {
            this.m_top = this.getControllerAt(0);
            this.m_left = this.getControllerAt(1);
            this.m_right = this.getControllerAt(2);
            this.m_bottom = this.getControllerAt(3);
            this.m_horizontal = this.getControllerAt(4);
            this.m_verticl = this.getControllerAt(5);
            this.m_TopValue = (this.getChildAt(2));
            this.m_TargetValue = (this.getChildAt(3));
            this.m_Top = (this.getChildAt(4));
            this.m_AlignMode = (this.getChildAt(5));
            this.m_LeftValue = (this.getChildAt(6));
            this.m_Left = (this.getChildAt(7));
            this.m_RightValue = (this.getChildAt(8));
            this.m_Right = (this.getChildAt(9));
            this.m_BottomValue = (this.getChildAt(10));
            this.m_Bottom = (this.getChildAt(11));
            this.m_HorizontalCenterValue = (this.getChildAt(12));
            this.m_HorizontalCenter = (this.getChildAt(13));
            this.m_VerticlCenterValue = (this.getChildAt(14));
            this.m_VerticlCenter = (this.getChildAt(15));
        }
    }
    CreatorWidgetPanel.URL = "ui://2pshu6oiixw71nry326";

    class DisplayTreeView extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "DisplayTreeView"));
        }
        onConstruct() {
            this.m_btnRefresh = (this.getChildAt(1));
            this.m_btnLocate = (this.getChildAt(2));
            this.m_btnSync = (this.getChildAt(3));
            this.m_btnTwoColumn = (this.getChildAt(4));
            this.m_btnCollapseAll = (this.getChildAt(5));
            this.m_group = (this.getChildAt(7));
            this.m_treeView = (this.getChildAt(8));
            this.m_sep = (this.getChildAt(9));
            this.m_listView = (this.getChildAt(10));
            this.m_columns = (this.getChildAt(11));
            this.m_iconSize = (this.getChildAt(12));
        }
    }
    DisplayTreeView.URL = "ui://2pshu6oimlmb1nry31v";

    class DocumentView extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "DocumentView"));
        }
        onConstruct() {
            this.m_editType = this.getControllerAt(0);
            this.m_orientation = this.getControllerAt(1);
            this.m_docBg = (this.getChildAt(0));
            this.m_border = (this.getChildAt(1));
            this.m_tabBar = (this.getChildAt(2));
            this.m_arrow = (this.getChildAt(3));
            this.m_device = (this.getChildAt(5));
            this.m_landscape = (this.getChildAt(7));
            this.m_portrait = (this.getChildAt(8));
            this.m_btnfps = (this.getChildAt(10));
            this.m_btnpause = (this.getChildAt(11));
        }
    }
    DocumentView.URL = "ui://2pshu6oimlmb1nry31x";

    class InspectorView extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "InspectorView"));
        }
        onConstruct() {
            this.m_base = this.getControllerAt(0);
            this.m_controller = this.getControllerAt(1);
            this.m_transition = this.getControllerAt(2);
            this.m_type = this.getControllerAt(3);
            this.m_node = this.getControllerAt(4);
            this.m_widget = this.getControllerAt(5);
            this.m_infoComp = (this.getChildAt(1));
            this.m_baseBar = (this.getChildAt(2));
            this.m_baseComp = (this.getChildAt(3));
            this.m_base3DComp = (this.getChildAt(4));
            this.m_controllerBar = (this.getChildAt(5));
            this.m_controllerComp = (this.getChildAt(6));
            this.m_transitionBar = (this.getChildAt(7));
            this.m_transitionComp = (this.getChildAt(8));
            this.m_NodeBar = (this.getChildAt(9));
            this.m_nodeComp = (this.getChildAt(10));
            this.m_WidgetBar = (this.getChildAt(11));
            this.m_widgetComp = (this.getChildAt(12));
            this.m_group = (this.getChildAt(13));
        }
    }
    InspectorView.URL = "ui://2pshu6oimtrqiudk";

    class LibraryView_Slider extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "LibraryView_Slider"));
        }
        onConstruct() {
            this.m_slider = (this.getChildAt(1));
        }
    }
    LibraryView_Slider.URL = "ui://2pshu6oinw20ixicv7";

    class InfoPropsPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "InfoPropsPanel"));
        }
        onConstruct() {
            this.m_title = (this.getChildAt(1));
            this.m_icon = (this.getChildAt(2));
            this.m_btnRefresh = (this.getChildAt(3));
        }
    }
    InfoPropsPanel.URL = "ui://2pshu6oir1st7iues";

    class RefreshButton extends fgui.GButton {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "RefreshButton"));
        }
        onConstruct() {
            this.m_grayed = this.getControllerAt(1);
            this.m_t0 = this.getTransitionAt(0);
        }
    }
    RefreshButton.URL = "ui://2pshu6oiso5uixicsd";

    class BuilderBinder {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(Basic3DPropsPanel.URL, Basic3DPropsPanel);
            fgui.UIObjectFactory.setExtension(BasicPropsPanel.URL, BasicPropsPanel);
            fgui.UIObjectFactory.setExtension(ComControllerPanel.URL, ComControllerPanel);
            fgui.UIObjectFactory.setExtension(ComControllerItem.URL, ComControllerItem);
            fgui.UIObjectFactory.setExtension(ComTransitionPanel.URL, ComTransitionPanel);
            fgui.UIObjectFactory.setExtension(ComTransitionItem.URL, ComTransitionItem);
            fgui.UIObjectFactory.setExtension(LibView_sep.URL, LibView_sep);
            fgui.UIObjectFactory.setExtension(TitleBar.URL, TitleBar);
            fgui.UIObjectFactory.setExtension(CreatorPropsPanel.URL, CreatorPropsPanel);
            fgui.UIObjectFactory.setExtension(CreatorWidgetPanel.URL, CreatorWidgetPanel);
            fgui.UIObjectFactory.setExtension(DisplayTreeView.URL, DisplayTreeView);
            fgui.UIObjectFactory.setExtension(MainView.URL, MainView);
            fgui.UIObjectFactory.setExtension(DocumentView.URL, DocumentView);
            fgui.UIObjectFactory.setExtension(InspectorView.URL, InspectorView);
            fgui.UIObjectFactory.setExtension(LibraryView_Slider.URL, LibraryView_Slider);
            fgui.UIObjectFactory.setExtension(InfoPropsPanel.URL, InfoPropsPanel);
            fgui.UIObjectFactory.setExtension(RefreshButton.URL, RefreshButton);
        }
    }

    class EmCheckbox extends fgui.GButton {
        onConstruct() {
            this.on(fgui.Events.STATE_CHANGED, this, this.changeValue);
        }
        changeValue() {
            if (this.targetObj && this.targetKey) {
                this.targetObj[this.targetKey] = this.isNot ? !this.selected : this.selected;
            }
        }
        setObj(target, key, isNot) {
            this.targetObj = target;
            this.targetKey = key;
            this.isNot = isNot;
            this.selected = isNot ? !this.targetObj[this.targetKey] : this.targetObj[this.targetKey];
        }
    }
    EmCheckbox.URL = "ui://nk9ejx23dp4f7u";

    class XYInput extends fgui.GLabel {
        onConstruct() {
            let text = this.getTextField();
            text.displayObject.on(Laya.Event.BLUR, this, this.changeValue);
            text.restrict = "0-9.-";
        }
        changeValue() {
            if (this.targetObj && this.targetKey && this.tKey) {
                let obj = this.targetObj[this.tKey];
                obj[this.targetKey] = Number(this.text);
                this.targetObj[this.tKey] = obj;
            }
            else if (this.targetObj && this.targetKey) {
                this.targetObj[this.targetKey] = Number(this.text);
            }
        }
        setObj(target, key, tKey) {
            this.targetObj = target;
            this.targetKey = key;
            this.tKey = tKey;
            if (tKey) {
                this.text = target[tKey][key] + "";
            }
            else {
                this.text = target[key] + "";
            }
        }
    }
    XYInput.URL = "ui://nk9ejx23wqe79a";
    XYInput.URLNumber = "ui://nk9ejx23au3n69";

    class BuilderUI {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(EmCheckbox.URL, EmCheckbox);
            fgui.UIObjectFactory.setExtension(XYInput.URL, XYInput);
            fgui.UIObjectFactory.setExtension(XYInput.URLNumber, XYInput);
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.stage.bgColor = "#383838";
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            fgui.UIConfig.tooltipsWin = "ui://nk9ejx23fj4c6y";
            fgui.UIPackage.loadPackage(["res/fgui/Basic", "res/fgui/Builder"], Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            BuilderBinder.bindAll();
            BuilderUI.bindAll();
            Consts.init();
            new MainUI();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
