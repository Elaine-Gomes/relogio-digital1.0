
let spanHoras=document.querySelector('#hour');
let spanMinutos=document.querySelector('#minutes');
let spanSegundos=document.querySelector('#seconds');
let horas = document.querySelectorAll(".hours");
let valorInputRange = ""


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

function corrigirHora(numero){
    if(numero<10){
        numero+='0'
    }
    return numero
}

document.querySelector('#darkMode').addEventListener('click',(valorInputRange)=>{
    
    valorInputRange=document.querySelector('#darkMode').value
    
    if(valorInputRange==='1'){
        document.body.style.background="black"

        for(let i=0;i<horas.length;i++){
            horas[i].classList.add('darkMode');
        }  
    }else{
        document.body.style.background=""    
    }
}); 




