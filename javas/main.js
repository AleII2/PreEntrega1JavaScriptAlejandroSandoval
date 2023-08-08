// si (condicion) entonces ejecucion
// if(true){
//     console.log("vas a ver el mensaje");
// }

// let notafinal= 7;

// if(notafinal >6){
//     console.log("aprobaste");
// }else{
//     console.log("desaprobaste");
// }


// let usuario= prompt("Ingresa tu nombre");
//  if(usuario == ""){
//     console.log("no ingresaste tu nombre");
//  }else{
//     console.log("Bienvenido " + usuario);
//  }

// ---------------Crear un algoritmo con un condicional-------------

let aprobe = true;
if (aprobe){
    console.log("se sale!!");
}else{
    console.log("no se sale nada, gg vida");
}

// -------------Crear un algoritmo utilizando un ciclo------------

alert("usted es le profe??")
alert("estas seguro??")
alert("a ver cual es su nombre??")
let respuesta = "";
for ( let i = 0; i < 3; i++){
    let pregunta = prompt("");
    if (pregunta != "daniel riverol") {
        respuesta ="Mmmm dijo la muda";
        alert (respuesta);
    }else{
        respuesta ="ponele que le creo -.-"
        alert(respuesta);
        break;
    }
}
alert("bien ahi xd")

// ----------------Armar un simulador interactivo-----------------

let numero1 = parseInt(prompt("ingresa un numero"));
let numero2 = parseInt(prompt("ingresa un numero"));
function suma(num1, num2){
    if (isNaN(num1) || isNaN(num2)){
        mensaje("no son numeros");
    }else{
        mensaje(num1 + num2);
    }
}

function mensaje(mensaje){
    console.log(mensaje);
}
suma(numero1, numero2);