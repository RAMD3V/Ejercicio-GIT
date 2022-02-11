function cambiarFondo(){
    document.body.style.backgroundColor = '#B075EE';
    alert("El color de fondo cambiará");
}

window.addEventListener("load",function(){
    var formulario=document.querySelector("#formulario");
    formulario.addEventListener('submit', function(){
        console.log("Captura de datos");
        var nombre= document.querySelector("#form_name").value;
        var email= document.querySelector("#email").value;
        var edad= parseInt(document.querySelector("#edad").value);
        
        var datos=document.querySelector(".datos");
        datos.style.display="block";
        var d_nombre = document.querySelector("#d_nombre span");
        var d_email = document.querySelector("#d_email span");
        var d_edad = document.querySelector("#d_edad span");
        
        console.log(d_edad);
        console.log(d_email);
        console.log(d_nombre);
        d_nombre.innerHTML = nombre;
        d_email.innerHTML = email;
        d_edad.innerHTML = edad;
    
    });
    
});