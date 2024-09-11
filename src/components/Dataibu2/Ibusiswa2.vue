<template>
    <div class="form-container">
      <h1>Formulir Data Orang Tua Ibu Peserta Didik TK Bintang Kasih</h1>
      <p>Silahkan Isi Form Sesuai Ketentuan Sebagai Berikut:</p>
      <form @submit.prevent="handleSubmit">
        <!-- Form fields here -->
        <div class="form-group">
          <label for="namaIbu">Nama Ibu:</label>
          <input type="text" id="namaIbu" v-model="formData.namaIbu" placeholder="Cth: Maria Suryaningsih" required>
        </div>
        <div class="form-group">
          <label for="nik">NIK:</label>
          <input type="text" id="nik" v-model="formData.nik" placeholder="Cth: 357081712170002" required>
        </div>
        <div class="form-group">
          <label for="alamat">Alamat:</label>
          <input type="text" id="alamat" v-model="formData.alamat" placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang" required>
        </div>
        <div class="form-group">
          <label for="agama">Agama:</label>
          <select id="agama" v-model="formData.agama" required>
            <option value="">Silahkan Pilih salah satu</option>
            <option>Islam</option>
            <option>Kristen</option>
            <option>Katholik</option>
            <option>Hindu</option>
            <option>Budha</option>
            <option>Konghucu</option>
          </select>
        </div>
        <div class="form-group">
          <label for="pendidikan">Pendidikan Terakhir:</label>
          <input type="text" id="pendidikan" v-model="formData.pendidikan" placeholder="Cth: S1 Perencanaan Tata Kota" required>
        </div>
        <div class="form-group">
          <label for="pekerjaan">Pekerjaan:</label>
          <input type="text" id="pekerjaan" v-model="formData.pekerjaan" placeholder="Cth: Karyawan" required>
        </div>
        <div class="form-group">
          <label for="pendapatan">Pendapatan:</label>
          <select id="pendapatan" v-model="formData.pendapatan" required>
            <option value="">Silahkan Pilih Salah Satu</option>
            <option>< Rp 1.000.000</option>
            <option>Rp 1.000.000 - Rp 3.000.000</option>
            <option>Rp 3.000.000 - Rp 5.000.000</option>
            <option>> Rp 5.000.000</option>
          </select>
        </div>
        <div class="form-group">
          <label for="noHp">No Handphone:</label>
          <input type="text" id="noHp" v-model="formData.noHp" placeholder="Cth: 082316782241" required>
        </div>
        <div class="form-group">
          <label for="pkhKip">Termasuk dalam Keluarga PKH (Program Keluarga Harapan) / KIP (Kartu Indonesia Pintar):</label>
          <select id="pkhKip" v-model="formData.pkhKip" @change="handlePKHKIPChange" required>
            <option value="">Silahkan Pilih Salah Satu</option>
            <option>Ya</option>
            <option>Tidak</option>
          </select>
        </div>
  
        <!-- Bagian untuk upload bukti PKH/KIP, muncul jika pengguna memilih "Ya" -->
        <div v-if="formData.pkhKip === 'Ya'" class="form-group">
          <label for="buktiPKH">Upload Bukti (Maksimal 1MB):</label>
          <input type="file" id="buktiPKH" @change="handleFileChange">
          <p v-if="fileError" class="error">{{ fileError }}</p>
        </div>
  
        <div class="form-actions">
          <button type="button" @click="goBack">Kembali</button>
          <button type="reset" @click="resetForm">Reset</button>
          <button type="submit">Kumpulkan</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    name: 'DataIbu',
    data() {
      return {
        formData: {
          namaIbu: '',
          nik: '',
          alamat: '',
          agama: '',
          pendidikan: '',
          pekerjaan: '',
          pendapatan: '',
          noHp: '',
          pkhKip: ''
        },
        file: null,
        fileError: ''
      }
    },
    methods: {
      handleSubmit() {
        if (this.isFormComplete()) {
          if (this.formData.pkhKip === 'Ya' && !this.file) {
            this.fileError = 'Harap unggah bukti PKH/KIP.';
            return;
          }
          if (this.formData.pkhKip === 'Ya' && this.file && this.file.size > 1024 * 1024) {
            this.fileError = 'Ukuran file maksimal 1MB.';
            return;
          }
          // Menampilkan SweetAlert dan delay sebelum mengarahkan ke halaman pembayaran
          Swal.fire({
            icon: 'success',
            title: 'Data berhasil disimpan!',
            text: 'Anda akan diarahkan ke halaman pembayaran.',
            timer: 5000,
            timerProgressBar: true,
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/Pembayaran'); // Menggunakan routes untuk redirect ke halaman pembayaran
            }
          });
          this.resetForm();
        } else {
          alert("Harap lengkapi semua data sebelum melanjutkan.");
        }
      },
      isFormComplete() {
        return Object.values(this.formData).every(value => value !== '');
      },
      handlePKHKIPChange() {
        if (this.formData.pkhKip !== 'Ya') {
          this.file = null;
          this.fileError = '';
        }
      },
      handleFileChange(event) {
        this.file = event.target.files[0];
        if (this.file && this.file.size > 1024 * 1024) {
          this.fileError = 'Ukuran file maksimal 1MB.';
          this.file = null;
        } else {
          this.fileError = '';
        }
      },
      resetForm() {
        this.formData = {
          namaIbu: '',
          nik: '',
          alamat: '',
          agama: '',
          pendidikan: '',
          pekerjaan: '',
          pendapatan: '',
          noHp: '',
          pkhKip: ''
        };
        this.file = null;
        this.fileError = '';
      },
      goBack() {
        this.$router.push('/Ayahsiswa2'); // Mengarahkan ke path formulir ayah
      }
    }
  }
  </script>
  
  <style scoped>
  @import './style.css';
  
  .error {
    color: red;
  }
  </style>
  