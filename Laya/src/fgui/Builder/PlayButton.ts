/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class PlayButton extends fgui.GButton {

	public m_play:fgui.GImage;
	public static URL:string = "ui://2pshu6oid1l0iubo";

	public static createInstance():PlayButton {
		return <PlayButton>(fgui.UIPackage.createObject("Builder", "PlayButton"));
	}

	protected onConstruct():void {
		this.m_play = <fgui.GImage>(this.getChildAt(0));
	}
}