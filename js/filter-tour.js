window.onclick=function(event){
    // let cards = document.querySelectorAll('.tour_card-cont')
    // let filters = document.querySelectorAll('.tour_filter-cont')
    let adap_filters = document.querySelectorAll('.t-a_f_cont')
    let adap_filters_value = document.getElementById('adap_filter_name')
    if(event.target === "div"){
        console.log(true);
    }else{
        console.log(event.target.value);
    }
}   