const inputWidth = document.querySelector(".width");
const inputHeight = document.querySelector(".height");
const submitButton = document.querySelector(".btn4");

submitButton.addEventListener("click", (submitButtonHandle) => {
    const width = inputWidth.value;
    const height = inputHeight.value;
    if (!(width > 99 && height < 301) || !(height > 99 && width < 301)) {
        document.querySelector('.result4').innerHTML = "Одно из чисел вне диапазона от 100 до 300."
    } else {
  fetch (`https://picsum.photos/${width}/${height}`)
  .then ((response) => {
    return response
  })
  .then ((data) => {
document.querySelector('.result4').innerHTML = `
<img 
src=${data.url}
/>
`;
  })
 } 
});