function contrasena() {
    pass = password.value;
    user = user.value;
    check = check.checked;
    
    if(user !== "" && check === true){
        if(pass !== "" && pass.length > 8){
            window.location.href="index.html";
            alert("Bienvenido "+user+"!");
        }
        else{
            alert("La contraseña es demasiado corta!");
        }
    }
    
}

function Buscar() {
    anime = exampleDataList.value;
    location.href = "#"+anime;
}