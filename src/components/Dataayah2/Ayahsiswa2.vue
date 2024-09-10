<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <h2>Formulir Data Orang Tua Ayah Peserta Didik TK Bintang Kasih</h2>
        <p>Silahkan Isi Form Sesuai Ketentuan Sebagai Berikut:</p>
  
        <div class="form-group">
          <label for="namaAyah">Nama Ayah:</label>
          <input
            v-model="formData.namaAyah"
            type="text"
            id="namaAyah"
            placeholder="Cth: Yohanes Budi Prakoso"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="nik">NIK (Nomor Induk Kependudukan):</label>
          <input
            v-model="formData.nik"
            type="text"
            id="nik"
            placeholder="Cth: 357081712170001"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="alamat">Alamat:</label>
          <input
            v-model="formData.alamat"
            type="text"
            id="alamat"
            placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="agama">Agama:</label>
          <select v-model="formData.agama" id="agama" required>
            <option value="" disabled>Pilih Salah Satu</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="pendidikan">Pendidikan Terakhir:</label>
          <input
            v-model="formData.pendidikan"
            type="text"
            id="pendidikan"
            placeholder="Cth: S1 Manajemen"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="pekerjaan">Pekerjaan:</label>
          <input
            v-model="formData.pekerjaan"
            type="text"
            id="pekerjaan"
            placeholder="Cth: Karyawan Swasta"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="pendapatan">Pendapatan:</label>
          <select v-model="formData.pendapatan" id="pendapatan" required>
            <option value="" disabled>Pilih Salah Satu</option>
            <option value="< 1 Juta">Kurang dari 1 Juta</option>
            <option value="1 - 3 Juta">1 - 3 Juta</option>
            <option value="3 - 5 Juta">3 - 5 Juta</option>
            <option value="> 5 Juta">Lebih dari 5 Juta</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="noHp">No Handphone:</label>
          <input
            v-model="formData.noHp"
            type="text"
            id="noHp"
            placeholder="Cth: 082316782241"
            required
          />
        </div>
  
        <div class="form-actions">
          <button type="button" @click="handleBack" class="btn-secondary">Kembali</button>
          <button type="button" @click="resetForm" class="btn-secondary">Reset</button>
          <button type="submit" class="btn-primary">Selanjutnya</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          namaAyah: '',
          nik: '',
          alamat: '',
          agama: '',
          pendidikan: '',
          pekerjaan: '',
          pendapatan: '',
          noHp: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Logika untuk mengirim data form
        console.log('Form Data:', this.formData);
        
        // Arahkan ke halaman formulir ibu setelah data dikirim
        this.$router.push('/Ibusiswa2'); // Pastikan Anda menggunakan vue-router dan telah mengonfigurasi route
      },
      handleBack() {
        // Mengarahkan pengguna ke halaman Formtk
        this.$router.push('/Formtk'); // Pastikan Anda menggunakan vue-router dan telah mengonfigurasi route
      },
      resetForm() {
        this.formData = {
          namaAyah: '',
          nik: '',
          alamat: '',
          agama: '',
          pendidikan: '',
          pekerjaan: '',
          pendapatan: '',
          noHp: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  @import './style.css';
  
  .btn-secondary {
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    padding: 0.5em 1em;
    margin-right: 0.5em;
  }
  
  .btn-primary {
    background-color: #1d65a4;
    color: #fff;
    border: 1px solid #7c82c0;
    padding: 0.5em 1em;
  }
  </style>