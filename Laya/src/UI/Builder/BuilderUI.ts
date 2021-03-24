import Basic3DPropsPanel from "../../fgui/Builder/Basic3DPropsPanel";
import BasicPropsPanel from "../../fgui/Builder/BasicPropsPanel";
import ComControllerPanel from "../../fgui/Builder/ComControllerPanel";
import ComTransitionPanel from "../../fgui/Builder/ComTransitionPanel";
import CreatorPropsPanel from "../../fgui/Builder/CreatorPropsPanel";
import CreatorWidgetPanel from "../../fgui/Builder/CreatorWidgetPanel";
import PropsPanel from "../../fgui/Builder/PropsPanel";
import Basic3DPropsUI from "../Basic3DPropsUI";
import BasicPropsUI from "../BasicPropsUI";
import ComControllerUI from "../ComControllerUI";
import ComTransitionUI from "../ComTransitionUI";
import CreatorPropsUI from "../CreatorPropsUI";
import CreatorWidgetUI from "../CreatorWidgetUI";
import PropsUI from "../PropsUI";
import EmCheckbox from "./EmCheckbox";
import XYInput from "./XYInput";

export default class BuilderUI {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(EmCheckbox.URL, EmCheckbox);
        fgui.UIObjectFactory.setExtension(XYInput.URL, XYInput);
        fgui.UIObjectFactory.setExtension(XYInput.URLNumber, XYInput);

		fgui.UIObjectFactory.setExtension(Basic3DPropsPanel.URL, Basic3DPropsUI);
		fgui.UIObjectFactory.setExtension(BasicPropsPanel.URL, BasicPropsUI);
		fgui.UIObjectFactory.setExtension(ComControllerPanel.URL, ComControllerUI);
		fgui.UIObjectFactory.setExtension(ComTransitionPanel.URL, ComTransitionUI);
		fgui.UIObjectFactory.setExtension(CreatorPropsPanel.URL, CreatorPropsUI);
		fgui.UIObjectFactory.setExtension(CreatorWidgetPanel.URL, CreatorWidgetUI);
		fgui.UIObjectFactory.setExtension(PropsPanel.URL, PropsUI);
	}
}