/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LibView_sep extends fgui.GComponent {

	public m_sep:fgui.GGraph;
	public static URL:string = "ui://2pshu6oie80aixictx";

	public static createInstance():LibView_sep {
		return <LibView_sep>(fgui.UIPackage.createObject("Builder", "LibView_sep"));
	}

	protected onConstruct():void {
		this.m_sep = <fgui.GGraph>(this.getChildAt(0));
	}
}