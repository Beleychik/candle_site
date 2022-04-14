//НАЖАТИЯ - ПРОКРУТКА
const $arrow = document.querySelector('.arrow');
const $photo_background = document.querySelector('.photo_background');
// При клике на кнопку
$arrow.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $photo_background.scrollIntoView({
        block: 'center', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

const $button = document.querySelector('.button');
const $shop = document.querySelector('.shop');
// При клике на кнопку
$button.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $shop.scrollIntoView({
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

const $main_navigation = document.querySelector('.main_navigation');
const $begin_block = document.querySelector('.begin_block');
// При клике на кнопку
$main_navigation.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $begin_block.scrollIntoView({
        block: 'center', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

const $about_navigation = document.querySelector('.about_navigation');
const $centre_block = document.querySelector('.centre_block');
// При клике на кнопку
$about_navigation.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $centre_block.scrollIntoView({
        block: 'center', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

const $shop_navigation = document.querySelector('.shop_navigation');
// При клике на кнопку
$shop_navigation.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $shop.scrollIntoView({
        block: 'start', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});

//HEADER - функции

//По нажатию на кнопку открыть блок корзины
var isMenuShow = false;
var shopping_cart_navigation = document.querySelector(".shopping_cart_navigation");
var shopping_cart_wrapper = document.querySelector(".shopping_cart_wrapper");
shopping_cart_navigation.addEventListener("click", function () {
    if (isMenuShow) {
        isMenuShow = false;
    } else {
        shopping_cart_wrapper.classList.remove("hidden");
        document.getElementById("background").classList.remove("hidden"); //add
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        isMenuShow = true;
    }
});


window.addEventListener('click', function (event) {
    // по нажатию на фон или на крестик закрыть блок корзины
    if (event.target.classList.contains('exit_shopping_cart') || event.target.classList.contains('background')) {
        document.getElementsByTagName('html')[0].style.overflow = "auto";
        shopping_cart_wrapper.classList.add("hidden");
        document.getElementById("background").classList.add("hidden");
    }
    //НАЖАТИЕ НА БУРГЕР МЕНЮ
    var burgerCheckbox = document.querySelector('#burger_menu__toggle');
    if (burgerCheckbox.checked) {
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        document.querySelector('.burger_menu__box').style.display = "flex";
        document.querySelector('.burger_menu__box').style.visibility = "visible";
        document.querySelector('.burger_menu__box').style.left = "0px";
    } else {
        document.getElementsByTagName('html')[0].style.overflow = "auto";
        document.querySelector('.burger_menu__box').style.visibility = "none";
        document.querySelector('.burger_menu__box').style.left = "100%";
    }
    // по нажатию на карточку товара, перенаправляет на полное описание
    if (event.target.classList.contains('photo_tovar_card') || event.target.classList.contains('title_tovar_card')) {
        const srcDescr = event.target.closest('.card');
        window.location.href = srcDescr.dataset.description;
    }

    //если было нажатие на какой-то из навигаци бургера
    if (event.target.classList.contains('burger_menu__item')) {
        //имитируем клик по иконке бургера, чтобы закрыть меню
        document.querySelector('#burger_menu__toggle').click();

        const main_nav = document.querySelector('.main_navig');
        // При клике на кнопку
        main_nav.addEventListener('click', e => {
            // Прокрутим страницу к форме
            $begin_block.scrollIntoView({
                block: 'center', // к ближайшей границе экрана
                behavior: 'smooth', // и плавно
            });
        });
        const about_nav = document.querySelector('.about_navig');
        // При клике на кнопку
        about_nav.addEventListener('click', e => {
            // Прокрутим страницу к форме
            $centre_block.scrollIntoView({
                block: 'center', // к ближайшей границе экрана
                behavior: 'smooth', // и плавно
            });
        });
        const shop_nav = document.querySelector('.shop_navig');
        // При клике на кнопку
        shop_nav.addEventListener('click', e => {
            // Прокрутим страницу к форме
            $shop.scrollIntoView({
                block: 'start', // к ближайшей границе экрана
                behavior: 'smooth', // и плавно
            });
        });
    }
});