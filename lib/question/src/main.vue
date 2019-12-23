<!--
    @name: 问题组件
    @description: 评价3.2项目中问题组件 ，可设置问题，负向答案，正向答案（负向答案在左边），图标（默认笑脸），返回答案方法getAnswer
    @author: kangxue
    @date: 2019-12-03
-->
<template>
    <div class="quetion-con">
        <div class="question-title">{{title}}</div>
        <div
            class="question-des"
            v-if="subTitle"
        >{{subTitle}}</div>
        <div class="answer-con">
            <div class="answer-box negative">
                <div
                    :class="{'active': answer === '2','answer-btn': true}"
                    @click="setAnswer('2')"
                >
                    <img
                        v-if="icon === 'smile'"
                        src="./images/icon-cryEmoji.png"
                        alt="哭脸"
                    >
                    <img
                        v-else
                        src="./images/icon-errorEmoji.png"
                        alt="错误图标"
                    >
                    {{leftAnswer}}</div>
            </div>
            <div class="answer-box correct">
                <div
                    :class="{'active': answer === '1','answer-btn': true}"
                    @click="setAnswer('1')"
                >
                    <img
                        v-if="icon === 'smile'"
                        src="./images/icon-smileEmoji.png"
                        alt="笑脸"
                    >
                    <img
                        v-else
                        src="./images/icon-rightEmoji.png"
                        alt="正确图标"
                    >
                    {{rightAnswer}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'question',
        props: {
            // 答案图标，默认smile代表笑脸哭脸，还可取值error代表叉勾
            icon: {
                type: String,
                default: 'smile'
            },
            // 问题
            title: {
                type: String,
                default: ''
            },
            // 问题描述，如果没有就不展示
            subTitle: {
                type: String,
                default: ''
            },
            // 负向答案
            leftAnswer: {
                type: String,
                default: ''
            },
            // 正向答案
            rightAnswer: {
                type: String,
                default: ''
            },
            // 初始默认答案
            initAnswer: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                // 选择问题的答案
                answer: ''
            };
        },
        methods: {
            /**
             * @description: 选择答案，并返回给父组件
             * @param {string} val 答案值
             * @return:
             */
            setAnswer(val) {
                this.answer = val;
                // 返回答案，1正向  2负向（左边负向，右边正向）
                this.$emit('getAnswer', val);
            }
        },
        watch: {
            /**
             * @description: 监听初始答案值
             * @param {string} val 当前答案值
             * @param {string} oldval 旧答案值
             * @return:
             */
            initAnswer(val, oldval) {
                this.answer = val;
            }
        },
        created() {
            console.log('question组件---created');
        }
    };
</script>

<style scoped lang="less">
.quetion-con {
    .question-title {
        font-size: 32px;
        color: #3e4a59;
        text-align: center;
        line-height: 44px;
        font-weight: bold;
    }
    .question-des {
        font-size: 24px;
        color: #00c0eb;
        text-align: center;
        padding-top: 8px;
    }
    .answer-con {
        display: table;
        width: 100%;
        margin-top: 40px;
        padding: 4px 0;
        .answer-box {
            display: table-cell;
            width: 50%;
            &.negative {
                text-align: right;
                padding-right: 20px;
            }
            &.correct {
                padding-left: 20px;
            }
            .answer-btn {
                position: relative;
                display: inline-block;
                border: 2px solid #e4ecf4;
                border-radius: 40px;
                border-radius: 40px;
                font-size: 28px;
                color: #3e4a59;
                padding: 0 32px 0 96px;
                height: 72px;
                line-height: 72px;
                box-sizing: border-box;
                &.active {
                    background: #ffece2;
                    border-color: #ffd3bd;
                    color: #ba4e18;
                }
                img {
                    position: absolute;
                    left: -2px;
                    width: 80px;
                    height: 80px;
                    transform: translateY(-50%);
                    top: 50%;
                    z-index: 10;
                }
            }
        }
    }
}
</style>