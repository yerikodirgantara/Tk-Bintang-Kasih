<template>
  <footer class="text-center py-4">
    <div class="container">
      <p>Hubungi Kami</p>
      <div>
        <a href="mailto:tkbintangkasih.tlogomulyo@gmail.com" class="text-muted mx-2">
          <i class="bi bi-envelope"></i>
        </a>
        <a href="https://wa.me/6282225386373" class="text-muted mx-2" target="_blank">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://instagram.com/kbtkbintangkasih.tlogomulyo/" class="text-muted mx-2" target="_blank">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
      <p class="mt-3">©2024 TK Bintang Kasih</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem; /* Mengurangi padding */
}

footer a {
  font-size: 18px; /* Mengurangi ukuran font ikon */
}

footer p {
  margin-bottom: 0;
  font-size: 0.875rem; /* Mengurangi ukuran font teks */
}

</style>
