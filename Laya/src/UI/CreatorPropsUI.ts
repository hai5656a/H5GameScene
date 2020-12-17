import BasicPropsPanel from "../fgui/Builder/BasicPropsPanel";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import Consts from "../editor/Consts";
import CreatorPropsPanel from "../fgui/Builder/CreatorPropsPanel";

export default class CreatorPropsUI{
    view:CreatorPropsPanel;
    item:cc.Node;
    constructor(view:CreatorPropsPanel){
       
        this.view = view;
        this.view.m_name.editable = false;

        let text =  this.view.m_color.getTextField() as fgui.GTextInput;
        text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
    }
    public setData(item){
        // let gameModule = Consts.displayList.displayModule; 
         this.setCCData(item);
      
    }
    private setCCData(item:cc.Node){
        this.item = item;
        this.view.m_name.text = item.name;
        (this.view.m_x as XYInput).setObj(item,"x");
        (this.view.m_y as XYInput).setObj(item,"y");
        (this.view.m_width as XYInput).setObj(item,"width");
        (this.view.m_height as XYInput).setObj(item,"height");
        (this.view.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.view.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.view.m_skewX as XYInput).setObj(item,"skewX");
        (this.view.m_skewY as XYInput).setObj(item,"skewY");
        (this.view.m_pivotX as XYInput).setObj(item,"anchorX");
        (this.view.m_pivotY as XYInput).setObj(item,"anchorY");
        (this.view.m_alpha as XYInput).setObj(item,"opacity");
        (this.view.m_rotation as XYInput).setObj(item,"rotation");
        (this.view.m_visible as EmCheckbox).setObj(item,"active",false);
        this.view.m_color.text = item.color.toCSS("#rrggbb");
        
       
    }
    changeValue(){
        this.item.color.fromHEX(this.view.m_color.text);
    }
   
}