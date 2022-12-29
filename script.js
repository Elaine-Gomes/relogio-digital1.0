
let spanHoras=document.querySelector('#hour');
let spanMinutos=document.querySelector('#minutes');
let spanSegundos=document.querySelector('#seconds');
let horas = document.querySelectorAll(".hours");
let btnTheme = document.querySelector('.themeToggle');
let valorInputRange = ""

//Atualiza a hora 
function atualizarHora(){
    let data = new Date();
    let hora = corrigirHora(data.getHours());
    let minutos = corrigirHora(data.getMinutes());
    let segundos = corrigirHora(data.getSeconds());

    spanHoras.innerHTML=hora
    spanMinutos.innerHTML=minutos
    spanSegundos.innerHTML=segundos
}
setInterval(atualizarHora,1000);

//Acrescenta um zero na frente quando o numero é menor do que 10.
function corrigirHora(numero){
    if(numero<10){
        numero='0'+numero
    }
    return numero
}

//Modo escuro
function themeToggle(){

    let body = document.querySelector('.body');
    let relogio = document.querySelector('.clock');
    let onOff = document.querySelector('.onOff');
    let themeToggle = document.querySelector('.themeToggle');

    body.classList.toggle('darkTheme');
    relogio.classList.toggle("darkTheme");
    themeToggle.classList.toggle("active");
    onOff.classList.toggle("active");
  
    horas.forEach(item => item.classList.toggle("darkTheme"));
    
  }
  btnTheme.addEventListener("click", themeToggle);





