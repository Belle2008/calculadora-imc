const btnCalcular = document.getElementById("Calcular");
btnCalcular.addEventListener("click", () => {
    let Altura = document.getElementById("Altura").value;
    let Peso = document.getElementById("Peso").value;
    let Calcular = Peso/ (Altura*Altura);
    alert(Calcular);
});
