import BasicPropsPanel from "../fgui/Builder/BasicPropsPanel";
import XYInput from "./Builder/XYInput";
import EmCheckbox from "./Builder/EmCheckbox";
import Consts from "../editor/Consts";
import Basic3DPropsPanel from "../fgui/Builder/Basic3DPropsPanel";
import TitleBar from "../fgui/Builder/TitleBar";
import { IPropsUI } from "./PropsUI";

export default class Basic3DPropsUI extends Basic3DPropsPanel implements IPropsUI{
    onConstruct(){
        // this.view = title["_iconObject"]['_content2'] as Basic3DPropsPanel;
        super.onConstruct();
        this.m_name.editable = false;
    }
    public setData(item){
        let gameModule = Consts.displayList.displayModule; 
       if(gameModule && gameModule.Sprite3D && item instanceof gameModule.Sprite3D){
            this.setLaya3DData(item);
        }
    }
    
    public setLaya3DData(item:Laya.Sprite3D){
        this.m_name.text = item.name;
        let transform = item.transform;
        (this.m_x as XYInput).setObj(transform,"x","position");// = item.x+"";
        (this.m_y as XYInput).setObj(transform,"y","position");
        (this.m_z as XYInput).setObj(transform,"z","position");
        (this.m_scaleX as XYInput).setObj(transform,"x","scale");
        (this.m_scaleY as XYInput).setObj(transform,"y","scale");
        (this.m_scaleZ as XYInput).setObj(transform,"z","scale");
        (this.m_rotationX as XYInput).setObj(transform,"x","rotationEuler");
        (this.m_rotationY as XYInput).setObj(transform,"y","rotationEuler");
        (this.m_rotationZ as XYInput).setObj(transform,"z","rotationEuler");
        (this.m_localx as XYInput).setObj(transform,"x","localPosition");
        (this.m_localy as XYInput).setObj(transform,"y","localPosition");
        (this.m_localz as XYInput).setObj(transform,"z","localPosition");
        (this.m_localscaleX as XYInput).setObj(transform,"x","localRotationEuler");
        (this.m_localscaleY as XYInput).setObj(transform,"y","localRotationEuler");
        (this.m_localscaleZ as XYInput).setObj(transform,"z","localRotationEuler");
        (this.m_localrotationX as XYInput).setObj(transform,"x","localScale");
        (this.m_localrotationY as XYInput).setObj(transform,"y","localScale");
        (this.m_localrotationZ as XYInput).setObj(transform,"z","localScale");

        (this.m_visible as EmCheckbox).setObj(item,"active",true);
        (this.m_static as EmCheckbox).setObj(item,"isStatic",false);
    }
}