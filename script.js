const btnCalcular = document.getElementById("Calcular");
btnCalcular.addEventListener("click", () => {
    let Altura = document.getElementById("Altura").value;
    let Peso = document.getElementById("Peso").value;
    let imc = Peso/ (Altura*Altura);
    let conceito = '';

    if (imc < 18.5) {
        conceito = "Baixo Peso";
    } else if ( imc > 18.5 &&  imc < 24.9) {
        conceito = "peso normal";
    } else if( imc > 24.9 && imc < 29.9) {
        conceito = "Excesso de peso";
    } else if( imc > 30) {
        conceito = "Obesidade";
    } else if( imc > 30 && imc < 34.9 ) {
        conceito = "Obesidade clase 1";
    } else if( imc > 34.9 && imc < 39.9) {
        conceito = "Obesidade clase 2";
    }
    else{
        conceito = "Obesidade Morbida";
    }
    document.getElementById('Resultado').innerHTML = imc + ' '+ conceito;
});
