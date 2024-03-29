import ComControllerPanel from "../fgui/Builder/ComControllerPanel";
import ComControllerItem from "../fgui/Builder/ComControllerItem";
import { IPropsUI } from "./PropsUI";

export default class ComControllerUI extends ComControllerPanel implements IPropsUI{
 
    allController:fairygui.Controller[];
    allControllerNames;
    protected onConstruct():void {
        super.onConstruct();
        this.m_list.itemRenderer = Laya.Handler.create(this,this.itemRenderer,null,false);
     }
     itemRenderer(index:number,item:ComControllerItem){
         let data = this.allController[index];
         item.data = data;
         item.text = data.name;
         item.m_pageController.off(fairygui.Events.STATE_CHANGED, this, this.onChanged);
         item.m_pageController.selectedIndex = data.selectedIndex;
         item.m_pageController.items=this.allControllerNames[index];
         item.m_pageController.on(fairygui.Events.STATE_CHANGED, this, this.onChanged,[item])
     }
   
     setData(item){
         if(item){
             this.allController = item._controllers;
             if(this.allController&&this.allController.length>0){
                 this.allControllerNames = [];
                 for(var i = 0;i<this.allController.length;i++){
                     let item = [];
                     let c = this.allController[i];
                     for(let j = 0;j<c._pageNames.length;j++){
                        item[j] = j+":"+c._pageNames[j];
                     }
                     this.allControllerNames[i]=item;
                 }
                 this.m_list.numItems = this.allController.length;
             }else this.m_list.numItems = 0;
             let h = this.m_list.numItems*30;
             this.m_list.height = Math.min(h,300)
         }
     }
     onChanged(item:ComControllerItem){
        let c:fairygui.Controller =<fairygui.Controller> item.data;
        c.selectedIndex = item.m_pageController.selectedIndex;
     }
}