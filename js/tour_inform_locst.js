window.onload = function(){
    const img = document.getElementById('t-page_img');
    const name = document.getElementById('t-page_name');
    const price = document.getElementById('t-page_price')
    const solution = document.getElementById('t-category_solution');
    const time = document.getElementById('t-category_time');
    const level_action = document.getElementById('t-category_level-action');
    const city = document.getElementById('t-category_city');
    const description = document.getElementById('t-page_description')
    
    let price_id = localStorage.getItem('tour_price_value');
    let tour_id = localStorage.getItem('tour_id');

    img.style.backgroundImage = `url(${localStorage.getItem("card_img")})`;

    name.textContent = localStorage.getItem('card_name');
    price.textContent = `${localStorage.getItem('card_price')} ₽`;
    solution.textContent = localStorage.getItem('card_category_solution');
    time.textContent = localStorage.getItem('card_category_time');
    level_action.textContent = localStorage.getItem('card_category_level-action');
    city.textContent = localStorage.getItem('card_category_city');
    description.textContent = localStorage.getItem('card_description');

    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    let counter = document.getElementById('counter');
    if(!localStorage.getItem('counter')){
        localStorage.setItem('counter', 1);
        counter.textContent = 1;
    }else{
        counter.textContent = localStorage.getItem('counter');
    }

    plus.onclick = function(){CounterPlus(counter)}
    minus.onclick = function(){CounterMinus(counter)}

    const book_btn = document.getElementById("book_button")
    book_btn.onclick = function(){Basket(tour_id, price_id)}
}

function Book(i, price){
    if(!localStorage.getItem(`tour_id_${i}`)){
        localStorage.setItem(`tour_id_${i}`, localStorage.getItem('counter'))
        localStorage.setItem(`tour_price_id_${i}`, price)
    }else{
        let tour_counter = Number(localStorage.getItem(`tour_id_${i}`));
        tour_counter += Number(localStorage.getItem('counter'));
        localStorage.setItem(`tour_id_${i}`,tour_counter);
    }
}

function Basket(i, price){
    if(localStorage.getItem('basket_counter') === 0){
        // c_bas++;
        localStorage.setItem('basket_counter', localStorage.getItem('counter')) 
        Book(i, price)
    }else{
        c_bas = Number(localStorage.getItem('basket_counter'));
        c_bas += Number(localStorage.getItem('counter'))
        localStorage.setItem('basket_counter', c_bas) 
        Book(i, price)
    }
}

function CounterPlus(counter){
    let c_counter = Number(localStorage.getItem('counter'))
    c_counter++;
    counter.textContent = c_counter;
    localStorage.setItem('counter', c_counter)    
}

function CounterMinus(counter){
    let c_counter = Number(localStorage.getItem('counter'))
    c_counter--;
    if(c_counter === 0){
        return
    }else{
        counter.textContent = c_counter;
        localStorage.setItem('counter', c_counter);
    }
}


