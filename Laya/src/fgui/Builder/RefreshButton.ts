/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class RefreshButton extends fgui.GButton {

	public m_grayed:fgui.Controller;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://2pshu6oiso5uixicsd";

	public static createInstance():RefreshButton {
		return <RefreshButton>(fgui.UIPackage.createObject("Builder", "RefreshButton"));
	}

	protected onConstruct():void {
		this.m_grayed = this.getControllerAt(1);
		this.m_t0 = this.getTransitionAt(0);
	}
}