import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from 'components/HomeComponent'
import TableComponent from 'components/TableComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: HomeComponent
    },
    {
      path: '/Table',
      component: TableComponent
    }
  ]
})
