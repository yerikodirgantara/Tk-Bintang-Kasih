<template>
  <div class="page-container">
    <div class="register-container">
      <h1 class="register-title">Register</h1>
      <form @submit.prevent="registerUser">
        <!-- NIK -->
        <div class="form-group" :class="{ 'has-error': nikError }">
          <label for="nik">NIK (Nomor Induk Kependudukan) Murid:</label>
          <input
            type="text"
            id="nik"
            v-model="user.nik"
            @blur="validateNik"
            @input="clearError('nikError')"
            required
            class="input-field"
          />
          <p v-if="nikError" class="error">{{ nikError }}</p>
        </div>

        <!-- Username -->
        <div class="form-group" :class="{ 'has-error': usernameError }">
        <label for="username">Nama Murid:</label>
        <input
          type="text"
          id="username"
          v-model="user.username"
          @blur="validateUsername"
          @input="clearError('usernameError')"
          required
          class="input-field"
        />
        <p v-if="usernameError" class="error">{{ usernameError }}</p>
      </div>


        <!-- Password -->
        <div class="form-group" :class="{ 'has-error': passwordError }">
          <label for="password">Kata Sandi:</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="user.password"
              @blur="validatePassword"
              @input="clearError('passwordError')"
              required
              class="input-field"
            />
            <button type="button" @click="togglePasswordVisibility" class="toggle-password">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>

        <!-- Confirm Password -->
        <div class="form-group" :class="{ 'has-error': confirmPasswordError }">
          <label for="confirm-password">Konfirmasi Kata Sandi:</label>
          <div class="password-wrapper">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirm-password"
              v-model="user.confirmPassword"
              @blur="validateConfirmPassword"
              @input="clearError('confirmPasswordError')"
              required
              class="input-field"
            />
            <button type="button" @click="toggleConfirmPasswordVisibility" class="toggle-password">
              <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
          <p v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</p>
        </div>

        <!-- Submit Button with Flexbox for layout -->
        <div class="button-group">
          <button @click="goToHome" class="back-button">Kembali</button>
          <button type="submit" class="register-button">Register</button>
        </div>


        <!-- Error and Success Messages -->
        <p v-if="errorMessage" class="error message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success message">{{ successMessage }}</p>

        <!-- Link to Login -->
        <div class="login-link-container">
          <span>Sudah mendaftar? Silahkan Login </span>
          <router-link to="/Loguser" class="login-link"> disini</router-link>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: {
        nik: '',
        username: '', // Mengganti 'name' dengan 'username'
        password: '',
        confirmPassword: '',
      },
      nikError: '',
      usernameError: '', // Mengganti 'nameError' dengan 'usernameError'
      passwordError: '',
      confirmPasswordError: '',
      errorMessage: '',
      successMessage: '',
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    clearError(field) {
      this[field] = '';
    },

    goToHome() {
      this.$router.push({ name: 'Home' });
    },

    validateNik() {
      if (this.user.nik.length !== 16) {
        this.nikError = 'NIK harus 16 karakter.';
        Swal.fire('Error', this.nikError, 'error');
      }
    },

    validateUsername() { // Mengganti 'validateName' menjadi 'validateUsername'
      if (this.user.username.length < 3) {
        this.usernameError = 'Nama harus minimal 3 karakter.';
        Swal.fire('Error', this.usernameError, 'error');
      }
    },

    validatePassword() {
      if (this.user.password.length < 4) {
        this.passwordError = 'Kata sandi harus minimal 4 karakter.';
        Swal.fire('Error', this.passwordError, 'error');
      }
    },

    validateConfirmPassword() {
      if (this.user.password !== this.user.confirmPassword) {
        this.confirmPasswordError = 'Kata sandi tidak cocok.';
        Swal.fire('Error', this.confirmPasswordError, 'error');
      }
    },

    async registerUser() {
      if (this.nikError || this.usernameError || this.passwordError || this.confirmPasswordError) {
        return;
      }

      try {
        const response = await axios.post('https://api.example.com/register', this.user);
        this.successMessage = 'Registration successful! Please log in.';
        this.errorMessage = '';
        Swal.fire('Success', 'Registration successful!', 'success');
      } catch (error) {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
        Swal.fire('Error', this.errorMessage, 'error');
      }
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },

    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>

  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0; /* Same background as login */
  }
  
  .register-container {
    max-width: 400px;
    width: 100%;
    padding: 40px;
    background-color: #ffffff; /* Same background color as login-container */
    border-radius: 8px;
    box-shadow: 0 10px 25px #7f86d4e1;
    transition: transform 0.3s ease-in-out;
  }
  
  .register-container:hover {
    transform: translateY(-5px);
  }
  
  .register-title {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 28px;
    color: #007bff; /* Match the login title color */
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease;
  }
  
  .input-field:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  .has-error .input-field {
    border-color: #dc3545;
  }
  
  .has-error .input-field:focus {
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
  }
  
  .password-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #007bff;
    font-size: 18px;
  }
  
  .button-group {
  display: flex;
  width: 100%;
  gap: 10px; /* Space between buttons */
}

/* Cool Style for the Register button */
.register-button {
  flex: 3; /* Takes up more space than the back button */
  padding: 12px;
  background: linear-gradient(135deg, #007bff, #00b4ff); /* Gradient for modern look */
  color: white;
  border: none;
  border-radius: 25px; /* Rounded corners for modern feel */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase; /* Uppercase text */
  letter-spacing: 1px; /* Adds space between letters */
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

/* Cool Hover effect for the Register button */
.register-button:hover {
  background: linear-gradient(135deg, #0056b3, #008cdb); /* Darker gradient on hover */
  transform: scale(1.05); /* Slight scale on hover */
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3); /* Stronger shadow on hover */
}

/* Active/Pressed State for the Register button */
.register-button:active {
  transform: scale(0.98); /* Button slightly shrinks when pressed */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow when pressed */
}

/* Cool Style for the Kembali button */
.back-button {
  flex: 1; /* Takes up less space than the register button */
  padding: 12px;
  background: linear-gradient(135deg, #f44336, #ff4c4c); /* Gradient for modern look */
  color: white;
  border: none;
  border-radius: 15px; /* Rounded corners */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

/* Cool Hover effect for the Kembali button */
.back-button:hover {
  background: linear-gradient(135deg, #d32f2f, #ff3b3b); /* Darker gradient on hover */
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 67, 54, 0.3); /* Stronger shadow on hover */
}

/* Active/Pressed State for the Kembali button */
.back-button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Subtle shadow when pressed */
}

  
  .message {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .error {
    color: #dc3545;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  }
  
  .success {
    color: #28a745;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
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
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 480px) {
    .register-container {
      padding: 20px;
    }
  
    .register-title {
      font-size: 24px;
    }
  
    .input-field, .register-button {
      font-size: 14px;
    }
  }
  </style>
  