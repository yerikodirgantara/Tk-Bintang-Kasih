<template>
  <footer class="text-center py-4">
    <div class="container">
      <p class="mb-3">Hubungi Kami:</p>
      <div class="social-icons mb-3">
        <a href="mailto:tkbintangkasih.tlogomulyo@gmail.com" class="text-muted mx-3" target="_blank">
          <i class="bi bi-envelope"></i>
        </a>
        <a href="https://wa.me/6282225386373" class="text-muted mx-3" target="_blank">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://instagram.com/kbtkbintangkasih.tlogomulyo/" class="text-muted mx-3" target="_blank">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
      <p class="footer-text mt-3">©2024 KB & TK Bintang Kasih | All Rights Reserved</p>
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
  background: linear-gradient(135deg, #7f86d4, #d4bff9);
  color: #fff;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.15);
  padding: 2rem 0;
}

.social-icons a {
  font-size: 24px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #ffd700;
  transform: scale(1.2);
}

.footer-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

footer p {
  margin: 0;
}
</style>
