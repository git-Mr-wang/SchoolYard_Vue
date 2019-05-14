import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BaseUserAdd from '@/components/baseuser/BaseUserAdd'
import BaseUserEdit from '@/components/baseuser/BaseUserEdit'
import BaseUserList from '@/components/baseuser/BaseUserList'


import AssociationAdd from '@/components/Association/AssociationAdd'
import AssociationEdit from '@/components/Association/AssociationEdit'
import AssociationList from '@/components/Association/AssociationList'


import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
// //       children:[
// // 		  {path:'/',components:demo1},
// // 		  ]
//     },
		{
      path: '/BaseUserAdd',
			name: 'BaseUserAdd',
      component: BaseUserAdd
    },{
      path: '/BaseUserEdit',
			name: 'BaseUserEdit',
      component: BaseUserEdit
    },{
      path: '/BaseUserList',
			name: 'BaseUserList',
      component: BaseUserList
    },{
      path: '/AssociationAdd',
			name: 'AssociationAdd',
      component: AssociationAdd
    },{
      path: '/AssociationEdit',
			name: 'AssociationEdit',
      component: AssociationEdit
    },{
      path: '/AssociationList',
			name: 'AssociationList',
      component: AssociationList
    },{
      path: '/Login',
			name: 'Login',
      component: Login
    }
  ]
})
