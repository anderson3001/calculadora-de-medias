let notas = []
function insereNota(){
    let textearea = document.querySelector("#notas");
    let nota = document.querySelector(".nota").value;
    if (nota == ""){
        alert("Por favor, insira uma nota.");
        return;
    }
    console.log(nota)
    nota = parseFloat(nota.replace(",", "."));
    if(nota>=0 && nota <=10){
        textearea.append(`A nota ${notas.length + 1} é: ${nota}\n`);
        notas.push(nota);
    }
    else{
        alert("A nota digitada é inválida, por favor, insira uma nota válida.")
    }
}
function calcularMedia(){
    let media = 0;
    let texto = document.querySelector("#media")
    for (let i=0;i<notas.length;i++){
        media += notas[i];
    }
    media /= notas.length;
    texto.innerText = `A média é: ${media.toFixed(2)}`;
}
let adc = document.querySelector("#adc");
adc.addEventListener("click", insereNota);
let media = document.querySelector("#calc");
media.addEventListener("click", calcularMedia)
