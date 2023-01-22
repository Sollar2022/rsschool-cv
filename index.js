console.log('1.	Вёрстка соответствует макету при ширине экрана 768px +24');
console.log('2.	Вёрстка соответствует макету при ширине экрана 380px +24');
console.log('3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15');
console.log('4. На ширине экрана 380рх и меньше реализовано адаптивное меню +18	');
console.log('4.1 Не сделано: при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна -4	');
console.log('Общий итог 71 балл');
 
 let menuBtn = document.querySelector('.toggle');
let menu = document.querySelector('.nav-list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


