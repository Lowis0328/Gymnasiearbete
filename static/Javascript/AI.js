let aiStatus = 0;
let skrivAnimation = false;
const AIStatusKoder =
{
    "0": "Redo",
    "1": "Tänker",
    "2": "Skriver",
}


function filterUserMessage(Message)
{
    if (Message.includes("/"))
        {
            let new_message = Message.replace("/", "divided by");
            return new_message;
        }
        else if (Message.includes("*"))
        {
            let new_message = Message.replace("*", "multiplied by");
            return new_message;
        }
        else if (Message.includes("+"))
        {
            let new_message = Message.replace("+", "added to");
            return new_message;
        }
        else if (Message.includes("-"))
        {
            let new_message = Message.replace("-", "subtracted by");
            return new_message;
        }
        else
        {
            return Message;
        }
}
async function getCohereResponse(userMessage) {

    aiStatus = AIStatusKoder[1];
    console.log(aiStatus);
    const response = await fetch('/cohere_API/' + userMessage);
    const data = await response.text();
    return data;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); //https://www.geeksforgeeks.org/what-is-the-javascript-version-of-sleep-method/
}

async function typeingAnimationMessage(message, element) { //Enkel skriv animation med hjälp av geekforgeeks sleeping från ovan.
    element.innerHTML = "";
    aiStatus = AIStatusKoder[2];
    console.log(aiStatus);
    for (let i = 0; i < message.length; i++) {

        element.innerHTML += message[i];

        if (message.length > 100){
            await sleep(1);
        }
        else{
            await sleep(20);
        }
    }
    aiStatus = AIStatusKoder[0];
    console.log(aiStatus);
}

async function sendMessage() {

    if (document.getElementById("user-input").value === "" || aiStatus === "Tänker"|| aiStatus === "Skriver") { //så att man inte kan skicka iväg flera meddelanden samtidgt
        return; // Så att man inte kan skicka iväg tomma meddelanden
    }

    let userMessage = document.getElementById("user-input").value; //Hämtar användarens meddelande
    filteredUserMessage = filterUserMessage(userMessage); //Filtrerar användarens meddelande
    document.getElementById("user-input").value = ""; //Tömmer input fältet
    let chatBox = document.getElementById("chat-box"); //Hämtar chat-boxen
    let userMessageElement = document.createElement("div"); //Skapar en div för användarens meddelande
    userMessageElement.classList.add("chat-message", "user"); //Lägger till respektive klasser för användarens meddelande
    userMessageElement.innerText = userMessage; //Lägger till texten i användarens meddelande
    chatBox.appendChild(userMessageElement); //Lägger till användarens meddelande i chat-boxen

    let botMessageElement = document.createElement("div"); //Skapar en div för botens meddelande
    botMessageElement.classList.add("typing"); //Lägger till klassen typing för att visa att boten skriver/så att vår typing animation.js fungerar
    botMessageElement.classList.add("chat-message", "bot"); //Lägger till respektive klasser för botens meddelande
    botMessageElement.innerText = "."; //L
    chatBox.appendChild(botMessageElement); //Lägger till botens meddelande i chat-boxen
    let botResponse = await getCohereResponse(filteredUserMessage); //Hämtar botens svar
    botMessageElement.classList.remove("typing"); //Tar bort klassen typing för att visa att boten inte skriver längre
    chatBox.appendChild(botMessageElement); //Lägger till botens meddelande i chat-boxen
    skrivAnimation = document.getElementById('animationToggle').checked; //Hämtar värdet på checkboxen
    console.log(skrivAnimation);
    switch (skrivAnimation)
    {
        case true:
            await typeingAnimationMessage(botResponse, botMessageElement); //Kör typningsanimationen för botens meddelande
            break;
        case false:
            botMessageElement.innerText = botResponse; //Om skrivAnimation är false, skriver AI:n direkt svaren
            aiStatus = AIStatusKoder[0];
            console.log(aiStatus);
            break;
    }
}



document.getElementById('buttonSend').addEventListener('click', sendMessage); //Kör sendMessage om de trycker på knappen

document.getElementById('user-input').addEventListener('keyup', function(event) { //Kör sendMessage om de trycker enter
    if (event.key === "Enter") {
        sendMessage();
    }
});