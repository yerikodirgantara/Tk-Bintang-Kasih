import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Landingpage/Home.vue'; 
import Navmenu from '../components/Navbar/Navmenu.vue';
import Pembayaran from '../components/Harga/Pembayaran.vue';
import Reguser from '../components/Register/Reguser.vue';
import Loguser from '../components/Login/Loguser.vue';
import Home2 from '../components/Landingpage/Home2.vue';
import Navmenu2 from '../components/Navbar/Navmenu2.vue';
import Formulir from '../components/Form/Formulir.vue';
import Dashboard from '../components/Informasi/Dashboard.vue';
import Navmenu3 from '../components/Navbar/Navmenu3.vue';

const routes = [ 
  { path: '/Formulir', name: 'Formulir', component: Formulir }, 
  { path: '/Home', name: 'Home', component: Home },
  { path: '/Navmenu', name: 'Navmenu', component: Navmenu },
  { path: '/', name: 'Landingpage', component: Home }, // Halaman utama ditampilkan sebagai home
  { path: '/Pembayaran', name: 'Pembayaran', component: Pembayaran },
  { path: '/Reguser', name: 'Reguser', component: Reguser },
  { path: '/Loguser', name: 'Loguser', component: Loguser },
  { path: '/Home2', name: 'Home2', component: Home2 },
  { path: '/Navmenu2', name: 'Navmenu2', component: Navmenu2 },
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard},
  { path: '/Navmenu3', name: 'Navmenu2', component: Navmenu3 },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
