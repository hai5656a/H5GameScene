import { IDisplayManager } from "./IDisplayManager";
import Consts, { TreeType } from "../Consts";
import FObjectType from "../FObjectType";

export default class  CCManager implements IDisplayManager{
   
    private static  i:CCManager;
    static getInstance(){
        if(this.i==null){
            this.i = new CCManager();
        }
        return this.i;
    }
    root:cc.Node;
    displayModule//cc;
    /**引擎初始化 */
    start(root,m){
        this.root = root;
        this.displayModule = m;
        Consts.nowTreeType = TreeType.CC;
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

    
    private createDisplay(item:cc.Node,parent:fgui.GTreeNode){
        if(item.name==Consts.EditorLineName)
          return;
        let node : fgui.GTreeNode= this.createNode(item);
        if(node)
          parent.addChild(node);
        if(item.childrenCount>0){
            this.createChildren(item.children,node);
        }
    }
    private createChildren(items:cc.Node [],parent:fgui.GTreeNode){
        for(var i = 0;i<items.length;i++){
            this.createDisplay(items[i],parent);
        }
    }
    private createNode(item:cc.Node):fgui.GTreeNode{
        let node : fgui.GTreeNode = new  fgui.GTreeNode(item.childrenCount>0)
        node.data = item;
        item[Consts.EditorNodeName] = node;
        return node;
        
    }
    isShow(obj:cc.Node){
        
        return obj==this.root||obj.parent
    }
    isVisable(item:cc.Node){
      
        return item==this.root|| item.active;
        
    }
    public getDisPlayName(gobj:cc.Node){
       
        
        let cname = Consts.getClassName(gobj);
        if(cname){
            cname = gobj.name+"("+cname+")"
        }else cname = gobj.name;
        return cname;
    }
    getDisPlayRect(item:cc.Node){
        let p = item.convertToWorldSpace( new this.displayModule.Vec2( 0,0));
            let pr = item.convertToWorldSpace(new this.displayModule.Vec2(item.width,item.height));
            let x = p.x;
            let y =p.y;
            let width =pr.x-p.x;
            let height = pr.y-p.y;
        return [x,y,width,height];    
    }
    public getDisPlayIcon(obj:cc.Node){

        let gamecc = this.displayModule; 
        // if(cc.Node &&obj instanceof gameLaya.Clip){
        //     return Consts.icons[FObjectType.MOVIECLIP];
        // }
        // if(gameLaya.Image&&obj instanceof gameLaya.Image){
        //     return Consts.icons[FObjectType.IMAGE];
        // }
        // if(gameLaya.ComboBox&&obj instanceof gameLaya.ComboBox){
        //     return Consts.icons[FObjectType.EXT_COMBOBOX];
        // }
        // if(gameLaya.Slider&&obj instanceof gameLaya.Slider){
        //     return Consts.icons[FObjectType.EXT_SLIDER];
        // }
   
        // if(gameLaya.Tree&&obj instanceof gameLaya.Tree){
        //     return Consts.icons[FObjectType.TREE];
        // }
        // if(gameLaya.List&&obj instanceof gameLaya.List){
        //     return Consts.icons[FObjectType.LIST];
        // }

        // if(gameLaya.TextInput&&obj instanceof gameLaya.TextInput){
        //     return Consts.icons[FObjectType.INPUTTEXT];
        // }

        // if(gameLaya.ProgressBar&&obj instanceof gameLaya.ProgressBar){
        //     return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
        // }
        // if( gameLaya.Label&&obj instanceof gameLaya.Label){
        //     return Consts.icons[FObjectType.EXT_LABEL];
        // }
        // if(gameLaya.Button&&obj instanceof gameLaya.Button){
        //     return Consts.icons[FObjectType.EXT_BUTTON];
        // }
        // if( gameLaya.Panel&&obj instanceof gameLaya.Panel){
        //     return Consts.icons[FObjectType.COMPONENT];
        // }
        // if( obj instanceof gameLaya.Sprite){
        //     return Consts.icons[FObjectType.SPRITE];
        // }
        // if(gameLaya.Sprite3D&& obj instanceof gameLaya.Sprite3D){
        //     return Consts.icons[FObjectType.SPRITE3D];
        // }
        return  Consts.icons["GObject"];
    }
}