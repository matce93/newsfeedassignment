import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Router from 'vue-router';
import FrontPage from './components/FrontPage.vue'
import App from './App.vue'
import CommentsPage from './components/CommentsPage.vue'

Vue.use(Router);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: FrontPage },
  { path: '/comments/:id', component: CommentsPage, props: true }
]

const router = new Router({
	mode: 'history',
	base: '/',
	routes 
})

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
