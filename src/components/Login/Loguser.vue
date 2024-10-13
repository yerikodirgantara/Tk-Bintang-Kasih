<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="loginUser">
        <!-- Username -->
        <div class="form-group">
          <label for="username">NIK (Nomor Induk Kependudukan) Murid:</label>
          <input
            type="text"
            id="username"
            v-model="user.username"
            required
            class="input-field"
          />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password:</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="user.password"
              required
              class="input-field"
            />
            <button type="button" @click="togglePasswordVisibility" class="toggle-password">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>

        <!-- Button Group with Flexbox -->
        <div class="button-group">
          <button @click="goToHome" class="cool-button kembali-button">Kembali</button>
          <button type="submit" class="cool-button">Register</button>
        </div>



        <!-- Link to Register -->
        <div class="login-link-container">
          <span>Belum punya akun? Silahkan Daftar </span>
          <router-link to="/Reguser" class="login-link"> disini</router-link>
        </div>
      </form>

      <!-- Error Message -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      errorMessage: '',
      showPassword: false,
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('https://api.example.com/login', this.user);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/Home2');
      } catch (error) {
        this.errorMessage = 'Login gagal. Periksa kembali username atau password Anda.';
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* Soft gradient background */
  padding: 20px;
}

.login-container {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 25px #7f86d4e1;
  transition: transform 0.3s ease-in-out;
  border: 2px solid #e1e1e1;
}

.login-container:hover {
  transform: translateY(-5px);
}

.login-title {
  text-align: center;
  color: #4a90e2;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
  position: relative; /* Ensure relative positioning for the password toggle icon */
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 2px solid #d1d1d1;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.25);
}

/* Flexbox Layout for the Button Group */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Space between buttons */
  margin-top: 20px; /* Add some spacing from the form */
}

/* Cool Button Styles */
.cool-button {
  flex: 1;
  padding: 12px;
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Cool Hover Effects */
.cool-button:hover {
  background: linear-gradient(135deg, #007bff, #2d8cf0);
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3); /* Enhanced shadow on hover */
}

/* Active/Pressed State */
.cool-button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Smaller shadow on press */
}

/* Smaller Kembali Button */
.kembali-button {
  flex: 0.5; /* Reduces the size */
  padding: 10px; /* Slightly smaller padding */
  background: linear-gradient(135deg, #f44336, #ff4c4c); /* Red gradient for the Kembali button */
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px; /* Slightly smaller font */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
}

/* Hover effect for the smaller Kembali button */
.kembali-button:hover {
  background: linear-gradient(135deg, #d32f2f, #ff3b3b);
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 67, 54, 0.3);
}

/* Active/Pressed State for the smaller Kembali button */
.kembali-button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}




.error {
  color: #dc3545;
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.error {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

@media (max-width: 768px) {
  .login-container {
    padding: 30px;
  }

  .login-title {
    font-size: 26px;
  }

  .input-field, .login-button {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .login-container {
    padding: 20px;
    max-width: 90%;
  }

  .login-title {
    font-size: 22px;
  }

  .input-field, .login-button {
    font-size: 14px;
  }

  .login-button {
    padding: 10px;
  }
}

.login-link-container {
  text-align: center;
  margin-top: 20px;
}

.login-link {
  color: #007bff;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  height: 24px; /* Sesuaikan tinggi sesuai ukuran ikon */
  display: flex;
  align-items: center; /* Pusatkan ikon secara vertikal */
  justify-content: center; /* Jika perlu, pusatkan secara horizontal */
}

.password-wrapper {
  position: relative;
}

.input-field {
  padding-right: 40px; /* Tambahkan ruang untuk ikon mata */
}


</style>
