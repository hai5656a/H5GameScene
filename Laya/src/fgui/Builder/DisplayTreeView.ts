/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import RefreshButton from "./RefreshButton";
import LibView_sep from "./LibView_sep";
import LibraryView_Slider from "./LibraryView_Slider";

export default class DisplayTreeView extends fgui.GComponent {

	public m_btnRefresh:RefreshButton;
	public m_btnLocate:fgui.GButton;
	public m_btnSync:fgui.GButton;
	public m_btnTwoColumn:fgui.GButton;
	public m_btnCollapseAll:fgui.GButton;
	public m_group:fgui.GComboBox;
	public m_treeView:fgui.GTree;
	public m_sep:LibView_sep;
	public m_listView:fgui.GList;
	public m_columns:fgui.GGroup;
	public m_iconSize:LibraryView_Slider;
	public static URL:string = "ui://2pshu6oimlmb1nry31v";

	public static createInstance():DisplayTreeView {
		return <DisplayTreeView>(fgui.UIPackage.createObject("Builder", "DisplayTreeView"));
	}

	protected onConstruct():void {
		this.m_btnRefresh = <RefreshButton>(this.getChildAt(1));
		this.m_btnLocate = <fgui.GButton>(this.getChildAt(2));
		this.m_btnSync = <fgui.GButton>(this.getChildAt(3));
		this.m_btnTwoColumn = <fgui.GButton>(this.getChildAt(4));
		this.m_btnCollapseAll = <fgui.GButton>(this.getChildAt(5));
		this.m_group = <fgui.GComboBox>(this.getChildAt(7));
		this.m_treeView = <fgui.GTree>(this.getChildAt(8));
		this.m_sep = <LibView_sep>(this.getChildAt(9));
		this.m_listView = <fgui.GList>(this.getChildAt(10));
		this.m_columns = <fgui.GGroup>(this.getChildAt(11));
		this.m_iconSize = <LibraryView_Slider>(this.getChildAt(12));
	}
}