/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DisplayTreeView from "./DisplayTreeView";
import DocumentView from "./DocumentView";
import InspectorView from "./InspectorView";

export default class MainView extends fgui.GComponent {

	public m_webset:fgui.GLabel;
	public m_btngo:fgui.GButton;
	public m_holder:fgui.GGraph;
	public m_list:DisplayTreeView;
	public m_document:DocumentView;
	public m_insp:InspectorView;
	public static URL:string = "ui://2pshu6oimlmb1nry31w";

	public static createInstance():MainView {
		return <MainView>(fgui.UIPackage.createObject("Builder", "MainView"));
	}

	protected onConstruct():void {
		this.m_webset = <fgui.GLabel>(this.getChildAt(0));
		this.m_btngo = <fgui.GButton>(this.getChildAt(1));
		this.m_holder = <fgui.GGraph>(this.getChildAt(2));
		this.m_list = <DisplayTreeView>(this.getChildAt(3));
		this.m_document = <DocumentView>(this.getChildAt(4));
		this.m_insp = <InspectorView>(this.getChildAt(5));
	}
}