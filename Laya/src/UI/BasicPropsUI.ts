import BasicPropsPanel from "../fgui/Builder/BasicPropsPanel";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import Consts from "../editor/Consts";
import TitleBar from "../fgui/Builder/TitleBar";
import { IPropsUI } from "./PropsUI";

export default class BasicPropsUI extends BasicPropsPanel implements IPropsUI{
  
    protected onConstruct():void {
        super.onConstruct();
        this.m_name.editable = false;
    }
    public setData(item){
        let gameModule = Consts.displayList.displayModule; 
        if(gameModule.GObject&&item instanceof gameModule.GObject){
            this.m_type.selectedIndex = 0;
            this.setFGUIData(item);
        }else if(gameModule.DisplayObject&&item instanceof gameModule.DisplayObject){
            this.m_type.selectedIndex = 4;
            this.setEgretData(item);
        }
        else if(gameModule.Sprite&&item instanceof gameModule.Sprite){
            this.m_type.selectedIndex = 1;
            this.setLaya2DData(item);
        }
    }
    public setFGUIData(item:fairygui.GObject){
        this.m_name.text = item.name;
        (this.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.m_y as XYInput).setObj(item,"y");
        (this.m_width as XYInput).setObj(item,"width");
        (this.m_height as XYInput).setObj(item,"height");
        (this.m_minWidth as XYInput).setObj(item,"minWidth");
        (this.m_minHeight as XYInput).setObj(item,"minHeight");
        (this.m_maxWidth as XYInput).setObj(item,"maxWidth");
        (this.m_maxHeight as XYInput).setObj(item,"maxHeight");
        (this.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.m_skewX as XYInput).setObj(item,"skewY");
        (this.m_pivotX as XYInput).setObj(item,"pivotX");
        (this.m_pivotY as XYInput).setObj(item,"pivotY");
        (this.m_alpha as XYInput).setObj(item,"alpha");
        (this.m_rotation as XYInput).setObj(item,"rotation");

        (this.m_anchor as EmCheckbox).setObj(item,"pivotAsAnchor",false);
        // this.m_anchor.touchable =false;
        // this.m_anchor.enabled = false;
        (this.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.m_grayed as EmCheckbox).setObj(item,"grayed",false);
        (this.m_touchable as EmCheckbox).setObj(item,"touchable",true);
    }
    public setLaya2DData(item:Laya.Sprite){
        this.m_name.text = item.name;
        (this.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.m_y as XYInput).setObj(item,"y");
        (this.m_width as XYInput).setObj(item,"width");
        (this.m_height as XYInput).setObj(item,"height");
        (this.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.m_skewX as XYInput).setObj(item,"skewY");
        (this.m_pivotX as XYInput).setObj(item,"pivotX");
        (this.m_pivotY as XYInput).setObj(item,"pivotY");
        (this.m_alpha as XYInput).setObj(item,"alpha");
        (this.m_rotation as XYInput).setObj(item,"rotation");
        (this.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.m_touchable as EmCheckbox).setObj(item,"mouseThrough",false);
    }
   public setEgretData(item:egret.DisplayObject){
        this.m_name.text = item.name;
        (this.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.m_y as XYInput).setObj(item,"y");
        (this.m_width as XYInput).setObj(item,"width");
        (this.m_height as XYInput).setObj(item,"height");
        (this.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.m_skewX as XYInput).setObj(item,"skewY");
        (this.m_pivotX as XYInput).setObj(item,"anchorOffsetX"); 
        (this.m_pivotY as XYInput).setObj(item,"anchorOffsetY");
        (this.m_alpha as XYInput).setObj(item,"alpha");
        (this.m_rotation as XYInput).setObj(item,"rotation");
        (this.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.m_touchable as EmCheckbox).setObj(item,"touchEnabled",true);
    }
}