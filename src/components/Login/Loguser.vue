<template>
  <div class="page-container">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="user.username"
            required
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
            class="input-field"
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
  
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
      errorMessage: ''
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
    }
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
}

.login-container {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 25px #7f86d4e1;
  transition: transform 0.3s ease-in-out;
  border: 2px solid #e1e1e1; /* Adding border for subtle emphasis */
}

.login-container:hover {
  transform: translateY(-5px);
}

.login-title {
  text-align: center;
  color: #4a90e2; /* Blue color for title */
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 2px solid #d1d1d1; /* Light gray border */
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #4a90e2; /* Blue color on focus */
  outline: none;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.25); /* Blue shadow on focus */
}

.login-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #4a90e2, #50e3c2); /* Gradient button background */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.login-button:hover {
  background: linear-gradient(90deg, #007bff, #2d8cf0); /* Darker gradient on hover */
  transform: scale(1.05); /* Slightly scale up on hover */
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

@media (max-width: 480px) {
  .login-container {
    padding: 20px;
  }
  
  .login-title {
    font-size: 24px;
  }
  
  .input-field, .login-button {
    font-size: 14px;
  }
}
</style>
