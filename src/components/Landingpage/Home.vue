<template>
  <div>
    <Navmenu  />

    <!-- Hero Section with Carousel -->
    <section class="hero-section text-white text-center d-flex justify-content-center align-items-center">
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/gambar_5.jpg" class="d-block w-100 shadow-lg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_6.jpg" class="d-block w-100 shadow-lg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_7.jpg" class="d-block w-100 shadow-lg" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_2.jpg" class="d-block w-100 shadow-lg" alt="Fourth slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_1.jpg" class="d-block w-100 shadow-lg" alt="Fifth slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_9.jpg" class="d-block w-100 shadow-lg" alt="Sixth slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_10.jpg" class="d-block w-100 shadow-lg" alt="Sixth slide">
          </div>
          <div class="carousel-item">
            <img src="../../assets/gambar_11.jpg" class="d-block w-100 shadow-lg" alt="Sixth slide">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

       <!-- Hero Text Content -->
      <div class="content">
        <h1 class="hero-title">
        Selamat Datang di <br> 
          <span class="typewriter-effect">{{ displayedText }}<span class="cursor">|</span></span>
          Bintang Kasih
        </h1>
        <p class="hero-subtitle">Membentuk generasi yang cerdas dan berbudi pekerti</p>
        <button @click="showSejarahAlert" class="btn btn-primary mt-3">Sejarah Lengkap</button>
      </div>
  </section>
<!-- Keunggulan Section with Separate Containers -->
<section id="keunggulan" class="my-5">
  <div class="container">
    <h2 class="text-center mb-4">About KB & TK Bintang Kasih</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="container">
          <div class="card text-center">
            <div class="card-body pb-3">
              <i class="bi bi-book fa-2x mb-3"></i>
              <h5 class="card-title">Mendidik Siswa sesuai dengan ajaran Kristiani</h5>
              <p class="card-text">KB & TK Bintang Kasih berada didekat bangunan gereja yang membuat peserta didik akan diajarkan nilai-nilai kristiani. KB & TK Bintang Kasih juga sering mengadakan kegiatan rohani seperti Paskah dan Natal.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container">
          <div class="card text-center">
            <div class="card-body">
              <i class="bi bi-person-arms-up fa-2x mb-3"></i>
              <h5 class="card-title">Mendidik Siswa untuk Bergotong Royong & Toleransi</h5>
              <p class="card-text">KB & TK Bintang Kasih menanamkan nilai gotong royong, dan toleransi kepada siswa melalui aktivitas dan interaksi setiap hari. Siswa akan diajarkan untuk berkolaborasi dengan menghargai perbedaan.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container">
          <div class="card text-center">
            <div class="card-body">
              <i class="bi bi-mortarboard  fa-2x mb-3"></i>
              <h5 class="card-title">Siap menjadi Lulusan yang Unggul</h5>
              <p class="card-text">TK Bintang Kasih telah melahirkan lulusan unggul dalam akademis dan moral anak, membentuk generasi penerus yang tidak hanya cerdas, tetapi juga berbudi pekerti luhur dan siap menghadapi tantangan dunia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Visi Misi Section with Icons -->
  <section id="visi-misi" class="container my-5">
    <h2 class="text-center mb-4">Visi dan Misi</h2>
    <div class="row d-flex align-items-stretch">
        <div class="col-md-6 mb-3">
            <div class="card text-center h-100">
                <div class="card-body d-flex flex-column justify-content-between">
                  <i class="fa fa-compass fa-2x mb-3"></i>
                    <h5 class="card-title">Visi</h5>
                    <p class="card-text text-justify mt-auto">Mewujudkan generasi yang takut akan Tuhan, menjadi terang dan berkat bagi sesama dengan dasar Kasih. Dengan bimbingan yang penuh kasih, KB dan TK Bintang Kasih mencetak generasi yang tidak hanya cerdas, tetapi juga memiliki hati yang takut akan Tuhan, siap menjadi cahaya di dunia dan berkat bagi sesama. Generasi yang dibentuk sesuai dengan nilai-nilai ilahi dan kasih yang tulus akan membawa perubahan positif, menebar kebaikan di sekitarnya, serta memberi makna dalam setiap tindakan yang dilakukan.
                    Di dalam setiap aspek kehidupan, kami berusaha menanamkan nilai-nilai kasih sayang, kepedulian, dan integritas. Bahwa generasi yang tumbuh dengan rasa tanggung jawab dan kecintaan terhadap Tuhan dan sesama akan menjadi pemimpin masa depan yang mampu menciptakan dunia yang lebih baik. Dengan metode pendidikan yang menyeluruh, KB dan TK Bintang Kasih mempersiapkan anak-anak untuk menjadi pribadi yang mandiri, berkarakter kuat, dan mampu menghadapi tantangan di berbagai aspek kehidupan.</p>
                </div>
            </div>
        </div>
    <div class="col-md-6 mb-3">
        <div class="card text-center h-100"> <!-- Tambahkan h-100 agar card memiliki tinggi penuh -->
          <div class="card-body">
            <i class="fa fa-rocket fa-2x mb-3"></i>
            <h5 class="card-title">Misi</h5>
            <ol class="misi-list text-left">
              <li>Menolong anak didik memiliki kehidupan rohani yang bertumbuh, mengenal Tuhan sejak dini dan mengenal identitas diri secara benar. Memiliki karakter yang berkualitas.</li>
              <li>Menghargai keistimewaan setiap anak didik, menggali potensi, menyediakan wadah dan kesempatan untuk mengembangkannya sesuai talenta yang sudah dikaruniakan.</li>
              <li>Menanamkan kasih kepada Tuhan sebagai dasar dari segala sesuatu, dan mewujudkannya dengan mengasihi sesama. Peduli dan memperhatikan lingkungan hidup dan makhluk lain sekitarnya. Memberi dorongan dan keberanian pada anak didik bertindak kasih secara nyata.</li>
              <li>Memperlengkapi anak didik dengan pengetahuan dan keterampilan yang dapat diterapkan dan memberi manfaat bagi sesama, menyiapkan pondasi untuk masa depan dengan mengembangkan kreativitas dan kemauan untuk menjadi inventor dan inspirator yang mandiri dan bertanggung jawab.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>


