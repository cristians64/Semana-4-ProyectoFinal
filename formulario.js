const validarFormulario = () =>{
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let password = document.getElementById('contraseña').value;
    let confirmpassword = document.getElementById('contraseña2').value;
    let errores=[];

    if (nombre===""){
    errores.push("Se necesita obligatoriamente este campo");
    }

    if(!validarEmail(email)){
        errores.push("El email no se puede validar en el sistema");
    }

    if(password.length<6){
        errores.push("La contraseña debe tener mas de 6 caracteres");
    }

    if(!validarPassword(password)){
        errores.push("La contraseña debe tener una letra mayuscula, una minuscula y un numero");
    }

    if(password!==confirmpassword){
        errores.push("Las contraseñas no coinciden, VERIFIQUE");

    }
    
    if(errores.length>0){
        mostrarErrores(errores);
        return false
    }
    return true;
}

const validarEmail = (email) =>{
    let regexemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexemail.test(email);
}

const validarPassword=(password)=>{
    let regexpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regexpassword.test(password);
}


const mostrarErrores = (errores) => {
    let mensaje = "";
    for(let i=0;i<errores.length;i++){
        mensaje += `* ${errores[i]} \n`;
    }
    alert(mensaje);
}
