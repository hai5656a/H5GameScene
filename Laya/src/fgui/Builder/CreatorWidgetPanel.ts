/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import CreatorComp from "./CreatorComp";

export default class CreatorWidgetPanel extends fgui.GComponent {

	public m_top:fgui.Controller;
	public m_left:fgui.Controller;
	public m_right:fgui.Controller;
	public m_bottom:fgui.Controller;
	public m_horizontal:fgui.Controller;
	public m_verticl:fgui.Controller;
	public m_comp:CreatorComp;
	public m_TopValue:fgui.GLabel;
	public m_TargetValue:fgui.GLabel;
	public m_Top:fgui.GButton;
	public m_AlignMode:fgui.GComboBox;
	public m_LeftValue:fgui.GLabel;
	public m_Left:fgui.GButton;
	public m_RightValue:fgui.GLabel;
	public m_Right:fgui.GButton;
	public m_BottomValue:fgui.GLabel;
	public m_Bottom:fgui.GButton;
	public m_HorizontalCenterValue:fgui.GLabel;
	public m_HorizontalCenter:fgui.GButton;
	public m_VerticlCenterValue:fgui.GLabel;
	public m_VerticlCenter:fgui.GButton;
	public static URL:string = "ui://2pshu6oiixw71nry326";

	public static createInstance():CreatorWidgetPanel {
		return <CreatorWidgetPanel>(fgui.UIPackage.createObject("Builder", "CreatorWidgetPanel"));
	}

	protected onConstruct():void {
		this.m_top = this.getControllerAt(0);
		this.m_left = this.getControllerAt(1);
		this.m_right = this.getControllerAt(2);
		this.m_bottom = this.getControllerAt(3);
		this.m_horizontal = this.getControllerAt(4);
		this.m_verticl = this.getControllerAt(5);
		this.m_comp = <CreatorComp>(this.getChildAt(0));
		this.m_TopValue = <fgui.GLabel>(this.getChildAt(3));
		this.m_TargetValue = <fgui.GLabel>(this.getChildAt(4));
		this.m_Top = <fgui.GButton>(this.getChildAt(5));
		this.m_AlignMode = <fgui.GComboBox>(this.getChildAt(6));
		this.m_LeftValue = <fgui.GLabel>(this.getChildAt(7));
		this.m_Left = <fgui.GButton>(this.getChildAt(8));
		this.m_RightValue = <fgui.GLabel>(this.getChildAt(9));
		this.m_Right = <fgui.GButton>(this.getChildAt(10));
		this.m_BottomValue = <fgui.GLabel>(this.getChildAt(11));
		this.m_Bottom = <fgui.GButton>(this.getChildAt(12));
		this.m_HorizontalCenterValue = <fgui.GLabel>(this.getChildAt(13));
		this.m_HorizontalCenter = <fgui.GButton>(this.getChildAt(14));
		this.m_VerticlCenterValue = <fgui.GLabel>(this.getChildAt(15));
		this.m_VerticlCenter = <fgui.GButton>(this.getChildAt(16));
	}
}