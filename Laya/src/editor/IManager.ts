export interface IManager{
    type:string;
    game;
    start(game);
    end();
    showRect(x,y,w,h);
    hideRect();
    addTouch();
    removeTouch();
    onFPS();
    onPause();
    checkVisible(gobj);
}