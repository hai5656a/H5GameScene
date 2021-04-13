/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Basic3DPropsPanel from "./Basic3DPropsPanel";
import BasicPropsPanel from "./BasicPropsPanel";
import ComControllerPanel from "./ComControllerPanel";
import ComControllerItem from "./ComControllerItem";
import ComTransitionPanel from "./ComTransitionPanel";
import ComTransitionItem from "./ComTransitionItem";
import LibView_sep from "./LibView_sep";
import TitleBar from "./TitleBar";
import CreatorPropsPanel from "./CreatorPropsPanel";
import CreatorWidgetPanel from "./CreatorWidgetPanel";
import DisplayTreeView from "./DisplayTreeView";
import MainView from "./MainView";
import DocumentView from "./DocumentView";
import InspectorView from "./InspectorView";
import LibraryView_Slider from "./LibraryView_Slider";
import InfoPropsPanel from "./InfoPropsPanel";
import PropsPanel from "./PropsPanel";
import CreatorLabelPropsPanel from "./CreatorLabelPropsPanel";
import CreatorComp from "./CreatorComp";
import RefreshButton from "./RefreshButton";

export default class BuilderBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(Basic3DPropsPanel.URL, Basic3DPropsPanel);
		fgui.UIObjectFactory.setExtension(BasicPropsPanel.URL, BasicPropsPanel);
		fgui.UIObjectFactory.setExtension(ComControllerPanel.URL, ComControllerPanel);
		fgui.UIObjectFactory.setExtension(ComControllerItem.URL, ComControllerItem);
		fgui.UIObjectFactory.setExtension(ComTransitionPanel.URL, ComTransitionPanel);
		fgui.UIObjectFactory.setExtension(ComTransitionItem.URL, ComTransitionItem);
		fgui.UIObjectFactory.setExtension(LibView_sep.URL, LibView_sep);
		fgui.UIObjectFactory.setExtension(TitleBar.URL, TitleBar);
		fgui.UIObjectFactory.setExtension(CreatorPropsPanel.URL, CreatorPropsPanel);
		fgui.UIObjectFactory.setExtension(CreatorWidgetPanel.URL, CreatorWidgetPanel);
		fgui.UIObjectFactory.setExtension(DisplayTreeView.URL, DisplayTreeView);
		fgui.UIObjectFactory.setExtension(MainView.URL, MainView);
		fgui.UIObjectFactory.setExtension(DocumentView.URL, DocumentView);
		fgui.UIObjectFactory.setExtension(InspectorView.URL, InspectorView);
		fgui.UIObjectFactory.setExtension(LibraryView_Slider.URL, LibraryView_Slider);
		fgui.UIObjectFactory.setExtension(InfoPropsPanel.URL, InfoPropsPanel);
		fgui.UIObjectFactory.setExtension(PropsPanel.URL, PropsPanel);
		fgui.UIObjectFactory.setExtension(CreatorLabelPropsPanel.URL, CreatorLabelPropsPanel);
		fgui.UIObjectFactory.setExtension(CreatorComp.URL, CreatorComp);
		fgui.UIObjectFactory.setExtension(RefreshButton.URL, RefreshButton);
	}
}