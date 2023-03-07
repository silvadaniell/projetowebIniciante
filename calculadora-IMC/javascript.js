const calcular = document.getElementById('calcular');

function imc () {

    const name = window.document.getElementById('name').value;
    const altura = window.document.getElementById('alt').value;
    const peso = window.document.getElementById('pso').value;
    const resultado = window.document.getElementById('resultado');

    if( name !=='' && altura !== '' && peso !== ''){
        const valorIMC = (peso/ (altura*altura)).toFixed(2)

        let classification = '';

        if(valorIMC < 18.5){
            classification = 'Abaixo do peso.';
        }else if(valorIMC < 25) {
            classification = 'Peso ideal. Parabéns!!!';
        }else if(valorIMC < 30){
            classification = 'Levemente acima do peso.';
        }else if(valorIMC < 35){
            classification = 'Com obesidade grau I.';
        }else if(valorIMC <40){
            classification ='com obesidade grau II.';
        }else{
            classification ='Com obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${name} seu IMC é ${valorIMC} e você está ${classification}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
    
}

calcular.addEventListener('click', imc)
