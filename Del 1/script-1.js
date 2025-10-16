// Driver: Ingrid
// Navigators: Johannes, Sascha


// create h2

const header = document.createElement('h2');

header.textContent = 'Min rubrik för dagen!';
header.style.color = '#1e3a8a';

document.body.appendChild(header);

// create p

const paragraph = document.createElement('p');

paragraph.textContent = 'Vädret är molnigt idag, woho!';
paragraph.style.color = '#fef3c7';

document.body.appendChild(paragraph);

// create div

const div = document.createElement('div');

div.textContent = 'Det här är en färgad ruta';
// div.innerHTML = 'Det här är en färgad ruta'; 

div.style.backgroundColor = '#10b981';

document.body.appendChild(div);


// change p - add todays date

paragraph.textContent = 'Ny text: 16-10-2025';

const change = document.querySelector('p');

change.textContent = change.textContent + ': 16-10-2025';
