var slider1 = {
    imagesUrls: ['https://c1.klipartz.com/pngpicture/367/606/sticker-png-web-banner-sticker-text-information-sales-art-line-badge-thumbnail.png', 'https://thypix.com/wp-content/uploads/2021/02/pixel-sunglasses-17-700x407.png', 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 'https://png.pngtree.com/png-clipart/20190601/ourmid/pngtree-cartoon-pop-blast-bubble-dialog-font-png-image_15973.jpg'],
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImage: document.getElementById('slide-img'),
    currentImageIndex: 0,

    start: function (params) {
        // subscribe to events
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick);
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick);
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (event) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (event) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }

    },


};