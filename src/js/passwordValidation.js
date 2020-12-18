const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const validation = () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity(
      "Password Don't Match with Confirm Password"
    );
  }
};
password.addEventListener('input', validation);
confirmPassword.addEventListener('input', validation);
