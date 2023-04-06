const inputPage = document.querySelector('.inputPage');
const inputLimit = document.querySelector('.inputLimit');
const result5 = document.querySelector('.btn5');
const result5Node = document.querySelector('.result5');

result5.addEventListener('click', () => {
if ((!Number(inputPage.value) || Number(inputPage.value) < 1 || Number(inputPage.value) > 10) && (!Number(inputLimit.value) ||  Number(inputLimit.value) < 1 || Number(inputLimit.value) > 10 )) {
       result5Node.innerHTML ="Номер страницы и лимит вне диапазона от 1 до 10";
} else if (!Number(inputPage.value) || Number(inputPage.value) < 1 || Number(inputPage.value) > 10) {
  result5Node.innerHTML ="Номер страницы вне диапазона от 1 до 10";
} else if( !Number(inputLimit.value) || Number(inputLimit.value) < 1 || Number(inputLimit.value) > 10 ) {
   result5Node.innerHTML ="Лимит вне диапазона от 1 до 10";
} 
else{
  let cards = '';
  fetch(`https://picsum.photos/v2/list?page=${parseInt(inputPage.value)}&limit=${parseInt(inputLimit.value)}`)
   .then((response) => {
     console.log('response', response);
     const result = response.json();
     console.log('result', result);
     return result;
   })
   .then((data) => {
 let cards = '';
 data.forEach(item => {
   const cardBlock = `
     <div class="card">
       <img src="${item.download_url}" class="card-image"/>
       <p>${item.author}</p>
     </div>
   `;
   cards = cards + cardBlock;
 });
 result5Node.innerHTML = cards;
})
.catch(() => { console.log('error') });
}
});
                    
function savePhotosToLocalStorage() {
  localStorage.setItem("last_photos", photosContainer.innerHTML);
}

function loadPhotosFromLocalStorage() {
  photosContainer.innerHTML = localStorage.getItem("last_photos");
  return  photosContainer.innerHTML.length > 0;
}