var slider1 = {
    imagesUrls: ['https://c1.klipartz.com/pngpicture/367/606/sticker-png-web-banner-sticker-text-information-sales-art-line-badge-thumbnail.png', 'https://thypix.com/wp-content/uploads/2021/02/pixel-sunglasses-17-700x407.png', 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 'https://png.pngtree.com/png-clipart/20190601/ourmid/pngtree-cartoon-pop-blast-bubble-dialog-font-png-image_15973.jpg'],
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImage: document.getElementById('slide-img'),
    currentImageIndex: 0,

    start: function (params) {
        // subscribe to events
        showPrevBtn.addEventListener('click', onShowPrevBtnClick);
        showNextBtn.addEventListener('click', onShowNextBtnClick);
        slideImage.src = imagesUrls[currentImageIndex];

    },

    onShowPrevBtnClick: function (event) {
        currentImageIndex--;
        slideImage.src = imagesUrls[currentImageIndex];
        showNextBtn.disabled = false;

        if (currentImageIndex === 0) {
            showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (event) {
        currentImageIndex++;
        slideImage.src = imagesUrls[currentImageIndex];
        showPrevBtn.disabled = false;

        if (currentImageIndex === (imagesUrls.length - 1)) {
            showNextBtn.disabled = true;
        }

    },


};