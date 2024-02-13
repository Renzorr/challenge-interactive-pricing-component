const checkbox = document.getElementById("checkbox");
const pagesContent = document.getElementById("pages");
const valuesContent = document.getElementById("values");
const timeContent = document.getElementById("time")
const rangeInput = document.getElementById("range");

const pages = ["10k", "50k", "100k", "500k", "1M"];
const values = [8, 12, 16, 24, 32];

function updateBackground() {
  const valor = rangeInput.value / (rangeInput.max - rangeInput.min) * 100;
  rangeInput.style.backgroundImage = `linear-gradient(to right,hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) ${valor}%,hsl(224, 65%, 95%) ${valor}%,hsl(224, 65%, 95%) 100%)`;
}

function cambiovalor() {
  let ischecked = checkbox.checked;
  const index = parseInt(rangeInput.value / 20);
  
  pagesContent.textContent = pages[index];
  valuesContent.textContent = ischecked ? `${values[index] - (values[index] * 0.25)}.00` : `${values[index]}.00`;
  timeContent.textContent = ischecked ?   'year' : 'month'
}

rangeInput.addEventListener("input", updateBackground);
rangeInput.addEventListener("change", cambiovalor);
checkbox.addEventListener("change", cambiovalor);


