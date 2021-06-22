import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";
import { Asset } from "../editor/engine/IEngine";
import ResourceListView from "../fgui/Builder/ResourceListView";

export default class ResourceListUI{
    view:ResourceListView;
    // root:fgui.GRoot;
     selectItem:fairygui.GObject;
     all:Asset[];
     seatchlist:Asset[];
   
    getIcon(type){

    }
    constructor(view:ResourceListView){
        this.view = view;
        this.view.m_listView.setVirtual();
        this.view.m_listView.itemRenderer = Laya.Handler.create(this, this.renderListNode, null, false);
        this.view.m_listView.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
        this.view.m_btnRefresh.onClick(this,this.onRefresh);
        this.view.m_btnSearch.onClick(this,this.onSearch);
        this.view.m_txtSearch.getTextField().on(Laya.Event.KEY_DOWN, this, this.onChanged);
        this.view.m_group.on(fairygui.Events.STATE_CHANGED, this, this.onSearch);
    }
   
    initList(){
        this.selectItem = null;
        if(Consts.engineManager)
        {
            this.all = Consts.engineManager.getResouceList();
            this.onSearch();
        }else{
            this.all=[];
            this.view.m_listView.numItems = 0;
        }
       
    }
   
    private renderListNode(index: number, item: fgui.GButton) {
        // let cname = Consts.getClassName(gobj);
        // if(cname){
        //     cname = gobj.name+"("+cname+")"
        // }else cname = gobj.name;
        var itemdata = this.seatchlist[index];
        item.text = itemdata.name ;
        item.icon = Consts.getFileIcon(itemdata.type) ;
        item.data = itemdata;
    }
    onClickItem(item: fgui.GObject){
        this.selectItem = item;
        EditorEvent.event(EditorEvent.RESSelectionChanged,item.data);
    }
    
    onRefresh(){
        this.initList() ; 
    }
    onChanged(e:Laya.Event){
        if(e.keyCode==Laya.Keyboard.ENTER){
            this.onSearch();
        }
    }
    onSearch(){
        this.seatchlist =  [];
        var serarchText = this.view.m_txtSearch.text;
        var selectedIndex = this.view.m_group.selectedIndex-1;
        for(var i=0 ;i< this.all.length;i++){
            var item = this.all[i]
            if(selectedIndex==-1||Consts.getFileIndex(item.type)==selectedIndex){
                if(serarchText&&item.name.indexOf(serarchText)==-1){
                    continue;
                }
                this.seatchlist.push(item);
            }
        }
        this.view.m_listView.numItems =   this.seatchlist.length;
        if(selectedIndex==-1){
            this.view.m_message.text ="资源数量："+this.all.length+" gpuMemory:"+ (Consts.engineManager.gpuMemory/1024/1024).toFixed(2) + 'M';
        }else{
            this.view.m_message.text ="资源数量："+this.seatchlist.length+"/"+this.all.length+" gpuMemory:"+ (Consts.engineManager.gpuMemory/1024/1024).toFixed(2) + 'M';
        }
    }
 
}