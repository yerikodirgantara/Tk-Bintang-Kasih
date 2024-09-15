<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.jpg" alt="TK Bintang Kasih" class="d-inline-block align-top" />
      </a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="keunggulanDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Keunggulan
            </a>
            <ul class="dropdown-menu" aria-labelledby="keunggulanDropdown">
              <li><a class="dropdown-item" href="#keunggulan">Keunggulan KB & TK</a></li>
              <li><a class="dropdown-item" href="#visi-misi">Visi & Misi</a></li>
              <li><a class="dropdown-item" href="#lokasi-sekolah">Lokasi Sekolah</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="guruDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Daftar
            </a>
            <ul class="dropdown-menu" aria-labelledby="guruDropdown">
              <li><a class="dropdown-item" href="#bagan-organisasi">Daftar Guru</a></li>
              <li><a class="dropdown-item" href="#pendaftaran">Daftar Siswa</a></li>
            </ul>
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(127, 134, 212, 0.7); /* Tambahkan bayangan ungu di bawah navbar */
}

.navbar-brand img {
  width: 40px; /* Sesuaikan ukuran logo */
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
  background-color: #7f86d4; /* warna garis */
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

/* Dropdown item hover effect */
.dropdown-item {
  color: #000;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
  overflow: hidden;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: -100%;
  background-color: #7f86d4; /* warna garis */
  transition: all 0.4s ease;
}

.dropdown-item:hover::before {
  left: 0;
}

.dropdown-item:hover {
  color: #a41e1d; /* Ubah warna teks saat disorot */
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

/* Hamburger menu icon transform on click */
.navbar-toggler.collapsed .bar1 {
  transform: rotate(0deg) translate(0, 0);
}

.navbar-toggler.collapsed .bar2 {
  opacity: 1;
}

.navbar-toggler.collapsed .bar3 {
  transform: rotate(0deg) translate(0, 0);
}

/* Transform the hamburger to X when the menu is open */
.navbar-toggler:not(.collapsed) .bar1 {
  transform: rotate(45deg) translate(6px, 6px); /* Perbaiki nilai translate */
}

.navbar-toggler:not(.collapsed) .bar2 {
  opacity: 0;
}

.navbar-toggler:not(.collapsed) .bar3 {
  transform: rotate(-45deg) translate(6px, -6px); /* Perbaiki nilai translate */
}
</style>
