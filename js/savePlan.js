let client = [];
const arryinfo = [];
const auto = 0;

function savePlan(list) {
    localStorage.setItem('suscription', JSON.stringify(list));
}

function process(){
    name = document.getElementById('nombre');
    user = getUsuer(name);

    if(user != null || user != ""){
        id_client = document.getElementById('user');
        plane = document.getElementById('plan');
        cuenta = document.getElementById('cuenta');
        banco = document.getElementById('banco');
        mesesSusc = document.getElementById('meses');
        correo = document.getElementById('correo');

        let item = {
            id : auto + 1,
            cliente : id_client,
            meses : mesesSusc,
            plan : plane
        }

        arryinfo.push(item);
        savePlan(arryinfo);

       

    }
}

function getUsuer(name){
    client = JSON.parse(localStorage.getItem('clientes'));
    if(client != null){
        array.forEach(element => {
            if(element.nombre === name){
                return element.id;
            } else {
                return "";
            }
        });
    } 

}