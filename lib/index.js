import Star from './star';
import Question from './question';
// element-ui按需引入
// import { Button, Switch, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const components = [
    Star,
    Question,
    // Button,
    // Switch,
    // Row
];

const install = function (Vue, opts = {}) {
    console.log('所有组件---install');
    components.map(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    Star,
    Question
};

export default {
    install,
    Star,
    Question
};