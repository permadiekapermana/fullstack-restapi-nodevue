import Dashboard from './components/Dashboard.vue'
import viewAgama from './components/module_agama/viewAgama.vue'
import addAgama from './components/module_agama/addAgama.vue'
import updateAgama from './components/module_agama/updateAgama.vue'
import viewSiswa from './components/module_siswa/viewSiswa.vue'
import addSiswa from './components/module_siswa/addSiswa.vue'
import updateSiswa from './components/module_siswa/updateSiswa.vue'
import infoSiswa from './components/module_siswa/infoSiswa.vue'
import viewAyah from './components/module_ayah/viewAyah.vue'
import addAyah from './components/module_ayah/addAyah.vue'
import updateAyah from './components/module_ayah/updateAyah.vue'

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
    {
        name: 'addSiswa',
        path: '/siswa/add',
        component: addSiswa
    },
    {
        name: 'updateSiswa',
        path: '/siswa/update/:id',
        component: updateSiswa
    },
    {
        name: 'infoSiswa',
        path: '/siswa/info/:id',
        component: infoSiswa
    },
    {
        name: 'viewAyah',
        path: '/ayah/view',
        component: viewAyah
    },
    {
        name: 'addAyah',
        path: '/ayah/add',
        component: addAyah
    },
    {
        name: 'updateAyah',
        path: '/ayah/update/:id',
        component: updateAyah
    },
];
 
export default routes