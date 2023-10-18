function pwCheck() {
    const password = document.getElementById("pWord");
    const cPassword = document.getElementById("confirmPWord");
    if (cPassword.value === password.value) {
      cPassword.setCustomValidity('');
    } else {
      cPassword.setCustomValidity('Passwords do not match');
    }
}