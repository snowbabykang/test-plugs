import Star from './src/main';

/* istanbul ignore next */
Star.install = function (Vue) {
    console.log('star组件---install');
    Vue.component(Star.name, Star);
};

export default Star;
