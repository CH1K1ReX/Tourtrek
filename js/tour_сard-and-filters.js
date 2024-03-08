let c_bas = 0;
let id_counter=0;

// let counter = document.getElementById('counter')
// console.log(counter);
window.onload = () =>{
    Delete_save();
    checkBasket();
    let requestURL = '../json/cards-tour.json';
    let requestURL_filter = '../json/filters-tour.json';

    import_json_for_cards(requestURL);
    import_json_for_filters(requestURL_filter);

    async function import_json_for_cards(requestURL){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const cards = await response.json(); 

        for(let i = 0; i<cards.length; i++){
            create_tour_card(cards, i);
        }
    }
    async function import_json_for_filters(requestURL){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const tour_filters = await response.json(); 
        for(let i = 0; i<tour_filters.length; i++){
            create_tour_filter(tour_filters, i);
            create_adap_tour_filter(tour_filters, i);
        }
    }

    window.onclick=function(event){
        let adap_filters = document.querySelectorAll('.t-a_f_cont');
        let tour_cards = document.querySelectorAll('.tour_card-cont');
        for(let i = 0; i<adap_filters.length; i++){
            let a_f_name = document.getElementById(`adap_filter_name_${i}`);
            let a_f_block = document.getElementById(`adap_filter_block_${i}`);
            if(event.target === a_f_name){
                console.log(event.target);
                if(!a_f_block.classList.contains('hide')){
                    a_f_block.classList.add('hide');
                }else{
                    a_f_block.classList.remove('hide');
                }
            }else{continue}
        }
        for(let i = 1; i<=tour_cards.length; i++){
            let tour_img_id = document.getElementById(`tour_img_id_${i}`);
            let tour_name_id = document.getElementById(`tour_name_id_${i}`);
            let tour_book_id = document.getElementById(`tour_book_id_${i}`);
            let tour_details_id = document.getElementById(`tour_details_id_${i}`);
            if(event.target === tour_img_id || event.target === tour_name_id || event.target === tour_details_id){
                import_json_for_card_tours(requestURL, i-1)
                window.location.href = "../html/tour-page.html";
                // console.log(i);
                return;
            }
            else if(event.target === tour_book_id){
                import_json_for_book(requestURL, i-1)
            }else{continue};
        }
    }  
    async function import_json_for_card_tours(requestURL, num){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const cards = await response.json(); 
        Save(cards, num);
    } 
    async function import_json_for_book(requestURL, num){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const cards = await response.json(); 
        Basket(cards, num);
    }   
}

function create_tour_card(obj, num){
    let result = document.getElementById('card_tour_result');
    let tour_cont = document.createElement('div');
    let tour_img = document.createElement('div');
    let tour_name = document.createElement('p');
    let tour_block = document.createElement('div');

    let tour_block_price = document.createElement('div');
    let tour_b_price_p = document.createElement('p');
    let tour_b_price_p_cost = document.createElement('span');
    let tour_b_price_p_one = document.createElement('span');

    let tour_block_buttons = document.createElement('div');
    let tour_b_b_btn_book = document.createElement('button');
    let tour_b_b_btn_details = document.createElement('button');
////////////////////////////////////////////////////////////////////
    tour_cont.classList.add('tour_card-cont');
    tour_img.classList.add('tour_card_img');
    tour_name.classList.add('t_p-header_1', 'medium');
    tour_block.classList.add('tour_card_block-cont');

    tour_block_price.classList.add('tour_card_price-cont');
    tour_b_price_p_cost.classList.add('t_p-header_2');
    tour_b_price_p_one.classList.add('t_p-header_3', 'blue-color');

    tour_block_buttons.classList.add('tour_card_buttons');
    tour_b_b_btn_book.classList.add('t_p-header_3', 'medium');
    tour_b_b_btn_details.classList.add('t_p-header_3', 'medium');
////////////////////////////////////////////////////////////////////
    tour_img.setAttribute('id', `tour_img_id_${obj[num].id}`);
    tour_name.setAttribute('id', `tour_name_id_${obj[num].id}`);
    tour_b_b_btn_book.setAttribute('id', `tour_book_id_${obj[num].id}`);
    tour_b_b_btn_details.setAttribute('id', `tour_details_id_${obj[num].id}`);
////////////////////////////////////////////////////////////////////
    tour_img.style.backgroundImage = `url(${obj[num].card_img})`;
    tour_name.textContent = obj[num].card_name;
    tour_b_price_p_cost.textContent = `${obj[num].card_price} ₽`;
    if(obj[num].card_check_price_one === "one"){
        tour_b_price_p_one.textContent = `за ${obj[num].card_price_one} чел.`;
    }
    if(obj[num].card_check_price_one === "animal"){
        tour_b_price_p_one.textContent = `за ${obj[num].card_price_one} животн.`;
    }
    if(obj[num].card_check_price_one === "group"){
        tour_b_price_p_one.textContent = `за ${obj[num].card_price_one} групп.`;
    }

    tour_b_b_btn_book.textContent = 'Забронировать';
    tour_b_b_btn_details.textContent = 'Подробнее';
////////////////////////////////////////////////////////////////////
    result.appendChild(tour_cont);
    tour_cont.appendChild(tour_img);
    tour_cont.appendChild(tour_name);
    tour_cont.appendChild(tour_block);
    tour_block.appendChild(tour_block_price);
    tour_block.appendChild(tour_block_buttons);
    tour_block_price.appendChild(tour_b_price_p);
    tour_b_price_p.appendChild(tour_b_price_p_cost);
    tour_b_price_p.appendChild(tour_b_price_p_one);
    tour_block_buttons.appendChild(tour_b_b_btn_book);
    tour_block_buttons.appendChild(tour_b_b_btn_details);
}

