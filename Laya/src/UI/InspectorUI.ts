import InspectorView from "../fgui/Builder/InspectorView";
import EditorEvent from "../editor/EditorEvent";
import BasicPropsUI from "./BasicPropsUI";
import Consts, { TreeType } from "../editor/Consts";
import InfoPropsUI from "./InfoPropsUI";
import ComControllerUI from "./ComControllerUI";
import ComTransitionUI from "./ComTransitionUI";
import Basic3DPropsUI from "./Basic3DPropsUI";
import CreatorPropsUI from "./CreatorPropsUI";
import CreatorWidgetUI from "./CreatorWidgetUI";
import PropsUI, { IPropsUI } from "./PropsUI";

export default class InspectorUI{
    view:InspectorView;
    baseProps:IPropsUI;
    base3DProps:IPropsUI;
    controllerComp:IPropsUI;
    transitionComp:IPropsUI;
    ccInfoComp: IPropsUI;
    ccWidget:IPropsUI;
    infoComp:InfoPropsUI;
    constructor(view:InspectorView){
        EditorEvent.on(EditorEvent.SelectionChanged,this,this.selectItem) ;
        this.view = view;
        this.baseProps = (this.view.m_baseBar as PropsUI).propsui ;
        this.base3DProps = (this.view.m_base3DBar as PropsUI).propsui ;
        this.controllerComp = (this.view.m_controllerBar as PropsUI).propsui ;
        this.transitionComp = (this.view.m_transitionBar as PropsUI).propsui ;
        this.ccInfoComp =  (this.view.m_nodeBar as PropsUI).propsui ;
        this.ccWidget = (this.view.m_widgetBar as PropsUI).propsui ;
        this.infoComp = new InfoPropsUI(this.view.m_infoComp);
    }
    selectItem(item){
        if(item){
            let gameModule = Consts.displayList.displayModule; 
            this.infoComp.setData(item);
            if( Consts.nowTreeType == TreeType.FGUI){
                this.view.m_type.selectedIndex = 0;
                this.baseProps.setData(item);
                this.controllerComp.setData(item);
                 this.transitionComp.setData(item);
            }else if(Consts.nowTreeType == TreeType.Laya){
                if(gameModule.Sprite&&item instanceof gameModule.Sprite){
                    this.view.m_type.selectedIndex = 1;
                    this.baseProps.setData(item);
                }else if(gameModule.Sprite3D&&item instanceof gameModule.Sprite3D){//laya 3d
                    this.view.m_type.selectedIndex = 2;
                    this.base3DProps.setData(item)
                }else if(gameModule.Node &&item instanceof gameModule.Node){
                        this.view.m_type.selectedIndex = 2;
                        this.base3DProps.setData(item)
                }
            }else if(Consts.nowTreeType == TreeType.CC){
                this.view.m_type.selectedIndex = 3;
                this.ccInfoComp.setData(item); 
                this.ccWidget.setData(item);
            }else if(Consts.nowTreeType == TreeType.Egret){
                this.view.m_type.selectedIndex = 4;
                this.baseProps.setData(item);
            }
        }
    }
    onClick(){
        EditorEvent.event(EditorEvent.ClickChanged);
    }
 
}
