import Consts, { TreeType } from "../editor/Consts";
import EditorEvent from "../editor/EditorEvent";
import ResourceView from "../fgui/Builder/ResourceView";
import { Asset } from "../editor/engine/IEngine";

export default class ResourceUI{
    view:ResourceView;
    item:Asset;
    loader:Laya.Loader;
    constructor(view:ResourceView){
        this.view = view;
        EditorEvent.on(EditorEvent.RESSelectionChanged,this,this.selectItem) ;
        this.view.m_url.editable = false;
        this.view.m_title.editable = false;
        this.view.m_play.onClick(this,this.playSound);
        this.view.m_logbtn.onClick(this,this.logItem);
        this.loader = new Laya.Loader();
    }
  
     GetUrlRelativePath()
    　　{
        if(Consts.gameWindow){
            　var url = Consts.gameWindow.document.location.href;
            　　　　var arrUrl = url.split("//");
            
            　　　　var start = arrUrl[1].indexOf("/");
            　　　　var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
            
            　　　　if(relUrl.indexOf("?") != -1){
            　　　　　　relUrl = relUrl.split("?")[0];
            　　}
            　　　return relUrl;
        }
    　　　return ""
    　　}
    selectItem(item:Asset){
        this.item = item;
        if(item){
         var index = Consts.getFileIndex(item.type);
         if(item.url.indexOf("http:")>-1||item.url.indexOf("https:")>-1){
            url =  item.url;
         }else 
           var url =this.GetUrlRelativePath()+ item.url;
         if(this.view.m_url.text){
             Laya.loader.clearRes( this.view.m_url.text)
         }
         this.view.m_url.text = url;

         if(index>-1){
             this.view.m_editType.selectedIndex = index;
             if(index==0){
                 this.view.m_icon.url = this.view.m_url.text;
             }else if(index==1){
                Laya.loader.load(this.view.m_url.text,Laya.Handler.create(this,this.loadTxtcomp), null, Laya.Loader.TEXT)
             }
         }else{
            this.view.m_editType.selectedIndex = 1;
            this.view.m_title.text ="暂时不支持查看格式："+item.type;
         }
        //  if(item.width&&item.height){
        //      this.view.m_message.text = item.width+"x"+item.height;
        //  }else 
        //  this.view.m_message.text = "";
        }
        var url = Laya.URL.formatURL(this.view.m_url.text);
        this.loader["_loadHttpRequest"](url,Laya.Loader.BUFFER,this,this.onLoaded, this, this.onProgress, this, this.onError)
        // else{
            // this.view.m_editType.selectedIndex = 1;
            // this.view.m_title.text ="暂时不支持格式："+item.type;
        // }
    }
    loadTxtcomp(data:string){
        this.view.m_title.text =data;

    }
    onLoaded(data){
        var mess = ""
        if(this.item&&this.item.width&&this.item.height){
            mess ="文件尺寸:"+ this.item.width+"x"+this.item.height;
        }
        let size =data.byteLength
        if(data.byteLength>1024*1024){
            size = (data.byteLength/1024/1024).toFixed(2)+"MB";
        }else if(data.byteLength>1024){
            size = (data.byteLength/1024).toFixed(2)+"KB";
        }else size = size+"B"
        mess+="  "+"文件大小:"+size+" ";
        this.view.m_message.text = mess;
    }
    onProgress(data){
        // console.log(data);
    }
    onError(data){
        // console.log(data);
    }
    playSound(){
        if(this.view.m_url.text){
            Laya.SoundManager.playSound(this.view.m_url.text);
        }
    }
    logItem(){
        if(this.item)
        console.log(this.item.data);
    }
}