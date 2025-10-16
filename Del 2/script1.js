// Driver : Sascha
// Navigator: Ingrid & Johannes

const btnCngColor = document.getElementById("btnCngColor");

btnCngColor.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.style.backgroundColor = "#ff6d8f";
});

const btnAddText = document.getElementById("btnAddText");

btnAddText.addEventListener("click", () => {
  const paragraph = document.createElement("p");
  const container = document.querySelector(".container");
  paragraph.textContent = "Vad som helst";
  container.appendChild(paragraph);
});

const btnClean = document.getElementById("btnClean");

btnClean.addEventListener("click", () => {
  const parent = document.querySelector(".container");
  const child = document.querySelector("p");

  parent.removeChild(child);
});
