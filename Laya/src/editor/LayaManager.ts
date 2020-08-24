import Consts from "./Consts";
import EditorEvent from "./EditorEvent";
import { IManager } from "./IManager";

export default class  LayaManager implements IManager{
    private static  i:LayaManager;
    static getInstance(){
        if(this.i==null){
            this.i = new LayaManager();
        }
        return this.i;
    }
    type:string="Laya";
    game;
    start(game){
        this.game = game;
    }
    end(){
        if(this.isShowfps)
          this.onFPS()
        this.removeTouch();
        this.game = null;
    }
    rect:fgui.GGraph;
    createRectGraph(){
        if(this.rect){
            this.rect.removeFromParent();
            this.rect.dispose();
        }
        let line =this.rect= new Consts.gameFgui.GGraph();
        let color = Consts.rectColorStr;
        line.drawRect(Consts.rectLineSize,color,null);
        // line.alpha = Consts.rectFill;
        line.name = Consts.EditorLineName;
        line.touchable = false;  
        
    }
    showRect(x,y,w,h){
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
    hideRect(){
        if(this.rect)
          this.rect.visible = false;
    }
    touchHander
    addTouch(){
      this.game.MouseManager.enabled = false;
      this.touchHander = this.onMouseDown.bind(this);
      this.game.Render.canvas.addEventListener('mousedown',this.touchHander);
    }
    onMouseDown(evt){
        let mouseManager = this.game.MouseManager.instance
        mouseManager.initEvent(evt);
        mouseManager._checkAllBaseUI(mouseManager.mouseX, mouseManager.mouseY, ()=>{
            if(mouseManager._target){
                let comp = mouseManager._target["$owner"];
                EditorEvent.event(EditorEvent.Selection,comp);
            }
        })
       
    }
    removeTouch(){
        if(this.game){
            this.game.MouseManager.enabled = true;
            if(this.touchHander){
                this.game.Render.canvas.removeEventListener('mousedown',this.touchHander);
            }
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
        if( !this.game)
         return;
        if(this.isShowfps){
            this.game.Stat.hide()
            this.isShowfps = false;
        }else{
            this.isShowfps = true;
            this.game.Stat.show();
        }
           
    }
    onPause(){
        if( !this.game)
         return;
        if(this.game.timer.scale==0){
            this.game.timer.scale = 1;
        }else this.game.timer.scale = 0;
    }
    checkVisible(gobj){
        return gobj.internalVisible2;
    }
   
}