function create_tour_filter(obj, num){
    let result = document.getElementById('filter_result');
    let filter_cont = document.createElement('div');
    let filter_name = document.createElement('p');
////////////////////////////////////////////////////////////////////
    filter_cont.classList.add('tour_filter-cont');
    filter_name.classList.add('header-3', 'blue-color', 'medium');
////////////////////////////////////////////////////////////////////
    filter_name.textContent = obj[num].filter_name;
////////////////////////////////////////////////////////////////////
    result.appendChild(filter_cont);
    filter_cont.appendChild(filter_name);
////////////////////////////////////////////////////////////////////
    if(obj[num].checkbox_check === true){
        let filter_block = document.createElement('div');
        filter_block.classList.add('t_f_checkboxs-cont');
        filter_cont.appendChild(filter_block)
        for(let j = 0; j<obj[num].filters.length; j++){
            let filter_b_cont = document.createElement('div')
            let filter_b_checkbox = document.createElement('input');
            let filter_b_name = document.createElement('p');

            filter_b_cont.classList.add('t_f_checkbox');
            filter_b_checkbox.setAttribute('type', 'checkbox');

            filter_b_name.textContent = obj[num].filters[j];

            filter_block.appendChild(filter_b_cont);
            filter_b_cont.appendChild(filter_b_checkbox);
            filter_b_cont.appendChild(filter_b_name);
        }
    }
    if(obj[num].checkbox_check === false){
        let filter_block = document.createElement('div');
        filter_block.classList.add('t_f_container');
        filter_cont.appendChild(filter_block)
        for(let j = 0; j<obj[num].filters.length; j++){
            let filter_b_cont = document.createElement('div')
            let filter_b_name = document.createElement('p');

            filter_b_cont.classList.add('t_f_c_text');

            filter_b_name.textContent = obj[num].filters[j];

            filter_block.appendChild(filter_b_cont);
            filter_b_cont.appendChild(filter_b_name);
        }
    }
}

function create_adap_tour_filter(obj, num){
    let result = document.getElementById('adap_filter_result');
    let filter_cont = document.createElement('div');
    let filter_name = document.createElement('p');
    let filter_block = document.createElement('div')
////////////////////////////////////////////////////////////////////
    filter_cont.classList.add('t-a_f_cont');
    filter_name.classList.add('t-a_f_c_name');
    filter_block.classList.add('t-a_f_block-cont', 'hide')
////////////////////////////////////////////////////////////////////
    filter_name.setAttribute('id', `adap_filter_name_${num}`);
    filter_block.setAttribute('id', `adap_filter_block_${num}`);
////////////////////////////////////////////////////////////////////
    filter_name.textContent = obj[num].filter_name;
////////////////////////////////////////////////////////////////////
    result.appendChild(filter_cont);
    filter_cont.appendChild(filter_name);
    filter_cont.appendChild(filter_block);
////////////////////////////////////////////////////////////////////
    if(obj[num].checkbox_check === true){
        let filter_block_checkbox = document.createElement('div');
        filter_block_checkbox.classList.add('t-a_f_c_b_chs-cont');
        filter_block.appendChild(filter_block_checkbox);
        for(let j = 0; j<obj[num].filters.length; j++){
            let filter_b_cont = document.createElement('div');
            let filter_b_checkbox = document.createElement('input');
            let filter_b_name = document.createElement('p');

            filter_b_cont.classList.add('t-a_f_c_chs_checkbox');
            filter_b_checkbox.setAttribute('type', 'checkbox');

            filter_b_name.textContent = obj[num].filters[j];

            filter_block_checkbox.appendChild(filter_b_cont);
            filter_b_cont.appendChild(filter_b_checkbox);
            filter_b_cont.appendChild(filter_b_name);
        }
    }
    if(obj[num].checkbox_check === false){
        let filter_block_text = document.createElement('div');
        filter_block_text.classList.add('t-a_f_c_b_c_text-cont');
        filter_block.appendChild(filter_block_text)
        for(let j = 0; j<obj[num].filters.length; j++){
            let filter_b_cont = document.createElement('div');
            let filter_b_name = document.createElement('p');

            filter_b_cont.classList.add('t-a_f_c_c_cont');

            filter_b_name.textContent = obj[num].filters[j];

            filter_block_text.appendChild(filter_b_cont);
            filter_b_cont.appendChild(filter_b_name);
        }
    }
    ////////////////////////////////////////////////////////////////////
    // filter_name.onclick = function(){open_adap_filter(num)};
    ////////////////////////////////////////////////////////////////////
    let hr = document.createElement('hr');
    filter_cont.appendChild(hr);
}

