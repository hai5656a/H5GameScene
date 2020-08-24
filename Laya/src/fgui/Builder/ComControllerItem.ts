/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComControllerItem extends fgui.GButton {

	public m_pageController:fgui.GComboBox;
	public static URL:string = "ui://2pshu6oie1jj1nry31z";

	public static createInstance():ComControllerItem {
		return <ComControllerItem>(fgui.UIPackage.createObject("Builder", "ComControllerItem"));
	}

	protected onConstruct():void {
		this.m_pageController = <fgui.GComboBox>(this.getChildAt(1));
	}
}