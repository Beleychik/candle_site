// функция удаления товара, либо добавления, если товара в коризне нет, или наоборот есть
function toggleCartStatus() {

    const cartWrapper = document.querySelector('.shopping_cart_content');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('hidden');
    } else {
        cartEmptyBadge.classList.remove('hidden');
        //отображенияе количества товаров в корзине
        counterProduct();
    }
}