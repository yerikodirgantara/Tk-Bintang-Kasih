<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <h2>Formulir Pendaftaran Murid Baru KB dan TK Bintang Kasih</h2>
      <p>Silahkan Isi Form Sesuai Ketentuan Sebagai Berikut:</p>

      <!-- Card for Data Anak -->
      <div class="card">
        <h3><span class="highlight">Data</span> Anak</h3>
        <div class="form-group-horizontal">
          <label for="opsiPendaftaran">Pendaftaran Untuk:</label>
          <select id="opsiPendaftaran" v-model="formData.opsiPendaftaran" required>
            <option value="">Pilih Pendaftaran</option>
            <option value="KB">Kelompok Bermain (KB)</option>
            <option value="TK">Taman Kanak-kanak (TK)</option>
          </select>
        </div>
        <div class="form-group-horizontal">
          <label for="namaLengkap">Nama Lengkap:</label>
          <input type="text" id="namaLengkap" v-model="formData.namaLengkap" placeholder="Cth: Naomi Utami Pratiwi" required />
        </div>
        <div class="form-group-horizontal">
          <label for="jenisKelamin">Jenis Kelamin:</label>
          <select id="jenisKelamin" v-model="formData.jenisKelamin" required>
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div class="form-group-horizontal">
          <label for="tempatLahirAnak">Tempat Lahir:</label>
          <input type="text" id="tempatLahirAnak" v-model="formData.tempatLahirAnak" placeholder="Cth: Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="tanggalLahirAnak">Tanggal Lahir:</label>
          <input type="date" id="tanggalLahirAnak" v-model="formData.tanggalLahirAnak" required />
        </div>
        <div class="form-group-horizontal">
          <label for="nikAnak">NIK:</label>
          <input type="text" id="nikAnak" v-model="formData.nikAnak" placeholder="Cth: 357081712170001" required />
        </div>
        <div class="form-group-horizontal">
          <label for="alamatAnak">Alamat:</label>
          <input type="text" id="alamatAnak" v-model="formData.alamatAnak" placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="agamaAnak">Agama:</label>
          <select id="agamaAnak" v-model="formData.agamaAnak" required>
            <option value="" >Pilih Salah Satu</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>
      </div>

      <!-- Card for Data Ayah -->
      <div class="card">
        <h3><span class="highlight">Data</span> Ayah</h3>
        <div class="form-group-horizontal">
          <label for="namaAyah">Nama Ayah:</label>
          <input type="text" id="namaAyah" v-model="formData.namaAyah" placeholder="Cth: Yohanes Budi Prakoso" required />
        </div>
        <div class="form-group-horizontal">
          <label for="tempatLahirAyah">Tempat Lahir:</label>
          <input type="text" id="tempatLahirAyah" v-model="formData.tempatLahirAyah" placeholder="Cth: Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="tanggalLahirAyah">Tanggal Lahir:</label>
          <input type="date" id="tanggalLahirAyah" v-model="formData.tanggalLahirAyah" required />
        </div>
        <div class="form-group-horizontal">
          <label for="nikAyah">NIK:</label>
          <input type="text" id="nikAyah" v-model="formData.nikAyah" placeholder="Cth: 357081712170001" required />
        </div>
        <div class="form-group-horizontal">
          <label for="alamatAyah">Alamat:</label>
          <input type="text" id="alamatAyah" v-model="formData.alamatAyah" placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="agamaAyah">Agama:</label>
          <select id="agamaAyah" v-model="formData.agamaAyah" required>
            <option value="">Pilih Salah Satu</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>
        <div class="form-group-horizontal">
          <label for="pekerjaanAyah">Pekerjaan:</label>
          <input type="text" id="pekerjaanAyah" v-model="formData.pekerjaanAyah" placeholder="Cth: Pegawai Negeri" required />
        </div>
        <div class="form-group-horizontal">
          <label for="noTelpAyah">No. Telepon WA:</label>
          <input type="text" id="noTelpAyah" v-model="formData.noTelpAyah" placeholder="Cth: 081234567890" required />
        </div>
      </div>

      <!-- Card for Data Ibu -->
      <div class="card">
        <h3><span class="highlight">Data</span> Ibu</h3>
        <div class="form-group-horizontal">
          <label for="namaIbu">Nama Ibu:</label>
          <input type="text" id="namaIbu" v-model="formData.namaIbu" placeholder="Cth: Maria Suryaningsih" required />
        </div>
        <div class="form-group-horizontal">
          <label for="tempatLahirIbu">Tempat Lahir:</label>
          <input type="text" id="tempatLahirIbu" v-model="formData.tempatLahirIbu" placeholder="Cth: Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="tanggalLahirIbu">Tanggal Lahir:</label>
          <input type="date" id="tanggalLahirIbu" v-model="formData.tanggalLahirIbu" required />
        </div>
        <div class="form-group-horizontal">
          <label for="nikIbu">NIK:</label>
          <input type="text" id="nikIbu" v-model="formData.nikIbu" placeholder="Cth: 357081712170002" required />
        </div>
        <div class="form-group-horizontal">
          <label for="alamatIbu">Alamat:</label>
          <input type="text" id="alamatIbu" v-model="formData.alamatIbu" placeholder="Cth: Jl. Gusti Putri 2 No. 10 Semarang" required />
        </div>
        <div class="form-group-horizontal">
          <label for="agamaIbu">Agama:</label>
          <select id="agamaIbu" v-model="formData.agamaIbu" required>
            <option value="">Pilih Salah Satu</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Budha">Budha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>
        <div class="form-group-horizontal">
          <label for="pekerjaanIbu">Pekerjaan:</label>
          <input type="text" id="pekerjaanIbu" v-model="formData.pekerjaanIbu" placeholder="Cth: Pegawai Swasta" required />
        </div>
        <div class="form-group-horizontal">
          <label for="noTelpIbu">No. Telepon WA:</label>
          <input type="text" id="noTelpIbu" v-model="formData.noTelpIbu" placeholder="Cth: 081234567891" required />
        </div>
      </div>

      <!-- Card for Upload Dokumen -->
      <div class="card">
        <h3><span class="highlight">Upload</span> Dokumen</h3>
        <div class="form-group-horizontal">
          <label for="fotoAnak">Upload Foto Anak:</label>
          <input type="file" id="fotoAnak" @change="handleFileChange('fotoAnak', $event)" />
          <p v-if="fileErrors.fotoAnak" class="error">{{ fileErrors.fotoAnak }}</p>
        </div>
        <div class="form-group-horizontal">
          <label for="fotoKK">Upload Foto Kartu Keluarga:</label>
          <input type="file" id="fotoKK" @change="handleFileChange('fotoKK', $event)" />
          <p v-if="fileErrors.fotoKK" class="error">{{ fileErrors.fotoKK }}</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="highlight">Penerima</span> PKH</h3>
        <div class="form-group-horizontal">
          <label for="statusPenerimaPKH">Apakah Penerima PKH?</label>
          <select id="statusPenerimaPKH" v-model="formData.statusPenerimaPKH">
            <option value="">Pilih Status</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>
        </div>
        <!-- Upload Bukti PKH only visible if "Ya" is selected -->
        <div v-if="formData.statusPenerimaPKH === 'Ya'" class="form-group-horizontal">
          <label for="uploadBuktiPKH">Upload Bukti PKH:</label>
          <input type="file" id="uploadBuktiPKH" accept="image/*" @change="handleFileUpload" />
        </div>
      </div>


      <div class="form-actions">
        <button type="button" @click="goBack" class="btn-back-reset">Kembali</button>
        <button type="reset" @click="resetForm" class="btn-back-reset">Reset</button>
        <button type="submit" class="btn-submit">Kumpulkan</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        opsiPendaftaran: '',
        namaLengkap: '',
        jenisKelamin: '',
        tempatLahirAnak: '',
        tanggalLahirAnak: '',
        nikAnak: '',
        alamatAnak: '',
        agamaAnak: '',
        namaAyah: '',
        tempatLahirAyah: '',
        tanggalLahirAyah: '',
        nikAyah: '',
        alamatAyah: '',
        agamaAyah: '',
        pekerjaanAyah: '',
        noTelpAyah: '',
        namaIbu: '',
        tempatLahirIbu: '',
        tanggalLahirIbu: '',
        nikIbu: '',
        alamatIbu: '',
        agamaIbu: '',
        pekerjaanIbu: '',
        noTelpIbu: '',
        fotoAnak: null,
        fotoKK: null,
        statusPenerimaPKH: '',
        buktiPKH: null,
      },
      fileErrors: {
        fotoAnak: '',
        fotoKK: '',
        buktiPKH: '',
      },
    };
  },
  created() {
    // Scroll ke atas saat form pertama kali dibuka
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    handleFileUpload(type, event) {
      const file = event.target.files[0];
      if (file) {
        // Validasi format file (hanya menerima jpeg, jpg, dan png)
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validImageTypes.includes(file.type)) {
          this.fileErrors[type] = 'File harus berupa gambar (jpeg, jpg, png)';
        } else {
          this.formData[type] = file;
          this.fileErrors[type] = ''; // Hapus pesan error jika file valid
        }
      } else {
        this.fileErrors[type] = 'File tidak valid';
        this.formData[type] = null;
      }
    },
    handleSubmit() {
      // Reset error messages
      this.fileErrors.fotoAnak = '';
      this.fileErrors.fotoKK = '';
      this.fileErrors.buktiPKH = '';

      // Validasi file yang diupload
      if (!this.formData.fotoAnak) {
        this.fileErrors.fotoAnak = 'Foto anak harus diupload';
      }
      if (!this.formData.fotoKK) {
        this.fileErrors.fotoKK = 'Foto Kartu Keluarga harus diupload';
      }
      if (this.formData.statusPenerimaPKH === 'Ya' && !this.formData.buktiPKH) {
        this.fileErrors.buktiPKH = 'Bukti PKH harus diupload jika terdaftar sebagai penerima PKH';
      }

      // Jika tidak ada error, lanjutkan pengiriman data
      if (!this.fileErrors.fotoAnak && !this.fileErrors.fotoKK && !(this.formData.statusPenerimaPKH === 'Ya' && !this.formData.buktiPKH)) {
        // Buat objek FormData untuk mengirimkan data dan file
        const formData = new FormData();
        for (const key in this.formData) {
          formData.append(key, this.formData[key]);
        }

        // Kirim data ke backend menggunakan Axios atau Fetch
        this.$http.post('API_ENDPOINT/submit-form', formData)
          .then(response => {
            // Tangani jika respons sukses
            if (response.data.success) {
              this.$swal('Berhasil', 'Data berhasil disimpan!', 'success');
              // Lanjutkan ke validasi murid atau halaman selanjutnya
              this.$router.push('/validasi-murid');
            } else {
              this.$swal('Gagal', 'Terjadi kesalahan saat menyimpan data!', 'error');
            }
          })
          .catch(error => {
            console.error(error);
            this.$swal('Error', 'Terjadi kesalahan saat menghubungi server.', 'error');
          });
      }
    },

    resetForm() {
      Object.keys(this.formData).forEach(key => {
        if (typeof this.formData[key] === 'object' && this.formData[key] instanceof File) {
          this.formData[key] = null;
        } else {
          this.formData[key] = '';
        }
      });
      Object.keys(this.fileErrors).forEach(key => {
        this.fileErrors[key] = '';
      });
      this.scrollToTop();
    },
    
    goBack() {
      this.$router.push({ name: 'Home2' });
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    // Scroll ke atas sedikit jeda saat form pertama kali di-load
    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  },
};
</script>




<style scoped>
@import './style.css';

.error-message {
  color: red;
  font-size: 0.875em;
}

/* Menambahkan jarak pada judul */
h2 {
  margin-top: 20px; /* Jarak atas */
  text-align: center;
}

h3 {
  margin-top: 15px; /* Jarak atas */
}

h4 {
  margin-top: 10px; /* Jarak atas */
}
</style>
