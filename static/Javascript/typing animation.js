function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time)); //https://www.geeksforgeeks.org/what-is-the-javascript-version-of-sleep-method/
}

async function typingAnimation() {
    while (true) {
        if (document.querySelector(".typing") == null) { //så att loopen inte crashar när användaren inte har skrivit något än
            await sleep(500); //väntar 500ms innan den kollar igen, för att köra detta 1000000000 gånger i sekunden är onödigt
            continue; //Avslutar den nuvarande iterationen av loopen och börjar på nästa
        }
        var typingelement = document.querySelector(".typing"); //Straight forward funktion nedan.
        await sleep(500);
        typingelement.innerText = ".";
        if (typingelement.innerText[0] != ".") continue; //Kollar ifall AI:ns svar har kommit igenom och avslutar då animationen så att den inte överskrider AI:ns svar.
        await sleep(500);
        if (typingelement.innerText[0] != ".") continue;
        typingelement.innerText = "..";
        await sleep(500);
        if (typingelement.innerText[0] != ".") continue;
        typingelement.innerText = "...";
        await sleep(500);
        if (typingelement.innerText[0] != ".") continue;
        typingelement.innerText = "....";
    }
}

typingAnimation();