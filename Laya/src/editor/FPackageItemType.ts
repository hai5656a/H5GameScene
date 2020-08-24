export default class FPackageItemType{
    public static readonly FOLDER:string = "folder";
        public static readonly IMAGE:string = "image";
        public static readonly SWF:string = "swf";
        public static readonly MOVIECLIP:string = "movieclip";
        public static readonly SOUND:string = "sound";
        public static readonly COMPONENT:string = "component";
        public static readonly FONT:string = "font";
        public static readonly MISC:string = "misc";
        public static readonly ATLAS:string = "atlas";
        public static readonly fileExtensionMap:object = {
            jpg:FPackageItemType.IMAGE,
            jpeg:FPackageItemType.IMAGE,
            png:FPackageItemType.IMAGE,
            psd:FPackageItemType.IMAGE,
            tga:FPackageItemType.IMAGE,
            svg:FPackageItemType.IMAGE,
            plist:FPackageItemType.MOVIECLIP,
            eas:FPackageItemType.MOVIECLIP,
            jta:FPackageItemType.MOVIECLIP,
            gif:FPackageItemType.MOVIECLIP,
            wav:FPackageItemType.SOUND,
            mp3:FPackageItemType.SOUND,
            ogg:FPackageItemType.SOUND,
            fnt:FPackageItemType.FONT,
            swf:FPackageItemType.SWF,
            xml:FPackageItemType.COMPONENT
        };
}