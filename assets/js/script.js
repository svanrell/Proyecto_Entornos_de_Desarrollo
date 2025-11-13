document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

toSignup.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('signup');
    });

    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('signup');
    });

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
        setTimeout(() => {
            window.location.href = 'tienda.html';
        }, 500);
    });






});