# julive-plugs

> 居理新房组件库，多组件不需要打包，可按需引入

## Build Setup

``` bash
//安装
npm i test-plug -D
//按需引入
import {Star, Question} from 'test-plugs';
Vue.use(Star);
Vue.use(Question);
// 全部引入
import JulivePlugs from 'test-plugs';
Vue.use(JulivePlugs);
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
