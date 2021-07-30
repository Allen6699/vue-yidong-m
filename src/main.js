import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/icon.less'
import './style/index.less'

// 动态设置rem基准值 (HTML根节点)
import 'amfe-flexible'
// 按需引入
import {
  Cell,
  CellGroup,
  Icon,
  NavBar,
  Search,
  List,
  Toast,
  Button,
  Tab,
  Tabs,
  Col,
  Row,
  Calendar,
  Dialog,
  DropdownMenu,
  DropdownItem
} from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(List)
Vue.use(Toast)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Col)
Vue.use(Row)
Vue.use(Calendar)
Vue.use(Dialog)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
