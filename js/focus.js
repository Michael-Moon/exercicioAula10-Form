var arrayIds = ["id","name","sobrenome","location","senha","confirmaSenha"];
var inserindoDados =[]
var count=0;

var x = document.getElementById("myForm");


function gFocoId(){
   inserindoDados[count] = "Estabelecer o foco no elemento id"; 
   count++;  
}
function gFocoName(){
    inserindoDados[count] = "Estabelecer o foco no elemento name";
    count++; 
 }
 function gFocoSobrenome(){
    inserindoDados[count] = "Estabelecer o foco no elemento sobrenome";
    count++;   
 }
 function gFocoLocation(){
    inserindoDados[count] = "Estabelecer o foco no elemento location";
    count++;   
 }
 function gFocoSenha(){
    inserindoDados[count] = "Estabelecer o foco no elemento senha";
    count++;   
 }
 function gFocoConfirmaSenha(){
    inserindoDados[count] = "Estabelecer o foco no elemento confirmaSenha"; 
    count++;  
 }
 function gFocoNews(){
    inserindoDados[count] = "Estabelecer o foco no elemento News";
    count++;   
 }
 function gFocoSexo(){    
    inserindoDados[count] = "Estabelecer o foco no elemento Sexo";
    count++;   
 }


 function pFocoId(){

    if(document.getElementById("id").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  id";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento id"; 
    count++;
 }
 function pFocoName(){
    if(document.getElementById("name").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  name";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento name"; 
    count++;
  }
  function pFocoSobrenome(){
    if(document.getElementById("sobrenome").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  sobrenome";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento sobrenome"; 
    count++;   
  }
  function pFocoLocation(){
    if(document.getElementById("location").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  location";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento location"; 
    count++;  
  }
  function pFocoSenha(){
    if(document.getElementById("senha").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  senha";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento senha"; 
    count++;   
  }
  function pFocoConfirmaSenha(){
    if(document.getElementById("confirmaSenha").value != ""){
               
        inserindoDados[count] = "Inserir dados no elemento  confirmaSenha";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento confirmaSenha"; 
    count++; 
  }
  function pFocoNews(){
    if(document.getElementsByName("news").checked != false){
               
        inserindoDados[count] = "Inserir dados no elemento  news";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento news"; 
    count++;   
  }
  function pFocoSexo(){    
    if(document.getElementsByName("sexo").checked != false){
               
        inserindoDados[count] = "Inserir dados no elemento  sexo";        
        count++;
    }
    inserindoDados[count] = "Perdemos o foco do elemento sexo"; 
    count++;  
  }
 


console.log(inserindoDados)