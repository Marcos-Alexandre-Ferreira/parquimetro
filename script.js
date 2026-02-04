// Seleção dos elementos do DOM
const inputValor = document.querySelector('#valor');
const acionaBotao = document.querySelector('#calcularTempo');
// Commit inicial
//evento/ funçaõ ao click
acionaBotao.addEventListener('click', function() {
    // Obter o valor do input e converter para número
    const valorDigitado = parseFloat(inputValor.value);
    // Verificar se o valor é um número válido
    if (valorDigitado <= 0 ) {
        //alterar para alert
        console.warn("O campo de valor está vazio. Por favor, insira um número.");
        return;
    }else {
        console.log("Valor digitado:", valorDigitado);
        //limpar o campo de input
        inputValor.value = "";
    }});
