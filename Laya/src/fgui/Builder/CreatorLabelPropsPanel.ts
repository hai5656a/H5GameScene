/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import CreatorComp from "./CreatorComp";

export default class CreatorLabelPropsPanel extends fgui.GComponent {

	public m_text:fgui.GLabel;
	public m_bold:fgui.GButton;
	public m_italic:fgui.GButton;
	public m_underline:fgui.GButton;
	public m_fontSize:fgui.GLabel;
	public m_font:fgui.GLabel;
	public m_lineHeight:fgui.GLabel;
	public m_cachemode:fgui.GComboBox;
	public m_overflow:fgui.GComboBox;
	public m_hAlign:fgui.GComboBox;
	public m_vAlign:fgui.GComboBox;
	public m_comp:CreatorComp;
	public static URL:string = "ui://2pshu6ois4ys1nry32d";

	public static createInstance():CreatorLabelPropsPanel {
		return <CreatorLabelPropsPanel>(fgui.UIPackage.createObject("Builder", "CreatorLabelPropsPanel"));
	}

	protected onConstruct():void {
		this.m_text = <fgui.GLabel>(this.getChildAt(8));
		this.m_bold = <fgui.GButton>(this.getChildAt(9));
		this.m_italic = <fgui.GButton>(this.getChildAt(10));
		this.m_underline = <fgui.GButton>(this.getChildAt(11));
		this.m_fontSize = <fgui.GLabel>(this.getChildAt(12));
		this.m_font = <fgui.GLabel>(this.getChildAt(13));
		this.m_lineHeight = <fgui.GLabel>(this.getChildAt(14));
		this.m_cachemode = <fgui.GComboBox>(this.getChildAt(15));
		this.m_overflow = <fgui.GComboBox>(this.getChildAt(16));
		this.m_hAlign = <fgui.GComboBox>(this.getChildAt(17));
		this.m_vAlign = <fgui.GComboBox>(this.getChildAt(18));
		this.m_comp = <CreatorComp>(this.getChildAt(19));
	}
}