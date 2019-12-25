import Star from './views/main';
import { Switch } from 'element-ui';

/* istanbul ignore next */
Star.install = function (Vue) {
    console.log('star组件---install');
    Vue.component(Star.name, Star);
    Vue.component(Switch.name, Switch);
};

export default Star;
