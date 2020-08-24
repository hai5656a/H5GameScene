import Consts from "./Consts";
import EditorEvent from "./EditorEvent";
import { IManager } from "./IManager";

export default class  CCManager implements IManager{
    private static  i:CCManager;
    static getInstance(){
        if(this.i==null){
            this.i = new CCManager();
        }
        return this.i;
    }
    type:string="Cocos Creator";
    game;
    start(game){
        this.game = game;
    }
    end(){
        this.removeTouch();
        this.game = null;
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
        let c =  new this.game.Color(0,0,0,255);
        c.fromHEX(color);
        let c2 =  new this.game.Color(0,0,0,255);
        c2.fromHEX(color);
        c2.setA(255*Consts.rectFill)
        line.drawRect(Consts.rectLineSize, c,c2);
        this.rectNode = line.node;
        line.name = Consts.EditorLineName;
        line.touchable = false;  
        
    }
    showRect(x,y,w,h){
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
    hideRect(){
        if(this.rect)
          this.rect.visible = false;
    }
    touchHander
    addTouch(){
      this.touchHander = this.onMouseDown.bind(this);
      this.game.game.canvas.addEventListener('mousedown',this.touchHander);
     let evt = this.game.internal.eventManager;
     if(evt){
        evt._isEnabled=false;
     }
    }

    hitTestScene(pos){
        var node = this.game.director.getScene();
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
       let selfPointer= this.game.internal.inputManager;
       var canvasBoundingRect = selfPointer._canvasBoundingRect;
       var location = selfPointer.getPointByEvent(event, canvasBoundingRect);
       var EventMouse = this.game.Event.EventMouse;
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
    removeTouch(){
        if(this.game){
            let evt = this.game.internal.eventManager;
            if(evt){
               evt._isEnabled=true;
            }
            if(this.touchHander){
                this.game.game.canvas.removeEventListener('mousedown',this.touchHander);
            }
        }
        
    }
    
    onFPS(){
        if( !this.game)
         return;
         var show = !this.game.debug.isDisplayStats();
         this.game.debug.setDisplayStats(show);  
    }
    checkVisible(gobj){
        return gobj._finalVisible;
    }
}