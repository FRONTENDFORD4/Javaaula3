let tentativas = 0;
let limiteTentativas = 3; // Defina o número desejado de tentativas

while (idadePericles !== 54 && tentativas < limiteTentativas) {
    alert("Tentativa: " + (tentativas + 1) + "\nerrouuuu, tente novamente");

    idadePericles < 54 ? alert("o péricles é mais velho") : alert("o péricles é mais novo!!");

    idadePericles = Number(prompt("qual é a idade do périclão ?"));
    tentativas++;
}

if (idadePericles === 54) {
    alert("Parabéns! Você acertou a idade do Péricles.");
} else {
    alert("Você atingiu o limite de tentativas. A idade do Péricles é 54.");
}