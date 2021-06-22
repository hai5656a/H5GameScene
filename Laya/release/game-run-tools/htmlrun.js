'use strict';

const Fs = require('fire-fs');
const Path = require('fire-path');
const electron = require("electron");
module.exports = {

  init() {
    let outpath = Path.join(Editor.frameworkPath.replace("app.asar\\editor-framework","").replace("app.asar/editor-framework","")); 
     outpath =Path.join(outpath, "static/run/");
    let htmlpath = Editor.url('packages://game-run-tools/html/', 'utf8'); 
    let files = Fs.readdirSync(htmlpath);
    files.forEach(function (filename) {
      //获取当前文件的绝对路径
      let filedir = Path.join(htmlpath, filename);
      let outdir = Path.join(outpath, filename);
      Fs.copySync(filedir, outdir);
    });
  },
  
  getsingleurl( param,point) {
    var gamesrc = "http://localhost:"+point+"/app/editor/static/run/index.html?url=../../../../";
    if (param) {
      param = param.replace(/=/g, '%3D');
      param = param.replace(/&/g, '%26');
      gamesrc += "%3F" + param;
    }
    return gamesrc;
  },

  copysingle( param,point) {
    var url = this.getsingleurl(param,point);
    electron.clipboard.writeText(url);
    Editor.success(`复制 ${url} 成功`);
  },
  opensingle( param,point) {
    var url = this.getsingleurl(param,point);
    electron.shell.openExternal(url);
  },

};