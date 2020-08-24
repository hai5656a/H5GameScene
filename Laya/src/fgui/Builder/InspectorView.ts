/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import InfoPropsPanel from "./InfoPropsPanel";
import TitleBar from "./TitleBar";
import BasicPropsPanel from "./BasicPropsPanel";
import ComControllerPanel from "./ComControllerPanel";
import ComTransitionPanel from "./ComTransitionPanel";

export default class InspectorView extends fgui.GComponent {

	public m_base:fgui.Controller;
	public m_controller:fgui.Controller;
	public m_transition:fgui.Controller;
	public m_infoComp:InfoPropsPanel;
	public m_baseBar:TitleBar;
	public m_baseComp:BasicPropsPanel;
	public m_controllerBar:TitleBar;
	public m_controllerComp:ComControllerPanel;
	public m_transitionBar:TitleBar;
	public m_transitionComp:ComTransitionPanel;
	public m_group:fgui.GGroup;
	public static URL:string = "ui://2pshu6oimtrqiudk";

	public static createInstance():InspectorView {
		return <InspectorView>(fgui.UIPackage.createObject("Builder", "InspectorView"));
	}

	protected onConstruct():void {
		this.m_base = this.getControllerAt(0);
		this.m_controller = this.getControllerAt(1);
		this.m_transition = this.getControllerAt(2);
		this.m_infoComp = <InfoPropsPanel>(this.getChildAt(1));
		this.m_baseBar = <TitleBar>(this.getChildAt(2));
		this.m_baseComp = <BasicPropsPanel>(this.getChildAt(3));
		this.m_controllerBar = <TitleBar>(this.getChildAt(4));
		this.m_controllerComp = <ComControllerPanel>(this.getChildAt(5));
		this.m_transitionBar = <TitleBar>(this.getChildAt(6));
		this.m_transitionComp = <ComTransitionPanel>(this.getChildAt(7));
		this.m_group = <fgui.GGroup>(this.getChildAt(8));
	}
}