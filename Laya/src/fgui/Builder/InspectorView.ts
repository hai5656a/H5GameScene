/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import InfoPropsPanel from "./InfoPropsPanel";
import TitleBar from "./TitleBar";
import BasicPropsPanel from "./BasicPropsPanel";
import Basic3DPropsPanel from "./Basic3DPropsPanel";
import ComControllerPanel from "./ComControllerPanel";
import ComTransitionPanel from "./ComTransitionPanel";
import CreatorPropsPanel from "./CreatorPropsPanel";
import CreatorWidgetPanel from "./CreatorWidgetPanel";

export default class InspectorView extends fgui.GComponent {

	public m_base:fgui.Controller;
	public m_controller:fgui.Controller;
	public m_transition:fgui.Controller;
	public m_type:fgui.Controller;
	public m_node:fgui.Controller;
	public m_widget:fgui.Controller;
	public m_infoComp:InfoPropsPanel;
	public m_baseBar:TitleBar;
	public m_baseComp:BasicPropsPanel;
	public m_base3DComp:Basic3DPropsPanel;
	public m_controllerBar:TitleBar;
	public m_controllerComp:ComControllerPanel;
	public m_transitionBar:TitleBar;
	public m_transitionComp:ComTransitionPanel;
	public m_NodeBar:TitleBar;
	public m_nodeComp:CreatorPropsPanel;
	public m_WidgetBar:TitleBar;
	public m_widgetComp:CreatorWidgetPanel;
	public m_group:fgui.GGroup;
	public static URL:string = "ui://2pshu6oimtrqiudk";

	public static createInstance():InspectorView {
		return <InspectorView>(fgui.UIPackage.createObject("Builder", "InspectorView"));
	}

	protected onConstruct():void {
		this.m_base = this.getControllerAt(0);
		this.m_controller = this.getControllerAt(1);
		this.m_transition = this.getControllerAt(2);
		this.m_type = this.getControllerAt(3);
		this.m_node = this.getControllerAt(4);
		this.m_widget = this.getControllerAt(5);
		this.m_infoComp = <InfoPropsPanel>(this.getChildAt(1));
		this.m_baseBar = <TitleBar>(this.getChildAt(2));
		this.m_baseComp = <BasicPropsPanel>(this.getChildAt(3));
		this.m_base3DComp = <Basic3DPropsPanel>(this.getChildAt(4));
		this.m_controllerBar = <TitleBar>(this.getChildAt(5));
		this.m_controllerComp = <ComControllerPanel>(this.getChildAt(6));
		this.m_transitionBar = <TitleBar>(this.getChildAt(7));
		this.m_transitionComp = <ComTransitionPanel>(this.getChildAt(8));
		this.m_NodeBar = <TitleBar>(this.getChildAt(9));
		this.m_nodeComp = <CreatorPropsPanel>(this.getChildAt(10));
		this.m_WidgetBar = <TitleBar>(this.getChildAt(11));
		this.m_widgetComp = <CreatorWidgetPanel>(this.getChildAt(12));
		this.m_group = <fgui.GGroup>(this.getChildAt(13));
	}
}