const productsContainer = document.querySelector('#products-container');


/* Products version 1.0 */


async function getProductsV1() {
    const responseV1 = await fetch('./js/productsV1.json');
    const productsArrayV1 = await responseV1.json();
    renderProductsV1(productsArrayV1);
}
getProductsV1();

function renderProductsV1(productsArrayV1) {
    productsArrayV1.forEach(function (itemV1) {
        const productHTMLv1 = `
        <div class="card tovar" data-description="${itemV1.dataDescription}" data-price1="${itemV1.dataPrice1}" data-price2="${itemV1.dataPrice2}" data-id="${itemV1.id}">
            <div src="${itemV1.imgSrc}" class="photo_tovar photo_tovar_card" style="background-image: url(${itemV1.imgSrc})"></div>
            <div class="tovar_photo_description Descr">
                <div class="title_tovar title_tovar_card">${itemV1.title}</div>
                <div class="price_tovar">от <span class="price_tovar_num">${itemV1.dataPrice1} грн.</span> </div>
                <a class="buy_button button_product">Добавить в корзину</a>
            </div>
        </div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTMLv1);
    });
}


/* Products version 2.0 */


async function getProductsV2() {
    const responseV2 = await fetch('./js/productsV2.json');
    const productsArrayV2 = await responseV2.json();
    renderProductsV2(productsArrayV2);
}
getProductsV2();

function renderProductsV2(productsArrayV2) {
    productsArrayV2.forEach(function (itemV2) {
        const productHTMLv2 = `
        <div class="card new_category" data-description="${itemV2.dataDescription}" data-price1="${itemV2.dataPrice1}" 
            data-price2="${itemV2.dataPrice1}" data-id="${itemV2.id}">
            <div src="${itemV2.imgSrc}" style="background-image: url(${itemV2.imgSrc})" class="image_new_category photo_tovar_card"></div>
            <div class="description_block Descr">
                <div class="title_new_category title_tovar_card">${itemV2.title}</div>
                <div class="description_text1">${itemV2.Descr1}</div>
                <div class="description_text2">${itemV2.Descr2}</div>
                <div class="price_new_category">Цена набора - <span class="price_tovar_num">${itemV2.dataPrice1} грн.</span></div>
                <a class="button_new_category button_product">Добавить в корзину</a>
            </div>
        </div>`;
        productsContainer.insertAdjacentHTML('afterbegin', productHTMLv2);
    });
}