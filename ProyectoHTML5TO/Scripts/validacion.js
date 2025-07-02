document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const mensajeError = document.getElementById("mensajeError");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío por defecto del formulario

        let isValid = true;

        // Limpiar mensajes de error anteriores
        nombreError.textContent = "";
        emailError.textContent = "";
        mensajeError.textContent = "";
        formMessage.textContent = "";
        formMessage.classList.remove("success-message"); // Limpiar clase de éxito

        // Validar Nombre
        if (nombreInput.value.trim() === "") {
            nombreError.textContent = "El nombre es obligatorio.";
            isValid = false;
        }

        // Validar Email
        if (emailInput.value.trim() === "") {
            emailError.textContent = "El correo electrónico es obligatorio.";
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = "Por favor, introduce un correo electrónico válido.";
            isValid = false;
        }

        // Validar Mensaje
        if (mensajeInput.value.trim() === "") {
            mensajeError.textContent = "El mensaje es obligatorio.";
            isValid = false;
        } else if (mensajeInput.value.trim().length < 10) {
            mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
            isValid = false;
        }

        if (isValid) {
            // Aquí simularías el envío del formulario (por ejemplo, con fetch API)
            console.log("Formulario válido. Enviando datos...");
            formMessage.textContent = "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";
            formMessage.classList.add("success-message");
            form.reset(); // Limpiar el formulario
        } else {
            formMessage.textContent = "Por favor, corrige los errores en el formulario.";
            formMessage.classList.remove("success-message"); // Asegurarse de que no tenga la clase de éxito
        }
    });

    // Función para validar el formato del email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});