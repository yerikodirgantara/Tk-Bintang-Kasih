<template>
  <div>
    <!-- Form Pembayaran -->
    <div v-if="!showInvoice" class="payment-section form-container">
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

      <!-- Gelombang pembayaran -->
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
          <option value="">Pilih Program</option>
          <option value="kb">KB (Kelompok Bermain)</option>
          <option value="tk">TK (Taman Kanak-kanak)</option>
        </select>
      </div>

      <!-- Tampilkan No Rekening setelah program dipilih -->
      <div v-if="schoolType !== ''" class="bank-details">
        <h4>Rekening Pembayaran</h4>
        <p>Bank XYZ</p>
        <p>No. Rekening: 1234 5678 910</p>
        <p>Atas Nama: Sekolah Bintang Kasih</p>
      </div>

      <!-- Harga -->
      <div class="price-section">
        <h3>Harga SPI: Rp {{ price.toLocaleString('id-ID') }}</h3>
        <p>SPP bulan Juli: Rp {{ sppJuly.toLocaleString('id-ID') }}</p>
        <h4>Total Pembayaran: Rp {{ totalPayment.toLocaleString('id-ID') }}</h4>
      </div>

      <!-- Unggah bukti pembayaran -->
      <div class="form-group">
        <label for="paymentProof">Unggah Bukti Pembayaran (maksimal 1 MB)</label>
        <input type="file" name="paymentProof" @change="onFileChange" />
        <p v-if="fileError" class="error">{{ fileError }}</p>
      </div>

      <!-- Tombol submit -->
      <button @click="submitPayment" :disabled="isSubmitDisabled">Lanjutkan Pembayaran</button>
    </div>

    <!-- Invoice Pembayaran -->
    <div v-else class="invoice-section card">
      <h4>Invoice Pembayaran</h4>
      <p>Metode Pembayaran: Transfer</p>
      <p>Total Pembayaran: Rp {{ totalPayment.toLocaleString('id-ID') }}</p>
      <p>Status: 
        <span :class="confirmationStatusClass">{{ confirmationStatusText }}</span>
      </p>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      hasCard: '', // Awalnya kosong, user harus memilih
      currentWave: '', // Awalnya kosong
      currentWaveLabel: '', // Awalnya kosong
      price: null, // Awalnya null
      sppJuly: null, // Awalnya null
      totalPayment: null, // Awalnya null
      schoolType: '', // Awalnya kosong, user harus memilih
      churchCardFile: null, // File defaultnya null
      fileError: null, // Awalnya null, hanya berisi jika ada error
      paymentProofFile: null, // Awalnya null
      isProofUploaded: false, // Default false, menunggu upload
      showInvoice: false, // Tidak muncul hingga user memilih untuk melihatnya
      confirmationStatus: 'pending' // Status awal menunggu
    };
  },
  created() {
    this.setWaveBasedOnDate();
    this.updatePrice();
  },
  computed: {
    isSubmitDisabled() {
      return !this.isProofUploaded || this.fileError;
    },
    confirmationStatusText() {
      if (this.confirmationStatus === 'pending') return 'Menunggu Konfirmasi';
      if (this.confirmationStatus === 'processing') return 'Sedang Diproses';
      if (this.confirmationStatus === 'confirmed') return 'Dikonfirmasi Admin';
    },
    confirmationStatusClass() {
      if (this.confirmationStatus === 'pending') return 'status-pending';
      if (this.confirmationStatus === 'processing') return 'status-processing';
      if (this.confirmationStatus === 'confirmed') return 'status-confirmed';
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

      this.updatePrice();
    },
    updatePrice() {
      if (this.hasCard === 'yes') {
        this.price = 750000;
      } else {
        if (this.currentWave === 'wave1') {
          this.price = 1000000;
        } else if (this.currentWave === 'wave2') {
          this.price = 1100000;
        } else if (this.currentWave === 'wave3') {
          this.price = 1200000;
        }
      }

      this.sppJuly = this.schoolType === 'kb' ? 100000 : 115000;
      this.totalPayment = this.price + this.sppJuly;
    },
    onFileChange(event) {
      const file = event.target.files[0];

      if (file && file.size > 1048576) {
        this.fileError = 'Ukuran file tidak boleh lebih dari 1 MB.';
        this.isProofUploaded = false;
      } else {
        this.fileError = null;
        this.paymentProofFile = file;
        this.isProofUploaded = true;
      }
    },
    submitPayment() {
      this.showInvoice = true;

      setTimeout(() => {
        this.confirmationStatus = 'processing';
      }, 2000);

      setTimeout(() => {
        this.confirmationStatus = 'confirmed';
      }, 5000);

      Swal.fire({
        title: 'Pembayaran Berhasil!',
        text: 'Invoice Anda telah diterima dan akan dikonfirmasi admin.',
        icon: 'success',
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }
};
</script>

<style scoped>
@import './style.css';
</style>
