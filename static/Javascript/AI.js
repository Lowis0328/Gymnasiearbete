let aiStatus = 0;
const AIStatusKoder =
{
    "0": "Redo",
    "1": "Tänker",
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
    aiStatus = AIStatusKoder[0];
    console.log(aiStatus);
    return data;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); //https://www.geeksforgeeks.org/what-is-the-javascript-version-of-sleep-method/
}

async function typeingAnimationMessage(message, element) {
    console.log(message);
    element.innerHTML = "";
    for (let i = 0; i < message.length; i++) {

        element.innerHTML += message[i];

        if (message.length > 100){
            await sleep(1);
        }
        else{
            await sleep(20);
        }
    }
}

async function sendMessage() {

    if (document.getElementById("user-input").value === "" || aiStatus === "Tänker") { //så att man inte kan skicka iväg flera meddelanden samtidgt
        return; // Så att man inte kan skicka iväg tomma meddelanden
    }

    var userMessage = document.getElementById("user-input").value;
    filteredUserMessage = filterUserMessage(userMessage);
    document.getElementById("user-input").value = "";
    var chatBox = document.getElementById("chat-box");
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("chat-message", "user");
    userMessageElement.innerText = userMessage;
    chatBox.appendChild(userMessageElement);

    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("typing");
    botMessageElement.classList.add("chat-message", "bot");
    chatBox.appendChild(botMessageElement);
    var botResponse = await getCohereResponse(filteredUserMessage);
    botMessageElement.classList.remove("typing");
    chatBox.appendChild(botMessageElement);
    await typeingAnimationMessage(botResponse, botMessageElement);
}



document.getElementById('buttonSend').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});