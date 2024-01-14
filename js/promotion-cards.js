// вариант через импорт:
// import cards from '../json/test.json' assert {type: 'json'};
window.onload=function(){
    let requestURL = '../json/cards-promotion.json';
    import_json_for_cards(requestURL)
    async function import_json_for_cards(requestURL){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const cards = await response.json(); 

        for(let i = 0; i<cards.length; i++){
            create_prom_card(cards, i)
        }
    }

    function create_prom_card(obj, num){
        let result = document.getElementById('prom-result')
        let prom_cont = document.createElement('div');
        let prom_img = document.createElement('div');
        let prom_name = document.createElement('p');
        let prom_desc = document.createElement('p');
        let prom_date = document.createElement('p');

        prom_cont.onclick = function(){open_popup()};

        prom_cont.classList.add('prom_card-cont');
        prom_img.classList.add('prom_card_img');
        prom_name.classList.add('prom_card_name', 'medium');
        prom_desc.classList.add('prom_card_description', 'p-header_4');
        prom_date.classList.add('prom_card_date', 'blue-color', 'bold', 'p-header_5');

        prom_cont.setAttribute('id', obj[num].id_html);

        prom_img.style.backgroundImage = `url(${obj[num].img_card})`
        prom_name.textContent = obj[num].name_card;
        prom_desc.textContent = obj[num].description_card;
        prom_date.textContent = obj[num].date_card;

        result.appendChild(prom_cont);
        prom_cont.appendChild(prom_img);
        prom_cont.appendChild(prom_name);
        prom_cont.appendChild(prom_desc);
        prom_cont.appendChild(prom_date);
    }


    window.onclick = function(event){
        let cards = document.querySelectorAll('.prom_card-cont')
        let cont_cards = document.getElementById('prom-result')
        let modal = document.getElementById('popup-background');
        if(event.target === modal){
            document.getElementById('popup').classList.add('hide');
        }
        for(let i = 0; i<cards.length; i++){
            let card = document.getElementById(`card-${i}`);
            // Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет:
            // var elt = element.closest(selectors);
            // selectors - строка, а точнее DOMString, содержащая CSS-селектор, к примеру: "#id", ".class", "div" ...
            // Результат - элемент DOM (Element), либо null.
            let target = event.target.closest(`#card-${i}`);
            // Инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации.
            // Оператор return завершает выполнение текущей функции и возвращает её значение.
            if(!target){continue};
            if(!cont_cards.contains(target)){continue};
            if(card != target){
                return console.log(false);
            }else{
                console.log(i);
                import_json_for_popup(requestURL)
                async function import_json_for_popup(requestURL){
                    const request = new Request(requestURL);
                    const response = await fetch(request);
                    const json_cards = await response.json(); 
                    load_popup(json_cards, i)
                }
            }
        }
    }
}

function open_popup(){
    let modal = document.getElementById('popup');
    modal.classList.remove('hide');
}

function close_popup(){
    let modal = document.getElementById('popup');
    modal.classList.add('hide');
}

function load_popup(obj, num){
    const popup_img = document.getElementById('popup_img')
    const popup_name = document.getElementById('popup_name');
    const popup_date = document.getElementById('popup_date')
    const popup_description = document.getElementById('popup_description');
    
    popup_img.style.backgroundImage = `url(${obj[num].img_card})`
    popup_name.textContent = obj[num].name_card;
    popup_date.textContent = obj[num].date_card;
    popup_description.innerHTML = obj[num].description_card;
}
