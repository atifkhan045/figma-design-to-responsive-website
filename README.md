Registration Form Validation
This project contains a simple HTML registration form with client-side validation using vanilla JavaScript. The form checks for valid user inputs such as first name, last name, phone number, email, and password before submission.

Features
Real-time form validation.
Error messages for invalid inputs.
Success message if all fields are valid.
Redirects to a new URL upon valid form submission.
Prevents form submission if validation fails.
Project Setup
To run this project, simply follow these steps:

1. Clone the repository:
   git clone https://github.com/your-username/registration-form-validation.git
2. Navigate to the project directory:
   cd registration-form-validation
3. Open the index.html file in your browser:
   open index.html
Alternatively, you can open the file directly from your file system.

How It Works
Validation Rules
First Name: Required (cannot be empty).
Last Name: Required (cannot be empty).
Phone Number: Must be exactly 10 digits.
Email: Must be in a valid email format (e.g., example@example.com).
Password: Must be at least 8 characters long.
Validation Flow
The form is prevented from submitting by default using event.preventDefault().
Each field is checked for validity:
If a field is invalid, a corresponding error message is displayed.
If all fields are valid, the form data is logged in the console as an object.
Upon successful validation, the user is redirected to a URL (https://www.epixelsoft.com/ in this example).
A success message is displayed for a few seconds before the form submission or redirection.
If the form is invalid, the errors are shown and no redirection occurs.

