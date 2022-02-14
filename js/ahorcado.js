// Interaccion con HTML

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    // letraAdivinar = procesarLetra(event.key)
    verificarLetra(procesarLetra(event.key))
});

// Sonido Bip

const BIP = "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
const CANTIDADINTENTOS = 9;

var intentos = CANTIDADINTENTOS;

// Crear base de datos de palabras
var palabras = [ "archivo", "arrastrar", "beta", "biblioteca", "binario", "bug", "captura",
"cliente", "colgar", "comando", "compilador", "componente", "comprimido",
"controladores", "copia", "crack", "datos", "desarrollo", "editar",
"ejecutable", "ensamblador", "freeware", "fuente", "funcionamiento", 
"herramientas", "icono", "interfaz", "lenguaje", "licencia", "malware",
"mantenimiento", "memoria", "modelo", "pirata", "producto", "protocolo",
"rendimiento", "requisitos", "rutina", "servidores", "shareware",
"sistema", "soporte", "tarea", "tester", "usuario", "utilidades", "videojuegos"
];


// Se toma una letra al azar
var palabraAdivinar = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
console.log("Palabra :" + palabraAdivinar);
console.log("Intentos: " + intentos);

// Letras adivinadas en la palabra
var letrasAdivinadas = guionesDibujar();

// Letras erradas
var letrasErradas = [];

// Verificar la cantidad de letras de la palabra para colocar los guiones de la palabra a adivinar
function guionesDibujar() {
    let guiones = [];
    for (var i = 0; i < palabraAdivinar.length; i++){
        guiones.push("_")
    }
    return guiones;
}

// Tomar la entrada (letra) del jugador
// Si usa minúsculas, pasar a mayúsculas
// Si usa otro caracter no tomarle la entrada
function procesarLetra(letra){
    var snd = new Audio(BIP);
	regex = /[A-Za-z]/
	if (regex.test(letra)){
		return letra.toUpperCase();
	} else {
        snd.play();
	};
}


// Ingresar letra adivinada
function ingresarLetraAdivinada(letraCorrecta){
    for (var idx = 0; idx < palabraAdivinar.length; idx++){
        if (palabraAdivinar[idx] == letraCorrecta) {
            letrasAdivinadas[idx] = letraCorrecta;
        }
        if (palabraAdivinar == letrasAdivinadas.join("")){
            console.log("Ganaste!!!");
        }
    }
}

// Ingresar letra errada
function ingresarLetraIncorrecta(letraIncorrecta){
    var snd = new Audio(BIP);
    if (!letrasErradas.includes(letraIncorrecta)){
        letrasErradas.push(letraIncorrecta);
        intentos -= 1;
        if (intentos == 0){
            console.log("Perdiste!!!");
        }
    } else {
        console.log("Letra Errada Ya Ingresada");
        snd.play();
    }
}


// Verificar que la letra se encuentre en la palabra a adivinar
// console.log(palabraAdivinar.includes(letraAdivinar));
// Si la letra no se encuentra en la palabra a adivinar colocarla en un conjunto para que no se repita
function verificarLetra(letraAVerificar) {
    if (palabraAdivinar.includes(letraAVerificar)){
        ingresarLetraAdivinada(letraAVerificar);
        console.log("Letra ingresada como Adivinada: " + letrasAdivinadas);

    } else if (letraAVerificar != undefined){
        ingresarLetraIncorrecta(letraAVerificar);
        console.log("Letra ingresada como Erradas: " + letrasErradas);
        console.log("Intentos: " + intentos);
    } else {
        console.log("No se hace nada")
    };
};

// Agregado de nueva palabra

function agregarPalabra(nuevaPalabra){
    fNuevaPalabra = nuevaPalabra.toLowerCase();
    if (!palabras.includes(fNuevaPalabra)){
        palabras.push(fNuevaPalabra);
        console.log("No estaba: " + fNuevaPalabra);
    }
    console.log("Palabra agregada: " + fNuevaPalabra);
}

// Gráficos
// Dibujar las guiones de las palabras a adivinar
// Dibujar las letras no acertadas en el conjunto
// Dibujar el muñeco de ahorcado
// Dibujar las letras acertadas
// Mostrar mensaje de triunfo
// Mostrar mensaje de derrota
// Colocar botón para inicio