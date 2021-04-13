/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class CreatorComp extends fgui.GComponent {

	public m_title:fgui.GButton;
	public m_key:fgui.GLabel;
	public m_value:fgui.GTextField;
	public static URL:string = "ui://2pshu6ois4ys1nry32e";

	public static createInstance():CreatorComp {
		return <CreatorComp>(fgui.UIPackage.createObject("Builder", "CreatorComp"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GButton>(this.getChildAt(0));
		this.m_key = <fgui.GLabel>(this.getChildAt(1));
		this.m_value = <fgui.GTextField>(this.getChildAt(2));
	}
}