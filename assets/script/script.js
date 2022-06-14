let txtOrigem = document.getElementById("origem");

let txtDestino = document.getElementById("destino");





function txtMaiusculo() {

    let lettersU = txtOrigem.value;
    let upper = lettersU.toUpperCase();
    txtDestino.innerHTML = upper;



}

function txtMinusculo() {

    let lettersL = txtOrigem.value;
    let lower = lettersL.toLowerCase();
    txtDestino.innerHTML = lower;
    
}



    