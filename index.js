const buttonTranslate = document.querySelector("#btn_translate");
const textAreaInput = document.querySelector("#txtArea_text");
const translatedTextContainer = document.querySelector("#translated_text");
let inputText;

buttonTranslate.addEventListener("click", () => {
  inputText = textAreaInput.value;
  console.log(inputText);

  translatedTextContainer.innerHTML = inputText;
});
