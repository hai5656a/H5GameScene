export interface IEngine{
    /**引擎类型 */
    type:string;
    /**引擎module cc Laya egret */
    engine;
    /**引擎初始化 */
    start(game);
    /**引擎结束 */
    end();
    /**显示FGUI选中方块 */
    showFGUIRect(x,y,w,h);
    /**隐藏FGUI选中方块 */
    hideFGUIRect();
    /**设置选择模式 */
    addSelectModel();
    /**取消选择模式 */
    removeSelectModel();
    /**切换FPS显示 */
    onFPS();
    /**切换全局时间 */
    onPause();
    /**当前对象是否还在显示 */
    checkFGUIVisible(gobj);
}