<!-- Lokasi Sekolah Section -->
<section id="lokasi-sekolah" class="container my-5 section-box">
  <h2 class="text-center mb-4">Lokasi Sekolah & Kontak Kami</h2>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- Card Besar -->
      <div class="card">
        <div class="card-body">
          <div class="row">
            <!-- Card Lokasi Sekolah (Kiri) -->
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="text-center card-title mb-4">Lokasi Sekolah</h4>
                  <p>Kami berlokasi di Jl. Dolog Lor Raya No.7, Tlogosari Wetan, Kec. Pedurungan, Kota Semarang, Jawa Tengah</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1450567943875!2d110.46970877475769!3d-6.992190593008854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d6b65eb5721%3A0x9ee1b4d92c836e63!2sTK%20Bintang%20Kasih!5e0!3m2!1sid!2sid!4v1725731173060!5m2!1sid!2sid" 
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <!-- Card Kontak Kami (Kanan) -->
            <div class="col-md-6 mb-4">
              <div class="card">
                <div class="card-body">
                  <h4 class="text-center card-title mb-4">Kontak Kami</h4>
                  <p>Jika ada pertanyaan, silakan hubungi kami melalui informasi di bawah ini:</p>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="fas fa-map-marker-alt"></i> <strong>Alamat:</strong> Jl. Dolog Lor Raya No.7, Semarang
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-phone"></i> <strong>Telepon:</strong> <a href="tel:+6282225386373">+62 822 2538 6373</a>
                    </li>
                    <li class="mb-2">
                      <i class="fas fa-envelope"></i> <strong>Email:</strong> <a href="mailto:tkbintangkasih.tlogomulyo@gmail.com">tkbintangkasih.tlogomulyo@gmail.com</a>
                    </li>
                    <li>
                      <i class="fas fa-clock"></i> <strong>Jam Operasional:</strong> Senin - Jumat, 08.00 - 12.00 WIB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    <!-- Organizational Chart Section -->
