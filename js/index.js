function hamburger(){
    document.getElementById('hamburger-top').classList.toggle('line_1');
    document.getElementById('hamburger-center').classList.toggle('line_2');
    document.getElementById('hamburger-bottom').classList.toggle('line_3'); 
    document.getElementById('menu').classList.toggle('in');
    document.getElementById('menu-in-bg').classList.toggle('bg-in');

}

document.getElementById('hamburger').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu1').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu2').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu3').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu4').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu5').addEventListener('click',function(){
    hamburger();
});

document.getElementById('menu-logo').addEventListener('click',function(){
    hamburger();
});