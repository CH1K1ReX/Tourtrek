// let btn_L = document.getElementById('btn_left');
// let btn_R = document.getElementById('btn_right');

// btn_L.addEventListener("click", function(){console.log('left');})
// btn_R.addEventListener("click", function(){console.log('Right');})

// CopyLine(document.getElementById('line_1'), document.getElementById('liner'))


// (function(){
    let carousel_l = document.querySelectorAll('.m-c__s_carousel');

    for(let i = 1; i<=carousel_l.length;i++){
        let carousel = document.getElementById(`carousel_${i}`)
        let line = document.getElementById(`line_${i}`)
        CopyLine(carousel, line)
        CopyLine(carousel, line)
    }
// })()


function CopyLine(carousel, line){
    var copy = line.cloneNode(true);
    carousel.appendChild(copy)
}

function QuestionAns(ans){
    let answer = document.getElementById(ans)
    if(answer.classList.contains('hide')){
        answer.classList.remove('hide');
    }
    else{
        answer.classList.add('hide')
    }
}