<section id="bagan-organisasi" class="container my-5 section-box">
  <h2 class="text-center mb-4">Daftar Guru KB dan TK Bintang Kasih</h2>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <!-- Carousel -->
        <div id="carouselGuru" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(person, index) in organization" :key="person.id" :class="['carousel-item', { active: index === 0 }]">
              <div class="card">
                <div class="card-body text-center">
                  <img :src="person.photo" alt="Photo" class="rounded-circle mb-3" width="100" height="100">
                  <h5 class="card-title">{{ person.name }}</h5>
                  <p class="card-text">{{ person.role }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Controls -->
          <a class="carousel-control-prev" href="#carouselGuru" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselGuru" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer />
    <a href="https://wa.me/6282225386373" class="whatsapp-float" target="_blank">
      <i class="bi bi-whatsapp"></i>
    </a>

  </div>
</template>

<script>
import axios from 'axios'; // Pastikan axios diinstal melalui npm atau yarn
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer.vue';
import Navmenu from '../Navbar/Navmenu.vue';

export default {
  components: {
    Navmenu,
    Footer,
  },
  data() {
    return {
      organization: [], // Empty array initially
      texts: ['KB', 'TK'],
      currentTextIndex: 0,
      displayedText: '',
      charIndex: 0,
      typingInterval: 150, // kecepatan mengetik dalam milidetik
      eraseInterval: 100,  // kecepatan menghapus dalam milidetik
      pauseDuration: 1500, // durasi jeda antara teks dalam milidetik
      typingTimeoutId: null,
      eraseTimeoutId: null,
      pauseTimeoutId: null,
      isErasing: false
    };
  },
  mounted() {
    // Fetch data from API when the component is mounted
    axios.get('https://api.example.com/teachers')
      .then(response => {
        this.organization = response.data;  // Set the organization data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  mounted() {
    this.startTypewriterEffect();
  },
  methods: {
    startTypewriterEffect() {
      this.typeText(this.texts[this.currentTextIndex]);
    },
    typeText(text) {
      if (this.charIndex < text.length) {
        this.displayedText += text.charAt(this.charIndex);
        this.charIndex++;
        this.typingTimeoutId = setTimeout(() => {
          this.typeText(text);
        }, this.typingInterval);
      } else {
        this.isErasing = true;
        this.typingTimeoutId = null;
        this.charIndex = text.length;
        this.pauseTimeoutId = setTimeout(() => {
          this.eraseText();
        }, this.pauseDuration);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        this.charIndex--;
        this.eraseTimeoutId = setTimeout(() => {
          this.eraseText();
        }, this.eraseInterval);
      } else {
        this.isErasing = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.displayedText = '';
        this.startTypewriterEffect();
      }
    },
    stopTypewriterEffect() {
      clearTimeout(this.typingTimeoutId);
      clearTimeout(this.eraseTimeoutId);
      clearTimeout(this.pauseTimeoutId);
    },
    showSejarahAlert() {
      Swal.fire({
        title: 'Sejarah Lengkap TK Bintang Kasih',
        text: 'Sekolah Bintang Kasih terletak di jalan Dolog Lor Raya No.7 Kelurahan Tlogosari Wetan, Kecamatan Pedurungan, Kota Semarang. Lingkungan sekolah berada di daerah perumahan dengan berdekatan jalan raya yang menjadi akses jalan alternatif yang menghubungkan daerah Woltermonginsidi dengan arah Tlogosari sehingga arus lalu lintas cukup ramai.',
        icon: 'info',
        confirmButtonText: 'Tutup'
      });
    },
    showDaftarKBAlert() {
    Swal.fire({
      title: 'Pendaftaran Kelompok Bermain',
      text: 'Silahkan "Kunjungi Halaman" untuk mendaftar sebagai Siswa Kelompok Bermain (KB) Bintang Kasih.',
      icon: 'question',
      confirmButtonText: 'Kunjungi Halaman',
      showCancelButton: true,
      cancelButtonText: 'Batal',
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Menggunakan Vue Router untuk redirect
        this.$router.push('/Formkb');
      }
    });
    },
    showDaftarTKAlert() {
      Swal.fire({
        title: 'Pendaftaran Taman Kanak-Kanak',
        text: 'Silahkan klik "Kunjungi Halaman" untuk mendaftar sebagai Siswa Taman Kanak-Kanak (TK) Bintang Kasih.',
        icon: 'question',
        confirmButtonText: 'Kunjungi Halaman',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#d33',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/Formtk');
        }
      });
    }
  },
  beforeDestroy() {
    this.stopTypewriterEffect();
  }
};
</script>



<style scoped>
/* Hero Section Styling */
.hero-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
  margin-top: 80px; /* Agar tidak nabrak dengan navbar */
}

/* Gambar carousel */
.carousel-item img {
  width: 100%;
  height: 100vh; 
  object-fit: contain;
  opacity: 0.8; /* Transparansi gambar, sesuaikan nilai ini (0.1 - 1) */
  box-shadow: 0 4px 8px #7f86d4;
}
h2, h5 {
  color: #7f86d4; /* Warna ungu */
}
/* Untuk konten teks di tengah */
.content {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 600px;
}

