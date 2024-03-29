import Consts, { TreeType } from "../Consts";
import EditorEvent from "../EditorEvent";
import { Asset, IEngine } from "./IEngine";

export default class CCEngine implements IEngine {
  private static i: CCEngine;
  static getInstance() {
    if (this.i == null) {
      this.i = new CCEngine();
    }
    return this.i;
  }
  type = TreeType.CC;
  engine;
  start(game) {
    this.engine = game;
  }
  end() {
    this.removeSelectModel();
    this.engine = null;
    this.removeRect();
  }
  rectNode;
  rect: cc.Node;
  _content: cc.Graphics;
  fillColor: cc.Color;
  fguirect: fairygui.GGraph;
  createRectGraph() {
    if (this.rect) {
      this.rect.removeFromParent();
      this.rect.destroy();
    }
    this.rect = new this.engine.Node(); //  new Consts.displayList.displayModule.Graphics;
    this.rect.name = Consts.EditorLineName; // "Graphics";
    let line = (this._content = this.rect.addComponent(this.engine.Graphics));
    let color = Consts.rectColorStr;
    let c = new this.engine.Color(0, 0, 0, 255);
    c.fromHEX(color);
    let c2: cc.Color = new this.engine.Color(0, 0, 0, 255);
    c2.fromHEX(color);
    c2.setA(255 * Consts.rectFill);
    line.clear();
    line.lineWidth = Consts.rectLineSize;
    line.strokeColor = c;
    line.fillColor = c2;
    this.fillColor = c2;
    // line.rect(Consts.rectLineSize, c,c2);
    // this.rectNode = this.rect;
    line.name = Consts.EditorLineName;
    //this.rect.touchable = false;
  }
  createfguiRectGraph() {
    if (this.fguirect) {
      this.fguirect.removeFromParent();
      this.fguirect.dispose();
    }
    let line = (this.fguirect = new Consts.displayList.displayModule.GGraph());
    let color = Consts.rectColorStr;
    let c = new this.engine.Color(0, 0, 0, 255);
    c.fromHEX(color);
    let c2 = new this.engine.Color(0, 0, 0, 255);
    c2.fromHEX(color);
    c2.setA(255 * Consts.rectFill);
    line.drawRect(Consts.rectLineSize, c, c2);
    this.fillColor = c2;
    this.rectNode = line.node;
    line.name = Consts.EditorLineName;
    line.touchable = false;
  }
  showRect(x, y, w, h) {
    // console.log(x, y, w, h);
    if (Consts.nowTreeType == TreeType.CC) {
      if (!this.rect||!this.rect.isValid) {
        this.createRectGraph();
      }
      this.rect.active = true;
      // var px = -0.5 * w;
      // var py = 0.5 * h;
      var ls = Consts.rectLineSize / 2;
      this._content.clear();
      this._content.rect(
        ls,
        ls,
        w - Consts.rectLineSize,
        h - Consts.rectLineSize
      );
      var node: cc.Node = this.engine.director.getScene();
      var local = node.convertToNodeSpace(
        new Consts.displayList.displayModule.Vec2(x, y)
      );
      this.rect.x = local.x;
      this.rect.y = local.y;
      this.rect.active = true;
      if (ls != 0) this._content.stroke();
      if (this.fillColor.a != 0) this._content.fill();

      if (this.rect.parent) {
        this.rect.setSiblingIndex(this.rect.parent.childrenCount - 1);
      } else {
        var node: cc.Node = this.engine.director.getScene();
        node.addChild(this.rect);
      }
      // console.log(this.rect);
    } else if (Consts.nowTreeType == TreeType.FGUI) {
      if (!this.fguirect) {
        this.createfguiRectGraph();
      }
      this.fguirect.visible = true;
      this.fguirect.setSize(w, h);
      // this.fguirect.x = x;
      // this.fguirect.y = y;
      if (this.fguirect.parent) {
        this.fguirect.parent.setChildIndex(
          this.fguirect,
          this.fguirect.parent.numChildren - 1
        );
      } else {
        Consts.displayList.root.addChild(this.fguirect);
      }
      let p = this.fguirect.parent.globalToLocal(x, y);
      this.fguirect.x = p.x;
      this.fguirect.y = p.y;
      console.log(this.fguirect);
    }
  }
  hideRect() {
    if (this.rect) this.rect.active = false;
    if (this.fguirect && this.fguirect["_node"]) this.fguirect.visible = false;
  }
  removeRect() {
    if (this.rect) this.rect.destroy();
    this.rect = null;
    if (this.fguirect) this.fguirect.dispose();
    this.fguirect = null;
  }
  touchHander;
  addSelectModel() {
    this.touchHander = this.onMouseDown.bind(this);
    this.engine.game.canvas.addEventListener("mousedown", this.touchHander);
    let evt;
    if (this.engine.internal) {
      evt = this.engine.internal.eventManager;
    } else if (this.engine.eventManager) {
      evt = this.engine.eventManager;
    }
    if (evt) {
      evt._isEnabled = false;
    }
  }

