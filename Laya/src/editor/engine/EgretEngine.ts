import Consts, { TreeType } from "../Consts";
import EditorEvent from "../EditorEvent";
import { Asset, IEngine } from "./IEngine";

export default class  EgretEngine implements IEngine{
    private static  i:EgretEngine;
    static getInstance(){
        if(this.i==null){
            this.i = new EgretEngine();
        }
        return this.i;
    }
    type=TreeType.Egret;
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
    rect:egret.Sprite;
    createRectGraph(){
        if(this.rect&&this.rect.parent){
            this.rect.parent.removeChild(this.rect);
            // this.rect.d();
        }
        let line:egret.Sprite = this.rect = new this.engine.Sprite();
       
        // this.rect.graphics.drawRect(Consts.rectLineSize,Consts.rectColor,1,Consts.rectColor,Consts.rectFill);
        line.name = Consts.EditorLineName;
        line.touchEnabled = false;  
        
    }
    showRect(x,y,w,h){
        if(!this.rect){
            this.createRectGraph();
        }
        this.rect.visible =  true;
        // this.rect.setSize(w,h);
        let ctx = this.rect.graphics;
        ctx.clear();
        ctx.lineStyle(Consts.rectLineSize, Consts.rectColor, 1);
        ctx.beginFill(Consts.rectColor, Consts.rectFill);
        ctx.drawRect(0,0,w,h);
        ctx.endFill();
            this.rect.x = x;
            this.rect.y = y;
         
            if(this.rect.parent){
                this.rect.parent.setChildIndex(this.rect,this.rect.parent.numChildren-1);
            }else{
                this.engine.lifecycle.stage.addChild(this.rect);
            }
    }
    hideRect(){
        if(this.rect)
          this.rect.visible = false;
    }
    removeRect(){
        if (this.rect&&this.rect.parent)
          this.rect.parent.removeChild(this.rect);
        this.rect = null;
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
            let comp = target//["$owner"];
            EditorEvent.event(EditorEvent.Selection,comp);
            //console.log(target);
        }
    }
    removeSelectModel(){
        if(this.touchHander&&this.player){
            this.player.canvas.removeEventListener('mousedown',this.touchHander);
            this.player.webTouchHandler.touch.maxTouches = 1;
            this.player = null;
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
        return  gobj.internalVisible&& gobj.internalVisible2;
    }
    totalTextureSize;
    getResouceList():Asset[]{
        let res = Consts.gameWindow["RES"]
        this.totalTextureSize = 0;
        var all = []
        if(res){
            var fsData = res.config.config.fileSystem.fsData;
            for(var key in fsData){
                var  item= fsData[key];
                var  data = res.host.get(item);
                if(data){
                    var asset:Asset = {};
                    asset.data = data;
                    asset.url =item.root + item.url;
                    asset.name = item.url;
                    asset.type =  Consts.urlToType( item.url);
                    all.push(asset);
                    if(data.textureWidth&&data.textureHeight){
                        this.totalTextureSize += data.textureWidth* data.textureHeight * 4 ;
                    }
                }
               
            }
        }
        return all;
    }
    get gpuMemory(): number {
        return this.totalTextureSize ;
      }
}