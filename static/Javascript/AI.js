let last_user_message = "";
let last_ai_message = "";


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

    const response = await fetch('/cohere_API/' + " Ditt förra svar: " +  + "Användarens förra meddelande: " + last_user_message + "Användarens Senaste meddelande: " + userMessage);
    last_user_message = userMessage;
    const data = await response.text();
    last_ai_message = data;
    return data;
}

async function sendMessage() {
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