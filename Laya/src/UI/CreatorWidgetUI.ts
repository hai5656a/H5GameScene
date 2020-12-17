
import CreatorWidgetPanel from "../fgui/Builder/CreatorWidgetPanel";
import Consts from "../editor/Consts";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";

export default class CreatorWidgetUI{
    view:CreatorWidgetPanel;
    widget:cc.Widget;
    constructor(view:CreatorWidgetPanel){
       
        this.view = view;
        this.view.m_TargetValue.editable = false;
        this.view.m_AlignMode.on(fairygui.Events.STATE_CHANGED,this,this.onChanged)
        // let text =  this.view.m_color.getTextField() as fgui.GTextInput;
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
           this.view.visible = true;
        //    console.log(widget);
           (this.view.m_Top as EmCheckbox).setObj(widget,"isAlignTop",false);
           (this.view.m_TopValue as XYInput).setObj(widget,"top");
           (this.view.m_Left as EmCheckbox).setObj(widget,"isAlignLeft",false);
           (this.view.m_LeftValue as XYInput).setObj(widget,"left");
           (this.view.m_Right as EmCheckbox).setObj(widget,"isAlignRight",false);
           (this.view.m_RightValue as XYInput).setObj(widget,"right");
           (this.view.m_Bottom as EmCheckbox).setObj(widget,"isAlignBottom",false);
           (this.view.m_BottomValue as XYInput).setObj(widget,"bottom");
           (this.view.m_HorizontalCenter as EmCheckbox).setObj(widget,"isAlignHorizontalCenter",false);
           (this.view.m_HorizontalCenterValue as XYInput).setObj(widget,"horizontalCenter");
           (this.view.m_VerticlCenter as EmCheckbox).setObj(widget,"isAlignVerticalCenter",false);
           (this.view.m_VerticlCenterValue as XYInput).setObj(widget,"verticalCenter");
           (this.view.m_TargetValue as XYInput).setObj(widget,"isAlignXX",false);
           this.view.m_AlignMode.selectedIndex = this.widget.alignMode;
           if(widget.target){
            this.view.m_TargetValue.text = widget.target.name;
           }else if(item.parent){
            this.view.m_TargetValue.text =item.parent.name;
           }else 
           this.view.m_TargetValue.text ="";
       }else{
        this.view.visible = false;
       }
       
    }
    onChanged(){
        this.widget.alignMode =this.view.m_AlignMode.selectedIndex ;
    }
   
}