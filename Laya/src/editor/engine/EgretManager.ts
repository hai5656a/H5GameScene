import Consts from "../Consts";
import EditorEvent from "../EditorEvent";
import { IEngineManager } from "./IEngineManager";

export default class  EgretManager implements IEngineManager{
    private static  i:EgretManager;
    static getInstance(){
        if(this.i==null){
            this.i = new EgretManager();
        }
        return this.i;
    }
    type:string="Egret";
    engine;
    start(game){
        this.engine = game;
    }
    end(){
        if(this.isShowfps)
          this.onFPS()
        this.removeSelectModel();
        this.engine = null;
        
    }
    rect:fgui.GGraph;
    createRectGraph(){
        if(this.rect){
            this.rect.removeFromParent();
            this.rect.dispose();
        }
        let line =this.rect= new Consts.gameFgui.GGraph();
        line.drawRect(Consts.rectLineSize,Consts.rectColor,1,Consts.rectColor,Consts.rectFill);
        line.name = Consts.EditorLineName;
        line.touchable = false;  
        
    }
    showFGUIRect(x,y,w,h){
        if(!this.rect||this.rect.isDisposed){
            this.createRectGraph();
        }
        this.rect.visible =  true;
        this.rect.setSize(w,h);
            this.rect.x = x;
            this.rect.y = y;
            this.rect.visible = true;
            if(this.rect.parent){
                this.rect.parent.setChildIndex(this.rect,this.rect.parent.numChildren-1);
            }else{
                Consts.GRoot.addChild(this.rect);
            }
    }
    hideFGUIRect(){
        if(this.rect)
          this.rect.visible = false;
    }
    touchHander
  
    player;
    addSelectModel(){
        var containerList =Consts.gameWindow.document.querySelectorAll(".egret-player");
        var length = containerList.length;
        if(length>0){
            var container = containerList[0];
            this.player = container["egret-player"];
            this.touchHander = this.onMouseDown.bind(this);
            this.player.canvas.addEventListener('mousedown',this.touchHander);
            this.player.webTouchHandler = this.player.webTouchHandler;
            this.player.webTouchHandler.touch.maxTouches = 0;
        }
    }
    onMouseDown(event){
        var location = this.player.webTouchHandler.getLocation(event);
        var target =  this.engine.lifecycle.stage.$hitTest(location.x, location.y);
        if(target){
            let comp = target["$owner"];
            EditorEvent.event(EditorEvent.Selection,comp);
            console.log(target);
        }
    }
    removeSelectModel(){
        if(this.touchHander&&this.player){
            this.player.canvas.removeEventListener('mousedown',this.touchHander);
            this.player.webTouchHandler.touch.maxTouches = 1;
            this.player = null;
        }
    }
     selectClick(evt){
        // evt.stopPropagation();
       let comp = evt.target["$owner"];
       EditorEvent.event(EditorEvent.Selection,comp);
      
        console.log(evt);
    }
    isShowfps
    onFPS(){
        if( !this.engine||!Consts.gameWindow)
        return;
        let panel =Consts.gameWindow.document.getElementById('egret-fps-panel');
        if(panel){
            if(this.isShowfps){
                panel.style.visibility ="hidden";
                this.isShowfps = false;
            }else {
                panel.style.visibility ="visible";
                this.isShowfps = true;
            }
        }else{
            var containerList =Consts.gameWindow.document.querySelectorAll(".egret-player");
            var length = containerList.length;
            if(length>0){
                var container = containerList[0];
                let player = container["egret-player"];
                player.player.displayFPS(true, false, "", "");
                this.isShowfps = true;
            }
        }
    }
    
    onPause(){
        if( !this.engine)
         return;
        if(this.engine.ticker.isPaused){
            this.engine.ticker.resume();
        }else {
            this.engine.ticker.pause()
        };
    }
    checkFGUIVisible(gobj){
        return gobj.internalVisible2;
    }
}