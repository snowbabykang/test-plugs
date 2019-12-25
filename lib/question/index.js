import Question from './views/main';
import { Button, Row } from 'element-ui';

/* istanbul ignore next */
Question.install = function (Vue) {
    console.log('question组件---install');
    Vue.component(Question.name, Question);
};
Button.install = function (Vue) {
    Vue.component(Button.name, Button);
};
Row.install = function (Vue) {
    Vue.component(Row.name, Row);
};

export default {
    Question,
    Button,
    Row
};
