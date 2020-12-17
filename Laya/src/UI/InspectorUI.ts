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

export default class InspectorUI{
    view:InspectorView;
    baseProps:BasicPropsUI;
    base3DProps:Basic3DPropsUI;
    infoComp:InfoPropsUI;
    controllerComp:ComControllerUI;
    transitionComp:ComTransitionUI;
    ccInfoComp: CreatorPropsUI;
    ccWidget:CreatorWidgetUI;
    constructor(view:InspectorView){
        EditorEvent.on(EditorEvent.SelectionChanged,this,this.selectItem) ;
        this.view = view;
        this.baseProps = new BasicPropsUI(this.view.m_baseComp);
        this.base3DProps = new Basic3DPropsUI(this.view.m_base3DComp);
        this.infoComp = new InfoPropsUI(this.view.m_infoComp);
        this.controllerComp = new ComControllerUI(this.view.m_controllerComp);
        this.transitionComp = new ComTransitionUI(this.view.m_transitionComp);
        this.ccInfoComp =  new CreatorPropsUI(this.view.m_nodeComp);
        this.ccWidget = new CreatorWidgetUI(this.view.m_widgetComp);
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
