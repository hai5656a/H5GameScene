/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class CreatorPropsPanel extends fgui.GComponent {

	public m_color:fgui.GLabel;
	public m_name:fgui.GLabel;
	public m_x:fgui.GLabel;
	public m_y:fgui.GLabel;
	public m_width:fgui.GLabel;
	public m_height:fgui.GLabel;
	public m_scaleX:fgui.GLabel;
	public m_scaleY:fgui.GLabel;
	public m_skewX:fgui.GLabel;
	public m_skewY:fgui.GLabel;
	public m_pivotX:fgui.GLabel;
	public m_pivotY:fgui.GLabel;
	public m_alpha:fgui.GLabel;
	public m_rotation:fgui.GLabel;
	public m_visible:fgui.GButton;
	public m_mouse:fgui.GButton;
	public static URL:string = "ui://2pshu6oiixw71nry325";

	public static createInstance():CreatorPropsPanel {
		return <CreatorPropsPanel>(fgui.UIPackage.createObject("Builder", "CreatorPropsPanel"));
	}

	protected onConstruct():void {
		this.m_color = <fgui.GLabel>(this.getChildAt(9));
		this.m_name = <fgui.GLabel>(this.getChildAt(10));
		this.m_x = <fgui.GLabel>(this.getChildAt(11));
		this.m_y = <fgui.GLabel>(this.getChildAt(12));
		this.m_width = <fgui.GLabel>(this.getChildAt(13));
		this.m_height = <fgui.GLabel>(this.getChildAt(14));
		this.m_scaleX = <fgui.GLabel>(this.getChildAt(16));
		this.m_scaleY = <fgui.GLabel>(this.getChildAt(17));
		this.m_skewX = <fgui.GLabel>(this.getChildAt(18));
		this.m_skewY = <fgui.GLabel>(this.getChildAt(19));
		this.m_pivotX = <fgui.GLabel>(this.getChildAt(20));
		this.m_pivotY = <fgui.GLabel>(this.getChildAt(21));
		this.m_alpha = <fgui.GLabel>(this.getChildAt(22));
		this.m_rotation = <fgui.GLabel>(this.getChildAt(23));
		this.m_visible = <fgui.GButton>(this.getChildAt(24));
		this.m_mouse = <fgui.GButton>(this.getChildAt(25));
	}
}