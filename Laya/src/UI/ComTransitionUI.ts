import ComTransitionPanel from "../fgui/Builder/ComTransitionPanel";
import ComTransitionItem from "../fgui/Builder/ComTransitionItem";

export default class ComTransitionUI{
    view:ComTransitionPanel;
   allTransition:fairygui.Transition[];
    constructor(view:ComTransitionPanel){
        this.view = view;
        view.m_list.itemRenderer = Laya.Handler.create(this,this.itemRenderer,null,false);
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
    setData(item:fgui.GObject){
        if(item){
            this.allTransition = item.asCom._transitions;
            if(this.allTransition&&this.allTransition.length>0){
                this.view.m_list.numItems = this.allTransition.length;
            }else this.view.m_list.numItems = 0;
            let h = this.view.m_list.numItems*30;
            this.view.m_list.height = Math.min(h,300)
        }
    }
  
    
}