  hitTestScene(pos) {
    var node = this.engine.director.getScene();
    this.target = null;
    for (let i = 0; i < node.children.length; i++) {
      this.hitTest(node.children[i], pos);
    }
  }
  target;
  hitTest(node, pos) {
    if (
      node.active &&
      node != this.rectNode &&
      node != this.rect &&
      !node.mouseThrough
    ) {
      if (node._hitTest(pos)) {
        this.target = node;
      }
      for (let i = 0; i < node.children.length; i++) {
        this.hitTest(node.children[i], pos);
      }
    }
  }
  onMouseDown(event) {
    let selfPointer;
    if (this.engine.internal) selfPointer = this.engine.internal.inputManager;
    else if (this.engine.inputManager) selfPointer = this.engine.inputManager;
    else if (Consts.gameWindow["_cc"])
      selfPointer = Consts.gameWindow["_cc"].inputManager;
    if (!selfPointer) return;
    var canvasBoundingRect = selfPointer._canvasBoundingRect;
    var location = selfPointer.getPointByEvent(event, canvasBoundingRect);
    var EventMouse = this.engine.Event.EventMouse;
    var mouseEvent = selfPointer.getMouseEvent(
      location,
      canvasBoundingRect,
      EventMouse.DOWN
    );
    mouseEvent.setButton(event.button);
    var pos = mouseEvent.getLocation();
    this.hitTestScene(pos);
    if (this.target) {
      let comp = this.target; //["$gobj"];
      EditorEvent.event(EditorEvent.Selection, comp);
      // console.log(this.target);
    }

    event.stopPropagation();
    event.preventDefault();
  }
  removeSelectModel() {
    if (this.engine) {
      let evt;
      if (this.engine.internal) {
        evt = this.engine.internal.eventManager;
      } else if (this.engine.eventManager) {
        evt = this.engine.eventManager;
      }
      if (evt) {
        evt._isEnabled = true;
      }
      if (this.touchHander) {
        this.engine.game.canvas.removeEventListener(
          "mousedown",
          this.touchHander
        );
      }
    }
  }

  onFPS() {
    if (!this.engine) return;
    var show = !this.engine.debug.isDisplayStats();
    this.engine.debug.setDisplayStats(show);
  }
  onPause() {
    if (!this.engine) return;
    var shouldPause = !this.engine.game.isPaused();
    if (shouldPause) {
      this.engine.game.pause();
    } else {
      this.engine.game.resume();
    }
  }
  checkFGUIVisible(gobj) {
    return gobj._finalVisible;
  }
  totalTextureSize;
  getResouceList(): Asset[] {
    let all: Asset[] = [];
    this.totalTextureSize = 0;
    if (this.engine.assetManager) {
      var assets = this.engine.assetManager.assets;
     
      assets.forEach((item: cc.Asset, key: string) => {
        let asset: Asset
        if (item.nativeUrl) {
           asset = {};
          asset.url = item.nativeUrl;         
          var path = this.uuidToPath(item._uuid);
          if (item.name) {
            asset.name = item.name;
          }else if(path){
            asset.name = path;
          } 
          else asset.name = key;
          asset.type = item["_native"];
          if (asset.type) {
            asset.type = asset.type.replace(".", "");
          }else{
            asset.type =Consts.urlToType(item.nativeUrl);
          }
          asset.data = item;
          all.push(asset);
        }
        if (item["width"] && item["height"]) {
            if(asset){
                asset.width = item["width"];
                asset.height = item["height"];
            }
          let scale = 1;
          if (item["genMipmaps"]) {
            scale = 1 + 1 / 3;
          }
          this.totalTextureSize += item["width"] * item["height"] * 4 * scale; /// 1024 / 1024;
        }
        // let type = cc.js.getClassName(item);
        // if (type == 'cc.Texture2D') {
        //     let texture = item as cc.Texture2D;
        //     totalTextureSize += (texture.width * texture.height * 4) / 1024 / 1024;
        //     count++;
      });
    } else if (this.engine.loader) {
      
      var assets = this.engine.loader._cache;
     
      for (var key in assets) {
        let asset: Asset 
        var item = assets[key];
        if (item.url && item.type != "uuid") {
         asset = {};
          asset.url = item.url;
          var path = this.uuidToPath(item.uuid||item.id);
          if (item.name) {
            asset.name = item.name;
          }else if(path){
            asset.name =path;
          } else asset.name = key;
          asset.type = item.type;
          if (asset.type) {
            asset.type = asset.type;
          }
          asset.data = item._owner;
          all.push(asset);
        }
        if (item._owner&&item._owner["width"] && item._owner["height"]) {
            if(asset){
                asset.width = item._owner["width"];
                asset.height = item._owner["height"];
            }
          let scale = 1;
          if (item._owner["genMipmaps"]) {
            scale = 1 + 1 / 3;
          }
          this.totalTextureSize +=
            item._owner["width"] * item._owner["height"] * 4 * scale; /// 1024 / 1024;
        }
      }
    }

    return all;
  }
  uuidToPath(uuid:string){
    if(!uuid)
       return;
    // var assetTables =this.engine.loader._assetTables
    // if( assetTables){
    //   for (var akey in assetTables){
    //     var assetTable = assetTables[akey]._pathToUuid;
    //     for (var path in assetTable){
    //       var item = assetTable[path]
    //       var auuid = item.uuid;
    //       if(auuid){
    //         if(uuid.indexOf(auuid)!=-1){
    //           return path;
    //         }
    //       }else if(item.length){
    //         for (var i = 0; i < item.length; i++) {
    //           var entry = item[i];
    //           if(uuid.indexOf(entry.uuid)!=-1){
    //             return path;
    //           }
    //       }
    //       }
          
    //     }
    //   }
    // }else
     if (this.engine.assetManager){
      var bundles =this.engine.assetManager.bundles; 
      let info;
      for (var mkey in bundles._map) {
       var bundle: cc.Bundle = bundles._map[mkey]
        info = bundle.getAssetInfo(uuid)
        if(info){
          return info.path;
        }
    }
    }
  }
  get gpuMemory(): number {
    return this.totalTextureSize ;
  }
}
