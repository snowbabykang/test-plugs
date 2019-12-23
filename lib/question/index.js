import Question from './src/main';

/* istanbul ignore next */
Question.install = function (Vue) {
    console.log('question组件---install');
    Vue.component(Question.name, Question);
};

export default Question;
