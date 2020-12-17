import Consts, { TreeType } from "../Consts";
import EditorEvent from "../EditorEvent";
import { IEngine } from "./IEngine";

export default class  LayaEngine implements IEngine{
    private static  i:LayaEngine;
    static getInstance(){
        if(this.i==null){
            this.i = new LayaEngine();
        }
        return this.i;
    }
    type=TreeType.Laya;
    engine;
    start(game){
        this.engine = game;
    }
    end(){
        if(this.isShowfps)
          this.onFPS()
        this.removeSelectModel();
        this.engine = null;
        this.removeRect();
    }
    rect:Laya.Sprite;
    createRectGraph(){
        if(this.rect){
            this.rect.destroy(true);
        }
        let line:Laya.Sprite =this.rect= new this.engine.Sprite();
        // let color = Consts.rectColorStr;
        // line.graphics.drawRect(Consts.rectLineSize,color,null);
        // line.alpha = Consts.rectFill;
        line.name = Consts.EditorLineName;
        line.mouseEnabled = false;
        
    }
    showRect(x,y,w,h){
        if(!this.rect||this.rect.destroyed){
            this.createRectGraph();
        }
        this.rect.visible =  true;
        // this.rect.setSize(w,h);
        let color = Consts.rectColorStr;
        this.rect.graphics.clear();
        if(w>=0&&h>=0){
            this.rect.graphics.drawRect(0,0,w,h,null,color,Consts.rectLineSize);
        }else{
            this.rect.graphics.drawLine(-20,0,20,0,color,Consts.rectLineSize);
            this.rect.graphics.drawLine(0,-20,0,20,color,Consts.rectLineSize);
        }
        this.rect.x = x;
        this.rect.y = y;
        this.rect.visible = true;
        if(this.rect.parent){
            this.rect.parent.setChildIndex(this.rect,this.rect.parent.numChildren-1);
        }else{
            this.engine.stage.addChild(this.rect);
        }
        
    }
    hideFGUIRect(){
        if(this.rect)
          this.rect.visible = false;
    }
    removeRect(){
        if (this.rect)
           this.rect.destroy(true);
        this.rect = null;
    }
    touchHander
    addSelectModel(){
      this.engine.MouseManager.enabled = false;
      this.touchHander = this.onMouseDown.bind(this);
      this.engine.Render.canvas.addEventListener('mousedown',this.touchHander);
    }
    onMouseDown(evt){
        let mouseManager = this.engine.MouseManager.instance
        mouseManager.initEvent(evt);
        if(mouseManager.check){//laya
            mouseManager.check( mouseManager._stage,mouseManager.mouseX, mouseManager.mouseY, ()=>{
                if(mouseManager._target){
                    let comp = mouseManager._target//["$owner"];
                    EditorEvent.event(EditorEvent.Selection,comp);
                }
            })
        }else if(mouseManager._checkAllBaseUI){//laya2
            mouseManager._checkAllBaseUI(mouseManager.mouseX, mouseManager.mouseY, ()=>{
                if(mouseManager._target){
                    let comp = mouseManager._target//["$owner"];
                    EditorEvent.event(EditorEvent.Selection,comp);
                }
            })
        }
       
       
    }
    removeSelectModel(){
        if(this.engine){
            this.engine.MouseManager.enabled = true;
            if(this.touchHander){
                this.engine.Render.canvas.removeEventListener('mousedown',this.touchHander);
            }
        }
        
    }
    //  selectClick(evt){
    //     // evt.stopPropagation();
    //    let comp = evt.target["$owner"];
    //    EditorEvent.event(EditorEvent.Selection,comp);
      
    //     console.log(evt);
    // }
    isShowfps
    onFPS(){
        if( !this.engine)
         return;
        if(this.isShowfps){
            this.engine.Stat.hide()
            this.isShowfps = false;
        }else{
            this.isShowfps = true;
            this.engine.Stat.show();
        }
           
    }
    onPause(){
        if( !this.engine)
         return;
        if(this.engine.timer.scale==0){
            this.engine.timer.scale = 1;
        }else this.engine.timer.scale = 0;
    }
    checkFGUIVisible(gobj){
        return  gobj._displayObject&&gobj.internalVisible&& gobj.internalVisible2;
    }
   
}