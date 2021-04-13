import PropsPanel from "../fgui/Builder/PropsPanel";
export interface IPropsUI extends fairygui.GComponent{
     setData(item);
}
export default class PropsUI extends PropsPanel{
    // propsui:IPropsUI
    protected onConstruct():void {
        super.onConstruct();
        // this.propsui = this._iconObject["_content2"];
        this.m_type.selectedIndex = 1;
    }
    get propsui():IPropsUI{
        if( this._iconObject)
        return this._iconObject["_content2"];
    }
}