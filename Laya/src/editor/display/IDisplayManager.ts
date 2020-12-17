export interface IDisplayManager{
    /**引擎库 */
    displayModule;
    root;
    /**初始化 */
    start(root,mod);
    /**结束 */
    end();
    refreshList(parent:fgui.GTreeNode)
    getDisPlayIcon(obj)
    getDisPlayName(obj)
    getDisPlayRect(obj)
    isShow(obj)
    isVisable(obj)
}