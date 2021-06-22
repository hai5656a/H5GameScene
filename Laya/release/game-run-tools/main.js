'use strict';

const htmlrun = require('./htmlrun');

module.exports = {
    load() {
        htmlrun.init();
    },
    unload() {
       
    },

    messages: {
        openpanel() {
            Editor.Panel.open('game-run-tools');
        },       
        'do-copysingle'(target,  param,point) {
            htmlrun.copysingle( param,point);
        },
        'do-opensingle'(target,  param,point) {
            htmlrun.opensingle( param,point);
        },
  
        
    },
};
