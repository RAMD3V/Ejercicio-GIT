window.addEventListener("load", function(){

    var btn1=document.querySelector("#cambiar2");
    var btn2=document.querySelector("#cambiar3");
    var btn3=document.querySelector("#cambiar1");


    btn1.addEventListener("click",function(){
        btn1.disabled = true;
        btn2.disabled = false;
        btn1.style.backgroundColor= "#DC5395";
        btn1.style.color= "white";
        btn1.textContent="Botòn cambiado a Rosa";
    });
    btn2.addEventListener("click",function(){
        btn2.disabled = true;
        btn3.disabled = false;
        btn2.style.backgroundColor= "#3155B1";
        btn2.style.color= "white";
        btn2.textContent="Botòn cambiado a Azul";
    });
    btn3.addEventListener("click",function(){
        btn3.disabled = true;
        btn1.disabled = false;
        btn3.style.backgroundColor= "#C675EE";
        btn3.style.color= "white";
        btn3.textContent="Botòn cambiado a Morado";
    });
   

});