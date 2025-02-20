const RådElement = [document.getElementById('Råd1'), document.getElementById('Råd2'), document.getElementById('Råd3')]; //Hämtar alla elementen och placerar dom i en array.
const OlikaRåd = ['Råd 1', 'Råd 2', 'Råd 3', 'Råd 4', 'Råd 5', 'Råd 6 ', 'Råd 7', 'Råd 8 ', 'Råd 9', 'Råd 10', 'Råd 11', 'Råd 12', 'Råd 13 ']; //Skapar en array med olika råd.

for (let i = 0; i < RådElement.length; i++) { //Loopar igenom alla elementen och ger dom ett slumpmässigt råd.
    let randNum = Math.floor(Math.random() * OlikaRåd.length); //Slumpar ett nummer mellan 0 och längden på arrayen. https://www.w3schools.com/js/js_random.asp
    let nyttråd = OlikaRåd[randNum]; //Väljer ett slumpmässigt råd.
    OlikaRåd.splice(randNum, 1); //Tar bort rådet från arrayen så att det inte kan bli valt igen.
    RådElement[i].innerText = nyttråd; //Sätter in rådet i elementet.
}