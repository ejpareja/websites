loadJson();
function loadJson(){
    fetch('../json/cliente.json')
    .then(function(respose){
       return respose.json();
    })
    .then(function(data){
        localStorage.setItem('clientes', JSON.stringify(data));
        
    })
}