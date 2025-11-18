let botaoMaria = document.getElementById("botaoMaria");
let descMaria = document.getElementById("descMaria");

botaoMaria.addEventListener("click", acao);

function acao(){
    descMaria.classList.toggle("desativa");
}

let botaoLuiz = document.getElementById("botaoLuiz");
let descLuiz = document.getElementById("descLuiz");

botaoLuiz.addEventListener("click", function () {
    descLuiz.classList.toggle("ddesativa");
});