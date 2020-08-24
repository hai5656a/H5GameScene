import EmCheckbox from "./EmCheckbox";
import XYInput from "./XYInput";

export default class BuilderUI {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(EmCheckbox.URL, EmCheckbox);
        fgui.UIObjectFactory.setExtension(XYInput.URL, XYInput);
        fgui.UIObjectFactory.setExtension(XYInput.URLNumber, XYInput);
	}
}