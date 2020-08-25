import FObjectType from "./FObjectType";
import FPackageItemType from "./FPackageItemType";
import { IEngineManager } from "./engine/IEngineManager";

export default class Consts{
    public static gameWindow:Window;
    public static gameFgui;
    public static engineManager:IEngineManager;
    public static GRoot:fairygui.GRoot;
    public static  icons = {};
    public static EditorLineName = "$$EditorLine";
    public static EditorNodeName = "$$Node";
    public static rectLineSize=4;
    public static rectColor =0x1F66D1;
    public static get rectColorStr():string{
        return "#"+Consts.rectColor.toString(16);
    }
    public static rectFill=0;
    public static  init():void{
        
        Consts.icons[FObjectType.FOLDER] =fairygui.UIPackage.getItemURL("Builder", "icon_folder");
        Consts.icons["folder_open"] = fgui.UIPackage.getItemURL("Builder", "icon_folder_open");
        Consts.icons[FObjectType.PACKAGE] = fgui.UIPackage.getItemURL("Builder", "icon_package");
        Consts.icons["package_open"] = fgui.UIPackage.getItemURL("Builder", "icon_package_open");
        Consts.icons[FObjectType.TREE] = fgui.UIPackage.getItemURL("Builder", "icon_branch");
        Consts.icons[FPackageItemType.SOUND] = fgui.UIPackage.getItemURL("Builder", "icon_sound");
        Consts.icons[FPackageItemType.FONT] = fgui.UIPackage.getItemURL("Builder", "icon_font");
        Consts.icons[FPackageItemType.MISC] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
        Consts.icons[FObjectType.IMAGE] = fgui.UIPackage.getItemURL("Builder", "icon_image");
        Consts.icons[FObjectType.GRAPH] = fgui.UIPackage.getItemURL("Builder", "icon_graph");
        Consts.icons[FObjectType.LIST] = fgui.UIPackage.getItemURL("Builder", "icon_list");
        Consts.icons[FObjectType.LOADER] = fgui.UIPackage.getItemURL("Builder", "icon_loader");
        Consts.icons[FObjectType.TEXT] = fgui.UIPackage.getItemURL("Builder", "icon_text");
        Consts.icons[FObjectType.RICHTEXT] = fgui.UIPackage.getItemURL("Builder", "icon_richtext");
        Consts.icons[FObjectType.RICHTEXT] = fgui.UIPackage.getItemURL("Builder", "icon_inputtext");
        Consts.icons[FObjectType.COMPONENT] = fgui.UIPackage.getItemURL("Builder", "icon_component");
        Consts.icons[FObjectType.SWF] = fgui.UIPackage.getItemURL("Builder", "icon_swf");
        Consts.icons[FObjectType.MOVIECLIP] = fgui.UIPackage.getItemURL("Builder", "icon_movieclip");
        Consts.icons[FObjectType.GROUP] = fgui.UIPackage.getItemURL("Builder", "icon_group");
        Consts.icons[FObjectType.EXT_BUTTON] = fgui.UIPackage.getItemURL("Builder", "icon_button");
        Consts.icons[FObjectType.EXT_LABEL] = fgui.UIPackage.getItemURL("Builder", "icon_label");
        Consts.icons[FObjectType.EXT_COMBOBOX] = fgui.UIPackage.getItemURL("Builder", "icon_combobox");
        Consts.icons[FObjectType.EXT_SLIDER] = fgui.UIPackage.getItemURL("Builder", "icon_slider");
        Consts.icons[FObjectType.EXT_PROGRESS_BAR] = fgui.UIPackage.getItemURL("Builder", "icon_progressbar");
        Consts.icons[FObjectType.EXT_SCROLLBAR] = fgui.UIPackage.getItemURL("Builder", "icon_scrollbar");
        Consts.icons["GObject"] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
    }
    public static getFguiIcon(obj:fgui.GObject){
        let gamefgui = Consts.gameFgui; 
        if(obj instanceof gamefgui.GMovieClip){
            return Consts.icons[FObjectType.MOVIECLIP];
        }
        if(obj instanceof gamefgui.GImage){
            return Consts.icons[FObjectType.IMAGE];
        }
        if(obj instanceof gamefgui.GComboBox){
            return Consts.icons[FObjectType.EXT_COMBOBOX];
        }
        if(obj instanceof gamefgui.GSlider){
            return Consts.icons[FObjectType.EXT_SLIDER];
        }
        if(obj instanceof gamefgui.GGroup){
            return Consts.icons[FObjectType.GROUP];
        }
        if(obj instanceof gamefgui.GGraph){
            return Consts.icons[FObjectType.GRAPH];
        }
        if(obj instanceof gamefgui.GTree){
            return Consts.icons[FObjectType.TREE];
        }
        if(obj instanceof gamefgui.GList){
            return Consts.icons[FObjectType.LIST];
        }
        if(obj instanceof gamefgui.GLoader){
            return Consts.icons[FObjectType.LOADER];
        }
        if(obj instanceof gamefgui.GTextInput){
            return Consts.icons[FObjectType.INPUTTEXT];
        }
        if(obj instanceof gamefgui.GRichTextField){
            return Consts.icons[FObjectType.RICHTEXT];
        }
        if(obj instanceof gamefgui.GTextField){
            return Consts.icons[FObjectType.TEXT];
        }
        if(obj instanceof gamefgui.GProgressBar){
            return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
        }
        if(obj instanceof gamefgui.GLabel){
            return Consts.icons[FObjectType.EXT_LABEL];
        }
        if(obj instanceof gamefgui.GButton){
            return Consts.icons[FObjectType.EXT_BUTTON];
        }
        if(obj instanceof gamefgui.GComponent){
            return Consts.icons[FObjectType.COMPONENT];
        }
       
        return  Consts.icons["GObject"];
        
    }
    public static getClassName(obj) {
        if (obj && obj.constructor && obj.constructor.toString()) {
            if(obj.constructor.name) {
                return obj.constructor.name;
            }
            let str = obj.constructor.toString();
            let arr;
            if(str.charAt(0) == '[')
            {
                arr = str.match(/\w+\s∗(\w+)/);
            } else {
                arr = str.match(/function\s*(\w+)/);
            }
            if (arr && arr.length == 2) {
                return arr[1];
            }
        }
        return ""; 
    }
}