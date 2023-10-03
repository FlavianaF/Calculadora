var valor;
function botao (num) {
 valor = document.calculadora.visor.value += num;
}

function reset () {
    document.calculadora.visor.value ="";
}

function calcula(){
    resultado = eval(valor);
    document.calculadora.visor.value = resultado
}