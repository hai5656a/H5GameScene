import DisplayTreeView from "../fgui/Builder/DisplayTreeView";
import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";

export default class DisplayTreeUI{
    view:DisplayTreeView;
    // root:fgui.GRoot;
     selectItem:fairygui.GObject;
    isExpand:boolean
    constructor(view:DisplayTreeView){
        this.view = view;
        this.view.m_treeView.treeNodeRender = Laya.Handler.create(this, this.renderTreeNode, null, false);
        this.view.m_treeView.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
        this.view.m_btnRefresh.onClick(this,this.onRefresh);
        this.view.m_btnCollapseAll.onClick(this,this.onCollapseAll);
        this.view.m_group.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
        EditorEvent.on(EditorEvent.Selection,this,this.selectTree) ;
        EditorEvent.on(EditorEvent.TreeChanged,this,this.onRefresh) ;
        EditorEvent.on(EditorEvent.TreeTypeDataChanged,this,this.onTreeType);
    }
    initTree(){
        // let root = Consts.displayList.root;
        if(!Consts.displayList||!Consts.displayList.root)
          return;
        this.isExpand = false; 
        this.view.m_btnCollapseAll.tooltips = "全部展开";
        this.view.m_treeView.numItems = 0;
        Consts.displayList.refreshList(this.view.m_treeView.rootNode);
        this.selectItem = null;
        EditorEvent.event(EditorEvent.SelectionChanged,null);
    }
    selectTree(item){
        if(item&&item[Consts.EditorNodeName]){
            let itemNode = item[Consts.EditorNodeName]
            this.view.m_treeView.selectNode(itemNode,true);
            EditorEvent.event(EditorEvent.SelectionChanged,itemNode.data);
        }
    }
   
    private renderTreeNode(node: fgui.GTreeNode, obj: fgui.GComponent) {
  
        let gobj =  node.data;
        // let cname = Consts.getClassName(gobj);
        // if(cname){
        //     cname = gobj.name+"("+cname+")"
        // }else cname = gobj.name;

        obj.text =Consts.displayList.getDisPlayName(gobj) ;
        obj.icon =  Consts.displayList.getDisPlayIcon(gobj);
        obj.alpha = Consts.displayList.isVisable(gobj)?1:0.5;
    }
    onClickItem(item: fgui.GObject){
        this.selectItem = item;
        if(item.treeNode&&item.treeNode.data){
            if(!Consts.displayList.isShow(item.treeNode.data)){
                alert("对象已不显示，请刷新列表")
                return;
            }
            EditorEvent.event(EditorEvent.SelectionChanged,item.treeNode.data);
        }
       
    }
    onRefresh(){
        this.initTree() ; 
    }
    onCollapseAll(){
        if(!this.isExpand){
            this.isExpand = true;
            this.view.m_btnCollapseAll.tooltips = "全部折叠";
            this.view.m_treeView.expandAll();
        }else{
            this.isExpand = false;
            this.view.m_btnCollapseAll.tooltips = "全部展开";
            this.view.m_treeView.collapseAll();
        }
       
    }
    onTreeType(selectedIndex){
        this.view.m_group.visible = true;
        this.view.m_group.items = Consts.treeTypeList;
        this.view.m_group.selectedIndex = selectedIndex;
    }
    changeType(){
        EditorEvent.event(EditorEvent.TreeTypeChanged,Consts.treeTypeList[this.view.m_group.selectedIndex] );
    }
}