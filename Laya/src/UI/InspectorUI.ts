import InspectorView from "../fgui/Builder/InspectorView";
import EditorEvent from "../editor/EditorEvent";
import BasicPropsUI from "./BasicPropsUI";
import Consts from "../editor/Consts";
import InfoPropsUI from "./InfoPropsUI";
import ComControllerUI from "./ComControllerUI";
import ComTransitionUI from "./ComTransitionUI";

export default class InspectorUI{
    view:InspectorView;
    baseProps:BasicPropsUI;
    infoComp:InfoPropsUI;
    controllerComp:ComControllerUI;
	transitionComp:ComTransitionUI;
    constructor(view:InspectorView){
        EditorEvent.on(EditorEvent.SelectionChanged,this,this.selectItem) ;
        this.view = view;
        // this.view.m_list.scrollItemToViewOnClick =false;
        // this.view.onClick(this,this.onClick);
        this.baseProps = new BasicPropsUI(this.view.m_baseComp);
        this.infoComp = new InfoPropsUI(this.view.m_infoComp);
        this.controllerComp = new ComControllerUI(this.view.m_controllerComp);
        this.transitionComp = new ComTransitionUI(this.view.m_transitionComp);
    }
    selectItem(item:fgui.GObject){
        if(item){
            this.infoComp.setData(item);
            this.baseProps.setData(item);
            this.controllerComp.setData(item);
            this.transitionComp.setData(item);
        }
    }
    onClick(){
        EditorEvent.event(EditorEvent.ClickChanged);
    }
    
}
