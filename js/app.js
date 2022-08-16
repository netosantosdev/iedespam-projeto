const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
const checkimg = document.querySelector('.img-s')
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
    if($html.classList.contains('dark-mode')){
        checkimg.setAttribute('src', './img/sun.png')
    }
    else{
        checkimg.setAttribute('src', './img/moon.png')
    }
    
})

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        document.activeElement.click();
    }
 }, false);