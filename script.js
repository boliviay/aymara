document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const pageContent = document.getElementById('pageContent');
    const loginModal = document.getElementById('loginModal');

    // Credenciales correctas
    if (username === "william" && password === "avalos2024") {
        loginModal.style.display = "none"; // Oculta el modal
        pageContent.style.display = "block"; // Muestra el contenido
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
}); 
