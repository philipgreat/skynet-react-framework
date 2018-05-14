import dva from 'dva';
import 'moment/locale/zh-cn';
import globalmodel from './models/global';
import './polyfill';
import './g2';
import RouterConfig from './router';
// import { browserHistory } from 'dva/router'
import './index.less';

// 1. Initialize
const app = dva({
  // history: browserHistory,
});

// 2. Plugins
// app.use({})

// 3. Model move to router
app.model(globalmodel);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
