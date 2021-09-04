const buttonTranslate = document.querySelector("#btn_generateTitle");
const numberInput = document.querySelector("#input_number");
const translatedTextContainer = document.querySelector("#title_text");
let inputNumber;

buttonTranslate.addEventListener("click", () => {
  let outText;
  inputNumber = Number(numberInput.value) % 200;
  if (!inputNumber || inputNumber < 0) {
    translatedTextContainer.innerHTML = "Error generating title";
    translatedTextContainer.classList.remove("text-primary");
    translatedTextContainer.classList.add("text-error");
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/todos/" + inputNumber)
    .then((response) => response.json())
    .then((json) => {
      outText = json.title;
      console.log(json);
      translatedTextContainer.innerHTML = outText;
      translatedTextContainer.classList.remove("text-error");
      translatedTextContainer.classList.add("text-primary");
    });
});
