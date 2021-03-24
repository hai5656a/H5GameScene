/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class PropsPanel extends fgui.GButton {

	public m_type:fgui.Controller;
	public static URL:string = "ui://2pshu6ois4ys1nry32c";

	public static createInstance():PropsPanel {
		return <PropsPanel>(fgui.UIPackage.createObject("Builder", "PropsPanel"));
	}

	protected onConstruct():void {
		this.m_type = this.getControllerAt(0);
	}
}