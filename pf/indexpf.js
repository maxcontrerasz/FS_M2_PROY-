const crearPregunta = (pregunta, opciones) => ({ pregunta, opciones });

const crearEncuesta = (preguntas) => {
    const resultados = {};

    preguntas.forEach(pregunta => {
        resultados[pregunta.pregunta] = {};
        pregunta.opciones.forEach(opcion => {
            resultados[pregunta.pregunta][opcion] = 0;
        });
    });

    return { preguntas, resultados };
};


const votar = (encuesta, pregunta, opcionSeleccionada) => {
    if (!encuesta.resultados[pregunta] || encuesta.resultados[pregunta][opcionSeleccionada] === undefined) {
        console.log(`Error: Opción no válida para la pregunta '${pregunta}'.`);
        return encuesta;
    }

    const nuevosResultados = {
        ...encuesta.resultados,
        [pregunta]: {
            ...encuesta.resultados[pregunta],
            [opcionSeleccionada]: encuesta.resultados[pregunta][opcionSeleccionada] + 1
        }
    };

    return { ...encuesta, resultados: nuevosResultados };
};

const mostrarResultados = (encuesta) => {
    console.log("Resultados de la encuesta:");
    encuesta.preguntas.forEach(pregunta => {
        console.log(`- ${pregunta.pregunta}:`);
        pregunta.opciones.forEach(opcion => {
            console.log(`${opcion}: ${encuesta.resultados[pregunta.pregunta][opcion]} votos`);
        });
    });
};

const preguntas = [
    crearPregunta("¿Cuál es tu color favorito?", ["Rojo", "Azul", "Verde", "Negro"]),
    crearPregunta("¿Cuál es tu género musical favorito?", ["Rock", "Pop", "Reggaeton", "Electrónica"]),
    crearPregunta("¿Cuál es tu tipo de película favorita?", ["Drama", "Comedia", "Acción", "Ciencia Ficción"]),
    crearPregunta("¿Cuál es tu animal favorito?", ["Perro", "Gato", "Conejo", "Otro"]),
    crearPregunta("¿Cuál es tu estación del año favorita?", ["Primavera", "Verano", "Otoño", "Invierno"]),
    crearPregunta("¿Qué tipo de comida prefieres?", ["Italiana", "Mexicana", "Japonesa", "Chilena"]),
    crearPregunta("¿Cuál es tu deporte favorito?", ["Fútbol", "Padel", "Tenis", "Rugby"]),
    crearPregunta("¿Cuál es tu destino de vacaciones ideal?", ["Playa", "Montaña", "Ciudad", "Campo"])
];

let encuesta1 = crearEncuesta(preguntas);
let encuesta2 = crearEncuesta(preguntas);

encuesta1 = votar(encuesta1, "¿Cuál es tu color favorito?", "Azul");
encuesta1 = votar(encuesta1, "¿Cuál es tu género musical favorito?", "Rock");
encuesta1 = votar(encuesta1, "¿Cuál es tu tipo de película favorita?", "Comedia");
encuesta1 = votar(encuesta1, "¿Cuál es tu animal favorito?", "Perro");
encuesta1 = votar(encuesta1, "¿Cuál es tu estación del año favorita?", "Verano");
encuesta1 = votar(encuesta1, "¿Qué tipo de comida prefieres?", "Mexicana");
encuesta1 = votar(encuesta1, "¿Cuál es tu deporte favorito?", "Fútbol");
encuesta1 = votar(encuesta1, "¿Cuál es tu destino de vacaciones ideal?", "Montaña");


encuesta2 = votar(encuesta2, "¿Cuál es tu color favorito?", "Rojo");
encuesta2 = votar(encuesta2, "¿Cuál es tu género musical favorito?", "Reggaeton");
encuesta2 = votar(encuesta2, "¿Cuál es tu tipo de película favorita?", "Acción");
encuesta2 = votar(encuesta2, "¿Cuál es tu animal favorito?", "Gato");
encuesta2 = votar(encuesta2, "¿Cuál es tu estación del año favorita?", "Primavera");
encuesta2 = votar(encuesta2, "¿Qué tipo de comida prefieres?", "Japonesa");
encuesta2 = votar(encuesta2, "¿Cuál es tu deporte favorito?", "Tenis");
encuesta2 = votar(encuesta2, "¿Cuál es tu destino de vacaciones ideal?", "Playa");


mostrarResultados(encuesta1);
mostrarResultados(encuesta2);
