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
        this.view.m_btnSearch.onClick(this,this.onSearch,[1]);
        this.view.m_btnSearchLeft.onClick(this,this.onSearch,[-1]);
        this.view.m_btnSearchRight.onClick(this,this.onSearch,[1]);
        this.view.m_txtSearch.getTextField().on(Laya.Event.KEY_DOWN, this, this.onChanged);
        this.view.m_group.on(fairygui.Events.STATE_CHANGED, this, this.changeType);
        EditorEvent.on(EditorEvent.Selection,this,this.selectTree) ;
        EditorEvent.on(EditorEvent.TreeChanged,this,this.onRefresh) ;
        EditorEvent.on(EditorEvent.TreeTypeDataChanged,this,this.onTreeType);
    }
   
    initTree(){
        this.allSearch = undefined;
        this.lastSearch = undefined;
        // let root = Consts.displayList.root;
        if(!Consts.displayList||!Consts.displayList.root)
          return;
        this.isExpand = false; 
        this.view.m_btnCollapseAll.tooltips = "全部展开";
       // this.view.m_treeView.removeChildren(0,this.view.m_treeView.numChildren,true);
        this.view.m_treeView.rootNode.removeChildren(0,-1);
        this.view.m_treeView.numItems = 0;
        Consts.displayList.refreshList(this.view.m_treeView.rootNode);
        this.selectItem = null;
        EditorEvent.event(EditorEvent.SelectionChanged,null);
        
    }
    selectTree(item){
        if(item&&item[Consts.EditorNodeName]){
            let itemNode = item[Consts.EditorNodeName]
            this.selectTreeNode(itemNode,true);
            // this.view.m_treeView.selectNode(itemNode,true);
            // EditorEvent.event(EditorEvent.SelectionChanged,itemNode.data);
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
        this.selectTreeNode(item.treeNode,false);
    }
    selectTreeNode(treeNode:fgui.GTreeNode,select:boolean){
        if(treeNode&&treeNode.data){
            if(!Consts.displayList.isShow(treeNode.data)){
                alert("对象已不显示，请刷新列表")
                return;
            }
            if(select){
                this.view.m_treeView.selectNode(treeNode,true);
            }
            EditorEvent.event(EditorEvent.SelectionChanged,treeNode.data);
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

    onChanged(e:Laya.Event){
        if(e.keyCode==Laya.Keyboard.ENTER){
            this.onSearch();
        }
    }
    private lastSearch:string;
    private allSearch:fgui.GTreeNode[];
    private nowindex:number;
    private serarchText;
    onSearch(add:number=1,evt?:Laya.Event){
        var serarchText = this.view.m_txtSearch.text;
        if(serarchText){
            this.serarchText = serarchText.toLowerCase();
            if(this.lastSearch==serarchText&&this.allSearch&&this.allSearch.length>0){
                this.nowindex = (this.nowindex+add+this.allSearch.length)%this.allSearch.length;
            }else{
                this.allSearch = [];
                this.nowindex = 0;
                this.searchNode(this.view.m_treeView.rootNode);
            }
        }
        if(this.allSearch&&this.allSearch.length>0){
            this.lastSearch = this.serarchText;
            this.view.m_numSearch.text = (this.nowindex+1)+"/"+this.allSearch.length;
            this.selectTreeNode(this.allSearch[this.nowindex],true);
            this.view.m_btnSearchLeft.visible = this.view.m_btnSearchRight.visible = true;
        }else {
            this.view.m_numSearch.text ="0/0";
            this.view.m_btnSearchLeft.visible = this.view.m_btnSearchRight.visible = false;
        }
    }
    searchNode(node:fgui.GTreeNode){
        let gobj =  node.data;
        if(gobj){
            var name = Consts.displayList.getDisPlayName(gobj);
            if(name&&name.toLocaleLowerCase().indexOf(this.serarchText )>-1){
                this.allSearch.push(node);
            }
        }
       if(node["_children"]){
        for(var i = 0;i<node.numChildren;i++){
            this.searchNode(node.getChildAt(i));
        }
       }

    }
}