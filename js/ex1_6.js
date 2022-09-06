function calcularDistancia(){

    const disTotal = 1492.56
    const disPercorrido = 1000.00
    const disRestante = disTotal - disPercorrido;

    document.getElementById("disTotal").innerHTML = disTotal;
    document.getElementById("disPercorrido").innerHTML = disPercorrido;
    document.getElementById("disRestante").innerHTML = disRestante;

}