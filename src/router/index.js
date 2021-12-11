import { createRouter, createWebHistory } from 'vue-router'
import ToDoHome from '../views/ToDoHome.vue'
import ToDoAdd from '../views/ToDoAdd.vue'
import ToDoEdit from '../views/ToDoEdit.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: ToDoHome
  },
  {
    path: '/add',
    name: 'Add',
    component: ToDoAdd
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: ToDoEdit,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
