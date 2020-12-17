/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class Basic3DPropsPanel extends fgui.GComponent {

	public m_showRestrictSize:fgui.Controller;
	public m_type:fgui.Controller;
	public m_name:fgui.GLabel;
	public m_x:fgui.GLabel;
	public m_y:fgui.GLabel;
	public m_z:fgui.GLabel;
	public m_rotationX:fgui.GLabel;
	public m_rotationY:fgui.GLabel;
	public m_rotationZ:fgui.GLabel;
	public m_scaleX:fgui.GLabel;
	public m_scaleY:fgui.GLabel;
	public m_scaleZ:fgui.GLabel;
	public m_visible:fgui.GButton;
	public m_static:fgui.GButton;
	public m_localx:fgui.GLabel;
	public m_localy:fgui.GLabel;
	public m_localz:fgui.GLabel;
	public m_localrotationX:fgui.GLabel;
	public m_localrotationY:fgui.GLabel;
	public m_localrotationZ:fgui.GLabel;
	public m_localscaleX:fgui.GLabel;
	public m_localscaleY:fgui.GLabel;
	public m_localscaleZ:fgui.GLabel;
	public static URL:string = "ui://2pshu6oi6who1nry324";

	public static createInstance():Basic3DPropsPanel {
		return <Basic3DPropsPanel>(fgui.UIPackage.createObject("Builder", "Basic3DPropsPanel"));
	}

	protected onConstruct():void {
		this.m_showRestrictSize = this.getControllerAt(0);
		this.m_type = this.getControllerAt(1);
		this.m_name = <fgui.GLabel>(this.getChildAt(1));
		this.m_x = <fgui.GLabel>(this.getChildAt(4));
		this.m_y = <fgui.GLabel>(this.getChildAt(5));
		this.m_z = <fgui.GLabel>(this.getChildAt(6));
		this.m_rotationX = <fgui.GLabel>(this.getChildAt(8));
		this.m_rotationY = <fgui.GLabel>(this.getChildAt(9));
		this.m_rotationZ = <fgui.GLabel>(this.getChildAt(10));
		this.m_scaleX = <fgui.GLabel>(this.getChildAt(12));
		this.m_scaleY = <fgui.GLabel>(this.getChildAt(13));
		this.m_scaleZ = <fgui.GLabel>(this.getChildAt(14));
		this.m_visible = <fgui.GButton>(this.getChildAt(15));
		this.m_static = <fgui.GButton>(this.getChildAt(16));
		this.m_localx = <fgui.GLabel>(this.getChildAt(18));
		this.m_localy = <fgui.GLabel>(this.getChildAt(19));
		this.m_localz = <fgui.GLabel>(this.getChildAt(20));
		this.m_localrotationX = <fgui.GLabel>(this.getChildAt(22));
		this.m_localrotationY = <fgui.GLabel>(this.getChildAt(23));
		this.m_localrotationZ = <fgui.GLabel>(this.getChildAt(24));
		this.m_localscaleX = <fgui.GLabel>(this.getChildAt(26));
		this.m_localscaleY = <fgui.GLabel>(this.getChildAt(27));
		this.m_localscaleZ = <fgui.GLabel>(this.getChildAt(28));
	}
}