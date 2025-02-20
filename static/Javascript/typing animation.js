function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); //https://www.geeksforgeeks.org/what-is-the-javascript-version-of-sleep-method/
}

async function typingAnimation() {
    while (true) {
        if (document.querySelector(".typing") == null) {
            await sleep(500);
            continue;
        }
        var typingelement = document.querySelector(".typing");
        await sleep(500);
        if (typingelement.innerText.length > 5) continue;
        typingelement.innerText = ".";
        await sleep(500);
        if (typingelement.innerText.length > 5) continue;
        typingelement.innerText = "..";
        await sleep(500);
        if (typingelement.innerText.length > 5) continue;
        typingelement.innerText = "...";
        await sleep(500);
        if (typingelement.innerText.length > 5) continue;
        typingelement.innerText = "....";
    }
}

typingAnimation();