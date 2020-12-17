import { IDisplayManager } from "./IDisplayManager";
import Consts, { TreeType } from "../Consts";
import FObjectType from "../FObjectType";

export default class  LayaManager implements IDisplayManager{
   
    private static  i:LayaManager;
    static getInstance(){
        if(this.i==null){
            this.i = new LayaManager();
        }
        return this.i;
    }
    root:Laya.Stage;
    camera:Laya.Camera;
    displayModule;//Laya
    /**引擎初始化 */
    start(root,m){
        this.root = root;
        this.displayModule = m;
        Consts.nowTreeType = TreeType.Laya;
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
        if(item.active&&this.displayModule.Camera&&item instanceof this.displayModule.Camera){
            this.camera = item;
        }
        let children =item._childs?item._childs:item._children;
        if(children&&children.length>0){
            this.createChildren(children,node);
        }
    }
    private createChildren(items:Laya.Node[],parent:fgui.GTreeNode){
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
    isShow(obj:Laya.Node){
        
        return obj==this.root||obj.parent
    }
    isVisable(item:Laya.Sprite){
        let gameModule = this.displayModule; 
        if(gameModule.Sprite&&item instanceof gameModule.Sprite){
            return item.visible ;
        }else
        //  if(gameModule.Sprite3D&&item instanceof gameModule.Sprite3D)
         {
            return  item.active;
        }
      
    }
    public getDisPlayName(gobj:Laya.Sprite){
       
        let cname = Consts.getClassName(gobj);
        if(cname){
            cname = gobj.name+"("+cname+")"
        }else cname = gobj.name;
        return cname;
    }
    getDisPlayRect(item:Laya.Sprite){
        let gameLaya = this.displayModule; 
        if(gameLaya.Sprite&&item instanceof gameLaya.Sprite){
            let p = item.localToGlobal(new gameLaya.Point(0,0));
            let pr = item.localToGlobal(new gameLaya.Point(item.width,item.height)  );
            let x = p.x;
            let y =p.y;
            let width =pr.x-p.x;
            let height = pr.y-p.y;
            return [x,y,width,height];   
        }else  if(gameLaya.Sprite3D&&item instanceof gameLaya.Sprite3D){
            let t:Laya.Transform3D =<any> item.transform;
            let camera = this.camera;
            if(camera) {
                let outPos = new gameLaya.Vector4()
                camera.viewport.project(t.position, camera.projectionViewMatrix, outPos);
                return [outPos.x / gameLaya.stage.clientScaleX, outPos.y / gameLaya.stage.clientScaleY,-1,-1]; 
            }else{
                return [0,0,0,0]; 
            } 
        }
       
        
    }
    
    public getDisPlayIcon(obj:Laya.Node){
        let gameLaya = this.displayModule; 
        if(gameLaya.Clip&&obj instanceof gameLaya.Clip){
            return Consts.icons[FObjectType.MOVIECLIP];
        }
        if(gameLaya.Image&&obj instanceof gameLaya.Image){
            return Consts.icons[FObjectType.IMAGE];
        }
        if(gameLaya.ComboBox&&obj instanceof gameLaya.ComboBox){
            return Consts.icons[FObjectType.EXT_COMBOBOX];
        }
        if(gameLaya.Slider&&obj instanceof gameLaya.Slider){
            return Consts.icons[FObjectType.EXT_SLIDER];
        }
   
        if(gameLaya.Tree&&obj instanceof gameLaya.Tree){
            return Consts.icons[FObjectType.TREE];
        }
        if(gameLaya.List&&obj instanceof gameLaya.List){
            return Consts.icons[FObjectType.LIST];
        }

        if(gameLaya.TextInput&&obj instanceof gameLaya.TextInput){
            return Consts.icons[FObjectType.INPUTTEXT];
        }

        if(gameLaya.ProgressBar&&obj instanceof gameLaya.ProgressBar){
            return Consts.icons[FObjectType.EXT_PROGRESS_BAR];
        }
        if( gameLaya.Label&&obj instanceof gameLaya.Label){
            return Consts.icons[FObjectType.EXT_LABEL];
        }
        if(gameLaya.Button&&obj instanceof gameLaya.Button){
            return Consts.icons[FObjectType.EXT_BUTTON];
        }
        if( gameLaya.Panel&&obj instanceof gameLaya.Panel){
            return Consts.icons[FObjectType.COMPONENT];
        }
        if( obj instanceof gameLaya.Sprite){
            return Consts.icons[FObjectType.SPRITE];
        }
        if(gameLaya.Sprite3D&& obj instanceof gameLaya.Sprite3D){
            return Consts.icons[FObjectType.SPRITE3D];
        }
        return  Consts.icons["GObject"];
        
    }
}