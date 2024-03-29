import FObjectType from "./FObjectType";
import FPackageItemType from "./FPackageItemType";
import { IEngine } from "./engine/IEngine";
import { IDisplayManager } from "./display/IDisplayManager";
export enum TreeType{
    Laya="Laya",
    Egret = "Egret",
    CC ="Cocos Creator",
    FGUI="FariyGui"
}
export default class Consts{
    public static version="1.0.0";
    public static gameWindow:Window;
    public static frame;
    public static frameStyle:CSSStyleDeclaration;
    // public static GRoot:fairygui.GRoot;
    public static engineManager:IEngine;
    public static displayList:IDisplayManager;
    public static  icons = {};
    public static EditorLineName = "$$EditorLine";
    public static EditorNodeName = "$$Node";
    public static rectLineSize=4;
    public static rectColor =0x1F66D1;
    public static treeTypeList:TreeType[];
    public static nowTreeType:TreeType;
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
        Consts.icons[FObjectType.JSON] = fgui.UIPackage.getItemURL("Builder", "icon_json");
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
        Consts.icons[FObjectType.SPRITE] = fgui.UIPackage.getItemURL("Builder", "icon_Sprite");
        Consts.icons[FObjectType.SPRITE3D] = fgui.UIPackage.getItemURL("Builder", "icon_loader3D");
        Consts.icons["GObject"] = fgui.UIPackage.getItemURL("Builder", "icon_misc");
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
    static GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
   private static filetype = [['png','jpg','webp','bmp','gif','jpeg'],['txt','plist','xml','json','yaml','ini','csv','md','atlas','js','fnt'],['ogg','mp3','wma', "mpeg","wav","m4a","mp4","aiff","mid"]];
    static getFileIcon(type:string){
        var index = this.getFileIndex(type);
        if(index>-1){
            let types = [Consts.icons[FObjectType.IMAGE],Consts.icons[FObjectType.JSON],Consts.icons[FPackageItemType.SOUND]]
            return types[index];
        }
        return Consts.icons[FPackageItemType.MISC]
    }
    static getFileIndex(type:string){
        if(type){
            for(var i =0;i<this.filetype.length;i++){
                var item = this.filetype[i];
                if(item.indexOf(type)!=-1){
                    return i;
                }
            }
        }
        return -1;
    }
    static urlToType(url){
        var ft = url.split("?")[0].split(".");
        if(ft.length>1){
            return ft[ft.length-1];
        }
        return "";
    }
}