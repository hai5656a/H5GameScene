export default class  EmCheckbox extends fgui.GButton{
    public static URL:string =  "ui://nk9ejx23dp4f7u";
    protected onConstruct():void {
        this.on(fgui.Events.STATE_CHANGED,this,this.changeValue);
        // atext.restrict="0-9.";
    }
    changeValue(){
        if( this.targetObj&&this.targetKey){
            this.targetObj[this.targetKey] =this.isNot? !this.selected:this.selected; 
        }
    }
    targetObj;
    targetKey;
    isNot;
    setObj(target,key,isNot){
        this.targetObj = target;
        this.targetKey = key;
        this.isNot = isNot;
        this.selected =isNot?!this.targetObj[this.targetKey]: this.targetObj[this.targetKey];
    }
}