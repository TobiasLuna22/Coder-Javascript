const InteraccionesUsuario = {
    nombres: [],

    saludarUsuario: function() {
        let nombre;
        let mensaje;

        do {
            nombre = prompt("Por favor, ingresa tu nombre:");
            if (nombre) {
                mensaje = "¡Hola, " + nombre + "! Bienvenido a nuestro sitio.";
                this.nombres.push(nombre);  // Agregar nombre al array
            } else {
                mensaje = "No ingresaste un nombre. Por favor, intenta de nuevo.";
            }
            alert(mensaje);
        } while (!nombre);

        return mensaje;
    },

    comprobarNumero: function() {
        let numero = prompt("Por favor, ingresa un número:");

        if (numero > 0) {
            alert("El número es positivo");
        } else if (numero < 0) {
            alert("El número es negativo");
        } else {
            alert("El número es cero");
        }
    },

    contarNumerosPares: function() {
        let minimo = parseInt(prompt("Ingresa el número mínimo:"));
        let maximo = parseInt(prompt("Ingresa el número máximo:"));
        let contadorPares = 0;

        for (let i = minimo; i <= maximo; i++) {
            if (i % 2 === 0) {
                contadorPares++;
            }
        }
        alert("En el rango del " + minimo + " al " + maximo + " hay " + contadorPares + " números pares.");
    },

    contarCiclos: function() {
        for (let i = 1; i <= 3; i++) {
            alert(i);
        }

        let n = 1;
        while (n <= 5) {
            alert(n);
            n++;
        }
    },

    sumarNumeros: function() {
        let suma = 0;
        let numero;

        do {
            numero = parseFloat(prompt("Ingresa un número (ingresa un número negativo para detenerse):"));
            if (!isNaN(numero)) {
                if (numero >= 0) {
                    suma += numero;
                }
            }
        } while (numero >= 0);

        alert("La suma de los números ingresados es: " + suma);
    },

    agregarNombres: function() {
        let nombre;

        do {
            nombre = prompt("Ingresa un nombre (deja en blanco para terminar):");
            if (nombre) {
                this.nombres.push(nombre);
            }
        } while (nombre);

        alert("Nombres ingresados: " + this.nombres.join(", "));
    },

    buscarNombre: function() {
        let nombreBuscado = prompt("Ingresa el nombre que deseas buscar:");
        let encontrado = this.nombres.includes(nombreBuscado);
        if (encontrado) {
            alert("El nombre " + nombreBuscado + " se encuentra en la lista.");
        } else {
            alert("El nombre " + nombreBuscado + " no se encuentra en la lista.");
        }
    },

    filtrarNombres: function() {
        let criterio = prompt("Ingresa el criterio de filtrado (por ejemplo, la letra inicial):");
        let nombresFiltrados = this.nombres.filter(function(nombre) {
            return nombre.startsWith(criterio);
        });
        alert("Nombres que empiezan con '" + criterio + "': " + nombresFiltrados.join(", "));
    }
};

document.getElementById('saludarButton').addEventListener('click', function() {
    let mensajePersonalizado = InteraccionesUsuario.saludarUsuario();
    alert(mensajePersonalizado);
});

document.getElementById('numeroPositivoButton').addEventListener('click', InteraccionesUsuario.comprobarNumero);
document.getElementById('contarParesButton').addEventListener('click', InteraccionesUsuario.contarNumerosPares);
document.getElementById('contarCiclosButton').addEventListener('click', InteraccionesUsuario.contarCiclos);
document.getElementById('sumarNumerosButton').addEventListener('click', InteraccionesUsuario.sumarNumeros);
document.getElementById('agregarNombresButton').addEventListener('click', InteraccionesUsuario.agregarNombres);
document.getElementById('buscarNombreButton').addEventListener('click', InteraccionesUsuario.buscarNombre);
document.getElementById('filtrarNombresButton').addEventListener('click', InteraccionesUsuario.filtrarNombres);