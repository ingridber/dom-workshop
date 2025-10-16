// Driver: Johannes       Navigatör: Ingrid, Sascha




const btn1 = document.createElement('button');
btn1.textContent = 'Byt bakgrundsfärg';
//btn1.style.backgroundColor = '#e0f2fe';
document.body.appendChild(btn1);

btn1.id = 'Knapp1';
const changeBC = document.getElementById('Knapp1');
changeBC.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f2fe';
});

const btn2 = document.createElement('button');
btn2.textContent = 'Lägg till stycke:';
document.body.appendChild(btn2);
btn2.id = 'Knapp2';
const addParagraph = document.getElementById('Knapp2');
addParagraph.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Jag sov bara 5 timmar inatt';
    document.body.appendChild(paragraph);
})

const btn3 = document.createElement('button');
btn3.textContent = 'Ta bort senaste stycke';
btn3.id = 'Knapp3';
btn3.style.display = 'block';
document.body.appendChild(btn3);

const removep = document.getElementById('Knapp3');
removep.addEventListener('click', () => {
   const lastP = document.body.lastElementChild;
   document.body.removeChild(lastP);
});

const btn4 = document.createElement('button');
btn4.textContent = 'Ändra rubrik';
btn4.id = 'Knapp4';
btn4.style.display = 'block';
document.body.appendChild(btn4);

const changeHeader = document.getElementById('Knapp4');
changeHeader.addEventListener('click', () => {
    const header = document.querySelector('h1');
    header.textContent = 'Ingrid Johannes Sascha';
})






