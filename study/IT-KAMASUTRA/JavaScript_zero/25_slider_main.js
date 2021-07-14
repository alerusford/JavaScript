function createSlider(params) {
    var newSlider = {
        imagesUrls: ['https://c1.klipartz.com/pngpicture/367/606/sticker-png-web-banner-sticker-text-information-sales-art-line-badge-thumbnail.png', 'https://thypix.com/wp-content/uploads/2021/02/pixel-sunglasses-17-700x407.png', 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 'https://png.pngtree.com/png-clipart/20190601/ourmid/pngtree-cartoon-pop-blast-bubble-dialog-font-png-image_15973.jpg'],
        currentImageIndex: 0,
    
        showPrevBtn: null, //document.getElementById('show-prev'),
        showNextBtn: null, //document.getElementById('show-next'),
        slideImage: null, //document.getElementById('slide-img'),
    
        start: function (elId) {
            // subscribe to events
            var that = this;
            var elSelector = '#' + elId;
            var el = document.querySelector(elSelector); 
            this.showPrevBtn = el.querySelector('.show-prev'),
            this.showNextBtn = el.querySelector('.show-next'),
            this.slideImage = el.querySelector('.slide-img'),
    
            this.showPrevBtn.addEventListener('click', function() {
                that.onShowPrevBtnClick();
            });
            this.showNextBtn.addEventListener('click', function() {
                that.onShowNextBtnClick();
            });
            
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

    return newSlider;
}




// https://youtu.be/LzlOfXaaO6Q?list=PLcvhF2Wqh7DPD5sRK3lw4bjBsKdgY2bPi&t=1