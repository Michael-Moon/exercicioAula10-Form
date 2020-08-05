
//  Start variaveis aux uso global
 var arrayIds = ["id","name","sobrenome","location","senha","confirmaSenha"];
 var news = document.getElementsByName("news");
 var sexo = document.getElementsByName("sexo");
 var rnew;
 var nsexo;
 //  End variaveis aux uso global 

//  Start funcção verificar se radio foi marcado
 function verificar(){
    for(var i=0; i < news.length; i++){
        if(news[i].checked){
            rnew = news[i].value;
        }
    }
    for(var i=0; i < sexo.length; i++){
        if(sexo[i].checked){
            nsexo = sexo[i].value;
        }
    }
}

// Start envio de dados
 function envio(){

    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var location = document.getElementById("location").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;
    
    verificar();


    if(senha == confirmaSenha && name != "" && sobrenome !="" && id!="" && location != ""){
        //alert("tudo ok!");

        $.ajax ({
            method: "Post",
            url: "http://localhost:3000/users",
            data: {
                "id":id,
                "name":name,
                "sobrenome": sobrenome,
                "location":location,
                "senha": senha,
                "confirmaSenha": confirmaSenha,
                "news": rnew,
                "sexo": nsexo
                
            }
        })
    }else{
        alert("Senha errada");
    }
   
}// End envio de dados

// Start edição de dados
function editar() { 
    var id = document.getElementById("id").value; 

    verificar();
    
    $.ajax({
        method: "PUT",
        url: "http://localhost:3000/users/"+id,
        dataType: "json",
        data: {                   
        "id": document.getElementById("id").value,
        "name":document.getElementById("name").value,
        "sobrenome": document.getElementById("sobrenome").value,
        "location":document.getElementById("location").value,
        "senha": document.getElementById("senha").value,
        "confirmaSenha": document.getElementById("confirmaSenha").value,
        "news": rnew,
        "sexo": nsexo    
        
        } 
    })       
}// End edição de dados    

// Start callback, perguntar se quer mesmo manda dados, caso sim/não enviar sucess/enviar cancel
function callEditar (callback){
    var auxId=[];
    var auxTxt=[];
    var aux=0;
    
    id = document.getElementById("id").value;
   if(id > 0){

    
    for(var i=0; i < arrayIds.length; i++){
        if(document.getElementById(arrayIds[i]).value != ""){
            auxId[aux] = arrayIds[i];
            auxTxt[aux] = document.getElementById(arrayIds[i]).value;
            aux++;
        }else{
           buscar(id);           
        }
    }
    setTimeout(function(){
    var txt;
    var r = confirm("Deseja Mesmo Fazer as Alterações, Campos selecionados: " + auxId +" para os valores: " + auxTxt);
          if (r == true) {
              txt = "Confirma";
              callback();
          } else {
              txt = "Cancelar"
              return false;
          }
    document.getElementById("demo").innerHTML = txt; 
   },500)

   }else{
    alert("Digite valor valido no campo id");
   }

    
}// End callback, perguntar se quer mesmo manda dados, caso sim/não enviar sucess/enviar cancel

// Star busca dados não preenchido quando há edição
function buscar(id){
    if(id > 0){

        $.get ("http://localhost:3000/users/"+id, function(data){

            if(document.getElementById("id").value == ""){
                document.getElementById("id").value = data.id;
            }
            if(document.getElementById("name").value == ""){
                document.getElementById("name").value = data.name;
            }
            if(document.getElementById("sobrenome").value == ""){
                document.getElementById("sobrenome").value = data.sobrenome;
            }
            if(document.getElementById("location").value == ""){
                document.getElementById("location").value = data.location;
            }
            if(document.getElementById("senha").value == ""){
                document.getElementById("senha").value = data.senha;
            }
            if(document.getElementById("confirmaSenha").value == ""){
                document.getElementById("confirmaSenha").value = data.confirmaSenha;
            }
            if(document.getElementById("newsSim").value != data.rnew){
                document.getElementById("newsNao").checked = true;            
            }else{
                document.getElementById("newsSim").checked = true;
            }
            var nomeSexo;
            nomeSexo = data.sexo;
            if(document.getElementById("sexoM").value == nomeSexo){
                document.getElementById("sexoM").checked = true;                               
            }else if(document.getElementById("sexoF").value == nomeSexo){
                document.getElementById("sexoF").checked = true;
            }else{
                document.getElementById("sexoO").checked = true;
            }           
        })
    }   
    
}// End busca dados não preenchido quando há edição

