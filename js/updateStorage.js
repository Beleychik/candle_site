//отображение товара в корзине после перезагрузки страницы
const initialState = () => {
    //если локальное хранилище не нулл
    if (localStorage.getItem('products') !== null) {
        document.querySelector('.shopping_cart_content').innerHTML = localStorage.getItem('products');
    }
};

//Обновляем локальное хранилище
const updateStorage = () => {
    let parent = document.querySelector('.shopping_cart_content');
    let html = parent.innerHTML;
    html = html.trim();
    //если в хтмл что-то есть
    if (html.length) {
        localStorage.setItem('products', html);
    }
    //если ничего нет
    else {
        localStorage.removeItem('products');
    }
};