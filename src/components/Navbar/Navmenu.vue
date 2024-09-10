<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.jpg" alt="TK Bintang Kasih" class="d-inline-block align-top" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <div class="navbar-toggler-icon">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sejarah">Sejarah</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#visi-misi">Visi & Misi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#lokasi-sekolah">Lokasi Sekolah</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#bagan-organisasi">Daftar Guru</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pendaftaran">Pendaftaran Siswa</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navmenu",
  mounted() {
    // Scroll ke atas atau halaman selamat datang saat di-refresh
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
/* Fixed Navbar styling */
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-brand img {
  width: 60px; /* Sesuaikan ukuran logo */
}

.navbar-nav .nav-link {
  color: #000;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px; /* Ruang untuk animasi garis bawah */
  overflow: hidden;
}

.navbar-nav .nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: -100%;
  background-color: #7f86d4; /*warna garis */ 
  transition: all 0.4s ease; /* Kecepatan animasi */
}

.navbar-nav .nav-link:hover::before {
  left: 0;
}

.navbar-nav .nav-link:hover {
  color: #a41e1d; /* Ubah warna teks saat disorot */
}

body {
  padding-top: 80px; /* Agar konten tidak tertutup oleh navbar */
}

/* Custom Hamburger Menu Icon */
.navbar-toggler {
  position: relative;
  background: transparent;
  border: none;
  outline: none;
}

.navbar-toggler-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  cursor: pointer;
}

.bar {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
  position: relative;
}

.bar1, .bar2, .bar3 {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

/* Bubble effect on click */
.navbar-toggler:focus .bar,
.navbar-toggler:active .bar {
  background-color: #7f86d4; /* Warna saat diklik */
  animation: bubble 0.6s ease-out;
}

@keyframes bubble {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Hamburger menu icon transform on click */
.navbar-toggler:not(.collapsed) .bar1 {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-toggler:not(.collapsed) .bar2 {
  opacity: 0;
}

.navbar-toggler:not(.collapsed) .bar3 {
  transform: rotate(-45deg) translate(6px, -6px);
}
</style>
