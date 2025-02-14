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

function nextParagraph() {
    const storyText = document.getElementById("story-text");
    
    // Cambiar el texto al siguiente párrafo
    if (currentIndex < storyParagraphs.length) {
        storyText.textContent = storyParagraphs[currentIndex];
        currentIndex++;
    }

    // Si llegamos al final, cambiar el estilo para hacerlo especial
    if (currentIndex === storyParagraphs.length) {
        storyText.style.color = "#d63384";
        storyText.style.fontSize = "1.5em";
    }
}
