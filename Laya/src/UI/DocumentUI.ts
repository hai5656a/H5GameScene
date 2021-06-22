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
   
    constructor(view:DocumentView){
        Consts.frame = document.getElementById('gameFrame');
        if(Consts.frame){
            Consts.frameStyle =  Consts.frame.style;
            // this.line = document.getElementById("line");
            // this.lineStyle = this.line.style;
            Consts.frame.onload = this.frameLoad.bind(this);
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
      this.view.on(fairygui.Events.SIZE_CHANGED, this, this.resize);
      this.view.m_editType.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
      this.view.m_btnfps.onClick(this,this.onFPS);
      this.view.m_btnpause.onClick(this,this.onPause);
    //   Laya.stage.on(Laya.Event.RESIZE,this,this.resize);
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
        
        if(Consts.frame){
            this.reset();
            Consts.frame = null;
            this.onClickChange();
        }else{
            Consts.frame = frame;
            Consts.frameStyle = frame.style;
            this.reset();
            this.loadTimes = 200;
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
        if(!Consts.frame){
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
        
        Consts.frameStyle.left = p.x/Laya.Browser.pixelRatio+"px";
        Consts.frameStyle.top = p.y/Laya.Browser.pixelRatio+"px";
        Consts.frame.width = w/Laya.Browser.pixelRatio;
        Consts.frame.height = h/Laya.Browser.pixelRatio;
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
        Consts.frame.src = url;
        this.reset();
        Laya.timer.clear(this,this.frameLoad);
        Laya.timer.loop(50,this,this.frameLoad);
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
        var win = Consts.frame.contentWindow;
       console.log(new Date().getTime());
        Consts.gameWindow = win;
       
        if(Consts.engineManager){
            this.loadTimes++;
            if(Consts.treeTypeList.indexOf(Consts.engineManager.type)==-1){
                Consts.treeTypeList.push(Consts.engineManager.type);
            }
        }else{
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
                   win.onbeforeunload = ()=>{
                        this.reset();
                        Laya.timer.clear(this,this.frameLoad);
                        Laya.timer.loop(50,this,this.frameLoad);
                   }
      
                 //getComputedStyle(toolbar).display = 'none';
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
            if(this.loadTimes>30){
                Laya.timer.clear(this,this.frameLoad);
                
                this.initManager();
                
                EditorEvent.event(EditorEvent.TreeTypeDataChanged,Consts.treeTypeList.indexOf(Consts.engineManager.type));
           
            }
        }
        if(Consts.displayList&&Consts.frame&&Consts.frame.contentDocument){
            Consts.frame.contentDocument.onkeydown=this.keyDown.bind(this);
            Consts.frame.contentDocument.onkeyup = this.keyUp.bind(this);  
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
        var win = Consts.frame.contentWindow;
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
        var win = Consts.frame.contentWindow;
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