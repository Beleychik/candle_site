document.addEventListener("click", function(event){
    // по нажатию на карточку товара, перенаправляет на полное описание
    if (event.target.classList.contains('photo_tovar_card') || event.target.classList.contains('title_tovar_card')) {
        const parent = event.target.closest('.card');
        const ProductInfo = {
            id: parent.dataset.id,
            titleProduct: parent.querySelector('.title_tovar_card').innerText,
            price1: parent.dataset.price1,
            price2: parent.dataset.price2,
            imgSrc: parent.querySelector('.photo_tovar_card').getAttribute('src'),
            text1: parent.querySelector('.title_tovar_card').getAttribute('data-text1'),
            text2: parent.querySelector('.title_tovar_card').getAttribute('data-text2'),
            text3: parent.querySelector('.title_tovar_card').getAttribute('data-text3')
        }
        localStorage.setItem("productInfo", JSON.stringify(ProductInfo));

        window.location.href = "productInfo/product.html";
    }
});