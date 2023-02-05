console.log('1. Функционал в разделе service реализован частично +30');
console.log('2. Реализован Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50');
console.log('3. В разделе contacts реализован select с выбором городов +25 ');
console.log('Общий итог 105 баллов');
 
 let menuBtn = document.querySelector('.toggle');
let menu = document.querySelector('.nav-list');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



// АККОРДИОН 
document.querySelectorAll('.tab__wrapper').forEach(function (tabWrapper) {
	const dropDownTab = tabWrapper.querySelector('.tab');
	const dropDownContent = tabWrapper.querySelector('.tab__content');

// 	// Клик по кнопке. Открыть/Закрыть select
	dropDownTab.addEventListener('click', function (e) {
		dropDownContent.classList.toggle('tab__content--visible');
        this.classList.toggle('active');
	});
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownTab) {
			dropDownTab.classList.remove('active');
			dropDownContent.classList.remove('tab__content--visible');
		}
	});

// 	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownTab.classList.remove('active');
			dropDownContent.classList.remove('tab__content--visible');
		}
	});
});


// СЕКЦИЯ СЕРВИСЫ
window.onload = function() {
	addButtonClickHandler();
} 


const addButtonClickHandler = () => {
	document.querySelector('.service-list').addEventListener('click', (e) => {
		if (e.target.classList.contains('service-btn')) {
			let clickedButton = e.target;
			removeSelectedButton();
			selectClickedButton(clickedButton);
			filterCardsBySelectedButton(clickedButton.innerText);
		}
	}
)}

const removeSelectedButton = () => {
	let buttons = document.querySelectorAll('.service-btn');
	buttons.forEach(button => {
		button.classList.remove('.service-btn:hover');
	})
}

const selectClickedButton = (clickedButton) => {
	clickedButton.classList.add('.service-btn:hover');
}

const showAllCards = () => {

};

const filterCardsBySelectedButton = (selectedButton) => {
	let сards = document.querySelectorAll('.card-item');
	сards.forEach(card => {
		card.classList.add('blur');
		data = card.dataset.family;
			if ( data === selectedButton) {
				card.classList.remove('blur');
			};
			document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			card.classList.remove('blur');
		}
	});
	} )
};




// SECTION CONTACT

 const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');
    const cardOne = document.querySelector('.cardOne');
    const cardTwo = document.querySelector('.cardTwo');
    const cardThree = document.querySelector('.cardThree');
    const cardFour = document.querySelector('.cardFour');

     function selectCard (text) {
        if (text === "Canandaigua, NY") {
            cardOne.classList.add('block');
            cardTwo.classList.remove('block');
            cardThree.classList.remove('block');
            cardFour.classList.remove('block');
        }
        else if (text === "New York City") {      
            cardTwo.classList.add('block');
            cardOne.classList.remove('block');
            cardThree.classList.remove('block');
            cardFour.classList.remove('block');
        }
        else if (text === "Yonkers, NY") {      
            cardThree.classList.add('block');
            cardOne.classList.remove('block');
            cardTwo.classList.remove('block');
            cardFour.classList.remove('block');
        }
        else if (text === "Sherrill, NY") {    
            cardFour.classList.add('block');
            cardOne.classList.remove('block');
            cardTwo.classList.remove('block');
            cardThree.classList.remove('block');
        }
        };

    const select = function () {
    

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
            currentText.innerText = text;
        
        select.classList.remove('is-active');

       selectCard (text);

    }

};

select();
// END SECTION CONTACT