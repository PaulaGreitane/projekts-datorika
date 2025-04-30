document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('loginMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        message.textContent = 'Esi pieteicies!';
    });
});
