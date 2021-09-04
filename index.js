const buttonTranslate = document.querySelector("#btn_translate");
const textAreaInput = document.querySelector("#txtArea_text");
let inputText;

buttonTranslate.addEventListener("click", () => {
  inputText = textAreaInput.value;
  console.log(inputText);
});
