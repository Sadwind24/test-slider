
//card

const carsList = [
	{ name: 'Vito Tourer Pro Lang 114', brand: 'Mercedes Benz', number: '5036TWE7 ', options1: '4/4', options2: '1', options3: 'Automatik', options4: '103kW/140PS', price: '49 338,00 €', addCost: 'inkl. 19% MwSt.', photo: 'image/main/image 22.png' },
	{ name: 'Vito Tourer Pro Lang 114', brand: 'Mercedes Benz', number: '5036TWE7 ', options1: '4/5', options2: '2', options3: 'Automatik', options4: '103kW/140PS', price: '35 488,00 €', addCost: 'inkl. 19% MwSt.', photo: 'image/main/image 23.png' },
	{ name: 'Spacetourer 180 ', brand: 'Citroen', number: '5036TWE7 ', options1: '4/4', options2: '3', options3: 'Automatik', options4: '103kW/140PS', price: '40 3228,00 €', addCost: 'inkl. 20% MwSt.', photo: 'image/main/image 28.png' },
]

const generateAutoCard = (name, brand, number, options1, options2, options3, options4, price, addCost, photo) => {

	return `<div class="swiper-slide">
				<div class="block__card">
					<div class="wrap__card">
		 				<div class="card__items">
							<div class="item__left">
								<div class="item__left-name">${name}</div>
									<div class="item__left-brand">
										<div class="brand">${brand}</div>
										<div class="number">${number}</div>
										<div class="icon"><img src="image/main/copy-1.png" alt=""></div>
									</div>
								<div class="item__left-options">
									<div class="options-1"><img src="image/main/Vector-2.png" alt="icons">${options1}</div>
									<div class="options-2"><img src="image/main/Vector-3.png" alt="icons">${options2}</div>
									<div class="options-3"><img src="image/main/transmission-4.png" alt="icons">${options3}</div>
									<div class="options-4"><img src="image/main/Frame-5.png" alt="icons">${options4}</div>
								</div>
							</div>
							<div class="item__right">
								<div class="right__item-price">${price}</div>
								<div class="right__item-add-cost">${addCost}</div>
								<div class="right__item-social">
									<a href=""><img src="image/main/whatsapp.png" alt="icons"></a>
									<a href=""><img src="image/main/u_facebook-f.png" alt="icons"></a>
									<a href=""><img src="image/main/at.png" alt="icons"></a>
								</div>
							</div>
					 	</div>
					</div>
					<div class="image__card">
						<div class="card__img"><img src="${photo}" alt="Photo"></div>
					</div>
					<div class="carl__text">
						<p>Citroën Jumper oder Peugeot Boxer 3,5t Light oder 3,5t Heavy Chassis 4-Zylinder Turbodiesel, Euro 6d,
						Rußpartikelfilter Fahrerairbag <br> Elektronische Wegfahrsperre, Zentralverriegelung mit
						Funkfernbedienung Scheibenbremsen vorne und hinten... <span>Mehr</span></p>
					</div>
				</div>
			</div>`;
}



const carsHTML = carsList.map(car => {
	return generateAutoCard(car.name, car.brand, car.number, car.options1, car.options2, car.options3, car.options4, car.price, car.addCost, car.photo);
}).join('');
const carsDiv = document.querySelector('.swiper-wrapper');
carsDiv.innerHTML = carsHTML;

//slider

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal', //'horizontal' | 'vertical'
	loop: true, //false
	speed: 1500, //скорость слайда
	effect: 'slider', //cards, coverflow, flip, fade, cube,slider
	// slidesPerView: 2, //количество слайд в окне
	// centeredSlides: true, //центрирование слайда
	// initialSlide: 2, //начинает с 2
	// freeMode: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//автоматическое перелистывание
	// autoplay: {
	// 	delay: 1000,
	// }

});

