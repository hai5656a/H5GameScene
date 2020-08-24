import DocumentView from "../fgui/Builder/DocumentView";
import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";
import LayaManager from "../editor/LayaManager";
import EgretManager from "../editor/EgretManager";
import CCManager from "../editor/CCManager";

export default class DocumentUI{
    view:DocumentView;
    frame;
    frameStyle:CSSStyleDeclaration;
    constructor(view:DocumentView){
        this.frame = document.getElementById('gameFrame');
        this.frameStyle =  this.frame.style;
        // this.line = document.getElementById("line");
        // this.lineStyle = this.line.style;
        this.frame.onload = this.frameLoad.bind(this);
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
      document.onkeydown =this.keyDown.bind(this);
      document.onkeyup  = this.keyUp.bind(this);
    //   document.oncontextmenu=this.doNothing;
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
        if( Consts.manager)
          Consts.manager.hideRect()
    }
    resize(){
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
        
        this.frameStyle.left = p.x+"px";
        this.frameStyle.top = p.y+"px";
        this.frame.width = w;
        this.frame.height = h;
        localStorage.setItem("device",this.view.m_device.selectedIndex+"");
        localStorage.setItem("orientation",this.view.m_orientation.selectedIndex+"");
        if( Consts.manager)
          Consts.manager.hideRect()
    }
    onFPS(){
        if( Consts.manager)
           Consts.manager.onFPS();
    }
    onPause(){
        if( Consts.manager)
           Consts.manager.onPause();
    }
    changeType(){
        if(this.view.m_editType.selectedIndex==1){
            EditorEvent.event(EditorEvent.TreeChanged);
            if( Consts.manager)
               Consts.manager.addTouch();
            // if(Consts.gameLaya){
            //     Consts.gameLaya.stage.on("mouseup",this,this.selectClick);
            // }else if(Consts.gameEgret){
            //     Consts.gameEgret.lifecycle.stage.addEventListener("touchBegin",this.selectClick,this);
            // }
        }else{
            if( Consts.manager)
                Consts.manager.removeTouch();
            // if(Consts.gameLaya){
            //     Consts.gameLaya.stage.off("mouseup",this,this.selectClick);
            // }else if(Consts.gameEgret){
            //     Consts.gameEgret.lifecycle.stage.removeEventListener("touchBegin",this.selectClick,this);
            // }
        }
    }
    // egretClick(evt:egret.Event){
    //     evt.stopPropagation()
    //     if(evt.type){
    //         this.selectClick(evt);
    //     }
    // }
   
    // mouseOver(evt){
    //     this.selectClick(evt);
    // }
    goweb(url){
        Consts.gameWindow = null;
      
        Consts.gameFgui = null;
        Consts.GRoot = null;
        if(Consts.manager){
            Consts.manager.end();
            Consts.manager = null;
        }
        this.view.m_editType.selectedIndex = 0;
        this.frame.src = url;
        Laya.timer.loop(100,this,this.frameLoad);
    }
    frameLoad(){
        var win = this.frame.contentWindow;
        var gamefgui = win.fairygui?win.fairygui:win.fgui;
        Consts.gameWindow = win;
        if(win.Laya){
            Consts.manager = LayaManager.getInstance();
            Consts.manager.start(win.Laya);
        }else if(win.egret){
            Consts.manager = EgretManager.getInstance();
            Consts.manager.start(win.egret);
        }else if(win.cc){
            Consts.manager = CCManager.getInstance();
            Consts.manager.start(win.cc);
        }
        if(gamefgui){
            
            Consts.gameFgui =gamefgui;
            Consts.GRoot = gamefgui.GRoot._inst;
            if(!Consts.GRoot)
              return;
            Laya.timer.clear(this,this.frameLoad);
            // this.line = Consts.manager.createLineGraph();
           
            // // this.line.setSize (100,100);
            // this.line.visible = false;
            EditorEvent.event(EditorEvent.TreeChanged);

            this.frame.contentWindow.document.onkeydown=this.keyDown.bind(this);
            this.frame.contentWindow.document.onkeyup = this.keyUp.bind(this);
        }
        // else {
        //     win.loadCallBack = this.loadCallBack.bind(this);
        // }
    }
  
    loadCallBack(){
        this.frameLoad();
    }
    selectItem(item:fgui.GObject){
        if(item){
            
            let p = item.localToGlobal(0,0);
            let pr = item.localToGlobal(item.width,item.height);
            let x = p.x;
            let y =p.y;
            let width =pr.x-p.x;
            let height = pr.y-p.y;
            Consts.manager.showRect(x,y,width,height);
            // this.line.setSize(width,height);
            // this.line.x = x;
            // this.line.y = y;
            // this.line.visible = true;
            // if(this.line.parent){
            //     this.line.parent.setChildIndex(this.line,this.line.parent.numChildren-1);
            // }else{
            //     Consts.GRoot.addChild(this.line);
            // }
            
            // this.lineStyle.display = "block";
            // this.lineStyle.left =(Number(this.frameStyle.left.replace("px","")) +p.x; )+"px";
            // this.lineStyle.top =( Number(this.frameStyle.top.replace("px","")) +p.y)+"px";
            // this.lineStyle.width =(pr.x-p.x)+"px";
            // this.lineStyle.height =(pr.y-p.y)+"px";
        }else{
            // this.lineStyle.display = "none";
            // this.line.visible = false;
            Consts.manager.hideRect();
        }
    }
}