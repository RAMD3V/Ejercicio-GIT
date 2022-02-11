window.addEventListener("load", function(){

    var btn1=document.querySelector("#cambiar2");
    var btn2=document.querySelector("#cambiar3");
    var btn3=document.querySelector("#cambiar1");


    btn1.addEventListener("click",function(){
        btn1.disabled = true;
    });
    btn2.addEventListener("click",function(){
        btn2.disabled = true;
    });
    btn3.addEventListener("click",function(){
        btn3.disabled = true;
    });


});