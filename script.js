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
        document.querySelector('#mensagem').textContent = `O valor digitado é inválido. Por favor, insira um valor positivo.`;
        return;
    }else if (valorDigitado >= 3){
        //inserir mensagem no html
        document.querySelector('#mensagem').textContent = `O tempo limite para permanência é de 120 minutos`;
        document.querySelector('#troco').textContent = `Seu troco é de R$ ${(valorDigitado - 3).toFixed(2)}`;
        //limpar o campo de input
        inputValor.value = "";
    }else if (valorDigitado < 3 && valorDigitado >= 1.75){
        //inserir mensagem no html
        document.querySelector('#mensagem').textContent = `O tempo limite para permanência é de 60 minutos`;
        document.querySelector('#troco').textContent = `Seu troco é de R$ ${(valorDigitado - 1.75).toFixed(2)}`;
        //limpar o campo de input
        inputValor.value = "";
    } else if (valorDigitado < 1.75 && valorDigitado >= 1){
        //inserir mensagem no html
        document.querySelector('#mensagem').textContent = `O tempo limite para permanência é de 30 minutos`;
        document.querySelector('#troco').textContent = `Seu troco é de R$ ${(valorDigitado - 1).toFixed(2)}`;
        //limpar o campo de input
        inputValor.value = "";

    }});
