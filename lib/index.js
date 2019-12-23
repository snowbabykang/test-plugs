import Star from './star';
import Question from './question';

const components = [
    Star,
    Question
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
    install,
    Star,
    Question
};

export default {
    install,
    Star,
    Question
};