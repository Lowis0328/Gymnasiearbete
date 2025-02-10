const RådElement = [document.getElementById('Råd1'), document.getElementById('Råd2'), document.getElementById('Råd3')];
const OlikaRåd = ['Råd 1', 'Råd 2', 'Råd 3', 'Råd 4', 'Råd 5', 'Råd 6 ', 'Råd 7', 'Råd 8 ', 'Råd 9', 'Råd 10', 'Råd 11', 'Råd 12', 'Råd 13 '];

for (let i = 0; i < RådElement.length; i++) {
    RådElement[i].innerText = OlikaRåd[Math.floor(Math.random() * OlikaRåd.length)];
}