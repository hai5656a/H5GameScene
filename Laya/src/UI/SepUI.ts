
import LibView_sep from "../fgui/Builder/LibView_sep";
import Consts from "../editor/Consts";
export enum CursorType{
    Default="default",
    H_RESIZE="w-resize",//横向移动
    V_RESIZE="s-resize"//纵向移动
}
export default class SetUI extends LibView_sep{

    type:CursorType;
    lastp:Laya.Point;
    isMouseDown:boolean;
    div:HTMLElement;
    protected onConstruct():void {
        super.onConstruct();
        this.on(Laya.Event.MOUSE_OVER,this,this.onMouseover);
        this.on(Laya.Event.MOUSE_DOWN,this,this.onMousedown);
        this.on(Laya.Event.MOUSE_OUT,this,this.onMouseout);
        
    }
    onMouseover(){
        document.body.style.cursor=this.type;//"w-resize";
    }
    onMousedown(event:Laya.Event){
        if(!this.parent)
            return;
        this.isMouseDown = true;    
       
        this.lastp = this.parent.globalToLocal(event.stageX,event.stageY);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMousemove);
        // Laya.stage.on(Laya.Event.MOUSE_UP,this,this.onMouseup);
        document.onmousemove = this.onMousemove.bind(this);  // 注册鼠标移动事件处理函数
        document.onmouseup = this.onMouseup.bind(this); 

        if(!this.div ){
            this.div = document.createElement('div');
            this.div.style.width ="100%";
            this.div.style.height ="100%";
            this.div.style.position = 'absolute';
            this.div.style.zIndex="99999";
            document.body.appendChild(this.div);
        }
        
        
        // if(Consts.frame&&Consts.frame.contentDocument){
        //     // Consts.frameStyle.display = "none";
        //     Consts.frame.contentDocument.onmousemove = this.onFrameMousemove.bind(this);
        //     Consts.frame.contentDocument.onmouseup = document.onmouseup;
        // }
    }
    onMouseup(){
        this.isMouseDown = false; 
        this.onMouseout();
    }
    onMouseout(){
        if( this.isMouseDown )
        return;
        // Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMousemove);
        // Laya.stage.off(Laya.Event.MOUSE_UP,this,this.onMouseup);
        document.onmousemove = document.onmouseup = null;
        document.body.style.cursor= CursorType.Default;// "default";
        // if(Consts.frame&&Consts.frame.contentDocument){
        //     // Consts.frameStyle.display = "block";
        //     Consts.frame.contentDocument.onmousemove = null;
        //     Consts.frame.contentDocument.onmouseup = null;
        // }
        const div = this.div;
        div && div.parentNode && div.parentNode.removeChild(div);
        this.div = null;
        
    }
    onFrameMousemove(event){
        if(Consts.frame){
            var fpos = Consts.frame.getBoundingClientRect();
            var x = event.clientX + fpos.left
            var y = event.clientY + fpos.top
            this.mouseMove(x,y);
        }
       
    }
    onMousemove(event){
        this.mouseMove(event.clientX,event.clientY)
    }
    mouseMove(x,y){
       if(!this.parent)
            return;
        var  mx = x*Laya.Browser.pixelRatio;  // 按下鼠标指针的x轴坐标
        var  my = y*Laya.Browser.pixelRatio;  // 按下鼠标指针的y轴坐标
        
        var p= this.parent.globalToLocal(mx,my);
        if(this.type == CursorType.H_RESIZE){
            var px =p.x- this.lastp.x;
            var tox = this.x+px;
            this.x =Math.min(this.parent.width, Math.max(0,tox)) ;
        }else if(this.type == CursorType.V_RESIZE){
            var py =p.y- this.lastp.y;
            var toy = this.y+py;
            this.y =Math.min(this.parent.height, Math.max(0,toy)) ;
        }
        this.lastp = p;
    }
}