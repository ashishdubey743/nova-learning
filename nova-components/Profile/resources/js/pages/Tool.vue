<template>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h2 class="text-xl font-semibold text-gray-700 mb-6">Profile Setup</h2>

    <!-- Breadcrumbs for steps -->
    <div class="flex justify-center mb-6">
      <div v-for="(label, index) in steps" :key="index" class="mx-2">
        <button @click="navigateToStep(index + 1)" :class="{
          'text-blue-500 font-bold': step === index + 1,
          'text-gray-500': step !== index + 1
        }" class="text-sm focus:outline-none">
          {{ label }}
        </button>

        <span v-if="index < steps.length - 1" class="mx-2 text-gray-500">/</span>
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <!-- Step 1: Basic Information -->
      <div v-if="step === 1">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input v-model="formData.name" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name" />
          <span v-if="formErrors.name" class="text-red-500 text-sm">{{ formErrors.name }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input v-model="formData.email" type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email" />
          <span v-if="formErrors.email" class="text-red-500 text-sm">{{ formErrors.email }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
          <input v-model="formData.phone" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number" />
          <span v-if="formErrors.phone" class="text-red-500 text-sm">{{ formErrors.phone }}</span>
        </div>

        <!-- Add a flex container only around the button -->
        <div class="flex justify-end">
          <button type="button" @click="nextStep"
            class="custom-blue-background hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-4 shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
            Next
          </button>
        </div>

      </div>

      <!-- Step 2: Account Information -->
      <div v-if="step === 2">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input v-model="formData.username" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username" />
          <span v-if="formErrors.username" class="text-red-500 text-sm">{{ formErrors.username }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input v-model="formData.password" type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password" />
          <span v-if="formErrors.password" class="text-red-500 text-sm">{{ formErrors.password }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
          <input v-model="formData.password_confirmation" type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password" />
          <span v-if="formErrors.password_confirmation" class="text-red-500 text-sm">{{ formErrors.password_confirmation
            }}</span>
        </div>
        <div class="flex justify-between mt-4">
          <button type="button" @click="prevStep"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">
            Previous
          </button>
          <button type="button" @click="nextStep"
            class="custom-blue-background hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Next
          </button>
        </div>
      </div>

      <!-- Step 3: Personal Information -->
      <div v-if="step === 3">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
          <input v-model="formData.dob" type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="formErrors.dob" class="text-red-500 text-sm">{{ formErrors.dob }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
          <select v-model="formData.gender"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <span v-if="formErrors.gender" class="text-red-500 text-sm">{{ formErrors.gender }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <input v-model="formData.address" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address" />
        </div>
        <div class="flex justify-between mt-4">
          <button type="button" @click="prevStep"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">
            Previous
          </button>
          <button type="button" @click="nextStep"
            class="custom-blue-background hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Next
          </button>
        </div>
      </div>

      <!-- Step 4: Preferences/Settings -->
      <div v-if="step === 4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Preferred Language:</label>
          <select v-model="formData.language"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Timezone:</label>
          <select v-model="formData.timezone"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="IST">Indian Standard Time (IST)</option>
            <option value="PST">Pacific Standard Time (PST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <input v-model="formData.subscribe" type="checkbox" /> Subscribe to newsletter
          </label>
        </div>
        <div class="flex justify-between mt-4">
          <button type="button" @click="prevStep"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg">
            Previous
          </button>
          <button type="submit" class="custom-blue-background hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      steps: ['Basic', 'Account', 'Personal', 'Preferences'],
      formData: {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password_confirmation: '',
        dob: '',
        gender: '',
        address: '',
        language: '',
        timezone: '',
        subscribe: false,
      },
      formErrors: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    nextStep() {
      // Reset errors before validation
      this.formErrors = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        password_confirmation: '',
        gender: '',
        dob: ''
      };

      // Validate step 1 fields
      if (this.step === 1) {
        let valid = true;
        if (!this.formData.name) {
          this.formErrors.name = 'Name is required';
          valid = false;
        }
        if (!this.formData.email) {
          this.formErrors.email = 'Email is required';
          valid = false;
        } else if (!this.validateEmail(this.formData.email)) {
          this.formErrors.email = 'Enter a valid email';
          valid = false;
        }
        if (!this.formData.phone) {
          this.formErrors.phone = 'Phone number is required';
          valid = false;
        }

        // If validation fails, prevent moving to the next step
        if (!valid) return;
      }

      // Validate step 2 fields
      if (this.step === 2) {
        let valid = true;
        if (!this.formData.username) {
          this.formErrors.username = 'Username is required';
          valid = false;
        }
        if (!this.formData.password) {
          this.formErrors.password = 'Password is required';
          valid = false;
        } else if (this.formData.password.length < 6) {
          this.formErrors.password = 'Password must be at least 6 characters';
          valid = false;
        }
        if (!this.formData.password_confirmation) {
          this.formErrors.password_confirmation = 'Please confirm your password';
          valid = false;
        } else if (this.formData.password !== this.formData.password_confirmation) {
          this.formErrors.password_confirmation = 'Passwords do not match';
          valid = false;
        }

        // If validation fails, prevent moving to the next step
        if (!valid) return;
      }

      // Validate step 2 fields
      if (this.step === 3) {
        let valid = true;
        if (!this.formData.dob) {
          this.formErrors.dob = 'Date of birth is required';
          valid = false;
        }
        if (!this.formData.gender) {
          this.formErrors.password = 'Gender is required';
          valid = false;
        }

        // If validation fails, prevent moving to the next step
        if (!valid) return;
      }
      // If all validations pass, move to the next step
      if (this.step < this.steps.length) {
        this.step++;
      }
    },

    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    navigateToStep(stepNumber) {
      this.step = stepNumber;
    },
    async submitForm() {
      try {
        const response = await Nova.request().post('/profile-setup-tool', this.formData);
        Nova.success('Profile Completed');
      } catch (error) {
        Nova.error('There was a problem saving the profile.');
      }
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>
