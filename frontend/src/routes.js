import UpdateAgama from './components/UpdateAgama.vue'
import Dashboard from './components/Dashboard.vue'
import viewAgama from './components/module_agama/viewAgama.vue'
import addAgama from './components/module_agama/addAgama.vue'
 
const routes = [
    {
        name: '/',
        path: '/',
        component: Dashboard
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
    name: 'UpdateAgama',
    path: '/agama/update/:id',
    component: UpdateAgama
    },
    {
    name: 'viewAgama',
    path: '/agama/view',
    component: viewAgama
    },
    {
    name: 'addAgama',
    path: '/agama/add',
    component: addAgama
    },
];
 
export default routes