<template>
  <div class="form-container">
    <h1>Formulir Pendaftaran Murid Baru TK Bintang Kasih</h1>
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
        <label for="tempatLahir">Tempat Lahir:</label>
        <input type="text" id="tempatLahir" v-model="formData.tempatLahir" placeholder="Cth: Surabaya" required>
      </div>
      <div class="form-group">
        <label for="tanggalLahir">Tanggal Lahir:</label>
        <input type="date" id="tanggalLahir" v-model="formData.tanggalLahir" required>
      </div>
      <div class="form-group">
        <label for="jenisKelamin">Jenis Kelamin:</label>
        <select id="jenisKelamin" v-model="formData.jenisKelamin" required>
          <option disabled value="">Silahkan Pilih</option>
          <option>Laki-laki</option>
          <option>Perempuan</option>
        </select>
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
        <label for="foto">Foto (Maksimal 1 MB):</label>
        <input type="file" id="foto" @change="handleFileUpload('foto')" accept="image/*" required>
        <span v-if="fileErrors.foto" class="error-message">{{ fileErrors.foto }}</span>
      </div>
      <div class="form-group">
        <label for="fileKK">Upload File KK (Maksimal 1 MB):</label>
        <input type="file" id="fileKK" @change="handleFileUpload('fileKK')" accept="image/*" required>
        <span v-if="fileErrors.fileKK" class="error-message">{{ fileErrors.fileKK }}</span>
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
  name: 'Formtk',
  data() {
    return {
      formData: {
        namaLengkap: '',
        namaPanggilan: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        nik: '',
        agama: '',
        anakKe: '',
        alamatDomisili: '',
        alamatKK: '',
        foto: null,
        fileKK: null
      },
      fileErrors: {
        foto: '',
        fileKK: ''
      }
    }
  },
  created() {
    // Saat komponen di-mount, kita cek apakah ada data form yang disimpan di local storage
    const savedFormData = localStorage.getItem('formDataTK');
    if (savedFormData) {
      this.formData = JSON.parse(savedFormData);
    }

    // Scroll ke atas saat form pertama kali dibuka
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    handleFileUpload(field) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 1 * 1024 * 1024) { // Batas ukuran 1 MB
          this.fileErrors[field] = `Ukuran file ${field === 'foto' ? 'foto' : 'KK'} tidak boleh lebih dari 1 MB.`;
          this.formData[field] = null;
        } else {
          this.fileErrors[field] = '';
          this.formData[field] = file;
        }
      }
    },
    submitForm() {
      if (this.fileErrors.foto || this.fileErrors.fileKK) {
        alert('Terdapat kesalahan pada file yang diupload.');
        return;
      }

      // Simpan formData ke local storage sebelum pindah ke form Ayah
      localStorage.setItem('formDataTK', JSON.stringify(this.formData));

      // Logika untuk mengirim data form
      console.log("Form Data:", this.formData);

      // Logika untuk mengirim data form
      console.log("Form Data:", this.formData);

      // Arahkan ke halaman formulir ayah
      this.$router.push('/Ayahsiswa2'); // Pastikan Anda menggunakan vue-router dan telah mengonfigurasi route
    },
    resetForm() {
      this.formData = {
        namaLengkap: '',
        namaPanggilan: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        nik: '',
        agama: '',
        anakKe: '',
        alamatDomisili: '',
        alamatKK: '',
        foto: null,
        fileKK: null
      };
      this.fileErrors = {
        foto: '',
        fileKK: ''
      };

      // Hapus data dari local storage juga saat reset form
      localStorage.removeItem('formDataTK');

      // Scroll ke bagian atas setelah reset form
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
