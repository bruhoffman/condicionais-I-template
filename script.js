// Exercício 1
function verificarBooleanos(boole1, boole2) {
    if (boole1 || boole2) {
        alert('Entrou no If');
    } else {
        alert('Entrou no else');
    }
}

// verificarBooleanos(true, false);

// Exercício 2
function receberBooleanos(boole1, boole2, boole3) {
    if (boole1 === boole2) {
        alert("Boole1 e Boole2 são iguais!");
    } else if (boole2 === boole3) {
        alert("Boole2 e Boole3 são iguais");
    } else if (boole1 === boole3) {
        alert("Boole1 e Boole3 são iguais");
    } else {
        alert("Não existe valores iguais");
    }
}

//receberBooleanos(true, false, true);

// Exercício 3
function votar(idade) {
    if (idade === 16 || idade === 17 || idade >= 70) {
        alert("Voto facultativo.");
    } else if (idade >= 18) {
        alert("Voto obrigatório.");
    } else {
        alert("Idade insuficiente para votar.");
    }
}

//votar(69);

//Exercício Extra
function avaliarAluno(media) {
    if (media >= 5) {
        alert(`Pessoa aprovada!`);
    } else if (media >= 3) {
        alert(`Pessoa em recuperação`);
    } else if (media >= 0 && media < 3) {
        alert(`Pessoa reprovada!`);
    } else {
        alert(`Dados inválidos!`);
    }
}

avaliarAluno(0)