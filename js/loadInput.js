function loadBanco(metodo, banco){
     metodo = document.getElementById(metodo);
     banco = document.getElementById(banco);

     banco.value = "";
     banco.innerHTML = "";

     if(metodo.value == "Ahorro"){
        var optionArray = ["|" ,"Banco Agrario de Colombia | Banco Agrario de Colombia", 
        "Banco AV Villas | Banco AV Villas" , "Banco Nequi | Banco Nequi"  ]
    } else {
        var optionArray = ["|" ,"Bancolombia | Bancolombia", 
        "Banco Caja Social | Banco Caja Social" , "Banco otro | Banco otro"  ]
    }

    for(option = 0;option < optionArray.length; option++){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        banco.options.add(newOption);
      };
} 


