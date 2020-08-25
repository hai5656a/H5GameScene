import { IDisplayList } from "./IDisplayList";
import Consts from "../Consts";
import FObjectType from "../FObjectType";

export default class  FGUIDisplayList implements IDisplayList{
   
    private static  i:FGUIDisplayList;
    static getInstance(){
        if(this.i==null){
            this.i = new FGUIDisplayList();
        }
        return this.i;
    }
    root:fgui.GRoot;
    displayModule;
    /**引擎初始化 */
    start(root,m){
        this.root = root;
        this.displayModule = m;
    };
    /**引擎结束 */
    end(){
        this.root = null;
        this.displayModule =null;
    };
    public refreshList(parent:fgui.GTreeNode){
        if(this.root){
            this.createDisplay(this.root,parent);
        }
    }

    
    private createDisplay(item:fgui.GObject,parent:fgui.GTreeNode){
        if(item.name==Consts.EditorLineName)
          return;
        let node : fgui.GTreeNode= this.createNode(item);
        parent.addChild(node);
        if(item.asCom.numChildren>0){
            this.createChildren(item.asCom._children,node);
        }
    }
    private createChildren(items:fgui.GObject[],parent:fgui.GTreeNode){
        for(var i = 0;i<items.length;i++){
            this.createDisplay(items[i],parent);
        }
    }
    private createNode(item:fgui.GObject):fgui.GTreeNode{
        let node : fgui.GTreeNode = new  fgui.GTreeNode(item.asCom.numChildren>0)
        node.data = item;
        item[Consts.EditorNodeName] = node;
        return node;
    }
    isShow(obj:fgui.GObject){
        
        return obj==this.root||obj.parent
    }
    isVisable(obj:fgui.GObject){
       return Consts.engineManager.checkFGUIVisible(obj)
    }
    public getDisPlayName(gobj:fgui.GObject){
       
        let cname = Consts.getClassName(gobj);
        if(cname){
            cname = gobj.name+"("+cname+")"
        }else cname = gobj.name;
        return cname;
    }
    public getDisPlayIcon(obj:fgui.GObject){
        let gamefgui = this.displayModule; 
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
}