const texto = document.querySelector(".texto");
texto.focus();

const txtResultado = document.querySelector(".txt-resultado")
txtResultado.style.display = "none";

const visibilidadeCaixa = document.querySelector(".visibilidade");

const bntCopiar = document.querySelector(".bnt-copiar");
bntCopiar.style.display = "none";

function visibilidade() {
    visibilidadeCaixa.style.display = "none";
    txtResultado.style.display = "block";
    bntCopiar.style.display = "block";
}

const bntCriptografar = document.querySelector(".bnt-criptografar");

function criptografar() {
    let criptografar = texto.value;
    
    criptografar = criptografar.replaceAll("e", "enter")
                                .replaceAll("i", "imes")
                                .replaceAll("a", "ai")
                                .replaceAll("o", "ober")
                                .replaceAll("u", "ufat");

    txtResultado.textContent = criptografar;
}

const bntDescriptografar = document.querySelector(".bnt-descriptografar");

function descriptografar() {
    let descriptografar = texto.value;
    
    descriptografar = descriptografar.replaceAll("enter", "e")
                                    .replaceAll("imes", "i")
                                    .replaceAll("ai", "a")
                                    .replaceAll("ober", "o")
                                    .replaceAll("ufat", "u");

    txtResultado.textContent = descriptografar;
}

const regex = /^([a-z]|\s)+$/;

const msgErro = document.querySelector(".msg-erro");

bntCriptografar.onclick = function() {
    if (texto.value.match(regex)) {
        visibilidade();
        criptografar();
    } else {
        msgErro.showModal();
    }
}

bntDescriptografar.onclick = function() {
    if (texto.value.match(regex)) {
        visibilidade();
        descriptografar();
    } else {
        msgErro.showModal();
    }
}

const bntOk = document.querySelector(".bnt-ok");

bntOk.onclick = function() {
    msgErro.close();
}

bntCopiar.onclick = function() {
    txtResultado.select();
    document.execCommand('copy');
    
    bntCopiar.textContent = "Copiado!";
    bntCopiar.style.backgroundColor = "#0A3871";
    bntCopiar.style.color = "white";  
    
    setTimeout(() => {
        bntCopiar.textContent = "Copiar";
        bntCopiar.style.backgroundColor = "white";
        bntCopiar.style.color = "#0A3871";
    }, 3000);
}