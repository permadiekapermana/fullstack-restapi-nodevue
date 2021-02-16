import AddAgama from './components/AddAgama.vue'
import UpdateAgama from './components/UpdateAgama.vue'
import ViewAgama from './components/ViewAgama.vue'
import Home from './components/Home.vue'
 
const routes = [
    {
        name: '/',
        path: '/',
        component: Home
    },
    {
    name: 'AddAgama',
    path: '/agama/add',
    component: AddAgama
    },
    {
    name: 'UpdateAgama',
    path: '/agama/update/:id',
    component: UpdateAgama
    },
    {
    name: 'ViewAgama',
    path: '/agama/view',
    component: ViewAgama
    },
];
 
export default routes