window.onload = function(){
    let requestURL = '../json/cards-tour.json';
    const basket = document.getElementById('basket_info')
    import_json_for_cards(requestURL, basket);
    async function import_json_for_cards(requestURL, basket){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const cards = await response.json(); 
        // const basket = document.getElementById('basket_info')
        // const arr = CreateArrOfToursLength(basket);
        for(let i = 1; i<=cards.length; i++){
            if(localStorage.getItem(`tour_id_${i}`)){
                CreateTourCardInBasket(cards, i, basket) ;
                // CloseTourCardInBasket(basket);
                // console.log(i);
                // CreateArrOfToursLength(i, tour_arr)   
            }
            if(i==cards.length && localStorage.getItem('basket_counter')!=0){
                // CloseTourCardInBasket(basket);
                SumSum(cards)
                // return;
            }
        }
        // SumSum()
        if(Number(localStorage.getItem('basket_counter')) === 0 || !localStorage.getItem('basket_counter')){
            BasketFields(basket);
        }else{
            CloseTourCardInBasket(basket);
        }
    }
}
// console.log(max_length);


// window.onclick = function(event){
//     let tours = document.querySelectorAll('.b_i_tour')
//     // console.log(tours.length);
//     for(let i = 1; i<=tours.length; i++){
//         let plus = document.getElementById(`id_plus_${i}`);
//         let minus = document.getElementById(`id_minus_${i}`)
//         if(event.target === plus){
//             CounterSum(i)
//             return;
//         }else{continue}
//     }
// }

function BasketFields(basket){
    // let result = document.getElementById('basket_info') 
    let p = document.createElement('p');
    p.classList.add('p-header_3', 'medium');
    p.textContent = 'Корзина пуста. Добавьте в корзину хотя бы один товар'
    basket.appendChild(p);
}

function CreateTourCardInBasket(obj, i, basket){
    // const basket = document.getElementById('basket_info')
    let hr_1 = document.createElement('hr')
    let tour_cont = document.createElement('div');

    let tour_name_block = document.createElement('div');
    let name_img = document.createElement('img');
    let name_block = document.createElement('div');
    let name_name = document.createElement('p');
    let name_counter_block = document.createElement('div')
    let name__counter = document.createElement('div')
    let name__price = document.createElement('p');
    
    let n__counter_plus = document.createElement('div');
    let n__counter_plus_img = document.createElement('img');
    let n__counter_counter = document.createElement('p');
    let n__counter_minus = document.createElement('div');
    let n__counter_minus_img = document.createElement('img');

    let tour_counter_block = document.createElement('div');
    let counter_counter_block = document.createElement('div');
    let counter__counter = document.createElement('div');
    let counter__price = document.createElement('p');
    
    let close_cont = document.createElement('div');
    let close_img = document.createElement('img')

    let c__counter_plus = document.createElement('div');
    let c__counter_plus_img = document.createElement('img');
    let c__counter_counter = document.createElement('p');
    let c__counter_minus = document.createElement('div');
    let c__counter_minus_img = document.createElement('img');
//////////////////////////////////////////////////////////////////

    tour_cont.classList.add('b_i_tour');
    tour_name_block.classList.add('b_i_t_block-tour');
    tour_counter_block.classList.add('b_i_t_block-name');
    
    name_img.classList.add('b_i_t_b_img');
    name_block.classList.add('b_i_t_b_name');
    name_name.classList.add('p-header_3', 'bold');
    name_counter_block.classList.add('b_i_t_b_name-counter');
    counter_counter_block.classList.add('b_i_t_b_counter')
    name__counter.classList.add('b__counter-cont');
    counter__counter.classList.add('b__counter-cont');
    name__price.classList.add('b__counter-price', 'p-header_3', 'blue-color')
    counter__price.classList.add('b__counter-price', 'p-header_3', 'blue-color')
    close_cont.classList.add('b_i_t_b_remove')
    c__counter_minus.classList.add('minus')
    n__counter_minus.classList.add('minus')
    c__counter_plus.classList.add('plus')
    n__counter_plus.classList.add('plus')
//////////////////////////////////////////////////////////////////
    hr_1.setAttribute('id', `hr_id_${i}`)
    tour_cont.setAttribute('id', `b_tour_id_${i}`)

    c__counter_minus.setAttribute('id', `id_minus_${i}`);
    n__counter_minus.setAttribute('id', `id_minus_${i}`)
    c__counter_plus.setAttribute('id', `id_plus_${i}`)
    n__counter_plus.setAttribute('id', `id_plus_${i}`)

    c__counter_counter.setAttribute('id', `id_c_counter_${i}`)
    n__counter_counter.setAttribute('id', `id_n_counter_${i}`)

    // name__price.setAttribute('id', `id_name_price_${i}`)
    // counter__price.setAttribute('id', `id_counter_price_${i}`)

    
    c__counter_plus.onclick = function(){CounterPlus(i, obj)}
    n__counter_plus.onclick = function(){CounterPlus(i, obj)}
    c__counter_minus.onclick = function(){CounterMinus(i, obj, basket)}
    n__counter_minus.onclick = function(){CounterMinus(i, obj, basket)}


    c__counter_minus_img.setAttribute('src', '../svg/minus.svg')
    n__counter_minus_img.setAttribute('src', '../svg/minus.svg')
    c__counter_plus_img.setAttribute('src', '../svg/plus.svg')
    n__counter_plus_img.setAttribute('src', '../svg/plus.svg')

    close_cont.setAttribute('id', `id_remove_${i}`);
    close_img.setAttribute('src', '../svg/x.svg')

    close_cont.onclick = function(){RemoveTour(i, obj, basket)}

//////////////////////////////////////////////////////////////////
    


    name_img.setAttribute('src', obj[i-1].card_img);
    name_name.textContent = obj[i-1].card_name
    name__price.textContent = obj[i-1].card_price + ' ' + '₽'
    counter__price.textContent = obj[i-1].card_price + ' ' + '₽'
    c__counter_counter.textContent = localStorage.getItem(`tour_id_${i}`)
    n__counter_counter.textContent = localStorage.getItem(`tour_id_${i}`)


//////////////////////////////////////////////////////////////////
    basket.appendChild(hr_1)    
    basket.appendChild(tour_cont);
    tour_cont.appendChild(tour_name_block);
    tour_cont.appendChild(tour_counter_block);

    tour_name_block.appendChild(name_img);
    tour_name_block.appendChild(name_block);
    name_block.appendChild(name_name);
    name_block.appendChild(name_counter_block);
    name_counter_block.appendChild(name__counter);
    name_counter_block.appendChild(name__price);
    name__counter.appendChild(n__counter_minus)
    name__counter.appendChild(n__counter_counter)
    name__counter.appendChild(n__counter_plus)
    n__counter_minus.appendChild(n__counter_minus_img)
    n__counter_plus.appendChild(n__counter_plus_img)

    tour_counter_block.appendChild(counter_counter_block);
    tour_counter_block.appendChild(close_cont);
    close_cont.appendChild(close_img);
    counter_counter_block.appendChild(counter__counter);
    counter_counter_block.appendChild(counter__price);
    counter__counter.appendChild(c__counter_minus);
    counter__counter.appendChild(c__counter_counter);
    counter__counter.appendChild(c__counter_plus);
    c__counter_minus.appendChild(c__counter_minus_img)
    c__counter_plus.appendChild(c__counter_plus_img)
}

