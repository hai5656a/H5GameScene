import DocumentView from "../fgui/Builder/DocumentView";
import Consts, { TreeType } from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";
import LayaEngine from "../editor/engine/LayaEngine";
import EgretEngine from "../editor/engine/EgretEngine";
import CCEngine from "../editor/engine/CCEngine";
import FGUIManager from "../editor/display/FGUIManager";
import LayaManager from "../editor/display/LayaManager";
import CCManager from "../editor/display/CCManager";
import EgretManager from "../editor/display/EgretManager";

export default class DocumentUI{
    view:DocumentView;
    frame;
    frameStyle:CSSStyleDeclaration;
    constructor(view:DocumentView){
        this.frame = document.getElementById('gameFrame');
        if(this.frame){
            this.frameStyle =  this.frame.style;
            // this.line = document.getElementById("line");
            // this.lineStyle = this.line.style;
            this.frame.onload = this.frameLoad.bind(this);
        }else{
            window["setGameFrame"] = this.setGameFrame.bind(this);
        }
      
        EditorEvent.on(EditorEvent.SelectionChanged,this,this.selectItem) ;
        this.view = view;
       
      let device=  localStorage.getItem("device");
      if(device){
        this.view.m_device.selectedIndex = Number(device)
      }
      let orientation= localStorage.getItem("orientation");
      if(orientation){
        this.view.m_orientation.selectedIndex = Number(orientation)
      }
      this.view.m_device.on(fairygui.Events.STATE_CHANGED, this, this.resize);
      this.view.m_orientation.on(fairygui.Events.STATE_CHANGED, this, this.resize);
      this.view.m_editType.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
      this.view.m_btnfps.onClick(this,this.onFPS);
      this.view.m_btnpause.onClick(this,this.onPause);
      Laya.stage.on(Laya.Event.RESIZE,this,this.resize);
    //   Laya.stage.on(Laya.Event.KEY_DOWN,this,this.keyDown);
    //   Laya.stage.on(Laya.Event.KEY_UP,this,this.keyUp);
      this.resize();
      this.view.onClick(this,this.onClick);
      EditorEvent.on(EditorEvent.ClickChanged,this,this.onClickChange) ;
      EditorEvent.on(EditorEvent.TreeTypeChanged,this,this.onListChange );
      document.onkeydown =this.keyDown.bind(this);
      document.onkeyup  = this.keyUp.bind(this);
    //   document.oncontextmenu=this.doNothing;
    }
    setGameFrame(frame){
        
        if(this.frame){
            this.reset();
            this.frame = null;
            this.onClickChange();
        }else{
            this.frame = frame;
            this.frameStyle = frame.style;
            this.reset();
            this.loadTimes = 100;
            this.frameLoad();
            this.resize();
        }
    }
    keyDown(e){
        if(e.keyCode==Laya.Keyboard.CONTROL){
            this.view.m_editType.selectedIndex = 1;
        }
    }
    keyUp(e){
        if(e.keyCode==Laya.Keyboard.CONTROL){
            this.view.m_editType.selectedIndex = 0;
        }
    }
    onClick(){
        EditorEvent.event(EditorEvent.ClickChanged);
    }
    onClickChange(){
        if( Consts.engineManager)
          Consts.engineManager.hideRect()
    }
    resize(){
        if(!this.frame){
            return;
        }
        let value =  this.view.m_device.value.split(":");
        let p = this.view.m_docBg.localToGlobal(0,0);
        let w = this.view.m_docBg.width;
        let h = this.view.m_docBg.height;
        let vx = Number(value[0]);
        let vy =  Number(value[1]);
        if(vx&&vy){
            let scale = Math.min(vx,vy)/Math.max(vx,vy);
            if(this.view.m_orientation.selectedIndex==0){
                let sh = w*scale;
                if(sh>h){
                    let sw = h/scale;
                    p.x+=(w-sw)*0.5;
                    w = sw;
                }else{
                    p.y+=(h-sh)*0.5;
                    h = sh;
                }
               
            }else{
                let sw = h*scale;
                if(sw>w){
                    let sh = w/scale;
                    p.y+=(h-sh)*0.5;
                    h = sh;
                }else{
                    p.x+=(w-sw)*0.5;
                    w = sw;
                }
               
            }  
        }
        
        this.frameStyle.left = p.x/Laya.Browser.pixelRatio+"px";
        this.frameStyle.top = p.y/Laya.Browser.pixelRatio+"px";
        this.frame.width = w/Laya.Browser.pixelRatio;
        this.frame.height = h/Laya.Browser.pixelRatio;
        localStorage.setItem("device",this.view.m_device.selectedIndex+"");
        localStorage.setItem("orientation",this.view.m_orientation.selectedIndex+"");
        if( Consts.engineManager)
          Consts.engineManager.hideRect()
    }
    onFPS(){
        if( Consts.engineManager)
           Consts.engineManager.onFPS();
    }
    onPause(){
        if( Consts.engineManager)
           Consts.engineManager.onPause();
    }
    changeType(){
        if(this.view.m_editType.selectedIndex==1){
            EditorEvent.event(EditorEvent.TreeChanged);
            if( Consts.engineManager)
               Consts.engineManager.addSelectModel();
        }else{
            if( Consts.engineManager)
                Consts.engineManager.removeSelectModel();

        }
    }

