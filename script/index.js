let usuarios = [
  {
    id: 1,
    nome: "Samuel Batista",
    email: "samuelbatistam3gmail.com",
    senha: "1234"
  }
];




function login () {
const email = document.getElementById("email").value
const password = document.getElementById("password").value

console.log(email)
console.log(password)

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}


if (email === "samuelbatistam3@gmail.com" && password === "1234") {
  alert("Login efetuado com sucesso")
  window.location.href = "/pages/dashboard.html"
} else {
  alert("Email ou senha incorretos")
}
}


