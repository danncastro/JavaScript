function criarTarefa(){
    var input = document.getElementById("tarefa1");
    var texto = input.value;
    var checkbox = document.createElement("input");
    

    checkbox.type = "checkbox";
    
    var label = document.createElement("label");

    label.appendChild(document.createTextNode(texto));

    if(texto == ""){
        alert("Digite uma tarefa !");
        document.getElementById("tarefa1").focus();
    }
    else{
        tarefa.appendChild(checkbox);
        tarefa.appendChild(label);
        document.getElementById("tarefa1").value="";
        document.getElementById("tarefa1").focus();

    }
}
document.getElementById("tarefa1").focus();


// Pula linha ao adicionar um evento
function addDiv(){

    
    var tarefa = document.getElementById("tarefa");
    var div = document.createElement("div");

    div.id = "pula-linha";

    tarefa.appendChild(div);

    criarTarefa();
}
adicionar.addEventListener("click", addDiv);