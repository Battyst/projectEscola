function verificarNível() {
    const respota = document.getElementById("respota")
    const nívelSelecionado = document.querySelector("input[name='nível']:checked")


    if (!nívelSelecionado) {
        respota.innerHTML = "<span style='color:red;'> Nível é obrigatorio.</span>" 
        return
    }

    const nível = nívelSelecionado.value

    switch (nívelSelecionado) {
        case "trainee":
            respota.innerHTML = "Seu nível é trainee"
            break;

        case "jr":
            respota.innerHTML = "Seu nível é júnior"
            break;

        case "pl":
            respota.innerHTML = "Seu nível é Pleno"
            break;

        case "sr":
            respota.innerHTML = "Seu nível é Sênior"
            break;
            
    }


    console.log(respota)
    console.log(nívelSelecionado)

}