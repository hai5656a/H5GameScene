import BasicPropsPanel from "../fgui/Builder/BasicPropsPanel";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import Consts from "../editor/Consts";
import Basic3DPropsPanel from "../fgui/Builder/Basic3DPropsPanel";

export default class Basic3DPropsUI{
    view:Basic3DPropsPanel;
    constructor(view:Basic3DPropsPanel){
       
        this.view = view;
        this.view.m_name.editable = false;
    }
    public setData(item){
        let gameModule = Consts.displayList.displayModule; 
       if(gameModule && gameModule.Sprite3D && item instanceof gameModule.Sprite3D){
            this.setLaya3DData(item);
        }
    }
    
    public setLaya3DData(item:Laya.Sprite3D){
        this.view.m_name.text = item.name;
        let transform = item.transform;
        (this.view.m_x as XYInput).setObj(transform,"x","position");// = item.x+"";
        (this.view.m_y as XYInput).setObj(transform,"y","position");
        (this.view.m_z as XYInput).setObj(transform,"z","position");
        (this.view.m_scaleX as XYInput).setObj(transform,"x","scale");
        (this.view.m_scaleY as XYInput).setObj(transform,"y","scale");
        (this.view.m_scaleZ as XYInput).setObj(transform,"z","scale");
        (this.view.m_rotationX as XYInput).setObj(transform,"x","rotationEuler");
        (this.view.m_rotationY as XYInput).setObj(transform,"y","rotationEuler");
        (this.view.m_rotationZ as XYInput).setObj(transform,"z","rotationEuler");
        (this.view.m_localx as XYInput).setObj(transform,"x","localPosition");
        (this.view.m_localy as XYInput).setObj(transform,"y","localPosition");
        (this.view.m_localz as XYInput).setObj(transform,"z","localPosition");
        (this.view.m_localscaleX as XYInput).setObj(transform,"x","localRotationEuler");
        (this.view.m_localscaleY as XYInput).setObj(transform,"y","localRotationEuler");
        (this.view.m_localscaleZ as XYInput).setObj(transform,"z","localRotationEuler");
        (this.view.m_localrotationX as XYInput).setObj(transform,"x","localScale");
        (this.view.m_localrotationY as XYInput).setObj(transform,"y","localScale");
        (this.view.m_localrotationZ as XYInput).setObj(transform,"z","localScale");

        (this.view.m_visible as EmCheckbox).setObj(item,"active",true);
        (this.view.m_static as EmCheckbox).setObj(item,"isStatic",false);
    }
}