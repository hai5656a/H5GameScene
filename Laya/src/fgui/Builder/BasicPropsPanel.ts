/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class BasicPropsPanel extends fgui.GComponent {

	public m_showRestrictSize:fgui.Controller;
	public m_type:fgui.Controller;
	public m_name:fgui.GLabel;
	public m_x:fgui.GLabel;
	public m_y:fgui.GLabel;
	public m_width:fgui.GLabel;
	public m_height:fgui.GLabel;
	public m_showRestrictSize_2:fgui.GButton;
	public m_minWidth:fgui.GLabel;
	public m_minHeight:fgui.GLabel;
	public m_maxWidth:fgui.GLabel;
	public m_maxHeight:fgui.GLabel;
	public m_useSourceSize:fgui.GButton;
	public m_aspectLocked:fgui.GButton;
	public m_scaleX:fgui.GLabel;
	public m_scaleY:fgui.GLabel;
	public m_skewX:fgui.GLabel;
	public m_skewY:fgui.GLabel;
	public m_pivotX:fgui.GLabel;
	public m_pivotY:fgui.GLabel;
	public m_anchor:fgui.GButton;
	public m_alpha:fgui.GLabel;
	public m_rotation:fgui.GLabel;
	public m_visible:fgui.GButton;
	public m_grayed:fgui.GButton;
	public m_touchable:fgui.GButton;
	public static URL:string = "ui://2pshu6oiau3n5";

	public static createInstance():BasicPropsPanel {
		return <BasicPropsPanel>(fgui.UIPackage.createObject("Builder", "BasicPropsPanel"));
	}

	protected onConstruct():void {
		this.m_showRestrictSize = this.getControllerAt(0);
		this.m_type = this.getControllerAt(1);
		this.m_name = <fgui.GLabel>(this.getChildAt(3));
		this.m_x = <fgui.GLabel>(this.getChildAt(4));
		this.m_y = <fgui.GLabel>(this.getChildAt(5));
		this.m_width = <fgui.GLabel>(this.getChildAt(6));
		this.m_height = <fgui.GLabel>(this.getChildAt(7));
		this.m_showRestrictSize_2 = <fgui.GButton>(this.getChildAt(9));
		this.m_minWidth = <fgui.GLabel>(this.getChildAt(12));
		this.m_minHeight = <fgui.GLabel>(this.getChildAt(13));
		this.m_maxWidth = <fgui.GLabel>(this.getChildAt(14));
		this.m_maxHeight = <fgui.GLabel>(this.getChildAt(15));
		this.m_useSourceSize = <fgui.GButton>(this.getChildAt(17));
		this.m_aspectLocked = <fgui.GButton>(this.getChildAt(18));
		this.m_scaleX = <fgui.GLabel>(this.getChildAt(24));
		this.m_scaleY = <fgui.GLabel>(this.getChildAt(25));
		this.m_skewX = <fgui.GLabel>(this.getChildAt(26));
		this.m_skewY = <fgui.GLabel>(this.getChildAt(27));
		this.m_pivotX = <fgui.GLabel>(this.getChildAt(28));
		this.m_pivotY = <fgui.GLabel>(this.getChildAt(29));
		this.m_anchor = <fgui.GButton>(this.getChildAt(31));
		this.m_alpha = <fgui.GLabel>(this.getChildAt(32));
		this.m_rotation = <fgui.GLabel>(this.getChildAt(33));
		this.m_visible = <fgui.GButton>(this.getChildAt(34));
		this.m_grayed = <fgui.GButton>(this.getChildAt(35));
		this.m_touchable = <fgui.GButton>(this.getChildAt(36));
	}
}