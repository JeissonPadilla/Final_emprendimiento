miStorage = window.localStorage;
var usuarioactivo =miStorage.getItem('activo');
document.getElementById('login').innerHTML='<b> BIENVENIDO '+usuarioactivo+' </b>';

var clientes=[]

function mostrar(){
    var txtname=document.getElementById('name').value;
    var txtlast=document.getElementById('last').value;
    var txtstate=document.getElementById('state').value;
    var txtcity=document.getElementById('city').value;
    var txtemail=document.getElementById('email').value;
    var txtphone=document.getElementById('phone').value;
    var txtdireccion=document.getElementById('direccion').value;
    var txtbarrio=document.getElementById('barrio').value;
    var estrato = document.getElementById("estrato").value
    var codigo_postal = document.getElementById("cod_postal").value

clientes.push({ Nombre: name, Apellidos: last, Departamento: state, Ciudad: city, Correo: email, Telefono: phone, Estrato: estrato});
alert("cliente agregado completamente");


clientesjson=JSON.stringify(clientes);
listaclientes=JSON.parse(clientesjson);
miStorage.setItem('clientes', clientesjson);

console.log(clientes);


localStorage.mname = txtname; 
var sname =localStorage.getItem('mname');
document.getElementById('vernombre').innerHTML='<b>'+sname+' </b>';

localStorage.mlast = txtlast; 
var slast =localStorage.getItem('mlast');
document.getElementById('verapellido').innerHTML='<b>'+slast+' </b>';

localStorage.mstate = txtstate; 
var sstate =localStorage.getItem('mstate');
document.getElementById('verdepartamento').innerHTML='<b>'+sstate+' </b>';

localStorage.mcity = txtcity; 
var scity =localStorage.getItem('mcity');
document.getElementById('verciudad').innerHTML='<b>'+scity+' </b>';

localStorage.memail = txtemail; 
var semail =localStorage.getItem('memail');
document.getElementById('veremail').innerHTML='<b>'+semail+' </b>';

localStorage.mphone = txtphone; 
var sphone =localStorage.getItem('mphone');
document.getElementById('verphone').innerHTML='<b>'+sphone+' </b>';

localStorage.mdireccion = txtdireccion; 
var sdireccion =localStorage.getItem('mdireccion');
document.getElementById('verdireccion').innerHTML='<b>'+sdireccion+' </b>';

localStorage.mbarrio = txtbarrio; 
var sbarrio =localStorage.getItem('mbarrio');
document.getElementById('verbarrio').innerHTML='<b>'+sbarrio+' </b>';

localStorage.mestrato = estrato; 
var sestrato =localStorage.getItem('mestrato');
document.getElementById('vestrato').innerHTML='<b>'+sestrato+' </b>';

}

