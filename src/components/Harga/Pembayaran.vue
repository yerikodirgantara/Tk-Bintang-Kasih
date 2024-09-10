<template>
    <div class="payment-section">
      <h2>Form Pembayaran</h2>
  
      <!-- Pilihan kartu anggota -->
      <div class="form-group">
        <label for="hasCard">Apakah Anda memiliki kartu anggota gereja?</label>
        <select v-model="hasCard" @change="updatePrice">
          <option value="yes">Ya</option>
          <option value="no">Tidak</option>
        </select>
      </div>
  
      <!-- Jika memiliki kartu anggota, unggah file -->
      <div v-if="hasCard === 'yes'" class="form-group">
        <label for="churchCard">Unggah Kartu Anggota Gereja (maksimal 1 MB)</label>
        <input type="file" name="churchCard" @change="onFileChange" />
        <p v-if="fileError" class="error">{{ fileError }}</p>
      </div>
  
      <!-- Gelombang pembayaran yang otomatis disesuaikan tetapi terkunci -->
      <div class="form-group">
        <label>Gelombang Pendaftaran</label>
        <select v-model="currentWaveLabel" disabled>
          <option>{{ currentWaveLabel }}</option>
        </select>
      </div>
  
      <!-- Pilihan TK atau KB -->
      <div class="form-group">
        <label for="schoolType">Pilih Program</label>
        <select v-model="schoolType" @change="updatePrice">
          <option value="kb">KB (Kelompok Bermain)</option>
          <option value="tk">TK (Taman Kanak-kanak)</option>
        </select>
      </div>
  
      <!-- Harga -->
      <div class="price-section">
        <h3>Harga SPI: Rp {{ price.toLocaleString('id-ID') }}</h3>
        <p>SPP bulan Juli: Rp {{ sppJuly.toLocaleString('id-ID') }}</p>
        <h4>Total Pembayaran: Rp {{ totalPayment.toLocaleString('id-ID') }}</h4>
      </div>
  
      <!-- Pilihan metode pembayaran -->
      <div v-if="hasCard !== ''" class="form-group">
        <label for="paymentMethod">Metode Pembayaran</label>
        <select v-model="paymentMethod" @change="handlePaymentMethodChange">
          <option value="transfer">Transfer</option>
          <option value="bayarSekolah">Bayar di Sekolah</option>
        </select>
      </div>
  
      <!-- Detail transfer jika memilih transfer -->
      <div v-if="paymentMethod === 'transfer'" class="form-group">
        <h4>Silakan lakukan transfer ke rekening berikut:</h4>
        <p><strong>Bank ABC</strong>: 123-456-7890 a.n. TK Bintang Kasih</p>
        <p>Setelah transfer, harap konfirmasi pembayaran melalui WhatsApp.</p>
        <p v-if="isProofUploaded"><a :href="whatsappLink" target="_blank">Konfirmasi Pembayaran via WhatsApp</a></p>
      </div>
  
      <!-- Kontak WA jika memilih bayar di sekolah -->
      <div v-if="paymentMethod === 'bayarSekolah'" class="form-group">
        <h4>Silakan hubungi kami melalui WhatsApp untuk pembayaran di sekolah:</h4>
        <p><a :href="whatsappLink" target="_blank">Hubungi Kami di WhatsApp</a></p>
      </div>
  
      <!-- Unggah bukti pembayaran jika memilih transfer -->
      <div v-if="paymentMethod === 'transfer'" class="form-group">
        <label for="paymentProof">Unggah Bukti Pembayaran (maksimal 1 MB)</label>
        <input type="file" name="paymentProof" @change="onFileChange" />
        <p v-if="fileError" class="error">{{ fileError }}</p>
      </div>
  
      <!-- Tombol submit -->
      <button @click="submitPayment" :disabled="isSubmitDisabled">Lanjutkan Pembayaran</button>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        hasCard: 'no',
        currentWave: '',
        currentWaveLabel: '',
        price: 1000000,
        sppJuly: 100000,
        totalPayment: 1100000,
        schoolType: 'kb',
        churchCardFile: null,
        fileError: null,
        paymentMethod: '',
        paymentProofFile: null,
        isProofUploaded: false,
        whatsappNumber: '+6282225386373',
      };
    },
    created() {
      this.setWaveBasedOnDate();
      this.updatePrice();
    },
    computed: {
      isSubmitDisabled() {
        return (this.hasCard === 'yes' && (!this.churchCardFile || this.fileError)) ||
               (this.paymentMethod === 'transfer' && (!this.isProofUploaded || this.fileError));
      },
      whatsappLink() {
        return `https://wa.me/${this.whatsappNumber}`;
      }
    },
    methods: {
      setWaveBasedOnDate() {
        const currentMonth = new Date().getMonth();
  
        if (currentMonth === 11 || currentMonth === 0) {
          this.currentWave = 'wave1';
          this.currentWaveLabel = 'Gelombang 1 (Desember - Januari)';
          this.price = 1000000;
        } else if (currentMonth >= 1 && currentMonth <= 2) {
          this.currentWave = 'wave2';
          this.currentWaveLabel = 'Gelombang 2 (Februari - Maret)';
          this.price = 1100000;
        } else if (currentMonth >= 3 && currentMonth <= 6) {
          this.currentWave = 'wave3';
          this.currentWaveLabel = 'Gelombang 3 (April - Juli)';
          this.price = 1200000;
        } else {
          this.currentWave = 'wave1';
          this.currentWaveLabel = 'Gelombang 1 (Desember - Januari)';
          this.price = 1000000;
        }
  
        // Call updatePrice to apply card discount
        this.updatePrice();
      },
      updatePrice() {
        // Update the price based on whether the user has a church card
        if (this.hasCard === 'yes') {
          this.price = 750000;
        } else {
          // Keep the price based on the wave
          if (this.currentWave === 'wave1') {
            this.price = 1000000;
          } else if (this.currentWave === 'wave2') {
            this.price = 1100000;
          } else if (this.currentWave === 'wave3') {
            this.price = 1200000;
          }
        }
  
        // Update the SPP based on the selected school program
        if (this.schoolType === 'kb') {
          this.sppJuly = 100000;
        } else if (this.schoolType === 'tk') {
          this.sppJuly = 115000;
        }
  
        // Calculate the total payment
        this.totalPayment = this.price + this.sppJuly;
      },
      onFileChange(event) {
        const file = event.target.files[0];
        const fileName = event.target.name;
  
        if (file && file.size > 1048576) {
          this.fileError = 'Ukuran file tidak boleh lebih dari 1 MB.';
          if (fileName === 'churchCard') {
            this.churchCardFile = null;
          } else if (fileName === 'paymentProof') {
            this.isProofUploaded = false;
          }
        } else {
          this.fileError = null;
          if (fileName === 'churchCard') {
            this.churchCardFile = file;
          } else if (fileName === 'paymentProof') {
            this.paymentProofFile = file;
            this.isProofUploaded = true;
          }
        }
      },
      handlePaymentMethodChange() {
        if (this.paymentMethod === 'transfer' && this.paymentProofFile) {
          this.isProofUploaded = true;
        }
      },
      submitPayment() {
        const paymentStatus = {
          method: this.paymentMethod,
          price: this.price,
          spp: this.sppJuly,
          wave: this.currentWave,
          program: this.schoolType,
          total: this.totalPayment
        };
  
        if (this.paymentMethod === 'transfer') {
          console.log('Pembayaran metode transfer:', paymentStatus);
          Swal.fire({
            title: 'Pembayaran Berhasil!',
            text: 'Anda akan dialihkan ke halaman Home dalam 4 detik.',
            icon: 'success',
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false
          }).then(() => {
            this.$router.push('/');
          });
        } else if (this.paymentMethod === 'bayarSekolah') {
          console.log('Pembayaran di sekolah:', paymentStatus);
          Swal.fire({
            title: 'Pembayaran Berhasil!',
            text: 'Anda akan dialihkan ke halaman Home dalam 4 detik.',
            icon: 'success',
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false
          }).then(() => {
            this.$router.push('/');
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import './style.scss';
  </style>
  