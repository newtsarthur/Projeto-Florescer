var firstValue = [];
var preValue = [];

let el = document.getElementById('poli')
console.log("Copyright @ 2023 Dona Mariazinha. Todos os direitos reservados.");
localStorage.getItem("lastname", "Copyright @; 2023 Dona Mariazinha. Todos os direitos reservados.");

if(localStorage.getItem("lastname") == "Copyright @; 2023 Dona Mariazinha. Todos os direitos reservados.")
{
        el.style.cssText =
        'display: none';
}

function returneD(a){
    preValue = firstValue;

    for (var i = 0; i < 1; i++) {
        localStorage.setItem("lastname", "Copyright @; 2023 Dona Mariazinha. Todos os direitos reservados.");

      firstValue[i] = a;
        el.style.cssText =
        'display: none';
        // console.log( localStorage.getItem("lastname") );
    }
}

function returneTW(){
  el.style.cssText =
  'display: none';
  console.log("func");

}
