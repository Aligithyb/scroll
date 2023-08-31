let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let m3=document.getElementById('mouintain3');
let m4=document.getElementById('mouintain4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let Ali=document.querySelector('.Ali');
window.onscroll=function (){
    let value =scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    m3.style.top = value *2 + 'px';
    m4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    Ali.style.fontSize = value + 'px';
    if(scrollY>= 90){
        Ali.style.fontSize = 70 + 'px';
        Ali.style.position='fixed';
        if(scrollY>478){
            Ali.style.display='none';

        }else {
            Ali.style.display='block';

        }
        if(scrollY>=110){
            document.querySelector('.main').style.background = ' linear-gradient(#376281,#10001f)'
        }else {
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'

        }
    }

}
