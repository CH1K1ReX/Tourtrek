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