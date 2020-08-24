/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ComTransitionPanel extends fgui.GComponent {

	public m_list:fgui.GList;
	public static URL:string = "ui://2pshu6oie1jj1nry320";

	public static createInstance():ComTransitionPanel {
		return <ComTransitionPanel>(fgui.UIPackage.createObject("Builder", "ComTransitionPanel"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChildAt(0));
	}
}