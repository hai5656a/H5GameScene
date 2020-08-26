/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/fairygui/rawinflate.js");// 如果勾选了不压缩，这个库不需要
loadLib("libs/fairygui/fairygui.js");// 只依赖laya.core,laya.html两个模块
//-----libs-end-------
loadLib("js/bundle.js");
