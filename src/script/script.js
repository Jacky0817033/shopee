window.onload = function() {

/* show QRcode when hovering*/

var download = document.getElementById('download');
var qrcode = document.getElementById('qrcode');

download.addEventListener('mouseover', showQRcodeFn);
download.addEventListener('mouseout', removeQRcodeFn);

function showQRcodeFn(){
    qrcode.classList.remove('qrcode-remove');
    qrcode.classList.add('qrcode-show');
}

function removeQRcodeFn(){
    qrcode.classList.remove('qrcode-show');
    qrcode.classList.add('qrcode-remove');
}


/*  show info when hovering  */


var info = document.getElementById('info');
var card = document.getElementById('card');
info.addEventListener('mouseover', function(){
    card.style.display = 'block';
    console.log(1);
});

info.addEventListener('mouseout', function(){
    card.style.display = 'none';
    console.log(4);
})

/********* Banner change function**********/

var i = 0;
var bannerImages = [];
var time = null;

//Img list
bannerImages[0] = './src/img/banner1.jpg';
bannerImages[1] = './src/img/banner2.jpg';
bannerImages[2] = './src/img/banner3.jpg';

document.banners.src = bannerImages[0];

leftArrow = document.getElementById('left-arrow');
rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', leftArrowFn);
rightArrow.addEventListener('click', rightArrowFn);

//Banner change function
function leftArrowFn(){
    i--;
    if(i < 0){
        i = 2;
    }
    document.banners.src = bannerImages[i];
    clearInterval(time);
    changePhotoGo();
}

function rightArrowFn() {
    i++;
    if(i > 2){
        i = 0;
    }
    document.banners.src = bannerImages[i];
    clearInterval(time);
    changePhotoGo();
}


//change photo auto
changePhotoGo();

function changePhotoGo(){
    time = setInterval(function(){
        i++;
        if(i > 2){
            i = 0;
        }
        document.banners.src = bannerImages[i];
    }, 3000)
}

/*      shopeeStoreImg       */

var sotreIdx = 0;
var shopeeStoreImages = [];
shopeeStoreImages[0] = './src/img/shopeeStoreImg1.jpg';
shopeeStoreImages[1] = './src/img/shopeeStoreImg2.jpg'
shopeeStoreImages[2] = './src/img/shopeeStoreImg3.jpg'

document.shopeeStoreImg.src = shopeeStoreImages[0];

changeshopeeStoreImagesGo();

function changeshopeeStoreImagesGo(){
    time = setInterval(function(){
        sotreIdx++;
        if(sotreIdx > 2){
            sotreIdx = 0;
        }
        document.shopeeStoreImg.src = shopeeStoreImages[sotreIdx];
    }, 3000)
}














}