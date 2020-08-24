/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import RefreshButton from "./RefreshButton";

export default class InfoPropsPanel extends fgui.GComponent {

	public m_title:fgui.GButton;
	public m_icon:fgui.GLoader;
	public m_btnRefresh:RefreshButton;
	public static URL:string = "ui://2pshu6oir1st7iues";

	public static createInstance():InfoPropsPanel {
		return <InfoPropsPanel>(fgui.UIPackage.createObject("Builder", "InfoPropsPanel"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GButton>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_btnRefresh = <RefreshButton>(this.getChildAt(3));
	}
}