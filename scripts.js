Form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }
}

function setErrorFor(input, message) {
    
}
