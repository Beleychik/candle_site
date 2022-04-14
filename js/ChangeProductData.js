//счетчик количества товаров сверху
function counterProduct() {
    let counter_header = document.querySelectorAll('.shopping_cart').length;
    document.querySelector('#number_count_shopping_cart').innerText = counter_header;
}