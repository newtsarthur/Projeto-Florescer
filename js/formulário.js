
var capturandoNome = "";
var capturandoEmail = "";
var capturandoAssunto = "";
var capturandotext = "";

var value = ""
document.getElementById("noned").style.display = "none";
function capturar() {
    if(!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("subject").value  || !document.getElementById("comments").value){
        
        document.getElementById("noned").style.display = "flex";
        document.getElementById('teste').innerHTML = 'Por favor, preencha os campos!🤔😉';
    }else {
        
        document.getElementById("noned").style.display = "flex";
        document.getElementById('teste').innerHTML = 'Agradecemos pela sua mensagem! Obrigado!🥰❤️';
        setTimeout(function(){
            document.getElementById("jaja").reset();
        }, 850);
    }
}

document.getElementById("noned").style.display = "none";
function dhas() {
    setTimeout(function(){
        document.getElementById("teste").innerHTML = '';
    }, 150);
    document.getElementById("noned").style.display = "none";
}
