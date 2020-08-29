let arraYClienJson = [];
let infoClient = [];
function login(){
    console.log("llego!")
    name = document.getElementById('user').value;
    pass =  document.getElementById('pass').value;
    console.log(name);
    console.log(pass);

    readJson();
    if(arraYClienJson === null){
        arraYClienJson = [];
    } else{
        for (let index = 0; index < arraYClienJson.length; index++) {
            if (arraYClienJson[index].usuario === name && arraYClienJson[index].contrasena === pass ) {
                reg(arraYClienJson[index].nombre);    
            } else if(arraYClienJson[index].usuario != name && arraYClienJson[index].contrasena != pass) {
                alert("Usuario o contraseña incorrecta");
                break;
            } 
            
        }
        
    }
}


function readJson(){
    arraYClienJson = JSON.parse(localStorage.getItem('clientes')); 
}

function reg(name){
    let item = {
        nombre : name,
    }

   

    localStorage.setItem('cliente', JSON.stringify(item));

    return window.location.href='../index.html';
    
}

function exit(){
    localStorage.clear();
}
