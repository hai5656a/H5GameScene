
import Consts from "../editor/Consts";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import { IPropsUI } from "./PropsUI";
import CreatorLabelPropsPanel from "../fgui/Builder/CreatorLabelPropsPanel";
import TextInput from "./Builder/TextInput";
import ComboBox from "./Builder/ComboBox";
import CreatorComp from "../fgui/Builder/CreatorComp";

export default class CreatorCompUI extends CreatorComp implements IPropsUI{
    component:cc.Component;
    protected onConstruct():void {
        super.onConstruct();
        this.m_title.onClick(this,this.showlog)
    }
    public setData(item){
         this.setCCData(item);
      
    }
    showlog(){
        console.log( this.component);
    }
    private  setCCData(component:cc.Component){
      
        // let gameModule = Consts.displayList.displayModule; 
        // var widget:cc.Widget = item.getComponent(gameModule.Widget);
        this.component = component;
        this.m_title.text = Consts.getClassName(component);
    //    if(component){
    //        this.visible = true;
        
    //    }else{
    //     this.visible = false;
    //    }
       
    }
}