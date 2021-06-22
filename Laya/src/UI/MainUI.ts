import MainView from "../fgui/Builder/MainView";
import DisplayTreeUI from "./DisplayTreeUI";
import Consts from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";
import DocumentUI from "./DocumentUI";
import InspectorUI from "./InspectorUI";
import SetUI, { CursorType } from "./SepUI";
import ResourceListUI from "./ResourceListUI";
import ResourceUI from "./ResourceUI";

export default class MainUI{
    view:MainView;
    document:DocumentUI;
    res:ResourceListUI;
    m_sep1:SetUI;
    // lineStyle:CSSStyleDeclaration;
   
    constructor(){
       
        this.view = MainView.createInstance();
        this.view.makeFullScreen();
        this.view.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
        fgui.GRoot.inst.addChild(this.view);
        this.view.m_btngo.onClick(this,this.goweb);
        this.view.m_webset.getTextField().on(Laya.Event.KEY_DOWN, this, this.onChanged);
        this.view.m_display.on(fgui.Events.STATE_CHANGED,this,this.onChangeView)
        new DisplayTreeUI(this.view.m_displaylist);
        this.document = new DocumentUI(this.view.m_document);
        this.res = new ResourceListUI(this.view.m_resourcelist);
        new ResourceUI(this.view.m_resource);
        new InspectorUI(this.view.m_insp);
        this.m_sep1 = this.view.m_sep1 as SetUI; 
        this.m_sep1.type = CursorType.H_RESIZE
        this.view.m_version.text ="version:"+ Consts.version;
        let str = Consts.GetQueryString("url");
        if(str){
            this.view.m_webset.text = decodeURIComponent(str);
            this.goweb();
        }else{
            str =  Laya.LocalStorage.getItem("webURL");
            if(str){
                this.view.m_webset.text = str;
            }
        }
         
    }
   
    onChanged(e:Laya.Event){
        if(e.keyCode==Laya.Keyboard.ENTER){
            this.goweb();
        }
    }
    onChangeView(){
        if(Consts.frameStyle)
        Consts.frameStyle.display=this.view.m_display.selectedIndex==0?"block":"none";
        if(this.view.m_display.selectedIndex==1){
            this.res.initList();
        }
    }
    goweb(){
        if( this.view.m_webset.text){
            Laya.LocalStorage.setItem("webURL",this.view.m_webset.text);
            let host = window.location.host;
            // if(this.view.m_webset.text.indexOf(host)!=-1){
                this.document.goweb(this.view.m_webset.text) ;
            // }else{
            //      alert("暂时不支持不在同个域下的网址")
                //this.document.frame.src = "game.html?url="+encodeURI(this.view.m_webset.text);
            // }
            //  document.domain = "*.*";
           
        }
    }
   
   
}