function iniciarAvaliacao() {
    const perguntas = [
        "Você foi bem atendido?",
        "A comida estava do seu agrado?",
        "Avalie o ambiente da cafeteria",
        "Avalie a musica do ambiente",
        "O tempo de espera para receber o pedido foi satisfatório?"
    ];

    let resultadoHTML = '<h2>Resultado da Avaliação</h2>';

    for (let i = 0; i < perguntas.length; i++) {
        let resposta;
        do {
            resposta = prompt(`${perguntas[i]} (Digite uma avaliação de 1 a 5)`);
            resposta = parseInt(resposta);

            if (isNaN(resposta) || resposta < 1 || resposta > 5) {
                alert("Por favor, digite uma avaliação válida de 1 a 5.");
            }
        } while (isNaN(resposta) || resposta < 1 || resposta > 5);

        resultadoHTML += `<p>${perguntas[i]}: ${resposta}</p>`;
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
