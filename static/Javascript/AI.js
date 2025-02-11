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
    botMessageElement.classList.add("chat-message", "bot");
    botMessageElement.innerText = "Tänker...";
    chatBox.appendChild(botMessageElement);
    var botResponse = await getCohereResponse(filteredUserMessage);
    botMessageElement.innerText = botResponse;
    chatBox.appendChild(botMessageElement);
}



document.getElementById('buttonSend').addEventListener('click', sendMessage);

document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});