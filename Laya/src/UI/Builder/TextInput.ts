export default class TextInput extends fgui.GLabel{
    public static URLInput:string = "ui://nk9ejx23au3n6k"
    public static URLArea:string = "ui://nk9ejx23gcza1s"
    protected onConstruct():void {
        let text = this.getTextField() as fgui.GTextInput;
        text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
    }
    changeValue(){
        if( this.targetObj&&this.targetKey&&this.tKey){
            let obj =  this.targetObj[this.tKey];
            obj[this.targetKey] = this.text; 
            this.targetObj[this.tKey]=obj;
        }
        else if( this.targetObj&&this.targetKey){
            this.targetObj[this.targetKey] = this.text; 
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