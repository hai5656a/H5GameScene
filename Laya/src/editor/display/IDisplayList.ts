export interface IDisplayList{
    displayModule;
    root;
    /**初始化 */
    start(root,mod);
    /**结束 */
    end();
    refreshList(parent:fgui.GTreeNode)
    getDisPlayIcon(obj)
    getDisPlayName(obj)
    isShow(obj)
    isVisable(obj)
}