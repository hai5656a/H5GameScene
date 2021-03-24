
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import CreatorPropsPanel from "../fgui/Builder/CreatorPropsPanel";
import { IPropsUI } from "./PropsUI";

export default class CreatorPropsUI extends CreatorPropsPanel implements IPropsUI{
    item:cc.Node;
    protected onConstruct():void {
        super.onConstruct();
        this.m_name.editable = false;

        let text =  this.m_color.getTextField() as fgui.GTextInput;
        text.displayObject.on(Laya.Event.BLUR,this,this.changeValue);
    }
    public setData(item){
        // let gameModule = Consts.displayList.displayModule; 
         this.setCCData(item);
      
    }
    private setCCData(item:cc.Node){
        this.item = item;
        this.m_name.text = item.name;
        (this.m_x as XYInput).setObj(item,"x");
        (this.m_y as XYInput).setObj(item,"y");
        (this.m_width as XYInput).setObj(item,"width");
        (this.m_height as XYInput).setObj(item,"height");
        (this.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.m_skewX as XYInput).setObj(item,"skewX");
        (this.m_skewY as XYInput).setObj(item,"skewY");
        (this.m_pivotX as XYInput).setObj(item,"anchorX");
        (this.m_pivotY as XYInput).setObj(item,"anchorY");
        (this.m_alpha as XYInput).setObj(item,"opacity");
        (this.m_rotation as XYInput).setObj(item,"rotation");
        (this.m_visible as EmCheckbox).setObj(item,"active",false);
        (this.m_mouse as EmCheckbox).setObj(item,"mouseThrough",false);
        this.m_color.text = item.color.toCSS("#rrggbb");
    }
 

    changeValue(){
        this.item.color = this.item.color.fromHEX(this.m_color.text);
    }
   dispose(){
        let text =  this.m_color.getTextField() as fgui.GTextInput;
        text.displayObject.off(Laya.Event.BLUR,this,this.changeValue);
       super.dispose();
   }

}