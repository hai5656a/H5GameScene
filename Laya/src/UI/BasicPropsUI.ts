import BasicPropsPanel from "../fgui/Builder/BasicPropsPanel";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import Consts from "../editor/Consts";

export default class BasicPropsUI{
    view:BasicPropsPanel;
    constructor(view:BasicPropsPanel){
       
        this.view = view;
        this.view.m_name.editable = false;
    }
    public setData(item){
        let gameModule = Consts.displayList.displayModule; 
        if(gameModule.GObject&&item instanceof gameModule.GObject){
            this.setFGUIData(item);
        }else if(gameModule.DisplayObject&&item instanceof gameModule.DisplayObject){
            this.setEgretData(item);
        }
        else if(gameModule.Sprite&&item instanceof gameModule.Sprite){
            this.setLaya2DData(item);
        }
    }
    public setFGUIData(item:fairygui.GObject){
        this.view.m_name.text = item.name;
        (this.view.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.view.m_y as XYInput).setObj(item,"y");
        (this.view.m_width as XYInput).setObj(item,"width");
        (this.view.m_height as XYInput).setObj(item,"height");
        (this.view.m_minWidth as XYInput).setObj(item,"minWidth");
        (this.view.m_minHeight as XYInput).setObj(item,"minHeight");
        (this.view.m_maxWidth as XYInput).setObj(item,"maxWidth");
        (this.view.m_maxHeight as XYInput).setObj(item,"maxHeight");
        (this.view.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.view.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.view.m_skewX as XYInput).setObj(item,"skewY");
        (this.view.m_pivotX as XYInput).setObj(item,"pivotX");
        (this.view.m_pivotY as XYInput).setObj(item,"pivotY");
        (this.view.m_alpha as XYInput).setObj(item,"alpha");
        (this.view.m_rotation as XYInput).setObj(item,"rotation");

        (this.view.m_anchor as EmCheckbox).setObj(item,"pivotAsAnchor",false);
        // this.view.m_anchor.touchable =false;
        // this.view.m_anchor.enabled = false;
        (this.view.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.view.m_grayed as EmCheckbox).setObj(item,"grayed",false);
        (this.view.m_touchable as EmCheckbox).setObj(item,"touchable",true);
    }
    public setLaya2DData(item:Laya.Sprite){
        this.view.m_name.text = item.name;
        (this.view.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.view.m_y as XYInput).setObj(item,"y");
        (this.view.m_width as XYInput).setObj(item,"width");
        (this.view.m_height as XYInput).setObj(item,"height");
        (this.view.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.view.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.view.m_skewX as XYInput).setObj(item,"skewY");
        (this.view.m_pivotX as XYInput).setObj(item,"pivotX");
        (this.view.m_pivotY as XYInput).setObj(item,"pivotY");
        (this.view.m_alpha as XYInput).setObj(item,"alpha");
        (this.view.m_rotation as XYInput).setObj(item,"rotation");
        (this.view.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.view.m_touchable as EmCheckbox).setObj(item,"mouseThrough",false);
    }
   public setEgretData(item:egret.DisplayObject){
        this.view.m_name.text = item.name;
        (this.view.m_x as XYInput).setObj(item,"x");// = item.x+"";
        (this.view.m_y as XYInput).setObj(item,"y");
        (this.view.m_width as XYInput).setObj(item,"width");
        (this.view.m_height as XYInput).setObj(item,"height");
        (this.view.m_scaleX as XYInput).setObj(item,"scaleX");
        (this.view.m_scaleY as XYInput).setObj(item,"scaleY");
        (this.view.m_skewX as XYInput).setObj(item,"skewY");
        (this.view.m_pivotX as XYInput).setObj(item,"anchorOffsetX"); 
        (this.view.m_pivotY as XYInput).setObj(item,"anchorOffsetY");
        (this.view.m_alpha as XYInput).setObj(item,"alpha");
        (this.view.m_rotation as XYInput).setObj(item,"rotation");
        (this.view.m_visible as EmCheckbox).setObj(item,"visible",true);
        (this.view.m_touchable as EmCheckbox).setObj(item,"touchEnabled",true);
    }
}