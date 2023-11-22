<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coffee Quiz</title>
</head>
<body>

<script>
    // Array de perguntas e respostas
    const perguntasCafe = [
        {
            pergunta: 'Qual é a principal fonte do sabor do café?',
            opcoes: ['Grãos de café', 'Leite', 'Açúcar', 'Água'],
            respostaCorreta: 'Grãos de café'
        },
        {
            pergunta: 'Qual método de preparação de café envolve água quente passando pelo café moído?',
            opcoes: ['Café filtrado', 'Café espresso', 'Café francês press', 'Café turco'],
            respostaCorreta: 'Café filtrado'
        },
        {
            pergunta: 'De onde é originário o café?',
            opcoes: ['Brasil', 'Itália', 'Etiópia', 'Vietnã'],
            respostaCorreta: 'Etiópia'
        }
        // Adicione mais perguntas conforme necessário
    ];

    // Função para exibir o quiz
    function exibirQuiz() {
        let pontuacao = 0;

        for (let i = 0; i < perguntasCafe.length; i++) {
            const perguntaAtual = perguntasCafe[i];

            // Exibir pergunta e opções
            const respostaUsuario = prompt(perguntaAtual.pergunta + '\n' + perguntaAtual.opcoes.join('\n'));

            // Verificar resposta
            if (respostaUsuario === perguntaAtual.respostaCorreta) {
                pontuacao++;
                alert('Correto!');
            } else {
                alert('Incorreto. A resposta correta é: ' + perguntaAtual.respostaCorreta);
            }
        }

        // Exibir pontuação final
        alert('Quiz finalizado!\nSua pontuação: ' + pontuacao + '/' + perguntasCafe.length);
    }

    // Chamar a função para iniciar o quiz
    exibirQuiz();
</script>
</body>
</html>
