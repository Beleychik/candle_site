const productInfo = JSON.parse(localStorage.getItem("productInfo"));
const parentBlock = document.querySelector('.tovar_description_block');

let infoHTML;
//проверяем айдишники товаров
switch(parseInt(productInfo.id)){
    case 07:
        infoHTML = `
        <div class="photo_tovar" style="background-image: url(.${productInfo.imgSrc})"></div>
            <div class="tovar_description">
                <div class="name_tov">${productInfo.titleProduct}</div>
                <div class="price_tov">от ${productInfo.price1} до ${productInfo.price2} грн.</div>
                <div class="composition">
                    <div class="title">Подробнее о наборе:</div>
                    <div class="text1">Набор, с помощью которого вы сможете самостоятельно создать аромасвечу.</div>
                    <div class="text2">Вам всего лишь <b>необходимо выбрать</b> аромат свечи и её объем.</div>
                    <div class="detail_description">
                        <div class="article_detail_descr">В самом наборе вы сможете найти:</div>
                        <ul class="list_tovar">
                            <li>инструкцию</li>
                            <li>баночку</li>
                            <li>воск</li>
                            <li>ароматизотор</li>
                            <li>деревянный фитиль</li>
                            <li>бамбуковые палочки</li>
                            <li>наклейки</li>
                        </ul>
                    </div>
                </div>
                <div class="button">
                    <a href="../zakaz_candle_box/zakaz_candle_box.html" class="in_button">заказать</a>
                </div>
            </div>`;
        break;
    default:
        infoHTML = `
            <div class="photo_tovar" style="background-image: url(.${productInfo.imgSrc})"></div>
            <div class="tovar_description">
                <div class="name_tov">${productInfo.titleProduct}</div>
                <div class="price_tov">от ${productInfo.price1} до ${productInfo.price2} грн.</div>
                <div class="composition">
                    <div class="title">Состав:</div>
                    <div class="text1"><b>Верхние ноты:</b> ${productInfo.text1} </div>
                    <div class="text2"><b>Сердце аромата:</b> ${productInfo.text2}  </div>
                    <div class="text3"><b>База:</b> ${productInfo.text3} </div>
                    <div class="price_title">Ценa:</div>
                    <div class="volume100_price"><b>100 мл</b> - ${productInfo.price1} грн</div>
                    <div class="volume200_price"><b>200 мл</b> - ${productInfo.price2} грн</div>
                </div>
                <div class="button">
                    <a href="../zakaz/zakaz.html" class="in_button">заказать</a>
                </div>
            </div>`;
            break;
}
parentBlock.insertAdjacentHTML('beforeend', infoHTML);

document.addEventListener("click", function(event){
    if(event.target.classList.contains('exit')){
        localStorage.removeItem("productInfo");
    }
});