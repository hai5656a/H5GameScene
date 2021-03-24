
import CreatorWidgetPanel from "../fgui/Builder/CreatorWidgetPanel";
import Consts from "../editor/Consts";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import { IPropsUI } from "./PropsUI";

export default class CreatorWidgetUI extends CreatorWidgetPanel implements IPropsUI{
    widget:cc.Widget;
    protected onConstruct():void {
        super.onConstruct();
        this.m_TargetValue.editable = false;
        this.m_AlignMode.on(fairygui.Events.STATE_CHANGED,this,this.onChanged)
        // let text =  this.m_color.getTextField() as fgui.GTextInput;
        // text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
    }
    public setData(item){
        // let gameModule = Consts.displayList.displayModule; 
         this.setCCData(item);
      
    }
    private  setCCData(item:cc.Node){
      
        let gameModule = Consts.displayList.displayModule; 
        var widget:cc.Widget = item.getComponent(gameModule.Widget);
        this.widget = widget;
       if(widget){
           this.visible = true;
        //    console.log(widget);
           (this.m_Top as EmCheckbox).setObj(widget,"isAlignTop",false);
           (this.m_TopValue as XYInput).setObj(widget,"top");
           (this.m_Left as EmCheckbox).setObj(widget,"isAlignLeft",false);
           (this.m_LeftValue as XYInput).setObj(widget,"left");
           (this.m_Right as EmCheckbox).setObj(widget,"isAlignRight",false);
           (this.m_RightValue as XYInput).setObj(widget,"right");
           (this.m_Bottom as EmCheckbox).setObj(widget,"isAlignBottom",false);
           (this.m_BottomValue as XYInput).setObj(widget,"bottom");
           (this.m_HorizontalCenter as EmCheckbox).setObj(widget,"isAlignHorizontalCenter",false);
           (this.m_HorizontalCenterValue as XYInput).setObj(widget,"horizontalCenter");
           (this.m_VerticlCenter as EmCheckbox).setObj(widget,"isAlignVerticalCenter",false);
           (this.m_VerticlCenterValue as XYInput).setObj(widget,"verticalCenter");
           (this.m_TargetValue as XYInput).setObj(widget,"isAlignXX",false);
           this.m_AlignMode.selectedIndex = this.widget.alignMode;
           if(widget.target){
            this.m_TargetValue.text = widget.target.name;
           }else if(item.parent){
            this.m_TargetValue.text =item.parent.name;
           }else 
           this.m_TargetValue.text ="";
       }else{
        this.visible = false;
       }
       
    }
    onChanged(){
        this.widget.alignMode =this.m_AlignMode.selectedIndex ;
    }
   dispose(){
       this.m_AlignMode.off(fairygui.Events.STATE_CHANGED,this,this.onChanged)
       super.dispose();
   }
}