/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class TitleBar extends fgui.GButton {

	public m_button:fgui.GGraph;
	public m_line:fgui.GGraph;
	public static URL:string = "ui://2pshu6oiitme7iudp";

	public static createInstance():TitleBar {
		return <TitleBar>(fgui.UIPackage.createObject("Builder", "TitleBar"));
	}

	protected onConstruct():void {
		this.m_button = <fgui.GGraph>(this.getChildAt(0));
		this.m_line = <fgui.GGraph>(this.getChildAt(3));
	}
}