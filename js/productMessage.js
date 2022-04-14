window.addEventListener("click", function (event) {
    let message_click_product = document.querySelector('.message_click_product');
    //скрыть блок добавления товара в корзину по нажатию на крестик или фон
    if (event.target.classList.contains('exit_message_click_product') || event.target.classList.contains('background_for_message')) {
        document.getElementsByTagName('html')[0].style.overflow = "auto";
        message_click_product.classList.add("hidden");
        document.getElementById("background_for_message").classList.add("hidden");
    }
    //если нажата кнопка "добавить в корзину" на карточке товара
    if (event.target.classList.contains('button_product')) {
        //войти в блок
        message_click_product.classList.remove("hidden");
        document.getElementById("background_for_message").classList.remove("hidden"); //add
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        //проверка есть ли в товаоре блок с товаром
        const itemInMessage = document.querySelector('.message_click_product_content');
        if (itemInMessage) {
            //если есть, то убираем, чтобы не дублировались бесконечное кол-во раз товары
            document.querySelector('.message_click_product_content').remove();
        }
        //Получаем данные с карточки товара
        const nearestBlock = event.target.closest('.card');
        const productInformation = {
            id: nearestBlock.dataset.id,
            imageSrc: nearestBlock.querySelector('.photo_tovar_card').getAttribute('src'),
            titleProduct: nearestBlock.querySelector('.title_tovar_card').innerText,
            price_one: nearestBlock.dataset.price1,
            price_two: nearestBlock.dataset.price2,
        };
        //записыаем в переменную часть кода с заполненными данными
        const innerTextproductMessage = `
        <div class="message_click_product_content" data-id="${productInformation.id}" data-price1="${productInformation.price_one}" data-price2="${productInformation.price_two}">
            <!-- Изображение товара -->
            <img src="${productInformation.imageSrc}" class="image_message_product">
            <!-- Блок с характеристиками товара  -->
            <div class="description_message_product_content">
                <!-- Название товара -->
                <p class="title_message_product">${productInformation.titleProduct}</p>
                <!-- Выбрать объем товара -->
                <select class="select_message_product" name="" id="select_message_product">
                    <option value="${productInformation.price_one}">100 мл.</option>
                    <option value="${productInformation.price_two}">200 мл.</option>
                </select>
                <!-- Выбрать кол-во товара -->
                <div class="counter_message counter-wrapper">
                    <button class="minus" data-action="minus">-</button>
                    <span id="number_counter" class="num_counter" data-counter>1</span>
                    <button class="plus" data-action="plus">+</button>
                </div>
                <!-- Кнопка "добавить в корзину" -->
                <button data-cart class="to_shopping_cart">Добавить в корзину</button>
            </div>
        </div>
        `;
        //выводим переменную с блоком
        message_click_product.insertAdjacentHTML('beforeend', innerTextproductMessage);

    }
});