//Star apagar dados/ passando id valído no input id
function apagar() {
    var x;  
        if(document.getElementById("id").value == ""){
            alert("Informe id para Apagar")
        }else{
            x = document.getElementById("id").value;
        }
    $.ajax({
        method: "delete",
        url: "http://localhost:3000/users/"+x
    })           
}//End apagar dados/ passando id valído no input id

//Start Redefinir campos preenchidos
function redefinirCampos(){
    
    document.getElementById("id").value = null;
    document.getElementById("name").value = null;
    document.getElementById("sobrenome").value = null;
    document.getElementById("location").value = null;
    document.getElementById("senha").value = null;
    document.getElementById("confirmaSenha").value = null;
    document.getElementById("newsSim").checked = false;
    document.getElementById("newsNao").checked = false;
    document.getElementById("sexoM").checked = false;
    document.getElementById("sexoF").checked = false;
    document.getElementById("sexoO").checked = false;

    document.getElementById("div").style.backgroundColor = "white";
}

//Star oculda Div do form, e mostra valores em uma ul que foram preenchidos
function ocultar(divId){
    var divForm = document.getElementById(divId).style.display;
    //var listTeste = document.getElementById("teste").style.display;
    document.getElementById("teste").style.display = "none";
    document.getElementById("ulSexoNews").style.display = "none";
    //listTeste.display = "none";
    
     if(divForm == "none"){
           document.getElementById(divId).style.display = "block";
           
           // alert('to aqui')
        }else{
            document.getElementById(divId).style.display = "none";
            document.getElementById("teste").style.display = "block";
            document.getElementById("ulSexoNews").style.display = "block"          
    }
    if( document.getElementById("teste").style.display != "none"){ 
       
       
        for (var i =0; i < document.getElementById("teste").childElementCount; i++ ){
            if(document.getElementById(arrayIds[i]).value == ""){
                document.getElementById("teste"+(i+1)).style.display = "none";               
            }                                
        }  
        if(document.getElementById("ulSexoNews").style.display != "none"){
            
             if(document.getElementById("sexoM").checked != true && document.getElementById("sexoF").checked != true  && document.getElementById("sexoO").checked != true){
                document.getElementById("sexoLi").style.display = "none";

            }
             if(document.getElementById("newsNao").checked != true && document.getElementById("newsSim").checked != true){
                document.getElementById("newsLi").style.display = "none";
            } 
        } 
        document.getElementById("teste1").innerHTML = ("Id: " + document.getElementById("id").value);
        document.getElementById("teste2").innerHTML = ("Nome: " + document.getElementById("name").value);
        document.getElementById("teste3").innerHTML = ("Sobrenome: " + document.getElementById("sobrenome").value);
        document.getElementById("teste4").innerHTML = ("Localização: " + document.getElementById("location").value);
        document.getElementById("teste5").innerHTML = ("Senha: " + document.getElementById("senha").value);
        document.getElementById("teste6").innerHTML = ("Confirmar Senha: " + document.getElementById("confirmaSenha").value);

        if(document.getElementById("newsSim").checked != false){
            
            document.getElementById("newsLi").innerText = ("News: " + document.getElementById("newsSim").value);

        }if(document.getElementById("newsNao").checked != false){
            document.getElementById("newsLi").innerHTML = ("News: " + document.getElementById("newsNao").value);
        }

        if(document.getElementById("sexoM").checked != false){               
            document.getElementById("sexoLi").innerHTML = ("Sexo: " + document.getElementById("sexoM").value);
            
        } if(document.getElementById("sexoF").checked != false){
            document.getElementById("sexoLi").innerHTML = ("Sexo: " + document.getElementById("sexoF").value);

        }if(document.getElementById("sexoO").checked != false){
            document.getElementById("sexoLi").innerHTML = ("Sexo: " + document.getElementById("sexoO").value);
        }    

    }    
}//End oculda Div do form, e mostra valores em uma ul que foram preenchidos

//Star altera cor de fundo ao marca sexo
function corSexo(){
    
    if(document.getElementById("sexoM").checked != false){  
             
        document.getElementById("div").style.backgroundColor="aquamarine";
        document.getElementById("divId").style.backgroundColor="aquamarine";
        
    }else if(document.getElementById("sexoF").checked != false){
        document.getElementById("div").style.backgroundColor = "salmon";
        document.getElementById("divId").style.backgroundColor="salmon";
    }else{
        document.getElementById("div").style.backgroundColor = "hotpink";
        document.getElementById("divId").style.backgroundColor="hotpink";
    }
}