    loadTimes;
    goweb(url){
       
        this.frame.src = url;
       this.reset();
        Laya.timer.loop(100,this,this.frameLoad);
    }
    reset(){
        Consts.gameWindow = null;
        if(Consts.displayList){
            Consts.displayList.end();
            Consts.displayList = null;
        }
        if(Consts.engineManager){
            Consts.engineManager.end();
            Consts.engineManager = null;
        }
        Consts.treeTypeList = [];
        this.view.m_editType.selectedIndex = 0;
        this.loadTimes = 0;
    }
    frameLoad(){
        var win = this.frame.contentWindow;
       
        Consts.gameWindow = win;
        if(win.Laya){
            Consts.engineManager = LayaEngine.getInstance();
            Consts.engineManager.start(win.Laya);
        }else if(win.egret){
            Consts.engineManager = EgretEngine.getInstance();
            Consts.engineManager.start(win.egret);
        }else if(win.cc){
            Consts.engineManager = CCEngine.getInstance();
            Consts.engineManager.start(win.cc);

            var toolbar = win.document.getElementsByClassName('toolbar')[0];
            if(toolbar)
               toolbar.style.display = 'none';
             //getComputedStyle(toolbar).display = 'none';
        }
        if(Consts.engineManager){
            this.loadTimes++;
            if(Consts.treeTypeList.indexOf(Consts.engineManager.type)==-1){
                Consts.treeTypeList.push(Consts.engineManager.type);
            }
        }
        var gamefgui = win.fairygui?win.fairygui:win.fgui;
        if(gamefgui){
            if(!gamefgui.GRoot._inst)
              return;
              Laya.timer.clear(this,this.frameLoad);
             this.initFgui();
           if(Consts.treeTypeList.indexOf(TreeType.FGUI)==-1)
             Consts.treeTypeList.push(TreeType.FGUI);
          EditorEvent.event(EditorEvent.TreeTypeDataChanged,Consts.treeTypeList.indexOf(TreeType.FGUI));
        }else{
            if(this.loadTimes>50){
                Laya.timer.clear(this,this.frameLoad);
                
                this.initManager();
                
                EditorEvent.event(EditorEvent.TreeTypeDataChanged,Consts.treeTypeList.indexOf(Consts.engineManager.type));
           
            }
        }
        if(Consts.displayList){
            this.frame.contentWindow.document.onkeydown=this.keyDown.bind(this);
            this.frame.contentWindow.document.onkeyup = this.keyUp.bind(this);  
        }
       
        // else {
        //     win.loadCallBack = this.loadCallBack.bind(this);
        // }
    }
    initFgui(){
        if(Consts.displayList){
            Consts.displayList.end();
            Consts.displayList = null;
        }
        var win = this.frame.contentWindow;
        var gamefgui = win.fairygui?win.fairygui:win.fgui;
        if(gamefgui){
              Consts.displayList = FGUIManager.getInstance(); 
              Consts.displayList.start(gamefgui.GRoot._inst,gamefgui);   
            EditorEvent.event(EditorEvent.TreeChanged);
           return true;
        }
    }
    initManager(){
        if(Consts.displayList){
            Consts.displayList.end();
            Consts.displayList = null;
        }
        var win = this.frame.contentWindow;
        if(win.Laya){
            Consts.displayList = LayaManager.getInstance(); 
            Consts.displayList.start(win.Laya.stage,win.Laya); 
            EditorEvent.event(EditorEvent.TreeChanged);
           
            return true;
        }else if(win.cc){
            Consts.displayList = CCManager.getInstance(); 
            Consts.displayList.start(win.cc.director.getScene(),win.cc); 
            EditorEvent.event(EditorEvent.TreeChanged);
           
            return true;
        }else if(win.egret){
            Consts.displayList = EgretManager.getInstance(); 
            Consts.displayList.start(win.egret.lifecycle.stage ,win.egret); 
            EditorEvent.event(EditorEvent.TreeChanged);
        }
    }
  
    onListChange(type){
        if(type==TreeType.FGUI){
            this.initFgui();
        }else{
            this.initManager();
        }
    }
    loadCallBack(){
        this.frameLoad();
    }
    selectItem(item){
        if(item){
            let rect = Consts.displayList.getDisPlayRect(item);
            if(rect)
            Consts.engineManager.showRect( rect[0],rect[1],Math.abs(rect[2]) ,Math.abs(rect[3]));
            else 
            Consts.engineManager.hideRect();
            // this.lineStyle.display = "block";
            // this.lineStyle.left =(Number(this.frameStyle.left.replace("px","")) +p.x; )+"px";
            // this.lineStyle.top =( Number(this.frameStyle.top.replace("px","")) +p.y)+"px";
            // this.lineStyle.width =(pr.x-p.x)+"px";
            // this.lineStyle.height =(pr.y-p.y)+"px";
        }else{
            // this.lineStyle.display = "none";
            // this.line.visible = false;
            Consts.engineManager.hideRect();
        }
    }
}