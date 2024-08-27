// Pregunta 1

function mostrarMultiplosDeCinco() {
    // Pedimos al usuario que ingrese un numero
    const numeroLimite = parseInt(prompt("Ingrese un numero:"));

    // Validamos que el numero sea un entero positivo
    if (isNaN(numeroLimite) || numeroLimite <= 0) {
        console.error("Por favor, ingrese un numero entero positivo.");
        return;
    }
    console.log("Multiplos de 5 hasta " + numeroLimite + ":");

    // Iteramos desde 1 hasta el numero limite y verificamos si es multiplo de 5
    for (let i = 1; i <= numeroLimite; i++) {
        if (i % 5 === 0) {
        console.log(i);
        }
    }
}

// Llamamos a la funcion para ejecutar el programa
mostrarMultiplosDeCinco();


// Pregunta 2

function jugarLoteria() {
    // Pedir al usuario los dos números
    let numero1 = parseInt(prompt("Ingrese el primer numero (entre 1 y 50):"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero (entre 1 y 50):"));

    // Validar que los numeros esten dentro del rango
    while (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
        console.error("Los numeros deben estar entre 1 y 50.");
        numero1 = parseInt(prompt("Ingrese el primer numero (entre 1 y 50):"));
        numero2 = parseInt(prompt("Ingrese el segundo numero (entre 1 y 50):"));
    }

    // Inicializar el contador
    let contador = 1;

    // Bucle while para iterar desde 1 hasta 50
    while (contador <= 50) {
      let mensaje = contador.toString(); // Convertir el numero a string para concatenar
        if (contador === numero1 || contador === numero2) {
        mensaje += " ¡Lotería!";
        }
        console.log(mensaje);
        contador++;
    }
}

jugarLoteria();


// Pregunta 3

function capturarNumeros() {
    let numeros = []; // Arreglo para almacenar los numeros
    let numero = 1; // Inicializamos con un valor diferente de 0 para que el bucle comience

    while (numero !== 0) {
        numero = parseInt(prompt("Ingrese un numero (0 para terminar):"));
      if (!isNaN(numero)) { // Verificamos si es un numero valido
        numeros.push(numero);
        } else {
        console.error("Por favor, ingrese un numero valido.");
        }
    }

    // Mostrar los números capturados
    console.log("Los numeros ingresados son:", numeros);
}

capturarNumeros();


// Pregunta 4

function capturarPalabras() {
    let palabras = [];
    let palabra = "";

    while (palabra !== "") {
        palabra = prompt("Ingrese una palabra (deje en blanco para terminar):");
        if (palabra !== "") {
        palabras.push(palabra);
        }
    }

    // Concatenar todas las palabras en una sola cadena
    const cadenaFinal = palabras.join(" ");

    console.log("Las palabras ingresadas son:", cadenaFinal);
}

capturarPalabras();


// Pregunta 5

function diasDeLaSemana() {
    let dia = "";

    while (dia !== "domingo") {
        dia = prompt("Ingrese un dia de la semana (o 'domingo' para terminar):");

        switch (dia.toLowerCase()) {
            case "lunes":
                alert("Es lunes, comienza la semana con energia!");
                break;
            case "martes":
                alert("A mitad de semana, sigue adelante!");
                break;
            case "miercoles":
                alert("Ya casi es fin de semana!");
                break;
            case "jueves":
                alert("El fin de semana esta cerca!");
                break;
            case "viernes":
                alert("Es viernes, y el cuerpo lo sabe!");
                break;
            case "sabado":
                alert("Disfruta tu fin de semana!");
                break;
            case "domingo":
                alert("Ve a descansar. Hasta la proxima!");
                break;
            default:
                alert("Dia invalido. Por favor, ingresa un dia de la semana.");
        }
    }
}

diasDeLaSemana();