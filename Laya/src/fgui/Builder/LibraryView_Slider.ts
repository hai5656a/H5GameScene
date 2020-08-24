/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LibraryView_Slider extends fgui.GComponent {

	public m_slider:fgui.GSlider;
	public static URL:string = "ui://2pshu6oinw20ixicv7";

	public static createInstance():LibraryView_Slider {
		return <LibraryView_Slider>(fgui.UIPackage.createObject("Builder", "LibraryView_Slider"));
	}

	protected onConstruct():void {
		this.m_slider = <fgui.GSlider>(this.getChildAt(1));
	}
}