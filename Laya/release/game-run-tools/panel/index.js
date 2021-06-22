const packageName = 'game-run-tools';
const fs = require('fire-fs');
let vm = null;

Editor.Panel.extend({
    style: fs.readFileSync(Editor.url('packages://' + packageName + '/panel/index.css', 'utf8')) + '',
    template: fs.readFileSync(Editor.url('packages://' + packageName + '/panel/index.html', 'utf8')) + '',

    ready() {
        vm = new window.Vue({
            el: this.shadowRoot,
            data: {
                m_point:'7456',
                m_param: '',
            },
            created: function () {
                let point = window.localStorage.getItem('htmltoolapoint');
                if (point) {
                    this.m_point = point;
                }else this.m_point ='7456';

                let param = window.localStorage.getItem('htmltoolparam');
                if (param) {
                    this.m_param = param;
                }
            },
            methods: {
               
                //启动
                onOpenSingle() {
                    Editor.Ipc.sendToMain('game-run-tools:do-opensingle',  this.m_param, this.m_point);
                },
                onCopySingle() {
                    Editor.Ipc.sendToMain('game-run-tools:do-copysingle',  this.m_param, this.m_point);
                },
                onPointChange(event) {
                    this.m_point = event.target.value;
                    window.localStorage.setItem('htmltoolapoint', this.m_point);
                },
                onParamChange(event) {
                    this.m_param = event.target.value;
                    window.localStorage.setItem('htmltoolparam', this.m_param);
                },
               
            },
        });
    },
    run(argv) {
       
    },
    messages: {
        
    },
});
