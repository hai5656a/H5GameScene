/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComControllerPanel extends fgui.GComponent {

	public m_list:fgui.GList;
	public static URL:string = "ui://2pshu6oie1jj1nry31y";

	public static createInstance():ComControllerPanel {
		return <ComControllerPanel>(fgui.UIPackage.createObject("Builder", "ComControllerPanel"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChildAt(0));
	}
}