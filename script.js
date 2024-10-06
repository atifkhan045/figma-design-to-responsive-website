// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Attach event listener for form submission
  document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from actually submitting
      window.location.href = "https://www.epixelsoft.com/";

      // Clear previous error messages
      document.getElementById('firstNameError').textContent = '';
      document.getElementById('lastNameError').textContent = '';
      document.getElementById('phoneNumberError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';

      // Get form values
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

     
      let isValid = true;

      // Validation logic
      if (firstName === '') {
          document.getElementById('firstNameError').textContent = 'First name is required';
          isValid = false;
      }

      if (lastName === '') {
          document.getElementById('lastNameError').textContent = 'Last name is required';
          isValid = false;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phoneNumber)) {
          document.getElementById('phoneNumberError').textContent = 'Phone number must be 10 digits';
          isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          document.getElementById('emailError').textContent = 'Invalid email format';
          isValid = false;
      }

      if (password.length < 8) {
          document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
          isValid = false;
      }

      // Get message div
      const messageDiv = document.getElementById('message');

      // If form is valid, log form data as an object
      if (isValid) {
          const formData = {
              first_name: firstName,
              last_name: lastName,
              phone_number: phoneNumber,
              email: email,
              password: password
          };
          console.log(formData)

          // Show success message
          messageDiv.textContent = 'Form submitted successfully!';
          messageDiv.style.display = 'block'; // Show the message div

      } else {
          // Show error message
          messageDiv.textContent = 'Form not submitted. Please fill the form carefully.';
          messageDiv.style.display = 'block'; // Show the message div
      }

      // Optional: Hide the message after a few seconds
      setTimeout(() => {
          messageDiv.style.display = 'none';
      }, 3000);
  });
});
