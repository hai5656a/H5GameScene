export default class XYInput extends fgui.GLabel{
    public static URL:string =  "ui://nk9ejx23wqe79a";
    public static URLNumber:string = "ui://nk9ejx23au3n69";
    protected onConstruct():void {
        let text = this.getTextField() as fgui.GTextInput;
        text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
        text.restrict="0-9.";
    }
    changeValue(){
        if( this.targetObj&&this.targetKey){
            this.targetObj[this.targetKey] = Number(this.text); 
        }
    }
    targetObj;
    targetKey;
    setObj(target,key){
        this.targetObj = target;
        this.targetKey = key;
        this.text = this.targetObj[this.targetKey]+"";
    }
    
}