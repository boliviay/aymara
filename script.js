<script>
document.getElementById('loginForm').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const pageContent = document.getElementById('pageContent');
    const loginModal = document.getElementById('loginModal');

    // Lista de usuarios y contraseñas
    const users = [
        { username: "admin", password: "1234" },
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
        { username: "user3", password: "pass3" },
        { username: "user4", password: "pass4" },
        { username: "user5", password: "pass5" },
        { username: "user6", password: "pass6" },
        { username: "user7", password: "pass7" },
        { username: "user8", password: "pass8" },
        { username: "user9", password: "pass9" },
        { username: "user10", password: "pass10" }
    ];

    // Verificar las credenciales
    const isValidUser = users.some(user => user.username === username && user.password === password);

    if (isValidUser) {
        loginModal.style.display = "none"; // Oculta el modal
        pageContent.style.display = "block"; // Muestra el contenido
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
});
</script>
