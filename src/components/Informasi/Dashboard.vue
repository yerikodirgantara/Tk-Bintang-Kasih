<template>
    <div>
      <Navmenu3 />
      <div class="dashboard">
        <!-- Card profil siswa di sebelah kiri -->
        <div 
          class="profile-card"
          @click="toggleDetails"
          data-aos="zoom-in"
          v-bind:data-aos-delay="showDetails ? '0' : '200'"
        >
          <img :src="student.photo" alt="Foto Siswa" class="student-photo" />
          <h2>{{ student.name }}</h2>
          <div class="status">
            <p>Status: {{ student.status }}</p>
            <span :class="['status-indicator', student.status === 'Aktif' ? 'active' : 'inactive']"></span>
          </div>
        </div>
  
        <!-- Data lengkap siswa yang muncul saat card diklik -->
        <transition name="fade">
          <div 
            v-if="showDetails"
            class="student-details-box"
            data-aos="fade-left">
            <h3>Data Lengkap Siswa</h3>
            <p><strong>Nama:</strong> {{ student.name }}</p>
            <p><strong>NIK:</strong> {{ student.nik }}</p>
            <p><strong>Nama Orang Tua:</strong> {{ student.parentName }}</p>
            <p><strong>Status:</strong> 
              <span :class="['status-text', student.status === 'Aktif' ? 'active-text' : 'inactive-text']">
                {{ student.status }}
              </span>
            </p>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  import Navmenu3 from "../Navbar/Navmenu3.vue";
  
  export default {
    name: "Dashboard",
    components: {
      Navmenu3,
    },
    data() {
      return {
        showDetails: false,
        student: {
          photo: "https://via.placeholder.com/150",
          name: "John Doe",
          nik: "1234567890",
          parentName: "Jane Doe",
          status: "Aktif", // Atau "Tidak Aktif"
        },
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
        // Refresh AOS animation when state changes
        this.$nextTick(() => {
          AOS.refresh();
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
    padding-top: 100px;
  }
  
  .profile-card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .profile-card:hover {
    transform: scale(1.05);
  }
  
  .student-photo {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 15px;
  }
  
  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .status-indicator {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 10px;
  }
  
  .active {
    background-color: green;
  }
  
  .inactive {
    background-color: red;
  }
  
  /* Kotak untuk data lengkap siswa */
  .student-details-box {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 20px;
    width: 400px;
    border: 1px solid #ddd;
  }
  
  .student-details-box h3 {
    margin-bottom: 15px;
    font-size: 22px;
  }
  
  .student-details-box p {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  }
  
  /* Status text styling */
  .status-text {
    font-weight: bold;
  }
  
  .active-text {
    color: green;
  }
  
  .inactive-text {
    color: red;
  }
  
  /* Transisi CSS */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  