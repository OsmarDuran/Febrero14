// Lista de párrafos de la historia
const storyParagraphs = [
    "Hace un tiempo, dos almas se encontraron en el lugar menos esperado...",
    "Desde ese momento, algo especial comenzó a florecer entre ellos.",
    "Con el tiempo, descubrieron que compartían risas, sueños y momentos inolvidables.",
    "A través de altibajos, su cariño solo se hacía más fuerte.",
    "Y ahora, en este día especial, hay una pregunta que debo hacerte...",
    "¿Aceptarías ser mi Valentine? ❤️"
];

let currentIndex = 0; // Índice del párrafo actual
let isTyping = false; // Para evitar clics dobles mientras se escribe

function typeWriter(text, element, speed = 50) {
    element.textContent = ""; // Limpiar el texto antes de escribir
    let i = 0;

    function writeLetter() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            setTimeout(writeLetter, speed);
        } else {
            isTyping = false; // Permitir el siguiente clic
        }
    }

    writeLetter();
}

// Obtener el elemento de audio
const backgroundMusic = new Audio("musica.mp3"); 
backgroundMusic.loop = true; // Hacer que se repita en bucle

let musicStarted = false; // Para evitar que se reinicie la música en cada clic

function nextParagraph() {
    if (!musicStarted) {
        backgroundMusic.play().catch(error => console.log("Error al reproducir audio:", error));
        musicStarted = true;
    }

    if (isTyping) return; // Evita que se salten párrafos mientras escribe

    const storyText = document.getElementById("story-text");

    if (currentIndex < storyParagraphs.length) {
        isTyping = true;
        typeWriter(storyParagraphs[currentIndex], storyText, 50);
        currentIndex++;
    }

    if (currentIndex === storyParagraphs.length) {
        storyText.style.color = "#d63384";
        storyText.style.fontSize = "1.5em";
    }
}
