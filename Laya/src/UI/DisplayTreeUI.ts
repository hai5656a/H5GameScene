import DisplayTreeView from "../fgui/Builder/DisplayTreeView";
import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";

export default class DisplayTreeUI{
    view:DisplayTreeView;
    root:fgui.GRoot;
    selectItem:fairygui.GObject;
    isExpand:boolean
    constructor(view:DisplayTreeView){
        this.view = view;
        this.view.m_treeView.treeNodeRender = Laya.Handler.create(this, this.renderTreeNode, null, false);
        this.view.m_treeView.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
        this.view.m_btnRefresh.onClick(this,this.onRefresh);
        this.view.m_btnCollapseAll.onClick(this,this.onCollapseAll);
        EditorEvent.on(EditorEvent.Selection,this,this.selectTree) ;
        EditorEvent.on(EditorEvent.TreeChanged,this,this.onRefresh) ;
    }
    initTree(){
        this.root = Consts.GRoot;
        if(!this.root)
          return;
        this.isExpand = false; 
        this.view.m_btnCollapseAll.tooltips = "全部展开";
        this.view.m_treeView.numItems = 0;
        this.createGObject(this.root,this.view.m_treeView.rootNode);
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
    private createGObject(item:fgui.GObject,parent:fgui.GTreeNode){
        if(item.name==Consts.EditorLineName)
          return;
        let node : fgui.GTreeNode= this.createNode(item);
        parent.addChild(node);
        if(item.asCom.numChildren>0){
            this.createChildren(item.asCom._children,node);
        }
    }
    private createChildren(items:fgui.GObject[],parent:fgui.GTreeNode){
        for(var i = 0;i<items.length;i++){
            this.createGObject(items[i],parent);
        }
    }
    private createNode(item:fgui.GObject):fgui.GTreeNode{
        let node : fgui.GTreeNode = new  fgui.GTreeNode(item.asCom.numChildren>0)
        node.data = item;
        item[Consts.EditorNodeName] = node;
        return node;
    }
    private renderTreeNode(node: fgui.GTreeNode, obj: fgui.GComponent) {
  
        let gobj =<fgui.GObject> node.data;
        let cname = Consts.getClassName(gobj);
        if(cname){
            cname = gobj.name+"("+cname+")"
        }else cname = gobj.name;

        obj.text = cname;
        obj.icon = Consts.getFguiIcon(gobj);
        obj.alpha = Consts.engineManager.checkFGUIVisible(gobj)?1:0.5;
    }
    onClickItem(item: fgui.GObject){
        this.selectItem = item;
        if(item.treeNode&&item.treeNode.data){
            if(item.treeNode.data!=Consts.GRoot&& !item.treeNode.data.parent){
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
}