import { IDisplayManager } from "./IDisplayManager";
import Consts, { TreeType } from "../Consts";
import FObjectType from "../FObjectType";

export default class  EgretManager implements IDisplayManager{
   
    private static  i:EgretManager;
    static getInstance(){
        if(this.i==null){
            this.i = new EgretManager();
        }
        return this.i;
    }
    root:egret.Stage;

    displayModule;//Egret
    /**引擎初始化 */
    start(root,m){
        this.root = root;
        this.displayModule = m;
        Consts.nowTreeType = TreeType.Egret;
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

    
    private createDisplay(item,parent:fgui.GTreeNode){
        if(item.name==Consts.EditorLineName)
          return;
        let node : fgui.GTreeNode= this.createNode(item);
        parent.addChild(node);
    
        let children =item.$children;
        if(children&&children.length>0){
            this.createChildren(children,node);
        }
    }
    private createChildren(items:egret.DisplayObject[],parent:fgui.GTreeNode){
        for(var i = 0;i<items.length;i++){
            this.createDisplay(items[i],parent);
        }
    }
    private createNode(item:Laya.Node):fgui.GTreeNode{
        let node : fgui.GTreeNode = new  fgui.GTreeNode(item.numChildren>0)
        node.data = item;
        item[Consts.EditorNodeName] = node;
        return node;
    }
    isShow(obj:egret.DisplayObject){
        
        return obj==this.root||obj.parent
    }
    isVisable(item:egret.DisplayObject){
      
        return  item.visible;
 
    }
    public getDisPlayName(gobj:egret.DisplayObject){
       
        let cname = Consts.getClassName(gobj);
        if(cname){
            cname = gobj.name+"("+cname+")"
        }else cname = gobj.name;
        return cname;
    }
    getDisPlayRect(item:egret.DisplayObject){
        let gameEgret = this.displayModule; 
        // if(gameEgret.Sprite&&item instanceof gameLaya.Sprite){
            let p = item.localToGlobal(0,0);
            let pr = item.localToGlobal(item.width,item.height);
            let x = p.x;
            let y =p.y;
            let width =pr.x-p.x;
            let height = pr.y-p.y;
            return [x,y,width,height];   
        
        
    }
    
    public getDisPlayIcon(obj:egret.DisplayObject){
        let gameEgret = this.displayModule; 

        if(gameEgret.MovieClip&&obj instanceof gameEgret.MovieClip){
            return Consts.icons[FObjectType.MOVIECLIP];
        }
        if(gameEgret.Bitmap&&obj instanceof gameEgret.Bitmap){
            return Consts.icons[FObjectType.IMAGE];
        }
        if( obj instanceof gameEgret.Sprite){
            return Consts.icons[FObjectType.SPRITE];
        }

        let eui = Consts.gameWindow["eui"]
        if(eui){
            if(eui.SliderBase&&obj instanceof eui.SliderBase){
                return Consts.icons[FObjectType.EXT_SLIDER];
            }
    
            if(eui.List&&obj instanceof eui.List){
                return Consts.icons[FObjectType.LIST];
            }

            if(eui.TextInput&&obj instanceof eui.TextInput){
                return Consts.icons[FObjectType.INPUTTEXT];
            }

            if(eui.ProgressBar&&obj instanceof eui.ProgressBar){
                return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
            }
            if( eui.Label&&obj instanceof eui.Label){
                return Consts.icons[FObjectType.EXT_LABEL];
            }
            if(eui.Button&&obj instanceof eui.Button){
                return Consts.icons[FObjectType.EXT_BUTTON];
            }
            if( eui.Panel&&obj instanceof eui.Panel){
                return Consts.icons[FObjectType.COMPONENT];
            }
        }
        
       
        return  Consts.icons["GObject"];
        
    }
}