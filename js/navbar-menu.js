// window.onload - это событие, которое срабатывает, когда вся страница (включая все зависимые ресурсы, такие как изображения и видео) полностью загружена и готова к манипуляции.
window.onload=function(){
    const btn_1500 = document.getElementById('header_btn-nav-1500');
    const btn_1200 = document.getElementById('header_btn-nav-1200');
    const btn_1024 = document.getElementById('header_btn-nav-1024');
    const btn_768 = document.getElementById('header_btn-nav-768');
    const btn_480 = document.getElementById('header_btn-nav-480');

    const menu_1500 = document.getElementById('header_menu-nav-1500');
    const menu_1200 = document.getElementById('header_menu-nav-1200');
    const menu_1024 = document.getElementById('header_menu-nav-1024');
    const menu_768 = document.getElementById('header_menu-nav-768');
    const menu_480 = document.getElementById('header_menu-nav-480');

    // contains - Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод.
    
    btn_1500.addEventListener("click", function(){
        check_nav(btn_1200)
        nav_function(menu_1500)
    });
    // btn_1200.addEventListener("click", nav_function(menu_1200));
    // btn_1024.addEventListener("click", nav_function(menu_1024));
    // btn_768.addEventListener("click", nav_function(menu_768));
    // btn_480.addEventListener("click", nav_function(menu_480));
}