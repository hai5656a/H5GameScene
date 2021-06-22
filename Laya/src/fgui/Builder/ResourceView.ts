/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import PlayButton from "./PlayButton";

export default class ResourceView extends fgui.GComponent {

	public m_editType:fgui.Controller;
	public m_docBg:fgui.GGraph;
	public m_border:fgui.GGraph;
	public m_tabBar:fgui.GGraph;
	public m_url:fgui.GLabel;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextInput;
	public m_play:PlayButton;
	public m_message:fgui.GTextField;
	public m_logbtn:fgui.GButton;
	public static URL:string = "ui://2pshu6oipjp91nry32h";

	public static createInstance():ResourceView {
		return <ResourceView>(fgui.UIPackage.createObject("Builder", "ResourceView"));
	}

	protected onConstruct():void {
		this.m_editType = this.getControllerAt(0);
		this.m_docBg = <fgui.GGraph>(this.getChildAt(0));
		this.m_border = <fgui.GGraph>(this.getChildAt(1));
		this.m_tabBar = <fgui.GGraph>(this.getChildAt(2));
		this.m_url = <fgui.GLabel>(this.getChildAt(3));
		this.m_icon = <fgui.GLoader>(this.getChildAt(4));
		this.m_title = <fgui.GTextInput>(this.getChildAt(5));
		this.m_play = <PlayButton>(this.getChildAt(6));
		this.m_message = <fgui.GTextField>(this.getChildAt(7));
		this.m_logbtn = <fgui.GButton>(this.getChildAt(8));
	}
}