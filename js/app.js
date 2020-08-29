const formularioUI = document.querySelector('#formulario');
const listaActidadesUI = document.getElementById('listaActidades');
let arrayActividades = [];

function CrearItem(actividad){
    let item = {
        actividad : actividad,
        estado : false
    }
    arrayActividades.push(item);
    return  item;
}

function GuardarDB(){
    localStorage.setItem('rutinas', JSON.stringify(arrayActividades));
    LeerBD();
}

function LeerBD(){
    console.log("llego leer");
    listaActidadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutinas'));

    if(arrayActividades === null){
        arrayActividades = [];
    } else {
        console.log("llego else ");
        arrayActividades.forEach(element => {
            if(element.estado){
                listaActidadesUI.innerHTML +=  `<div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> -  Realizada  <span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`

            } else {
                listaActidadesUI.innerHTML +=  `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - Sin realizar <span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`

            }
        });
    }
}

function EliminarDB(actividad){
    let indexArray;
    arrayActividades.forEach((element, index) => {
        if(element.actividad === actividad){
            indexArray = index;
        }
    });

    arrayActividades.splice(indexArray,1);
    GuardarDB();
}

function EditarDB(actividad){

    let indexArray = arrayActividades.findIndex((element) =>{
        return element.actividad === actividad
    });

    arrayActividades[indexArray].estado = true;
    GuardarDB();
}

formularioUI.addEventListener('submit', (e) =>{
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
    CrearItem(actividadUI);
    GuardarDB();
    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', LeerBD);

listaActidadesUI.addEventListener('click', (e) =>{
    e.preventDefault();
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        let texto = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'done'){
            EditarDB(texto);
        }

        if(e.target.innerHTML === 'delete'){
            EliminarDB(texto);
        }

    }

})