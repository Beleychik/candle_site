// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.shopping_cart_content');

// Отслеживаем клик на странице
window.addEventListener("click", function (event) {

    //УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ ПО НАЖАТИЮ НА КРЕСТИК
    if (event.target.hasAttribute('data-removed')) {    //КРЕСТИК В КОРИЗНЕ
        // Удаляем товар из корзины
        event.target.closest('.shopping_cart').remove();
        //Обновляем коризну в локальном хранилище
        updateStorage();
        //отображенияе количества товаров в корзине
        counterProduct();
        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();
        // Пересчет общей стоимости товаров в корзине
        calcCartPrice();
    }
    // Проверяем что клик был совершен по кнопке "Добавить в корзину" в сообщении
    if (event.target.hasAttribute('data-cart')) {   //КЛИК КНОПКА ДОБАВИТЬ В КОРИЗНУ В СООБЩЕНИИ
        //Закрываем сообщение с товаром и выводим сообщение
        document.getElementsByTagName('html')[0].style.overflow = "auto";
        document.querySelector('.message_click_product').classList.add("hidden");
        document.getElementById("background_for_message").classList.add("hidden");
        alert("Товар добалвен в корзину");
        // Находим карточку с товаром, внутри котрой был совершен клик
        const card = event.target.closest('.message_click_product_content');
        // Собираем данные с этого товара и записываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id, //id выбранного товара
            imgSrc: card.querySelector('.image_message_product').getAttribute('src'), //картинка 
            selectIndexInMessage: document.getElementById("select_message_product").selectedIndex, //порядковый номер выбранного опшина
            title: card.querySelector('.title_message_product').innerText,
            price1: card.dataset.price1, //
            price2: card.dataset.price2,
            counter: card.querySelector('[data-counter]').innerText,
            selected: card.querySelector('.select_message_product'),
        };

        let selectedText = productInfo.selected.options[productInfo.selected.selectedIndex].text;

        // Проверять если ли уже такой товар в корзине
        const sumId = productInfo.id + productInfo.selectIndexInMessage; //объеденяем айди товара и порядковый номер выбранного опшина
        const itemInCart = cartWrapper.querySelector(`[data-id="${sumId}"]`); //записываем в переменную айди

        // если товар есть в корзине и у них одинаковое значение селекта
        if (itemInCart) {
            //сложить их счетчики количества
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в корзине
            // Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = `
            <div class="shopping_cart" data-id="${sumId}">
                <!-- Изображение -->
                <img src="${productInfo.imgSrc}" class="image_shopping_cart">
                <img src="./images/icon_shopping_cart_delete.png" data-removed class="remove_shopping_cart">
                <!-- Блок с характеристиками товара -->
                <div class="description_shopping_cart">
                    <!-- Название товара -->
                    <p class="title_shopping_cart">${productInfo.title}</p>
                    <!-- Выбрать объем товара -->
                    <p class="volume_shopping_cart" id="volume_shopping_cart"> ${selectedText} </p>
                    <div class="counter_and_price">
                        <!-- Выбрать количество товара -->
                        <div class="counter_cart counter-wrapper">
                            <button class="minus" data-action="minus">-</button>
                            <span id="number_counter" class="num_counter" data-counter>${productInfo.counter}</span>
                            <button class="plus" data-action="plus">+</button>
                        </div>
                        <!-- Подсчет суммы одного товара -->
                        <p class="total_tovar"><span data-amount="${productInfo.selected.value}" class="num_total_tovar" id="num_total_tovar">${productInfo.selected.value}</span> грн.</p>
                    </div>
                </div>
            </div>`;
            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        //Обновляем коризну в локальном хранилище
        updateStorage();
        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();
        //отображенияе количества товаров в корзине
        counterProduct();
        // Пересчет общей стоимости товаров в корзине
        calcCartPrice();
    }
});

window.addEventListener("DOMContentLoaded", function () {
    //добавляем в коризну товары ранее добавленные
    initialState();
    // Отображение статуса корзины Пустая / Полная
    toggleCartStatus();
    //отображенияе количества товаров в корзине
    counterProduct();
    // Пересчет общей стоимости товаров в корзине
    calcCartPrice();
});