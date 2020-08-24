/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComTransitionItem extends fgui.GButton {

	public m_btnPlay:fgui.GButton;
	public static URL:string = "ui://2pshu6oie1jj1nry321";

	public static createInstance():ComTransitionItem {
		return <ComTransitionItem>(fgui.UIPackage.createObject("Builder", "ComTransitionItem"));
	}

	protected onConstruct():void {
		this.m_btnPlay = <fgui.GButton>(this.getChildAt(1));
	}
}