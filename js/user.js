miStorage = window.localStorage;
miStorage.setItem('user1', 'admin');
miStorage.setItem('user2', 'jeisson');
miStorage.setItem('password1', '1234');
miStorage.setItem('password2', '1234');


function ingresar() {
    
    var txtuser1validar =miStorage.getItem('user1');
    var txtuser2validar =miStorage.getItem('user2');
    var txtuser=document.getElementById('txtuser').value;
    var txtpassword=document.getElementById('txtpassword').value;
    var txtpassword1validar=document.getElementById('txtpassword').value;
    var txtpassword2validar=document.getElementById('txtpassword').value;
    if(txtuser==txtuser1validar && txtpassword==txtpassword1validar){
        alert("usuario es "+txtuser1validar);
        miStorage.setItem('activo', 'admin');
        window.open("html/Inicio.html","_self")

    } else if(txtuser==txtuser2validar && txtpassword==txtpassword2validar){

        alert("usuario es "+txtuser2validar);
        miStorage.setItem('activo', 'jeisson');
        window.open("html/Inicio.html","_self")

    }else{
        alert("usuario y/o contraseña no validos ");


    }


   
}

function invitar(){
    miStorage.setItem('activo', 'invitado');
    window.open("html/Inicio.html", '_self')
        }