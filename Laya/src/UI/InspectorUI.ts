import InspectorView from "../fgui/Builder/InspectorView";
import EditorEvent from "../editor/EditorEvent";
import BasicPropsUI from "./BasicPropsUI";
import Consts, { TreeType } from "../editor/Consts";
import InfoPropsUI from "./InfoPropsUI";
import ComControllerUI from "./ComControllerUI";
import ComTransitionUI from "./ComTransitionUI";
import Basic3DPropsUI from "./Basic3DPropsUI";
import CreatorPropsUI from "./CreatorPropsUI";
import CreatorWidgetUI from "./CreatorWidgetUI";
import PropsUI, { IPropsUI } from "./PropsUI";

export default class InspectorUI{
    view:InspectorView;
    baseProps:IPropsUI;
    base3DProps:IPropsUI;
    controllerComp:IPropsUI;
    transitionComp:IPropsUI;
    ccInfoComp: IPropsUI;
    infoComp:InfoPropsUI;
    // allComps:PropsUI[]=[];
    // allpool:PropsUI[]=[];
    constructor(view:InspectorView){
        EditorEvent.on(EditorEvent.SelectionChanged,this,this.selectItem) ;
        this.view = view;
        this.baseProps = (this.view.m_baseBar as PropsUI).propsui ;
        this.base3DProps = (this.view.m_base3DBar as PropsUI).propsui ;
        this.controllerComp = (this.view.m_controllerBar as PropsUI).propsui ;
        this.transitionComp = (this.view.m_transitionBar as PropsUI).propsui ;
        this.ccInfoComp =  (this.view.m_nodeBar as PropsUI).propsui ;
        this.infoComp = new InfoPropsUI(this.view.m_infoComp);
         this.view.m_creatorlist.itemRenderer = Laya.Handler.create(this, this.creatorRenderListItem, null, false);
        // this.view.m_type.on(fairygui.Events.STATE_CHANGED,this,this.changeType)
    }
    selectItem(item){
        if(item){
            let gameModule = Consts.displayList.displayModule; 
            this.infoComp.setData(item);
            if( Consts.nowTreeType == TreeType.FGUI){
                this.view.m_type.selectedIndex = 0;
                this.baseProps.setData(item);
                this.controllerComp.setData(item);
                 this.transitionComp.setData(item);
            }else if(Consts.nowTreeType == TreeType.Laya){
                if(gameModule.Sprite&&item instanceof gameModule.Sprite){
                    this.view.m_type.selectedIndex = 1;
                    this.baseProps.setData(item);
                }else if(gameModule.Sprite3D&&item instanceof gameModule.Sprite3D){//laya 3d
                    this.view.m_type.selectedIndex = 2;
                    this.base3DProps.setData(item)
                }else if(gameModule.Node &&item instanceof gameModule.Node){
                        this.view.m_type.selectedIndex = 2;
                        this.base3DProps.setData(item)
                }
            }else if(Consts.nowTreeType == TreeType.CC){
                this.view.m_type.selectedIndex = 3;
                this.ccInfoComp.setData(item);
                let itemnumber = 0;
                if(item._components)
                itemnumber =  item._components.length;
                this.view.m_creatorlist.numItems = itemnumber;
                // while(itemnumber!=this.allComps.length){
                //     if(itemnumber<this.allComps.length){
                //       let itemComp=  this.allComps.pop();
                //       itemComp.removeFromParent();
                //       this.allpool.push(itemComp);
                //     //   itemComp.dispose();
                //     }else if(itemnumber>this.allComps.length){
                //         let itemComp ;
                //         if(this.allpool.length>0)
                //          itemComp = this.allpool.pop();
                //         else
                //          itemComp = fairygui.UIPackage.createObjectFromURL("ui://2pshu6ois4ys1nry32c") as PropsUI;
                //         this.view.addChild(itemComp);
                //         this.allComps.push(itemComp);
                //         itemComp.group = this.view.m_group;

                //     }else break;
                // }
                // for(let i = 0;i<itemnumber;i++){
                //     this.creatorRenderListItem(i,this.allComps[i]);
                // }
            }else if(Consts.nowTreeType == TreeType.Egret){
                this.view.m_type.selectedIndex = 4;
                this.baseProps.setData(item);
            }
        }
    }
    // changeType(){
    //     if( this.view.m_type.selectedIndex!=3){
    //         for(let i = 0;i<this.allComps.length;i++){
    //             this.allComps[i].visible = false;
    //         }
    //     }
    // }

     creatorRenderListItem( index:number,  obj:PropsUI)
    {
       obj.visible = true;
       let component = this.infoComp.item._components[index];

       let url="ui://2pshu6ois4ys1nry32e";
       if(component.name){
           if(component.name.indexOf("<Widget>")!=-1){
            url = "ui://2pshu6oiixw71nry326"
           }if(component.name.indexOf("<Label>")!=-1){
            url = "ui://2pshu6ois4ys1nry32d"
           }
           let start = component.name.indexOf("<");
           let end = component.name.indexOf(">");
           if(start>-1&&end>-1)
           obj.text = component.name.substring(start+1,end); 
           else 
           obj.text = component.name;
       }
       obj.icon = url;
       obj.propsui.setData(component);
    }
    onClick(){
        EditorEvent.event(EditorEvent.ClickChanged);
    }
 
}