function CloseTourCardInBasket(basket){
    let hr_2 = document.createElement('hr')
    hr_2.setAttribute('id', 'hr_close')
    basket.appendChild(hr_2)
}

function CheckBasket(basket){
    if(Number(localStorage.getItem('basket_counter'))===0){
        DeleteHR(basket);
        BasketFields(basket);
    }
}

function DeleteHR(basket){
    let hr_2 = document.getElementById('hr_close')
    basket.removeChild(hr_2)
}


// function CreateArrOfToursLength(){
//     let count = 1;
//     let max;
//     do{
//         count++;
//         if(localStorage.getItem(`tour_id_${tour}`)){
//             console.log(`tour_id_${tour}`);
//             max = count;
//             return true
//         }
//     }while(count != 10)
// }




function SumSum(obj, basket){
    let sum_res = document.getElementById('basket_sum');
    let sum = 0;
    for(let i = 1; i<=obj.length; i++){
        if(localStorage.getItem(`tour_id_${i}`)){
                // let numb = obj[i-1].card_price.split(" ")
                // if(localStorage.getItem(`tour_id_${i}`)){
                    // sum += localStorage.getItem(`tour_price_id_${i}`) + localStorage.getItem(`tour_id_${i}`);
                // }else{
                sum += localStorage.getItem(`tour_price_id_${i}`) * localStorage.getItem(`tour_id_${i}`);
                // }
            console.log(sum);
                // console.log(sum);
        }else{continue}
    }
        
    sum_res.textContent = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + "₽";
}


function CounterPlus(i, obj){
    let c_counter = document.getElementById(`id_c_counter_${i}`)
    let n_counter = document.getElementById(`id_n_counter_${i}`)
    let value = Number(localStorage.getItem(`tour_id_${i}`));
    c_counter.textContent = value + 1;
    n_counter.textContent = value + 1;

    localStorage.setItem(`tour_id_${i}`, value + 1)

    // SumSum(obj);
    BasketPlus();
    SumSum(obj);
}

function CounterMinus(i, obj, basket){
    let c_counter = document.getElementById(`id_c_counter_${i}`)
    let n_counter = document.getElementById(`id_n_counter_${i}`)
    let value = Number(localStorage.getItem(`tour_id_${i}`));
    // BasketMinus();
    if(localStorage.getItem(`tour_id_${i}`)-1 === 0){
        BasketMinus();
        RemoveTour(i, obj, basket);
    }else{
        c_counter.textContent = value - 1;
        n_counter.textContent = value - 1;

        localStorage.setItem(`tour_id_${i}`, value - 1)

        BasketMinus();
        SumSum(obj, basket);
        CheckBasket(basket);
    }
}

function RemoveTour(i, obj, basket){
    // const basket = document.getElementById('basket_info')
    let hr = document.getElementById(`hr_id_${i}`)
    let tour = document.getElementById(`b_tour_id_${i}`);
    localStorage.removeItem(`tour_id_${i}`)
    localStorage.removeItem(`tour_price_id_${i}`)
    basket.removeChild(hr);
    basket.removeChild(tour);
    SumSum(obj);
    CheckBasket(basket);
}


function BasketPlus(){
    let c_bas = localStorage.getItem('basket_counter');
    c_bas++
    localStorage.setItem('basket_counter', c_bas) 
}

function BasketMinus(){
    let c_bas = localStorage.getItem('basket_counter');
    c_bas -= 1
    localStorage.setItem('basket_counter', c_bas) 
}