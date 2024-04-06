async function include(selector, address){
    fetch(address).then(resp => resp.text())
        .then(data => { document.getElementById(selector).innerHTML=data})
}

include('header', '../html/header.html');
if(document.getElementById('faq')){
    include('faq', '../html/faq-block.html');
}
if(document.getElementById('form')){
    include('form', '../html/form-block.html');
}
include('footer', '../html/footer.html');

window.onload = function(){
    setTimeout(function(){
        BasketCounterHead()
    }, 60)
}

function BasketCounterHead(){
    let count = document.getElementById('counter_header')
    console.log(count);
    if(count === null){
        count = document.getElementById('counter_header')
        console.log(false);
    }else{
        count.textContent = localStorage.getItem('basket_counter')
    }
}

function Check(){
    let count = document.getElementById('counter_header')
    if(count === null){
        console.log(false);
        return
    }else{
        console.log(true);
        location.reload();
    }
}
    
console.log(20);

