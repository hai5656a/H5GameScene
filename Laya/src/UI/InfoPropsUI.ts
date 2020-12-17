import InfoPropsPanel from "../fgui/Builder/InfoPropsPanel";
import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";

export default class InfoPropsUI{
    view:InfoPropsPanel;
    item;
    constructor(view:InfoPropsPanel){
       
        this.view = view;
        this.view.m_title.onClick(this,this.clickItem);
        this.view.m_btnRefresh.onClick(this,this.refClick);
    }
    public setData(item){
        this.item = item;
        this.view.m_icon.icon = Consts.displayList.getDisPlayIcon(item);
        this.view.m_title.text = Consts.getClassName(item);
    }
    clickItem(){
        console.log(this.item);
    }
    refClick(){
        if(this.item)
          EditorEvent.event(EditorEvent.SelectionChanged,this.item) ;
    }
}