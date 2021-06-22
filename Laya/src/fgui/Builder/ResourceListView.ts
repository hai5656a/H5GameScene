/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import RefreshButton from "./RefreshButton";

export default class ResourceListView extends fgui.GComponent {

	public m_btnRefresh:RefreshButton;
	public m_group:fgui.GComboBox;
	public m_txtSearch:fgui.GLabel;
	public m_btnSearch:RefreshButton;
	public m_listView:fgui.GList;
	public m_message:fgui.GTextField;
	public static URL:string = "ui://2pshu6oiv4gl1nry32g";

	public static createInstance():ResourceListView {
		return <ResourceListView>(fgui.UIPackage.createObject("Builder", "ResourceListView"));
	}

	protected onConstruct():void {
		this.m_btnRefresh = <RefreshButton>(this.getChildAt(1));
		this.m_group = <fgui.GComboBox>(this.getChildAt(2));
		this.m_txtSearch = <fgui.GLabel>(this.getChildAt(3));
		this.m_btnSearch = <RefreshButton>(this.getChildAt(4));
		this.m_listView = <fgui.GList>(this.getChildAt(5));
		this.m_message = <fgui.GTextField>(this.getChildAt(7));
	}
}