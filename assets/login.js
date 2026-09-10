const senha = document.querySelector('input[name="cadastro-senha"]');

const mensagem = document.createElement("small");
mensagem.style.display = "block";
mensagem.style.marginTop = "5px";

senha.parentElement.appendChild(mensagem);

senha.addEventListener("input", function () {
    if (senha.value.length < 8) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
        mensagem.style.color = "#ff6b6b";
    } else {
        mensagem.textContent = "Senha válida!";
        mensagem.style.color = "#22c55e";
    }
});