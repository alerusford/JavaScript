// var cont1 = document.querySelector('#itk-slider1');
// var cont2 = document.querySelector('#itk-slider2');

slider1.start('itk-slider1');
slider2.start('itk-slider2');
// // find elements
// var showPrevBtn = document.getElementById('show-prev');
// var showNextBtn = document.getElementById('show-next');
// var slideImage = document.getElementById('slide-img');

// // subscribe to events
// showPrevBtn.addEventListener('click', onShowPrevBtnClick);
// showNextBtn.addEventListener('click', onShowNextBtnClick);

// // create images array
// var imagesUrls = ['https://c1.klipartz.com/pngpicture/367/606/sticker-png-web-banner-sticker-text-information-sales-art-line-badge-thumbnail.png', 'https://thypix.com/wp-content/uploads/2021/02/pixel-sunglasses-17-700x407.png', 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 'https://png.pngtree.com/png-clipart/20190601/ourmid/pngtree-cartoon-pop-blast-bubble-dialog-font-png-image_15973.jpg'];

// var currentImageIndex = 0;
// slideImage.src = imagesUrls[currentImageIndex];
// showPrevBtn.disabled = true
// // functions definitions
// function onShowPrevBtnClick(params) {
//     currentImageIndex--;
//     slideImage.src = imagesUrls[currentImageIndex];

//     if (currentImageIndex === 0) {
//         showPrevBtn.disabled = true
//     }

//     showNextBtn.disabled = false;
// };
// function onShowNextBtnClick(params) {
//     currentImageIndex++;
//     slideImage.src = imagesUrls[currentImageIndex];

//     if (currentImageIndex === (imagesUrls.length - 1)) {
//         showNextBtn.disabled = true
//     }

//     showPrevBtn.disabled = false;
// };