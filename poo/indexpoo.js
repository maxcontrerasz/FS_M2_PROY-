class Pregunta {
    constructor(pregunta, opciones) {
        this.pregunta = pregunta;
        this.opciones = opciones;
    }
}

class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas;
        this.resultados = {};
        this.preguntas.forEach(pregunta => {
            this.resultados[pregunta.pregunta] = {};
            pregunta.opciones.forEach(opcion => {
                this.resultados[pregunta.pregunta][opcion] = 0;
            });
        });
    }

    votar(pregunta, opcionSeleccionada) {
        if (this.resultados[pregunta] && this.resultados[pregunta][opcionSeleccionada] !== undefined) {
            this.resultados[pregunta][opcionSeleccionada]++;
        } else {
            console.log(`Error: Opción no válida para la pregunta '${pregunta}'.`);
        }
    }

    mostrarResultados() {
        console.log("Resultados de la encuesta:");
        this.preguntas.forEach(pregunta => {
            console.log(`- ${pregunta.pregunta}:`);
            pregunta.opciones.forEach(opcion => {
                console.log(`${opcion}: ${this.resultados[pregunta.pregunta][opcion]} votos`);
            });
        });
    }
}

const preguntas = [
    new Pregunta("¿Cuál es tu color favorito?", ["Rojo", "Azul", "Verde", "Negro"]),
    new Pregunta("¿Cuál es tu género musical favorito?", ["Rock", "Pop", "Reggaeton", "Electrónica"]),
    new Pregunta("¿Cuál es tu tipo de película favorita?", ["Drama", "Comedia", "Acción", "Ciencia Ficción"]),
    new Pregunta("¿Cuál es tu animal favorito?", ["Perro", "Gato", "Conejo", "Otro"]),
    new Pregunta("¿Cuál es tu estación del año favorita?", ["Primavera", "Verano", "Otoño", "Invierno"]),
    new Pregunta("¿Qué tipo de comida prefieres?", ["Italiana", "Mexicana", "Japonesa", "Chilena"]),
    new Pregunta("¿Cuál es tu deporte favorito?", ["Fútbol", "Padel", "Tenis", "Rugby"]),
    new Pregunta("¿Cuál es tu destino de vacaciones ideal?", ["Playa", "Montaña", "Ciudad", "Campo"])
];

const encuesta1 = new Encuesta(preguntas);

encuesta1.votar("¿Cuál es tu color favorito?", "Azul");
encuesta1.votar("¿Cuál es tu género musical favorito?", "Rock");
encuesta1.votar("¿Cuál es tu tipo de película favorita?", "Comedia");
encuesta1.votar("¿Cuál es tu animal favorito?", "Perro");
encuesta1.votar("¿Cuál es tu estación del año favorita?", "Verano");
encuesta1.votar("¿Qué tipo de comida prefieres?", "Mexicana");
encuesta1.votar("¿Cuál es tu deporte favorito?", "Fútbol");
encuesta1.votar("¿Cuál es tu destino de vacaciones ideal?", "Montaña");

const encuesta2 = new Encuesta(preguntas);

encuesta2.votar("¿Cuál es tu color favorito?", "Rojo");
encuesta2.votar("¿Cuál es tu género musical favorito?", "Reggaeton");
encuesta2.votar("¿Cuál es tu tipo de película favorita?", "Acción");
encuesta2.votar("¿Cuál es tu animal favorito?", "Gato");
encuesta2.votar("¿Cuál es tu estación del año favorita?", "Primavera");
encuesta2.votar("¿Qué tipo de comida prefieres?", "Japonesa");
encuesta2.votar("¿Cuál es tu deporte favorito?", "Tenis");
encuesta2.votar("¿Cuál es tu destino de vacaciones ideal?", "Playa");


encuesta1.mostrarResultados();
encuesta2.mostrarResultados();
