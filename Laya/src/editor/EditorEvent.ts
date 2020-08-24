export default class EditorEvent {
    
    public static readonly SelectionChanged: string = "SelectionChanged";
    public static readonly Selection: string = "Selection";
    public static readonly TreeChanged: string = "TreeChanged";
    public static readonly ClickChanged: string = "ClickChanged";
    public static readonly EventDispatcher: Laya.EventDispatcher = new Laya.EventDispatcher();

    public static hasListener(type: string): boolean {
        return EditorEvent.EventDispatcher.hasListener(type);
    }

    public static event(type: string, data?: any): boolean {
        return EditorEvent.EventDispatcher.event(type, data)
    }


    public static on(type: string, caller: any, listener: Function, args?: any[]): Laya.EventDispatcher {
        return EditorEvent.EventDispatcher.on(type, caller, listener, args);
    }


    public static once(type: string, caller: any, listener: Function, args?: any[]): Laya.EventDispatcher {
        return EditorEvent.EventDispatcher.once(type, caller, listener, args);
    }


    public static off(type: string, caller: any, listener: Function, onceOnly?: boolean): Laya.EventDispatcher {
        return EditorEvent.EventDispatcher.off(type, caller, listener, onceOnly);
    }


    public static offAll(type?: string): Laya.EventDispatcher {
        return EditorEvent.EventDispatcher.offAll(type);
    }


    public static offAllCaller(caller: any): Laya.EventDispatcher {
        return EditorEvent.EventDispatcher.offAllCaller(caller);
    }
}