const RådElement = [document.getElementById('Råd1'), document.getElementById('Råd2'), document.getElementById('Råd3')]; //Hämtar alla elementen och placerar dom i en array.
const OlikaRåd = [//Skapar en array med olika råd.
    'Har du svårt att sova på natten ska du undvika att sova på dagen eftersom det påverkar nattsömnen negativt.',
    'Försök att lägga dig och stiga upp vid samma tid varje dag, även under helger. Detta hjälper kroppen att etablera en stabil dygnsrytm.',
    'Undvik kaffe, alkohol och nikotin. Dessa stör nämligen vår sömn på olika sätt och påverkar vår sömnkvalite negativt.',
    'Att röra på sig regelbundet är en nyckel till att minska stress, genom regelbunden fysiskt aktivitet blir du dessutom starkare och orkar mer.',
    'En vuxen människa behöver sova ungefär 6 - 9 per dygn och när du sover bättre så klarar du lättare av stress och påfrestningar.',
    'Öva på att sätta gränser och prioritera dina egna behov. Att säga nej till för många åtaganden kan minska känslan av överväldigande stress',
    'Om du känner att träningen är ett måste snarare än något du tycker om, kan det vara svårt att hålla motivationen uppe. Prova olika träningsformer för att hitta något som passar dig och som du ser fram emot att göra regelbundet.',
    'Att använda rätt teknik i din träning är avgörande för att undvika skador och maximera dina resultat. Börja med lättare vikter och fokusera på att utföra rörelsen korrekt innan du ökar belastningen. Om du är osäker, be en tränare eller använd speglar för att kontrollera din form.',
    'Försök att begränsa mängden godis, bakverk, glass och annat med mycket socker. Minska särskilt på söta drycker eftersom det är lätt att dricka stora mängder utan att känna sig mätt. Socker gör det lättare att bli överviktig på grund av den stora mängden kalorier.',
];

for (let i = 0; i < RådElement.length; i++) { //Loopar igenom alla elementen och ger dom ett slumpmässigt råd.
    let randNum = Math.floor(Math.random() * OlikaRåd.length); //Slumpar ett nummer mellan 0 och längden på arrayen. https://www.w3schools.com/js/js_random.asp
    let nyttråd = OlikaRåd[randNum]; //Väljer ett slumpmässigt råd.
    OlikaRåd.splice(randNum, 1); //Tar bort rådet från arrayen så att det inte kan bli valt igen.
    RådElement[i].innerText = nyttråd; //Sätter in rådet i elementet.
}