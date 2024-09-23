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
            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><a class="dropdown-item" href="#about-tk">About KB & TK</a></li>
              <li><a class="dropdown-item" href="#visi-misi">Visi & Misi</a></li>
              <li><a class="dropdown-item" href="#lokasi-sekolah">Lokasi Sekolah</a></li>
              <li><a class="dropdown-item" href="#bagan-organisasi">Daftar Guru</a></li>
            </ul>
          </li>
          <!-- Menu Pendaftaran -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="pendaftaranDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pendaftaran
            </a>
            <ul class="dropdown-menu" aria-labelledby="pendaftaranDropdown">
              <li><a class="dropdown-item" href="#pendaftaran">Form Pendaftaran</a></li>
            </ul>
          </li>
          <!-- Menu dengan nama pengguna yang login -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hai, {{ username }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="userDropdown">
              <li><a class="dropdown-item" href="/Home">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navmenu2",
  data() {
    return {
      username: "" // Ganti ini dengan nama pengguna yang sebenarnya saat login
    };
  },
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
  box-shadow: 0 4px 6px -1px rgba(127, 134, 212, 0.7); /* Bayangan di bawah navbar */
}

.navbar-brand img {
  width: 40px;
}

.navbar-nav .nav-link {
  color: #000;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
  overflow: hidden;
}

.navbar-nav .nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: -100%;
  background-color: #7f86d4;
  transition: all 0.4s ease;
}

.navbar-nav .nav-link:hover::before {
  left: 0;
}

.navbar-nav .nav-link:hover {
  color: #a41e1d;
}

body {
  padding-top: 80px;
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
  background-color: #7f86d4;
  transition: all 0.4s ease;
}

.dropdown-item:hover::before {
  left: 0;
}

.dropdown-item:hover {
  color: #a41e1d;
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
}

.navbar-toggler.collapsed .bar1 {
  transform: rotate(0deg) translate(0, 0);
}

.navbar-toggler.collapsed .bar2 {
  opacity: 1;
}

.navbar-toggler.collapsed .bar3 {
  transform: rotate(0deg) translate(0, 0);
}

.navbar-toggler:not(.collapsed) .bar1 {
  transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggler:not(.collapsed) .bar2 {
  opacity: 0;
}

.navbar-toggler:not(.collapsed) .bar3 {
  transform: rotate(-45deg) translate(6px, -6px);
}
</style>