/* Teks judul dengan shadow dan background semi-transparan */
.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.014); /* Latar belakang hitam transparan */
  color: white; /* Teks warna putih agar jelas */
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-shadow: 0 4px 8px #7f86d4 /* Shadow ungu teks */
}

/* Subjudul dengan shadow dan background semi-transparan */
.hero-subtitle {
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.014); /* Latar belakang hitam transparan */
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
  text-shadow: 0 4px 8px #7f86d4 /* Shadow ungu teks */
}
/* Typewriter Effect Styling */
.typewriter-effect {
  display: inline-block;
  position: relative;
  font-family: monospace;
  font-size: 3.5rem;
  white-space: nowrap;
}
.cursor {
  display: inline-block;
  position: absolute;
  right: -0.1em;
  bottom: 0;
  font-size: 3.5rem;
  color: #7c82c0;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { opacity: 0; }
  50% { opacity: 1; }
}
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

/* Cards Styling */
.card {
  transition: transform 0.3s ease-in-out;
  border: none;
  box-shadow: 0 4px 8px #7f86d4;
  padding: 10px;
  border-radius: 30px;
  height: 100%;
}

/* Hover effect */
.card:hover {
  transform: translateY(-5px);
}

/* Ikon styling */
.card i {
  color: #7c82c0;
}

/* Card body styling */
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

/* Justify text */
.text-justify {
  text-align: justify;
}


/* Media Queries untuk Responsive Design */

/* Mobile Devices (max-width: 767px) */
@media (max-width: 767px) {
  .card {
    padding: 15px;
    box-shadow: 0 2px 4px rgba(127, 134, 212, 0.652);
    border-radius: 20px;
  }

  .card-body {
    padding: 10px;
    font-size: 14px;
  }
}

/* Tablet Devices (768px - 991px) */
@media (min-width: 768px) and (max-width: 991px) {
  .card {
    padding: 20px;
    box-shadow: 0 3px 6px rgba(127, 134, 212, 0.6);
    border-radius: 25px;
  }

  .card-body {
    padding: 15px;
    font-size: 16px;
  }
}

/* Desktop Devices (min-width: 992px) */
@media (min-width: 992px) {
  .card {
    padding: 25px;
    box-shadow: 0 4px 8px #7f86d4;
    border-radius: 30px;
  }

  .card-body {
    padding: 20px;
    font-size: 18px;
  }
}

/* Misi Section Styling */
.misi-list {
  text-align: justify;
  list-style-type: decimal;
  padding-left: 20px;
}

/* Section Styling */
section {
  padding: 60px 0;
  margin-top: 55px; /* Tambahkan margin top agar tidak nabrak navbar */
}

/* Lokasi and Pendaftaran Sections */
.section-box {
  padding: 60px 0;
  margin-top: 55px; /* Pastikan juga ditambahkan margin pada section ini */
}

.bagan-organisasi img {
  object-fit: cover;
}
.bagan-organisasi .list-group-item {
  transition: background-color 0.3s;
}
.bagan-organisasi .list-group-item:hover {
  background-color: #f8f9fa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .typewriter-effect {
    font-size: 2rem;
  }
  .cursor {
    font-size: 2rem;
  }
  .card {
    margin-bottom: 20px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-subtitle {
    font-size: 0.9rem;
  }
  .typewriter-effect {
    font-size: 1.5rem;
  }
  .cursor {
    font-size: 1.5rem;
  }
  .btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}

/* Map container for responsiveness */
.map-container {
  position: relative;
  padding-bottom: 75%; /* 4:3 Aspect Ratio */
  height: 0;
  overflow: hidden;
}
.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}

@keyframes pulse-with-longer-pause {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    60% {
        transform: scale(1.1);
    }
    80%, 100% {
        transform: scale(1);
    }
}

.whatsapp-float {
    position: fixed;
    width: 46px;
    height: 46px;
    bottom: 70px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 30px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse-with-longer-pause 4s ease-in-out infinite;
}

.whatsapp-float img {
    width: 70%;
    height: 70%;
    border-radius: 50%;
}

.whatsapp-float:hover {
    background-color: #128c7e;
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

.custom-btn {
    background-color: #1a82de;
    border-color: #1a82de;
  }
  .custom-btn:hover {
    background-color: #1d65a4;
    border-color: #1d65a4;
  }

</style>