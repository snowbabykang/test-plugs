import Question from './views/main';
import { Button, Row } from 'element-ui';

/* istanbul ignore next */
Question.install = function (Vue) {
    console.log('question组件---install');
    Vue.component(Question.name, Question);
    Vue.use(Button);
    Vue.use(Row);
};

export default Question;
