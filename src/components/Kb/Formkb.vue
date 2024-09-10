<template>
  <div class="form-container">
    <h1>Formulir Pendaftaran Murid Baru KB Bintang Kasih</h1>
    <p>Silahkan Isi Form Sesuai Ketentuan Sebagai Berikut:</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="namaLengkap">Nama Lengkap:</label>
        <input type="text" id="namaLengkap" v-model="formData.namaLengkap" placeholder="Cth: Naomi Utami Pratiwi" required>
      </div>
      <div class="form-group">
        <label for="namaPanggilan">Nama Panggilan:</label>
        <input type="text" id="namaPanggilan" v-model="formData.namaPanggilan" placeholder="Cth: Naomi" required>
      </div>
      <div class="form-group">
        <label for="tempatTanggalLahir">Tempat, Tanggal Lahir:</label>
        <input type="text" id="tempatTanggalLahir" v-model="formData.tempatTanggalLahir" placeholder="Cth: Surabaya, 17 Desember 2017" required>
      </div>
      <div class="form-group">
        <label for="nik">NIK (Nomor Induk Kependudukan):</label>
        <input type="text" id="nik" v-model="formData.nik" placeholder="Cth: 357081712170003" required>
      </div>
      <div class="form-group">
        <label for="agama">Agama:</label>
        <select id="agama" v-model="formData.agama" required>
          <option disabled value="">Silahkan Pilih salah satu</option>
          <option>Islam</option>
          <option>Kristen</option>
          <option>Katholik</option>
          <option>Hindu</option>
          <option>Budha</option>
          <option>Konghucu</option>
        </select>
      </div>
      <div class="form-group">
        <label for="anakKe">Anak Ke: (angka saja)</label>
        <input type="number" id="anakKe" v-model="formData.anakKe" placeholder="Cth: 1" required>
      </div>
      <div class="form-group">
        <label for="alamatDomisili">Alamat Domisili:</label>
        <input type="text" id="alamatDomisili" v-model="formData.alamatDomisili" placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang" required>
      </div>
      <div class="form-group">
        <label for="alamatKK">Alamat KK:</label>
        <input type="text" id="alamatKK" v-model="formData.alamatKK" placeholder="Cth: Jl. Jemur Andayani No.12 Surabaya" required>
      </div>
      <div class="form-group">
        <label for="foto">Foto Anak Background Merah (maksimal 1 MB):</label>
        <input type="file" id="foto" @change="handleFileUpload" accept="image/*" required>
        <span v-if="fileError" class="error-message">{{ fileError }}</span>
      </div>
      <div class="form-actions">
        <button type="button" @click="goHome">Kembali</button>
        <button type="button" @click="resetForm">Reset</button>
        <button type="submit">Selanjutnya</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formkb',
  data() {
    return {
      formData: {
        namaLengkap: '',
        namaPanggilan: '',
        tempatTanggalLahir: '',
        nik: '',
        agama: '',
        anakKe: '',
        alamatDomisili: '',
        alamatKK: '',
        foto: null
      },
      fileError: ''
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 1 * 1024 * 1024) { // Batas ukuran 1 MB
          this.fileError = 'Ukuran file tidak boleh lebih dari 1 MB.';
          this.formData.foto = null;
        } else {
          this.fileError = '';
          this.formData.foto = file;
        }
      }
    },
    submitForm() {
      if (this.fileError) {
        alert('Terdapat kesalahan pada file yang diupload.');
        return;
      }

      // Logika untuk mengirim data form
      console.log("Form Data:", this.formData);

      // Arahkan ke halaman formulir ayah
      this.$router.push('/Ayahsiswa'); // Pastikan Anda menggunakan vue-router dan telah mengonfigurasi route
    },
    resetForm() {
      this.formData = {
        namaLengkap: '',
        namaPanggilan: '',
        tempatTanggalLahir: '',
        nik: '',
        agama: '',
        anakKe: '',
        alamatDomisili: '',
        alamatKK: '',
        foto: null
      };
      this.fileError = '';
    },
    goHome() {
      // Mengarahkan pengguna ke halaman home
      this.$router.push('/'); // Pastikan Anda menggunakan vue-router dan telah mengonfigurasi route
    }
  }
}
</script>

<style scoped>
@import './style.css';

.error-message {
  color: red;
  font-size: 0.875em;
}
</style>
