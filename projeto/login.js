document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Validacao do formulario
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = loginForm.usuario.value;
        const senha = loginForm.senha.value;

        if (usuario === 'admin' && senha === 'admin') {
            alert('Login efetuado com sucesso!');
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = 'Usuário ou senha incorretos.';
            errorMessage.style.color = 'red';
        }
    });
});
