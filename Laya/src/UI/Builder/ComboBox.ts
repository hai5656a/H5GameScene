export default class  ComboBox extends fgui.GComboBox{
    public static URL:string =  "ui://nk9ejx23gcza18";
    protected onConstruct():void {
        this.on(fgui.Events.STATE_CHANGED,this,this.changeValue);
    }
    changeValue(){
        if( this.targetObj&&this.targetKey){
            this.targetObj[this.targetKey] =this.selectedIndex; 
        }
    }
    targetObj;
    targetKey;
    isNot;
    setObj(target,key){
        this.targetObj = target;
        this.targetKey = key;
        this.selectedIndex = this.targetObj[this.targetKey];
    }
    dispose(){
        this.off(fairygui.Events.STATE_CHANGED,this,this.changeValue)
        super.dispose();
    }
}