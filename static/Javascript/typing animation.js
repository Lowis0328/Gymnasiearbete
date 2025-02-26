function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); //https://www.geeksforgeeks.org/what-is-the-javascript-version-of-sleep-method/
}

async function typingAnimation() {
    while (true) {
        let typingelement = document.querySelector(".typing");

        if (!typingelement) {
            await sleep(500);
            continue;
        }

        await sleep(500);

        // Om texten INTE är en serie punkter längre, starta om loopen
        if (![".", "..", "...", "...."].includes(typingelement.innerText)) continue;
        typingelement.innerText = ".";

        await sleep(500);
        if (![".", "..", "...", "...."].includes(typingelement.innerText)) continue;
        typingelement.innerText = "..";

        await sleep(500);
        if (![".", "..", "...", "...."].includes(typingelement.innerText)) continue;
        typingelement.innerText = "...";

        await sleep(500);
        if (![".", "..", "...", "...."].includes(typingelement.innerText)) continue;
        typingelement.innerText = "....";
    }
}

typingAnimation();