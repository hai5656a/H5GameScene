import Consts from "../Consts";
import EditorEvent from "../EditorEvent";
import { IEngineManager } from "./IEngineManager";

export default class  CCManager implements IEngineManager{
    private static  i:CCManager;
    static getInstance(){
        if(this.i==null){
            this.i = new CCManager();
        }
        return this.i;
    }
    type:string="Cocos Creator";
    engine;
    start(game){
        this.engine = game;
    }
    end(){
        this.removeSelectModel();
        this.engine = null;
    }
    rectNode
    rect;
    createRectGraph(){
        if(this.rect){
            this.rect.removeFromParent();
            this.rect.dispose();
        }
        let line =this.rect= new Consts.gameFgui.GGraph();
        let color = Consts.rectColorStr;
        let c =  new this.engine.Color(0,0,0,255);
        c.fromHEX(color);
        let c2 =  new this.engine.Color(0,0,0,255);
        c2.fromHEX(color);
        c2.setA(255*Consts.rectFill)
        line.drawRect(Consts.rectLineSize, c,c2);
        this.rectNode = line.node;
        line.name = Consts.EditorLineName;
        line.touchable = false;  
        
    }
    showFGUIRect(x,y,w,h){
        if(!this.rect||!this.rect._node){
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
    addSelectModel(){
      this.touchHander = this.onMouseDown.bind(this);
      this.engine.game.canvas.addEventListener('mousedown',this.touchHander);
     let evt = this.engine.internal.eventManager;
     if(evt){
        evt._isEnabled=false;
     }
    }

    hitTestScene(pos){
        var node = this.engine.director.getScene();
        this.target = null;
        for(let i = 0;i<node.children.length;i++){
            this.hitTest(node.children[i],pos)
        }
    }
    target
    hitTest(node,pos){
        if(node.active&&node!=this.rectNode){
            if(node._hitTest(pos)){
                this.target = node;
            }
            for(let i = 0;i<node.children.length;i++){
                this.hitTest(node.children[i],pos)
            }
        }
    }
    onMouseDown(event){
       let selfPointer= this.engine.internal.inputManager;
       var canvasBoundingRect = selfPointer._canvasBoundingRect;
       var location = selfPointer.getPointByEvent(event, canvasBoundingRect);
       var EventMouse = this.engine.Event.EventMouse;
       var mouseEvent = selfPointer.getMouseEvent(location, canvasBoundingRect, EventMouse.DOWN);
       mouseEvent.setButton(event.button);
       var pos = mouseEvent.getLocation();
       this.hitTestScene(pos);
       if(this.target){
            let comp = this.target["$gobj"];
            EditorEvent.event(EditorEvent.Selection,comp);
            console.log(this.target);
       }
      
       event.stopPropagation();
       event.preventDefault();
    }
    removeSelectModel(){
        if(this.engine){
            let evt = this.engine.internal.eventManager;
            if(evt){
               evt._isEnabled=true;
            }
            if(this.touchHander){
                this.engine.game.canvas.removeEventListener('mousedown',this.touchHander);
            }
        }
        
    }
    
    onFPS(){
        if( !this.engine)
         return;
         var show = !this.engine.debug.isDisplayStats();
         this.engine.debug.setDisplayStats(show);  
    }
    onPause(){
        if( !this.engine)
         return;
         var shouldPause = !this.engine.game.isPaused();
            if (shouldPause) {
                this.engine.game.pause();
            } 
            else {
                this.engine.game.resume();
            }
    }
    checkFGUIVisible(gobj){
        return gobj._finalVisible;
    }
}