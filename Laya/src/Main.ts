import GameConfig from "./GameConfig";
import MainUI from "./UI/MainUI";
import BuilderBinder from "./fgui/Builder/BuilderBinder";
import Consts from "./editor/Consts";
import BuilderUI from "./UI/Builder/BuilderUI";

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		Laya.stage.bgColor = "#383838";
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError(true);
		Laya.timer.once(100,this,this.onStartVersionLoaded)
		// this.onVersionLoaded();
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		
	}
	onStartVersionLoaded():void{
        Laya.ResourceVersion.enable("version.json?v="+Consts.version, Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}
	onVersionLoaded(): void {
		Laya.stage.addChild(fgui.GRoot.inst.displayObject);
		fgui.UIConfig.tooltipsWin = "ui://nk9ejx23fj4c6y"
		fgui.UIPackage.loadPackage(["res/fgui/Basic","res/fgui/Builder"], Laya.Handler.create(this, this.onConfigLoaded));

		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		// Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		// GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
		BuilderBinder.bindAll();
		BuilderUI.bindAll();

		Consts.init()
		new MainUI();

	}
}
//激活启动类
new Main();
