/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class DocumentView extends fgui.GComponent {

	public m_editType:fgui.Controller;
	public m_orientation:fgui.Controller;
	public m_docBg:fgui.GGraph;
	public m_border:fgui.GGraph;
	public m_tabBar:fgui.GGraph;
	public m_hand:fgui.GButton;
	public m_arrow:fgui.GButton;
	public m_device:fgui.GComboBox;
	public m_landscape:fgui.GButton;
	public m_portrait:fgui.GButton;
	public m_btnfps:fgui.GButton;
	public static URL:string = "ui://2pshu6oimlmb1nry31x";

	public static createInstance():DocumentView {
		return <DocumentView>(fgui.UIPackage.createObject("Builder", "DocumentView"));
	}

	protected onConstruct():void {
		this.m_editType = this.getControllerAt(0);
		this.m_orientation = this.getControllerAt(1);
		this.m_docBg = <fgui.GGraph>(this.getChildAt(0));
		this.m_border = <fgui.GGraph>(this.getChildAt(1));
		this.m_tabBar = <fgui.GGraph>(this.getChildAt(2));
		this.m_hand = <fgui.GButton>(this.getChildAt(3));
		this.m_arrow = <fgui.GButton>(this.getChildAt(4));
		this.m_device = <fgui.GComboBox>(this.getChildAt(6));
		this.m_landscape = <fgui.GButton>(this.getChildAt(8));
		this.m_portrait = <fgui.GButton>(this.getChildAt(9));
		this.m_btnfps = <fgui.GButton>(this.getChildAt(11));
	}
}