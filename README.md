# H5GameScene
![avatar](/image/cc.jpg)
#### 介绍
H5场景查看

#### 软件架构
类似Unity Scene功能 查看运行中显示对象的属性，并支持实时修改
目前支持基于FairyGui的Laya、Egret、Cocos Creator 项目
后续支持原生UI框架以及原生3D对象
#### 安装教程
release/H5GameScene放到和要查看的项目同个域下
 
#### 使用说明


Laya项目放在和工程bin同级目录，原访问地址bin/index.html改为H5GameScene/index.html?url=..%2Fbin%2Findex.html

Egret项目放在和工程bin-debug同级目录，原访问地址index.html改为H5GameScene/index.html?url=..%2Findex.html

CoCosCreator项目放在IDE安装目录resources\static目录内，原访问地址http://localhost:7456/ 改为 http://localhost:7457/app/editor/static/H5GameScene/index.html?url=..%2F..%2F..%2F..%2F

显示列表暂时不支持实时刷新，需要查看的时候手动点击左上角刷新按钮





