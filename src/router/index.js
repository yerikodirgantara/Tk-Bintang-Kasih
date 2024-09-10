import { createRouter, createWebHistory } from 'vue-router';
import Cardslider from '../components/Carousel/Cardslider.vue';
import Ayahsiswa from '../components/Dataayah/Ayahsiswa.vue';
import Ibusiswa from '../components/Dataibu/Ibusiswa.vue';
import Formkb from '../components/Kb/Formkb.vue'; 
import Home from '../components/Landingpage/Home.vue'; 
import Navmenu from '../components/Navbar/Navmenu.vue';
import Formtk from '../components/Tk/Formtk.vue'; 
import Ayahsiswa2 from '../components/Dataayah2/Ayahsiswa2.vue';
import Ibusiswa2 from '../components/Dataibu2/Ibusiswa2.vue';
import Harga from '../components/Harga/Pembayaran.vue';
import Pembayaran from '../components/Harga/Pembayaran.vue';

const routes = [
  { path: '/Cardslider', name: 'Cardslider', component: Cardslider },
  { path: '/Ayahsiswa', name: 'Ayahsiswa', component: Ayahsiswa },
  { path: '/Ibusiswa', name: 'Ibusiswa', component: Ibusiswa },  
  { path: '/Formkb', name: 'Formkb', component: Formkb }, 
  { path: '/Home', name: 'Home', component: Home },
  { path: '/Navmenu', name: 'Navmenu', component: Navmenu },
  { path: '/Formtk', name: 'Formtk', component: Formtk },
  { path: '/', name: 'Landingpage', component: Home }, // Halaman utama ditampilkan sebagai home
  { path: '/Ayahsiswa2', name: 'Ayahsiswa2', component: Ayahsiswa2 },
  { path: '/Ibusiswa2', name: 'Ibusiswa2', component: Ibusiswa2 },
  { path: '/Pembayaran', name: 'Pembayaran', component: Pembayaran },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
