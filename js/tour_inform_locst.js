window.onload = function(){
    const img = document.getElementById('t-page_img');
    const name = document.getElementById('t-page_name');
    const price = document.getElementById('t-page_price')
    const solution = document.getElementById('t-category_solution');
    const time = document.getElementById('t-category_time');
    const level_action = document.getElementById('t-category_level-action');
    const city = document.getElementById('t-category_city');
    const description = document.getElementById('t-page_description')

    img.style.backgroundImage = `url(${localStorage.getItem("card_img")})`;

    name.textContent = localStorage.getItem('card_name');
    price.textContent = `${localStorage.getItem('card_price')} ₽`;
    solution.textContent = localStorage.getItem('card_category_solution');
    time.textContent = localStorage.getItem('card_category_time');
    level_action.textContent = localStorage.getItem('card_category_level-action');
    city.textContent = localStorage.getItem('card_category_city');
    description.textContent = localStorage.getItem('card_description');
}