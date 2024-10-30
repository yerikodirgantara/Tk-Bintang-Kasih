<template>
  <div>
    <!-- Form Pembayaran -->
    <div v-if="!showInvoice" class="payment-section form-container">
      <h2>Form Pembayaran</h2>

      <!-- Pilihan kartu anggota -->
      <div class="form-group">
        <label for="hasCard">Apakah Anda memiliki kartu anggota gereja?</label>
        <select v-model="hasCard" @change="updatePrice">
          <option value="">Pilih Opsi</option>
          <option value="yes">Ya</option>
          <option value="no">Tidak</option>
        </select>
      </div>

      <!-- Jika memiliki kartu anggota, unggah file -->
      <div v-if="hasCard === 'yes'" class="form-group">
        <label for="churchCard">Unggah Kartu Anggota Gereja</label>
        <input type="file" id="churchCard" @change="onFileChange" />
        <label class="custom-file-label" for="churchCard">Choose File</label>
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

      <!-- Pilihan pembayaran SPI -->
      <div class="form-group">
        <label for="spiPaymentType">Pembayaran SPI</label>
        <select v-model="spiPaymentType" @change="updatePrice">
          <option value="">Pilih Pembayaran</option>
          <option value="full">Pembayaran Penuh (100%)</option>
          <option value="partial">Pembayaran 30%</option>
        </select>
      </div>

      <!-- Tampilkan No Rekening setelah program dipilih -->
      <div v-if="schoolType !== ''" class="bank-details">
        <h6>Rekening Pembayaran</h6>
        <div class="bank-info">
            <p class="bank-name">Bank XYZ</p>
            <p class="account-number">
                <strong>No. Rekening:</strong> 1234 5678 910
                <button @click="copyAccountNumber" class="copy-button">Copy</button>
            </p>
            <p v-if="copySuccess" class="alert alert-success">No.rekening telah disalin!</p>
            <p class="account-name"><strong>a/n:</strong> Sekolah Bintang Kasih</p>
        </div>
      </div>


      <!-- Rincian Biaya -->
      <div class="price-section">
        <h3><strong>Rincian Biaya</strong></h3>
        <hr />

        <div v-if="!hasCard && !schoolType && !spiPaymentType" class="no-transaction">
          <i class="fas fa-info-circle"></i>
          <p><strong>Tidak ada rincian biaya yang tersedia</strong></p>
          <small>Silahkan mengisi formulir terlebih dahulu untuk melihat rincian biaya</small>
        </div>

        <div v-else>
          <div class="price-item" v-if="price !== null">
            <span class="label">Harga SPI:</span>
            <span class="price">Rp {{ price.toLocaleString('id-ID') }}</span>
          </div>

          <div v-if="hasCard === 'yes'" class="price-item">
            <span class="label">Diskon Kartu Anggota:</span>
            <span class="price">- Rp {{ discountAmount.toLocaleString('id-ID') }}</span>
          </div>

          <div v-if="hasCard === 'yes'" class="price-item">
            <span class="label">Harga Setelah Diskon:</span>
            <span class="price">Rp {{ discountedPrice.toLocaleString('id-ID') }}</span>
          </div>

          <!-- Rincian Pembayaran 30% jika opsi partial dipilih -->
          <div v-if="spiPaymentType === 'partial'" class="price-item">
            <span class="label">Pembayaran SPI 30%:</span>
            <span class="price">Rp {{ (discountedPrice * 0.3).toLocaleString('id-ID') }}</span>
          </div>

          <div class="price-item">
            <span class="label">SPP bulan Juli:</span>
            <span class="price">Rp {{ sppJuly.toLocaleString('id-ID') }}</span>
          </div>

          <hr />

          <div class="price-item total">
            <span class="label"><strong>Total :</strong></span>
            <span class="price"><strong>Rp {{ totalPayment.toLocaleString('id-ID') }}</strong></span>
          </div>
        </div>
      </div>

      <!-- Unggah bukti pembayaran -->
      <div class="form-group">
        <label for="paymentProof">Unggah Bukti Transfer Rekening Bank</label>
        <input type="file" id="paymentProof" @change="onFileChange" />
        <label class="custom-file-label" for="paymentProof">Choose File</label>
        <p v-if="fileError" class="error">{{ fileError }}</p>
      </div>

      <!-- Tombol submit dan reset -->
      <button @click="submitPayment" :disabled="isSubmitDisabled">Lanjutkan Pembayaran</button>
      <button @click="resetForm" type="button" class="reset-button">Reset</button>
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
      hasCard: '', // Status kartu gereja
      currentWave: '', // Gelombang saat ini
      currentWaveLabel: '', // Label gelombang saat ini
      price: null, // Harga berdasarkan gelombang
      discountAmount: 0, // Besaran diskon
      discountedPrice: null, // Harga setelah diskon
      sppJuly: null, // Biaya SPP Juli
      totalPayment: null, // Total pembayaran keseluruhan
      schoolType: '', // Jenis sekolah (KB/TK)
      spiPaymentType: '', // Jenis pembayaran SPI (parsial/lunas)
      churchCardFile: null, // File kartu gereja
      fileError: null, // Status error file
      paymentProofFile: null, // File bukti pembayaran
      isProofUploaded: false, // Status upload bukti pembayaran
      showInvoice: false, // Status tampilan invoice
      confirmationStatus: 'pending', // Status konfirmasi
      copySuccess: false // Status keberhasilan copy nomor rekening
    };
  },
  created() {
    this.setWaveBasedOnDate(); // Menentukan gelombang berdasarkan tanggal
    this.updatePrice(); // Memperbarui harga berdasarkan data terbaru
  },
  computed: {
    isSubmitDisabled() {
      return (
        !this.isProofUploaded || // Menonaktifkan submit jika bukti belum diunggah
        this.fileError || // Menonaktifkan submit jika ada error file
        !this.hasCard || // Menonaktifkan submit jika status kartu kosong
        !this.schoolType || // Menonaktifkan submit jika jenis sekolah kosong
        !this.spiPaymentType || // Menonaktifkan submit jika tipe pembayaran SPI kosong
        !this.currentWaveLabel // Menonaktifkan submit jika gelombang kosong
      );
    },
    confirmationStatusText() {
      if (this.confirmationStatus === 'pending') return 'Menunggu Konfirmasi'; // Teks konfirmasi pending
      if (this.confirmationStatus === 'processing') return 'Sedang Diproses'; // Teks konfirmasi processing
      if (this.confirmationStatus === 'confirmed') return 'Dikonfirmasi Admin'; // Teks konfirmasi confirmed
    },
    confirmationStatusClass() {
      if (this.confirmationStatus === 'pending') return 'status-pending'; // Kelas CSS untuk status pending
      if (this.confirmationStatus === 'processing') return 'status-processing'; // Kelas CSS untuk status processing
      if (this.confirmationStatus === 'confirmed') return 'status-confirmed'; // Kelas CSS untuk status confirmed
    }
  },
  methods: {
    setWaveBasedOnDate() {
      const currentMonth = new Date().getMonth(); // Mendapatkan bulan saat ini
      if (currentMonth === 11 || currentMonth === 0) { // Jika bulan Desember - Januari
        this.currentWave = 'wave1';
        this.currentWaveLabel = 'Gelombang 1 (Desember - Januari)';
        this.price = 1000000;
      } else if (currentMonth >= 1 && currentMonth <= 2) { // Jika bulan Februari - Maret
        this.currentWave = 'wave2';
        this.currentWaveLabel = 'Gelombang 2 (Februari - Maret)';
        this.price = 1100000;
      } else if (currentMonth >= 3 && currentMonth <= 6) { // Jika bulan April - Juli
        this.currentWave = 'wave3';
        this.currentWaveLabel = 'Gelombang 3 (April - Juli)';
        this.price = 1200000;
      } else { // Jika bulan lain, kembali ke Gelombang 1
        this.currentWave = 'wave1';
        this.currentWaveLabel = 'Gelombang 1 (Desember - Januari)';
        this.price = 1000000;
      }
      this.updatePrice(); // Memperbarui harga setelah pengaturan gelombang
    },
    updatePrice() {
      let basePrice;

      if (this.hasCard === 'yes') { // Jika pengguna memiliki kartu gereja
        basePrice = 750000;
        this.discountAmount = this.price - basePrice; // Menghitung jumlah diskon
      } else {
        basePrice = this.price;
        this.discountAmount = 0; // Tidak ada diskon
      }

      // Menghitung biaya SPP Juli berdasarkan tipe sekolah
      this.sppJuly = this.schoolType === 'kb' ? 100000 : this.schoolType === 'tk' ? 115000 : 0;

      if (this.spiPaymentType === 'partial') { // Jika memilih pembayaran parsial
        this.partialPayment = basePrice * 0.3; // 30% dari harga SPI
        this.totalPayment = this.partialPayment + this.sppJuly; // Total pembayaran parsial
      } else { // Jika memilih pembayaran penuh
        this.totalPayment = basePrice + this.sppJuly; // Total pembayaran penuh
      }

      this.discountedPrice = basePrice; // Harga setelah diskon
    },
    onFileChange(event) {
      const file = event.target.files[0];
      // Menghapus pemeriksaan ukuran file
      this.fileError = null; // Menghilangkan error file
      this.isProofUploaded = true; // Menandai bahwa bukti pembayaran telah diunggah
    },
    submitPayment() {
      Swal.fire('Pembayaran Berhasil', 'Terima kasih telah melakukan pembayaran', 'success'); // Notifikasi sukses pembayaran
      this.showInvoice = true; // Menampilkan invoice setelah pembayaran berhasil
      this.confirmationStatus = 'processing'; // Mengubah status konfirmasi ke "processing"
    },
    resetForm() {
      // Mengatur ulang data form ke nilai awal
      this.hasCard = '';
      this.price = null;
      this.discountAmount = 0;
      this.discountedPrice = null;
      this.sppJuly = null;
      this.totalPayment = null;
      this.schoolType = '';
      this.spiPaymentType = '';
      this.churchCardFile = null;
      this.fileError = null;
      this.paymentProofFile = null;
      this.isProofUploaded = false;
      this.showInvoice = false;
      this.confirmationStatus = 'pending';

      this.setWaveBasedOnDate(); // Mengatur ulang logika gelombang
    },
    copyAccountNumber() {
      const accountNumber = '1234 5678 910'; // Nomor rekening yang akan dicopy
      navigator.clipboard.writeText(accountNumber)
        .then(() => {
          this.copySuccess = true; // Menandai bahwa copy berhasil
          setTimeout(() => {
            this.copySuccess = false; // Menyembunyikan notifikasi setelah 3 detik
          }, 3000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err); // Menampilkan error jika gagal
        });
    }
  }
};
</script>


<style scoped>
@import './style.css';
</style>
