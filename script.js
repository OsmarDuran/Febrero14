// Lista de párrafos de la historia
const storyParagraphs = [
    "20 de mayo del 2024, ese fue el día en que te envié mi primer mensaje.",
    "Quién lo diría. No llevamos ni un año de conocernos y siento que te he tenido toda la vida.",
    "Y quién diría que la persona que conocería ese día se volviera tan importante para mí.",
    "No me arrepiento ni un solo segundo de haberte presentado con mi familia y amigos porque eres muy bella como persona.",
    "Gracias por ser parte de mi día a día. No me imagino como sería una mañana sin hablarte.",
    "Te quiero mucho y espero que mi regalo te haya gustado.",
    "Y ahora, en este 14 de febrero, hay una pregunta que debo hacerte...",
    "¿Aceptarías ser mi Valentine? ❤️"
];

let currentIndex = 0; // Índice del párrafo actual
let isTyping = false; // Para evitar clics dobles mientras se escribe
let noClicks = 0; // Contador de clics en "No"
let respuesta = false;

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
    const buttonsContainer = document.getElementById("buttons-container");
    const overlay = document.getElementById("overlay");

    if (currentIndex < storyParagraphs.length) {
        isTyping = true;
        typeWriter(storyParagraphs[currentIndex], storyText, 50);
        currentIndex++;
    }

    // Activar efecto de tensión en el penúltimo párrafo
    if (currentIndex === storyParagraphs.length - 1) {
        overlay.style.display = "block"; // Oscurecer todo menos la carta
    }


    // Mostrar los botones al llegar al último párrafo
    if(!respuesta){
        if (currentIndex === storyParagraphs.length) {
            storyText.style.color = "#d63384";
            storyText.style.fontSize = "1.5em";
            buttonsContainer.style.display = "flex";
        }
    }
}

let heartCreated = false;


function hearts(){
    if(heartCreated) return;

    const heartCreate = () =>{
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '🩷';
        heart.style.left = Math.random()*100+"vw";
        heart.style.animationDuration=Math.random() * 2+3+"s";
    
        document.body.appendChild(heart);
    
        setTimeout(()=>{
            heart.remove();
        },5000);
    }
    
    setInterval(heartCreate,800);
    heartCreated=true;
}

function growYesButton() {
    const yesButton = document.getElementById("yes-button");
    noClicks++;

    let newSize = 1 + noClicks * 0.3; // Cada clic en "No" agranda "Sí" un 30%
    yesButton.style.transform = `scale(${newSize})`;

    // Si el botón "Sí" se vuelve demasiado grande, oculta el botón "No"
    if (newSize > 2.5) {
        document.getElementById("no-button").style.display = "none";
    }
}

function showLoveMessage() {
    const storyText = document.getElementById("story-text");
    const overlay = document.getElementById("overlay");
    overlay.style.display='none';
    storyText.style.color= "#800f2f";
    typeWriter("Sabía que dirías que siiii :3333 tequieromuchooooooo", storyText, 100)
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.style.display= "none";
    respuesta = true;
}