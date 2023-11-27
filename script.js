// Exercício 2
function receberBooleanos(boole1, boole2, boole3) {
    if (boole1 === boole2) {
        alert("Boole1 e Boole2 são iguais!");
    } else if (boole2 === boole3) {
        alert("Boole2 e Boole3 são iguais");
    } else if (boole1 === boole3) {
        alert("Boole1 e Boole3 são iguais")
    } else {
        alert("Não existe valores iguais");
    }
}

//receberBooleanos(false, false, false);

// Exercício 3
function votar(idade) {
    if (idade === 16 || idade === 17 || idade >= 70) {
        alert("Pessoa não é obrigada a votar!")
    } else if (idade >= 18) {
        alert("Pessoa obrigada a votar!");
    } else {
        alert("Pessoa não pode votar!");
    }
}

//votar(17);

//Exercício Extra
function avaliarAluno(media) {
    if (media >= 5) {
        alert(`Aluno aprovado!`);
    } else if (media >= 3) {
        alert(`Aluno em recuperação`);
    } else if (media < 3) {
        alert(`Aluno reprovado!`);
    } else {
        alert(`Dados inválidos!`);
    }
}

//avaliarAluno(9)