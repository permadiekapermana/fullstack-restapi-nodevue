import Dashboard from './components/Dashboard.vue'
import viewAgama from './components/module_agama/viewAgama.vue'
import addAgama from './components/module_agama/addAgama.vue'
import updateAgama from './components/module_agama/updateAgama.vue'
import viewSiswa from './components/module_siswa/viewSiswa.vue'
 
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
    name: 'viewAgama',
    path: '/agama/view',
    component: viewAgama
    },
    {
    name: 'addAgama',
    path: '/agama/add',
    component: addAgama
    },
    {
    name: 'updateAgama',
    path: '/agama/update/:id',
    component: updateAgama
    },
    {
    name: 'viewSiswa',
    path: '/siswa/view',
    component: viewSiswa
    },
];
 
export default routes