function open_block(id){
    let filters = document.getElementById(id)
    if(!filters.classList.contains('hide')){
        filters.classList.add('hide')
    }else{
        filters.classList.remove('hide')
    }
}

/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////Local Storage ////////

function Save(obj, num){
    localStorage.setItem('card_img', obj[num].card_img);
    localStorage.setItem('card_name', obj[num].card_name);
    localStorage.setItem('card_price', obj[num].card_price);
    localStorage.setItem('card_description', obj[num].card_description);
    localStorage.setItem('card_category_solution', obj[num].card_category.solution);
    localStorage.setItem('card_category_time', obj[num].card_category.time);
    localStorage.setItem('card_category_level-action', obj[num].card_category.level_action);
    localStorage.setItem('card_category_city', obj[num].card_category.city);
    localStorage.setItem('card_check_price_one', obj[num].card_check_price_one);
    localStorage.setItem('card_price_one', obj[num].card_price_one);
    localStorage.setItem('tour_id', obj[num].id)
    localStorage.setItem('tour_price_value', obj[num].card_price_value)
}

function Delete_save(){
    localStorage.removeItem('card_img');
    localStorage.removeItem('card_name');
    localStorage.removeItem('card_price');
    localStorage.removeItem('card_description');
    localStorage.removeItem('card_category_solution');
    localStorage.removeItem('card_category_time');
    localStorage.removeItem('card_category_level-action');
    localStorage.removeItem('card_category_city');
    localStorage.removeItem('card_check_price_one');
    localStorage.removeItem('card_price_one');
    localStorage.removeItem('tour_id');
    localStorage.removeItem('tour_price_value');
    localStorage.removeItem('counter');
}

function checkBasket(){
    if(!localStorage.getItem('basket_counter') > 0){
        return localStorage.setItem('basket_counter', 0);
    }else{
        return;
    }
}

function Basket(obj, num){
    if(localStorage.getItem('basket_counter') === 0){
        // c_bas++;
        localStorage.setItem('basket_counter', 1) 
        Book(obj, num)
    }else{
        c_bas = localStorage.getItem('basket_counter');
        c_bas++;
        localStorage.setItem('basket_counter', c_bas) 
        Book(obj, num)
    }
}

function Book(obj, num){
    if(!localStorage.getItem(`tour_id_${obj[num].id}`)){
        // id_counter++;
        localStorage.setItem(`tour_id_${obj[num].id}`, 1)
        if(!localStorage.getItem(`tour_price_id_${obj[num].id}`)){
            localStorage.setItem(`tour_price_id_${obj[num].id}`, obj[num].card_price_value)

        }
    }else{
        // for(let i = 1; i<localStorage.getItem('basket_counter');i++){
            // if(!localStorage.getItem(`tour_id_${obj[num].id}`+'_'+i)){
            //     localStorage.setItem(`tour_id_${obj[num].id}`+'_'+i, obj[num].id);
            //     console.log(true);
            //     return;
            // }
        // }
        let tour_counter = localStorage.getItem(`tour_id_${obj[num].id}`);
        tour_counter++;
        localStorage.setItem(`tour_id_${obj[num].id}`, tour_counter);
        if(!localStorage.getItem(`tour_price_id_${obj[num].id}`)){
            localStorage.setItem(`tour_price_id_${obj[num].id}`, obj[num].card_price_value)

        }
    }
}