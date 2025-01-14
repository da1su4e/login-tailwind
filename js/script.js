const showPasswordBtn = document.getElementById('show-password');
const passwordInput = document.getElementById('password-input');
const icon = showPasswordBtn.querySelector('i');

showPasswordBtn.addEventListener('click', () => {
    const isPasswordHidden = passwordInput.type === 'password';

  // Перемикаємо тип інпуту
    passwordInput.type = isPasswordHidden ? 'text' : 'password';

  // Змінюємо іконку
    icon.classList.toggle('fa-lock', !isPasswordHidden);
    icon.classList.toggle('fa-unlock', isPasswordHidden);
});