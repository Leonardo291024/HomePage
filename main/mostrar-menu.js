const tooggleButton = document.getElementById('toogleMenu');
const tooggleClose = document.getElementById('toogleClose');
const menu = document.getElementById('menu');

tooggleButton.addEventListener('click', function(){
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
});

tooggleClose.addEventListener('click', function(){
    if(menu.style.display === "block" || menu.style.display === ""){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
})