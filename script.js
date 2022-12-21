
let spanHoras=document.querySelector('#hour');
let spanMinutos=document.querySelector('#minutes');
let spanSegundos=document.querySelector('#seconds');
let modoEscuro= document.querySelector('#darkMode').value;



document.querySelector('#darkMode').addEventListener('click',()=>{
    let valor=innerHTML=document.querySelector('#darkMode').value
    if(valor==='1'){
         document.body.style.background="black"
        
        
    }else{
         document.body.style.background=""
        
    }
});

function atualizarHora(){

    let data = new Date();
    let hora = corrigirHora(data.getHours());
    let minutos = corrigirHora(data.getMinutes());
    let segundos = corrigirHora(data.getSeconds());
    spanHoras.innerHTML=hora
    spanMinutos.innerHTML=minutos
    spanSegundos.innerHTML=segundos
}
function corrigirHora(numero){
    if(numero<10){
        numero+='0'
    }
    return numero
}
setInterval(atualizarHora,1000)

