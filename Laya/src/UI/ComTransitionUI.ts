import ComTransitionPanel from "../fgui/Builder/ComTransitionPanel";
import ComTransitionItem from "../fgui/Builder/ComTransitionItem";
import { IPropsUI } from "./PropsUI";

export default class ComTransitionUI extends ComTransitionPanel implements IPropsUI{
    
   allTransition:fairygui.Transition[];
   protected onConstruct():void {
    super.onConstruct();
        this.m_list.itemRenderer = Laya.Handler.create(this,this.itemRenderer,null,false);
    }
    itemRenderer(index:number,item:ComTransitionItem){
        let data = this.allTransition[index];
        item.data = data;
        item.text = data.name;
        item.offClick(this,this.clickItem);
        item.m_btnPlay.onClick(this,this.clickItem,[data])
    }
    clickItem(t:fairygui.Transition){
        t.play();
    }
    setData(item){
        if(item){
            this.allTransition = item._transitions;
            if(this.allTransition&&this.allTransition.length>0){
                this.m_list.numItems = this.allTransition.length;
            }else this.m_list.numItems = 0;
            let h = this.m_list.numItems*30;
            this.m_list.height = Math.min(h,300)
        }
    }
  
    
}