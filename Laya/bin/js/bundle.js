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
            Consts.icons["GObject"] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
        }
        static getFguiIcon(obj) {
            let gamefgui = Consts.gameFgui;
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
            if (obj instanceof gamefgui.GTree) {
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
    EditorEvent.ClickChanged = "ClickChanged";
    EditorEvent.EventDispatcher = new Laya.EventDispatcher();

    class DisplayTreeUI {
        constructor(view) {
            this.view = view;
            this.view.m_treeView.treeNodeRender = Laya.Handler.create(this, this.renderTreeNode, null, false);
            this.view.m_treeView.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
            this.view.m_btnRefresh.onClick(this, this.onRefresh);
            this.view.m_btnCollapseAll.onClick(this, this.onCollapseAll);
            EditorEvent.on(EditorEvent.Selection, this, this.selectTree);
            EditorEvent.on(EditorEvent.TreeChanged, this, this.onRefresh);
        }
        initTree() {
            this.root = Consts.GRoot;
            if (!this.root)
                return;
            this.isExpand = false;
            this.view.m_btnCollapseAll.tooltips = "全部展开";
            this.view.m_treeView.numItems = 0;
            this.createGObject(this.root, this.view.m_treeView.rootNode);
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
        createGObject(item, parent) {
            if (item.name == Consts.EditorLineName)
                return;
            let node = this.createNode(item);
            parent.addChild(node);
            if (item.asCom.numChildren > 0) {
                this.createChildren(item.asCom._children, node);
            }
        }
        createChildren(items, parent) {
            for (var i = 0; i < items.length; i++) {
                this.createGObject(items[i], parent);
            }
        }
        createNode(item) {
            let node = new fgui.GTreeNode(item.asCom.numChildren > 0);
            node.data = item;
            item[Consts.EditorNodeName] = node;
            return node;
        }
        renderTreeNode(node, obj) {
            let gobj = node.data;
            let cname = Consts.getClassName(gobj);
            if (cname) {
                cname = gobj.name + "(" + cname + ")";
            }
            else
                cname = gobj.name;
            obj.text = cname;
            obj.icon = Consts.getFguiIcon(gobj);
            obj.alpha = Consts.manager.checkVisible(gobj) ? 1 : 0.5;
        }
        onClickItem(item) {
            this.selectItem = item;
            if (item.treeNode && item.treeNode.data) {
                if (item.treeNode.data != Consts.GRoot && !item.treeNode.data.parent) {
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
    }

    class LayaManager {
        constructor() {
            this.type = "Laya";
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new LayaManager();
            }
            return this.i;
        }
        start(game) {
            this.game = game;
        }
        end() {
            if (this.isShowfps)
                this.onFPS();
            this.removeTouch();
            this.game = null;
        }
        createRectGraph() {
            if (this.rect) {
                this.rect.removeFromParent();
                this.rect.dispose();
            }
            let line = this.rect = new Consts.gameFgui.GGraph();
            let color = Consts.rectColorStr;
            line.drawRect(Consts.rectLineSize, color, null);
            line.name = Consts.EditorLineName;
            line.touchable = false;
        }
        showRect(x, y, w, h) {
            if (!this.rect || this.rect.isDisposed) {
                this.createRectGraph();
            }
            this.rect.visible = true;
            this.rect.setSize(w, h);
            this.rect.x = x;
            this.rect.y = y;
            this.rect.visible = true;
            if (this.rect.parent) {
                this.rect.parent.setChildIndex(this.rect, this.rect.parent.numChildren - 1);
            }
            else {
                Consts.GRoot.addChild(this.rect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.visible = false;
        }
        addTouch() {
            this.game.MouseManager.enabled = false;
            this.touchHander = this.onMouseDown.bind(this);
            this.game.Render.canvas.addEventListener('mousedown', this.touchHander);
        }
        onMouseDown(evt) {
            let mouseManager = this.game.MouseManager.instance;
            mouseManager.initEvent(evt);
            mouseManager._checkAllBaseUI(mouseManager.mouseX, mouseManager.mouseY, () => {
                if (mouseManager._target) {
                    let comp = mouseManager._target["$owner"];
                    EditorEvent.event(EditorEvent.Selection, comp);
                }
            });
        }
        removeTouch() {
            if (this.game) {
                this.game.MouseManager.enabled = true;
                if (this.touchHander) {
                    this.game.Render.canvas.removeEventListener('mousedown', this.touchHander);
                }
            }
        }
        selectClick(evt) {
            let comp = evt.target["$owner"];
            EditorEvent.event(EditorEvent.Selection, comp);
            console.log(evt);
        }
        onFPS() {
            if (!this.game)
                return;
            if (this.isShowfps) {
                this.game.Stat.hide();
                this.isShowfps = false;
            }
            else {
                this.isShowfps = true;
                this.game.Stat.show();
            }
        }
        checkVisible(gobj) {
            return gobj.internalVisible2;
        }
    }

    class EgretManager {
        constructor() {
            this.type = "Egret";
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new EgretManager();
            }
            return this.i;
        }
        start(game) {
            this.game = game;
        }
        end() {
            if (this.isShowfps)
                this.onFPS();
            this.removeTouch();
            this.game = null;
        }
        createRectGraph() {
            if (this.rect) {
                this.rect.removeFromParent();
                this.rect.dispose();
            }
            let line = this.rect = new Consts.gameFgui.GGraph();
            line.drawRect(Consts.rectLineSize, Consts.rectColor, 1, Consts.rectColor, Consts.rectFill);
            line.name = Consts.EditorLineName;
            line.touchable = false;
        }
        showRect(x, y, w, h) {
            if (!this.rect || this.rect.isDisposed) {
                this.createRectGraph();
            }
            this.rect.visible = true;
            this.rect.setSize(w, h);
            this.rect.x = x;
            this.rect.y = y;
            this.rect.visible = true;
            if (this.rect.parent) {
                this.rect.parent.setChildIndex(this.rect, this.rect.parent.numChildren - 1);
            }
            else {
                Consts.GRoot.addChild(this.rect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.visible = false;
        }
        addTouch() {
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
            var target = this.game.lifecycle.stage.$hitTest(location.x, location.y);
            if (target) {
                let comp = target["$owner"];
                EditorEvent.event(EditorEvent.Selection, comp);
                console.log(target);
            }
        }
        removeTouch() {
            if (this.touchHander && this.player) {
                this.player.canvas.removeEventListener('mousedown', this.touchHander);
                this.player.webTouchHandler.touch.maxTouches = 1;
                this.player = null;
            }
        }
        selectClick(evt) {
            let comp = evt.target["$owner"];
            EditorEvent.event(EditorEvent.Selection, comp);
            console.log(evt);
        }
        onFPS() {
            if (!this.game || !Consts.gameWindow)
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
        checkVisible(gobj) {
            return gobj.internalVisible2;
        }
    }

    class CCManager {
        constructor() {
            this.type = "Cocos Creator";
        }
        static getInstance() {
            if (this.i == null) {
                this.i = new CCManager();
            }
            return this.i;
        }
        start(game) {
            this.game = game;
        }
        end() {
            this.removeTouch();
            this.game = null;
        }
        createRectGraph() {
            if (this.rect) {
                this.rect.removeFromParent();
                this.rect.dispose();
            }
            let line = this.rect = new Consts.gameFgui.GGraph();
            let color = Consts.rectColorStr;
            let c = new this.game.Color(0, 0, 0, 255);
            c.fromHEX(color);
            let c2 = new this.game.Color(0, 0, 0, 255);
            c2.fromHEX(color);
            c2.setA(255 * Consts.rectFill);
            line.drawRect(Consts.rectLineSize, c, c2);
            this.rectNode = line.node;
            line.name = Consts.EditorLineName;
            line.touchable = false;
        }
        showRect(x, y, w, h) {
            if (!this.rect || !this.rect._node) {
                this.createRectGraph();
            }
            this.rect.visible = true;
            this.rect.setSize(w, h);
            this.rect.x = x;
            this.rect.y = y;
            this.rect.visible = true;
            if (this.rect.parent) {
                this.rect.parent.setChildIndex(this.rect, this.rect.parent.numChildren - 1);
            }
            else {
                Consts.GRoot.addChild(this.rect);
            }
        }
        hideRect() {
            if (this.rect)
                this.rect.visible = false;
        }
        addTouch() {
            this.touchHander = this.onMouseDown.bind(this);
            this.game.game.canvas.addEventListener('mousedown', this.touchHander);
            let evt = this.game.internal.eventManager;
            if (evt) {
                evt._isEnabled = false;
            }
        }
        hitTestScene(pos) {
            var node = this.game.director.getScene();
            this.target = null;
            for (let i = 0; i < node.children.length; i++) {
                this.hitTest(node.children[i], pos);
            }
        }
        hitTest(node, pos) {
            if (node.active && node != this.rectNode) {
                if (node._hitTest(pos)) {
                    this.target = node;
                }
                for (let i = 0; i < node.children.length; i++) {
                    this.hitTest(node.children[i], pos);
                }
            }
        }
        onMouseDown(event) {
            let selfPointer = this.game.internal.inputManager;
            var canvasBoundingRect = selfPointer._canvasBoundingRect;
            var location = selfPointer.getPointByEvent(event, canvasBoundingRect);
            var EventMouse = this.game.Event.EventMouse;
            var mouseEvent = selfPointer.getMouseEvent(location, canvasBoundingRect, EventMouse.DOWN);
            mouseEvent.setButton(event.button);
            var pos = mouseEvent.getLocation();
            this.hitTestScene(pos);
            if (this.target) {
                let comp = this.target["$gobj"];
                EditorEvent.event(EditorEvent.Selection, comp);
                console.log(this.target);
            }
            event.stopPropagation();
            event.preventDefault();
        }
        removeTouch() {
            if (this.game) {
                let evt = this.game.internal.eventManager;
                if (evt) {
                    evt._isEnabled = true;
                }
                if (this.touchHander) {
                    this.game.game.canvas.removeEventListener('mousedown', this.touchHander);
                }
            }
        }
        onFPS() {
            if (!this.game)
                return;
            var show = !this.game.debug.isDisplayStats();
            this.game.debug.setDisplayStats(show);
        }
        checkVisible(gobj) {
            return gobj._finalVisible;
        }
    }

    class DocumentUI {
        constructor(view) {
            this.frame = document.getElementById('gameFrame');
            this.frameStyle = this.frame.style;
            this.frame.onload = this.frameLoad.bind(this);
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
            Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
            this.resize();
            this.view.onClick(this, this.onClick);
            EditorEvent.on(EditorEvent.ClickChanged, this, this.onClickChange);
            document.onkeydown = this.keyDown.bind(this);
            document.onkeyup = this.keyUp.bind(this);
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
            if (Consts.manager)
                Consts.manager.hideRect();
        }
        resize() {
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
            this.frameStyle.left = p.x + "px";
            this.frameStyle.top = p.y + "px";
            this.frame.width = w;
            this.frame.height = h;
            localStorage.setItem("device", this.view.m_device.selectedIndex + "");
            localStorage.setItem("orientation", this.view.m_orientation.selectedIndex + "");
            if (Consts.manager)
                Consts.manager.hideRect();
        }
        onFPS() {
            if (Consts.manager)
                Consts.manager.onFPS();
        }
        changeType() {
            if (this.view.m_editType.selectedIndex == 1) {
                EditorEvent.event(EditorEvent.TreeChanged);
                if (Consts.manager)
                    Consts.manager.addTouch();
            }
            else {
                if (Consts.manager)
                    Consts.manager.removeTouch();
            }
        }
        goweb(url) {
            Consts.gameWindow = null;
            Consts.gameFgui = null;
            Consts.GRoot = null;
            if (Consts.manager) {
                Consts.manager.end();
                Consts.manager = null;
            }
            this.view.m_editType.selectedIndex = 0;
            this.frame.src = url;
            Laya.timer.loop(100, this, this.frameLoad);
        }
        frameLoad() {
            var win = this.frame.contentWindow;
            var gamefgui = win.fairygui ? win.fairygui : win.fgui;
            Consts.gameWindow = win;
            if (win.Laya) {
                Consts.manager = LayaManager.getInstance();
                Consts.manager.start(win.Laya);
            }
            else if (win.egret) {
                Consts.manager = EgretManager.getInstance();
                Consts.manager.start(win.egret);
            }
            else if (win.cc) {
                Consts.manager = CCManager.getInstance();
                Consts.manager.start(win.cc);
            }
            if (gamefgui) {
                Consts.gameFgui = gamefgui;
                Consts.GRoot = gamefgui.GRoot._inst;
                if (!Consts.GRoot)
                    return;
                Laya.timer.clear(this, this.frameLoad);
                EditorEvent.event(EditorEvent.TreeChanged);
                this.frame.contentWindow.document.onkeydown = this.keyDown.bind(this);
                this.frame.contentWindow.document.onkeyup = this.keyUp.bind(this);
            }
        }
        loadCallBack() {
            this.frameLoad();
        }
        selectItem(item) {
            if (item) {
                let p = item.localToGlobal(0, 0);
                let pr = item.localToGlobal(item.width, item.height);
                let x = p.x;
                let y = p.y;
                let width = pr.x - p.x;
                let height = pr.y - p.y;
                Consts.manager.showRect(x, y, width, height);
            }
            else {
                Consts.manager.hideRect();
            }
        }
    }

    class BasicPropsUI {
        constructor(view) {
            this.view = view;
        }
        setData(item) {
            this.view.m_name.text = item.name;
            this.view.m_name.editable = false;
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
    }

    class InfoPropsUI {
        constructor(view) {
            this.view = view;
            this.view.m_title.onClick(this, this.clickItem);
            this.view.m_btnRefresh.onClick(this, this.refClick);
        }
        setData(item) {
            this.item = item;
            this.view.m_icon.icon = Consts.getFguiIcon(item);
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
                this.allController = item.asCom._controllers;
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
                this.allTransition = item.asCom._transitions;
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

    class InspectorUI {
        constructor(view) {
            EditorEvent.on(EditorEvent.SelectionChanged, this, this.selectItem);
            this.view = view;
            this.baseProps = new BasicPropsUI(this.view.m_baseComp);
            this.infoComp = new InfoPropsUI(this.view.m_infoComp);
            this.controllerComp = new ComControllerUI(this.view.m_controllerComp);
            this.transitionComp = new ComTransitionUI(this.view.m_transitionComp);
        }
        selectItem(item) {
            if (item) {
                this.infoComp.setData(item);
                this.baseProps.setData(item);
                this.controllerComp.setData(item);
                this.transitionComp.setData(item);
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
            let str = Laya.LocalStorage.getItem("webURL");
            if (str) {
                this.view.m_webset.text = str;
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

    class BasicPropsPanel extends fgui.GComponent {
        static createInstance() {
            return (fgui.UIPackage.createObject("Builder", "BasicPropsPanel"));
        }
        onConstruct() {
            this.m_showRestrictSize = this.getControllerAt(0);
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
            this.m_hand = (this.getChildAt(3));
            this.m_arrow = (this.getChildAt(4));
            this.m_device = (this.getChildAt(6));
            this.m_landscape = (this.getChildAt(8));
            this.m_portrait = (this.getChildAt(9));
            this.m_btnfps = (this.getChildAt(11));
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
            this.m_infoComp = (this.getChildAt(1));
            this.m_baseBar = (this.getChildAt(2));
            this.m_baseComp = (this.getChildAt(3));
            this.m_controllerBar = (this.getChildAt(4));
            this.m_controllerComp = (this.getChildAt(5));
            this.m_transitionBar = (this.getChildAt(6));
            this.m_transitionComp = (this.getChildAt(7));
            this.m_group = (this.getChildAt(8));
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
            fgui.UIObjectFactory.setExtension(BasicPropsPanel.URL, BasicPropsPanel);
            fgui.UIObjectFactory.setExtension(ComControllerPanel.URL, ComControllerPanel);
            fgui.UIObjectFactory.setExtension(ComControllerItem.URL, ComControllerItem);
            fgui.UIObjectFactory.setExtension(ComTransitionPanel.URL, ComTransitionPanel);
            fgui.UIObjectFactory.setExtension(ComTransitionItem.URL, ComTransitionItem);
            fgui.UIObjectFactory.setExtension(LibView_sep.URL, LibView_sep);
            fgui.UIObjectFactory.setExtension(TitleBar.URL, TitleBar);
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
            text.restrict = "0-9.";
        }
        changeValue() {
            if (this.targetObj && this.targetKey) {
                this.targetObj[this.targetKey] = Number(this.text);
            }
        }
        setObj(target, key) {
            this.targetObj = target;
            this.targetKey = key;
            this.text = this.targetObj[this.targetKey] + "";
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
