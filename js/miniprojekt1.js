/*
    Miniprojekt 1 - FE23 Javascript 1
    Kristoffer Bengtsson
*/

/////////////////////////////////////////////////////////////////////////////////////////
// Övre sektionen med gradient-färgade rader
/////////////////////////////////////////////////////////////////////////////////////////

// Skapa wrapper-box
const linesContainer = document.createElement("div");
linesContainer.id = "lines-wrapper";
linesContainer.style.maxWidth = "700px";
linesContainer.style.margin = "2rem auto";
linesContainer.style.fontFamily = '"Times New Roman", serif';
document.body.appendChild(linesContainer);

// Antal rader som skall skapas
const maxRows = 5;

for (let i = 0; i < maxRows; i++) {
  const newLine = document.createElement("div");
  linesContainer.appendChild(newLine);
  newLine.innerText = `Rad ${i + 1}`;

  // Bakgrundsfärg skalas från grön (120) till blå (200) gradvis
  const firstHue = 120;
  const lastHue = 200;
  const bgHue = Math.floor(firstHue + ((lastHue - firstHue) / (maxRows - 1)) * i);

  // Större mellanrum mellan varje rad (uppskattad ökning)
  const spaceBetween = 10 + (i * 8);

  // Successivt större font-storlek, börja på 0.5em och öka med 0.5 per rad
  const fontSize = 0.5 + (i * 0.5);

  // Style
  newLine.style.fontWeight = "700";
  newLine.style.fontSize = `${fontSize}em`;
  newLine.style.textAlign = "center";
  newLine.style.padding = "0.2em";
  newLine.style.margin = `0px 0px ${spaceBetween}px 0px`;
  newLine.style.backgroundColor = `hsl(${bgHue}, 87%, 85%)`;
  newLine.style.color = "rgb(112,112,250)";
}

/////////////////////////////////////////////////////////////////////////////////////////
// Nedre sektionen med siffror i kolumner
/////////////////////////////////////////////////////////////////////////////////////////

// Skapa wrapper-box - flexbox med jämnt utrymme mellan kolumner
const numbersContainer = document.createElement("div");
numbersContainer.id = "numbers-wrapper";
numbersContainer.style.display = "flex";
numbersContainer.style.justifyContent = "space-around";
numbersContainer.style.maxWidth = "700px";
numbersContainer.style.margin = "2rem auto";
numbersContainer.style.border = "1px solid black";
numbersContainer.style.boxSizing = "border-box";
numbersContainer.style.padding = "3rem";
numbersContainer.style.fontFamily = '"Times New Roman", serif';
document.body.appendChild(numbersContainer);

const numbersText = ["noll", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
const blueColor = "rgb(168,168,240)";
const columns = [];

// Skapa kolumnerna och sätt gemensam styling
for (let i = 0; i < 3; i++) {
  const newColumn = document.createElement("div");
  newColumn.style.border = `8px solid ${blueColor}`;
  newColumn.style.width = "60px";
  newColumn.style.boxSizing = "border-box";
  newColumn.style.fontSize = "0.9rem";
  numbersContainer.appendChild(newColumn);

  columns.push(newColumn);
}

// Första kolumnen - tal från 0-9
columns[0].style.textAlign = "left";
for (let i = 0; i < 10; i++) {
  const numElem = document.createElement("div");
  columns[0].appendChild(numElem);
  numElem.innerText = i;

  // Jämna tal har svart bakgrund, 4 har blå
  if (i == 4) {
    numElem.style.backgroundColor = blueColor;
    numElem.style.color = "white";
  }
  else if (i % 2 == 0) {
    numElem.style.backgroundColor = "black";
    numElem.style.color = "white";
  }
}

// Andra kolumnen - tal från 9 till 0
columns[1].style.textAlign = "center";
for (let i = 9; i >= 0; i--) {
  const numElem = document.createElement("div");
  columns[1].appendChild(numElem);
  numElem.innerText = i;

  // Jämna tal har svart bakgrund, 8 har blå
  if (i == 8) {
    numElem.style.backgroundColor = blueColor;
    numElem.style.color = "white";
  }
  else if (i % 2 == 0) {
    numElem.style.backgroundColor = "black";
    numElem.style.color = "white";
  }
}

// Tredje kolumnen - tal ett till tio i text
columns[2].style.textAlign = "right";
for (let i = 1; i <= 10; i++) {
  const numElem = document.createElement("div");
  columns[2].appendChild(numElem);
  numElem.innerText = numbersText[i];

  // Udda tal har svart bakgrund, 6 har blå
  if (i == 6) {
    numElem.style.backgroundColor = blueColor;
    numElem.style.color = "black";
  }
  else if (i % 2 != 0) {
    numElem.style.backgroundColor = "black";
    numElem.style.color = "white";
  }
}
