const RådElement = [document.getElementById('Råd1'), document.getElementById('Råd2'), document.getElementById('Råd3')]; //Hämtar alla elementen och placerar dom i en array.
const OlikaRåd = [//Skapar en array med olika råd.
    'Har du svårt att sova på natten ska du undvika att sova på dagen eftersom det påverkar nattsömnen negativt.',
    'Försök att lägga dig och stiga upp vid samma tid varje dag, även under helger. Detta hjälper kroppen att etablera en stabil dygnsrytm.',
    'Undvik kaffe, alkohol och nikotin. Dessa stör nämligen vår sömn på olika sätt och påverkar vår sömnkvalite negativt.',
    'Att röra på sig regelbundet är en nyckel till att minska stress, genom regelbunden fysiskt aktivitet blir du dessutom starkare och orkar mer.',
    'En vuxen människa behöver sova ungefär 6 - 9 per dygn och när du sover bättre så klarar du lättare av stress och påfrestningar.',
    'Öva på att sätta gränser och prioritera dina egna behov. Att säga nej till för många åtaganden kan minska känslan av överväldigande stress',
    'Råd 7',
    'Råd 8',
    'Råd 9',
];

for (let i = 0; i < RådElement.length; i++) { //Loopar igenom alla elementen och ger dom ett slumpmässigt råd.
    let randNum = Math.floor(Math.random() * OlikaRåd.length); //Slumpar ett nummer mellan 0 och längden på arrayen. https://www.w3schools.com/js/js_random.asp
    let nyttråd = OlikaRåd[randNum]; //Väljer ett slumpmässigt råd.
    OlikaRåd.splice(randNum, 1); //Tar bort rådet från arrayen så att det inte kan bli valt igen.
    RådElement[i].innerText = nyttråd; //Sätter in rådet i elementet.
}