function calcCartPrice() {
    const cartWrapper = document.querySelector('.shopping_cart_content');
    const cartItems = document.querySelectorAll('.shopping_cart');
    const totalPriceEl = document.querySelector('.total_price');

    // Общая стоимость товаров
    let priceTotal = 0;
    // Обходим все блоки с ценами в корзине
    cartItems.forEach(function (item) {
        // Находим количество товара
        const amountEl = item.querySelector('[data-counter]');
        // Находим подытог количество товара
        const priceEl = item.querySelector('.num_total_tovar');
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        priceTotal += parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    });
    /* // Обходим все блоки с ценами в корзине (variant 2)
    cartItems.forEach(function(item){
        // Находим количество товара
        const amountEl = item.querySelector('[data-counter]');
        // Находим подытог количество товара
        const priceEl = item.querySelector('.num_total_tovar');
        
        // Добавляем стоимость товара в общую стоимость (кол-во * цену)
        priceTotal += parseInt(amountEl.innerText) * parseInt(priceEl.getAttribute('data-amount'));
    }); */

    totalPriceEl.innerText = priceTotal;

    /* console.log("1111");
    if(priceTotal == 0){
        console.log("кнопка скрыта");
    }
    else if(priceTotal > 0){
        console.log("кнопка октрыта");

        if(priceTotal>=800){
            console.log("бесплатная доставка");
        }
    } */
}