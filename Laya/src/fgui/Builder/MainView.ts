/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DisplayTreeView from "./DisplayTreeView";
import ResourceListView from "./ResourceListView";
import LibView_sep from "./LibView_sep";
import DocumentView from "./DocumentView";
import ResourceView from "./ResourceView";
import InspectorView from "./InspectorView";

export default class MainView extends fgui.GComponent {

	public m_display:fgui.Controller;
	public m_webset:fgui.GLabel;
	public m_btngo:fgui.GButton;
	public m_holder:fgui.GGraph;
	public m_displaylist:DisplayTreeView;
	public m_resourcelist:ResourceListView;
	public m_sep1:LibView_sep;
	public m_document:DocumentView;
	public m_resource:ResourceView;
	public m_insp:InspectorView;
	public m_version:fgui.GTextField;
	public static URL:string = "ui://2pshu6oimlmb1nry31w";

	public static createInstance():MainView {
		return <MainView>(fgui.UIPackage.createObject("Builder", "MainView"));
	}

	protected onConstruct():void {
		this.m_display = this.getControllerAt(0);
		this.m_webset = <fgui.GLabel>(this.getChildAt(0));
		this.m_btngo = <fgui.GButton>(this.getChildAt(1));
		this.m_holder = <fgui.GGraph>(this.getChildAt(2));
		this.m_displaylist = <DisplayTreeView>(this.getChildAt(3));
		this.m_resourcelist = <ResourceListView>(this.getChildAt(4));
		this.m_sep1 = <LibView_sep>(this.getChildAt(5));
		this.m_document = <DocumentView>(this.getChildAt(6));
		this.m_resource = <ResourceView>(this.getChildAt(7));
		this.m_insp = <InspectorView>(this.getChildAt(8));
		this.m_version = <fgui.GTextField>(this.getChildAt(9));
	}
}