export default class XYInput extends fgui.GLabel{
    public static URL:string =  "ui://nk9ejx23wqe79a";
    public static URLNumber:string = "ui://nk9ejx23au3n69";
    protected onConstruct():void {
        let text = this.getTextField() as fgui.GTextInput;
        text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
        text.restrict="0-9.";
    }
    changeValue(){
        if( this.targetObj&&this.targetKey&&this.tKey){
            let obj =  this.targetObj[this.tKey];
            obj[this.targetKey] = Number(this.text); 
            this.targetObj[this.tKey]=obj;
        }
        else if( this.targetObj&&this.targetKey){
            this.targetObj[this.targetKey] = Number(this.text); 
        }
    }
    targetObj;
    targetKey;
    tKey;
    setObj(target,key,tKey?:any){
        this.targetObj = target;
        this.targetKey = key;
        this.tKey = tKey;
        if(tKey){
            this.text = target[tKey][key]+"";
        }
        else{
            this.text = target[key]+""; 
        }
    }
    
}