const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let aciertos = 0
let posicionJuego = 0

function getOperatorsRandom(array) {
    let r1 = Math.floor(Math.random() * array.length) 
    return array[r1]
}

function mostrarOperators(id1, id2) {
    if (posicionJuego >= 10) {
        pantallafinal()
    }

    document.getElementById(id1).innerHTML = getOperatorsRandom(number)
    document.getElementById(id2).innerHTML = getOperatorsRandom(number)
}

function startGame() {
    posicionJuego = 0
    aciertos = 0
    document.getElementById("inicio").style.display = "none"
    document.getElementById("sumas").style.display = "flex"
    document.getElementById("resultados").style.display = "none"
    mostrarOperators("operador1","operador2")
    document.getElementById("contador").innerHTML = 0
    document.getElementById("num-juegos").innerHTML = 0
}

function obtenerOperators(id) {
    return parseInt(document.getElementById(id).textContent, 10)
}

function comprueba() {
    posicionJuego++
    let resultado = document.getElementById("resultado").value
    let op1= obtenerOperators("operador1")
    let op2 = obtenerOperators("operador2")
    let resultadoCorrecto = suma(op1, op2)
    
    
    document.getElementById("num-juegos").innerHTML = posicionJuego
    
    if (resultadoCorrecto == resultado) {
        aciertos++
        document.getElementById("contador").innerHTML = aciertos
    }

    mostrarOperators("operador1","operador2")   
}

function suma(op1, op2) {
    return (op1 + op2)
}

function pantallafinal() {
    document.getElementById("sumas").style.display = "none"
    document.getElementById("resultados").style.display = "block"
    document.getElementById("acertadas").innerHTML = aciertos
    document.getElementById("juegos").innerHTML = posicionJuego
    console.log(posicionJuego)
}