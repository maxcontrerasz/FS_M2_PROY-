# PROYECTO 2: Sistema de Votación en JavaScript

## 1. Introducción

Este proyecto consiste en desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML.

## 2. Planteamiento

Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. 

Implementar la solución utilizando programación orientada a objetos (POO) y programación funcional (PF).

## 3. Requerimientos

Para ambas soluciones: 
- Permitir a los usuarios crear encuestas con opciones de respuesta
- Permitir a los usuarios votar en las encuestas
- Mostrar los resultados de las encuestas
- Almacenar los datos de las encuestas y los votos en una variable
- Almacenar los datos de las encuestas y los votos en una estructura de datos
- Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.


## 4. Contenido del Repositorio

- README.md: Este archivo, que proporciona información sobre el proyecto y su estructura.

- Carpeta poo: Archivo indexpoo.js y archivo indexpoo.html
    
- Carpeta pf: Archivo indexpf.js y archivo indexpf.html

## 5. Solución
### 5.1 Solución programación orientada a objetos.

Este es un programa que permite crear encuestas y registrar votos en diferentes preguntas con opciones predefinidas.

#### 5.1.1 Clases Principales

#### 1. Pregunta
- Representa una pregunta con sus respectivas opciones.
- Se inicializa con un texto de pregunta y un arreglo de opciones.
#### 2. Encuesta
- Permite crear una encuesta a partir de un arreglo de preguntas.
- Inicializa los resultados de la encuesta con todas las opciones de respuesta inicializadas a cero.
- Permite registrar votos en las preguntas mediante el método votar.
- Puede mostrar los resultados de la encuesta con el método mostrarResultados.

#### 5.1.2 Uso del Código

Se han definido dos encuestas (encuesta1 y encuesta2) utilizando un conjunto de preguntas predefinidas sobre preferencias personales. Cada encuesta permite registrar votos en diferentes preguntas y opciones.

#### 5.1.3 Ejemplo de Uso 

```
// Definir las preguntas
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

// Crear una nueva encuesta
const encuesta1 = new Encuesta(preguntas);

// Registrar votos en encuesta1
encuesta1.votar("¿Cuál es tu color favorito?", "Azul");
encuesta1.votar("¿Cuál es tu género musical favorito?", "Rock");
encuesta1.votar("¿Cuál es tu tipo de película favorita?", "Comedia");
encuesta1.votar("¿Cuál es tu animal favorito?", "Perro");
encuesta1.votar("¿Cuál es tu estación del año favorita?", "Verano");
encuesta1.votar("¿Qué tipo de comida prefieres?", "Mexicana");
encuesta1.votar("¿Cuál es tu deporte favorito?", "Fútbol");
encuesta1.votar("¿Cuál es tu destino de vacaciones ideal?", "Montaña");

// Crear otra nueva encuesta
const encuesta2 = new Encuesta(preguntas);

// Registrar votos en encuesta2
encuesta2.votar("¿Cuál es tu color favorito?", "Rojo");
encuesta2.votar("¿Cuál es tu género musical favorito?", "Reggaeton");
encuesta2.votar("¿Cuál es tu tipo de película favorita?", "Acción");
encuesta2.votar("¿Cuál es tu animal favorito?", "Gato");
encuesta2.votar("¿Cuál es tu estación del año favorita?", "Primavera");
encuesta2.votar("¿Qué tipo de comida prefieres?", "Japonesa");
encuesta2.votar("¿Cuál es tu deporte favorito?", "Tenis");
encuesta2.votar("¿Cuál es tu destino de vacaciones ideal?", "Playa");

// Mostrar los resultados de las encuestas
encuesta1.mostrarResultados();
encuesta2.mostrarResultados();

```
#### 5.1.4 Observaciones
- Cada instancia de Encuesta permite registrar votos independientemente.
- Los votos se registran en tiempo real en los resultados de la encuesta.
- Se debe proporcionar la pregunta exacta y una opción válida para registrar un voto correctamente.
- Los resultados de la encuesta se pueden visualizar mediante el método mostrarResultados.

### 5.2 Solución programación funcional.

Este código implementa una estructura para realizar encuestas y tabular los resultados de diferentes preguntas sobre preferencias personales.

#### 5.2.1 Funciones Principales

#### 1. crearPregunta(pregunta, opciones)
- Crea un objeto que representa una pregunta con sus opciones.
#### 2. crearEncuesta(preguntas)
- Crea una encuesta a partir de un arreglo de preguntas.
- Inicializa los resultados de la encuesta con todas las opciones de respuesta inicializadas a cero.
#### 3. votar(encuesta, pregunta, opcionSeleccionada)
- Permite votar por una opción en una pregunta específica de la encuesta.
- Actualiza los resultados de la encuesta incrementando en uno el conteo de la opción seleccionada.
#### 4. mostrarResultados(encuesta)
- Muestra los resultados de la encuesta en la consola, mostrando el número de votos por cada opción de cada pregunta.

#### 5.2.2 Uso del Código

Se han creado dos encuestas (encuesta1 y encuesta2) utilizando un conjunto de preguntas predefinidas sobre preferencias personales. Cada encuesta simula votos en diferentes preguntas y opciones.

#### 5.2.3 Ejemplo de Uso 

``` 
// Crear preguntas
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

// Crear encuestas
let encuesta1 = crearEncuesta(preguntas);
let encuesta2 = crearEncuesta(preguntas);

// Simular votos en encuesta1
encuesta1 = votar(encuesta1, "¿Cuál es tu color favorito?", "Azul");
encuesta1 = votar(encuesta1, "¿Cuál es tu género musical favorito?", "Rock");
// Continuar simulando votos en encuesta1...

// Simular votos en encuesta2
encuesta2 = votar(encuesta2, "¿Cuál es tu color favorito?", "Rojo");
encuesta2 = votar(encuesta2, "¿Cuál es tu género musical favorito?", "Reggaeton");
// Continuar simulando votos en encuesta2...

// Mostrar resultados de las encuestas
mostrarResultados(encuesta1);
mostrarResultados(encuesta2);
```

#### 5.2.4 Observaciones
- Cada voto en una encuesta actualiza los resultados en tiempo real.
- Se debe proporcionar la pregunta exacta y una opción válida para registrar un voto correctamente.
- Las encuestas y sus resultados son gestionados de manera independiente para cada instancia.

## 5. Conclusión

Estos códigos proporcionan herramientas efectivas para gestionar encuestas y recopilar datos de preferencias personales de manera clara y estructurada.

El primer conjunto de código utiliza clases para definir objetos de pregunta y encuesta, ofreciendo una estructura orientada a objetos para la gestión de encuestas. Esta implementación facilita la creación y manipulación de encuestas mediante métodos específicos asociados a cada objeto.

En contraste, el segundo conjunto de código utiliza funciones para crear encuestas, registrar votos en preguntas específicas y mostrar resultados detallados. Esta implementación es directa y fácil de entender, permitiendo una gestión ágil de encuestas y una visualización clara de los datos recopilados.

Ambos enfoques son útiles y pueden adaptarse según las necesidades del proyecto y las preferencias de programación. La flexibilidad y claridad de estas implementaciones permiten una interacción efectiva con datos de encuestas.