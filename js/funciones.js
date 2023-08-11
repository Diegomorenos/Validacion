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

function validar() {
    if(nombre.value===""){
        alert("Campo Nombres se encuentra vacio!");
        exit;
    }
    if(last.value===""){
        alert("Campo Apellidos se encuentra vacio!");
        exit;
    }
    if(email.value===""){
        alert("Campo E-mail se encuentra vacio!");
        exit;
    }
    if(phone.value===""){
        alert("Campo Telefono se encuentra vacio!");
        exit;
    }
    if(password.value===""){
        alert("Campo Contraseña se encuentra vacio!");
        exit;
    }
    if(valpass.value===""){
        alert("Favor confirmar contraseña!");
        exit;
    }
    if(check.checked===false){
        alert("Usuario menor de edad!");
        exit;
    }
    if (password.value!==valpass.value){
        alert("Contraseñas no coinciden!");
    }
    else{
        window.location.href="login.html";
        alert("Usuario creado con exito!");
    }
}