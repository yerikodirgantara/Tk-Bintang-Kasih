<template>
    <div class="page-container">
      <div class="register-container">
        <h1 class="register-title">Register</h1>
        <form @submit.prevent="registerUser">
          <!-- Username -->
          <div class="form-group" :class="{ 'has-error': usernameError }">
            <label for="username">NIK (Nomor Induk Kependudukan) Murid:</label>
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
  
          <!-- Submit Button -->
          <button type="submit" class="register-button">Register</button>
  
          <!-- Error and Success Messages -->
          <p v-if="errorMessage" class="error message">{{ errorMessage }}</p>
          <p v-if="successMessage" class="success message">
            {{ successMessage }}
          </p>
  
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
          username: '',
          password: '',
          confirmPassword: '',
        },
        usernameError: '',
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
  
      validateUsername() {
        if (this.user.username.length < 3) {
          this.usernameError = 'NIK harus 16 karakter.';
          Swal.fire('Error', this.usernameError, 'error');
        }
      },
  
      validatePassword() {
        if (this.user.password.length < 4) { // Adjusted password length to 4 characters
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
        if (this.usernameError || this.passwordError || this.confirmPasswordError) {
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
  
  .register-button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .register-button:hover {
    background-color: #0056b3;
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
  