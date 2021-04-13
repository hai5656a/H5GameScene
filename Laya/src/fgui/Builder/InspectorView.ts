/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import InfoPropsPanel from "./InfoPropsPanel";
import PropsPanel from "./PropsPanel";

export default class InspectorView extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_infoComp:InfoPropsPanel;
	public m_baseBar:PropsPanel;
	public m_base3DBar:PropsPanel;
	public m_controllerBar:PropsPanel;
	public m_transitionBar:PropsPanel;
	public m_nodeBar:PropsPanel;
	public m_creatorlist:fgui.GList;
	public m_group:fgui.GGroup;
	public static URL:string = "ui://2pshu6oimtrqiudk";

	public static createInstance():InspectorView {
		return <InspectorView>(fgui.UIPackage.createObject("Builder", "InspectorView"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
		this.m_infoComp = <InfoPropsPanel>(this.getChildAt(1));
		this.m_baseBar = <PropsPanel>(this.getChildAt(2));
		this.m_base3DBar = <PropsPanel>(this.getChildAt(3));
		this.m_controllerBar = <PropsPanel>(this.getChildAt(4));
		this.m_transitionBar = <PropsPanel>(this.getChildAt(5));
		this.m_nodeBar = <PropsPanel>(this.getChildAt(6));
		this.m_creatorlist = <fgui.GList>(this.getChildAt(7));
		this.m_group = <fgui.GGroup>(this.getChildAt(8));
	}
}