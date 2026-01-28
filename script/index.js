


function login () {
    const email = document.getElementById("email").value
    const passaword = document.getElementById("passaword").value

    console.log(email)
    console.log(passaword)

    if (email === "samuelbatistam3@gmail.com" && passaword === "1234") {
        alert("login efetuado com sucesso")
        window.location.href = "/pages/dashboard.html"
    } else {
        alert("Email ou senha incorretos")
    }
}