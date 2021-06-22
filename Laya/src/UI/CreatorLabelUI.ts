
import Consts from "../editor/Consts";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import { IPropsUI } from "./PropsUI";
import CreatorLabelPropsPanel from "../fgui/Builder/CreatorLabelPropsPanel";
import TextInput from "./Builder/TextInput";
import ComboBox from "./Builder/ComboBox";
import CreatorCompUI from "./CreatorCompUI";

export default class CreatorLabelUI extends CreatorLabelPropsPanel implements IPropsUI{
    label:cc.Label;
    protected onConstruct():void {
        super.onConstruct();
        this.m_font.editable = false;
        // this.m_cachemode.on(fairygui.Events.STATE_CHANGED,this,this.onChangedCache)
        // this.m_overflow.on(fairygui.Events.STATE_CHANGED,this,this.onChangedOverflow)
        // let text =  this.m_color.getTextField() as fgui.GTextInput;
        // text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
    }
    public setData(item){
         this.setCCData(item);
      (this.m_comp as CreatorCompUI).setData(item);
    }
    private  setCCData(label:cc.Label){
      
        // let gameModule = Consts.displayList.displayModule; 
        // var widget:cc.Widget = item.getComponent(gameModule.Widget);
        this.label = label;
       if(label){
           this.visible = true;
        //    console.log(widget);
           (this.m_text as TextInput).setObj(label,"string");
           (this.m_bold as EmCheckbox).setObj(label,"enableBold");
           (this.m_italic as EmCheckbox).setObj(label,"enableItalic");
           (this.m_underline as EmCheckbox).setObj(label,"enableUnderline");
           (this.m_fontSize as XYInput).setObj(label,"fontSize");
           (this.m_lineHeight as XYInput).setObj(label,"lineHeight");
           (this.m_cachemode as ComboBox).setObj(label,"cacheMode");
           (this.m_overflow as ComboBox).setObj(label,"overflow");
           (this.m_hAlign as ComboBox).setObj(label,"horizontalAlign");
           (this.m_vAlign as ComboBox).setObj(label,"verticalAlign");
           (this.m_font as TextInput).setObj(label,"fontFamily");
        //    if(!label.useSystemFont){
        //     this.m_font.text = label.font.name;
        //    }
       }else{
        this.visible = false;
       }
       
    }
}