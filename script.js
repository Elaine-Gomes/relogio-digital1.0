
let spanHours=document.querySelector('#hour');
let spanMinutes=document.querySelector('#minutes');
let spanSeconds=document.querySelector('#seconds');
let hours = document.querySelectorAll(".hours");
let btnTheme = document.querySelector('.themeToggle');
let valueInputRange = ""

//Atualiza a hora 
function updateTime(){
    let date = new Date();
    let hour= correctHour(date.getHours());
    let minutes = correctHour(date.getMinutes());
    let seconds = correctHour(date.getSeconds());

    spanHours.innerHTML=hour
    spanMinutes.innerHTML=minutes
    spanSeconds.innerHTML=seconds
}
setInterval(updateTime,1000);

//Acrescenta um zero na frente quando o numero é menor do que 10.
function correctHour(number){
    if(number<10){
        number='0'+number
    }
    return number
}

//Modo escuro
function themeToggle(){

    let body = document.querySelector('.body');
    let clock = document.querySelector('.clock');
    let onOff = document.querySelector('.onOff');
    let themeToggle = document.querySelector('.themeToggle');

    body.classList.toggle('darkTheme');
    clock.classList.toggle("darkTheme");
    themeToggle.classList.toggle("active");
    onOff.classList.toggle("active");
  
    hours.forEach(item => item.classList.toggle("darkTheme"));
    
  }
  btnTheme.addEventListener("click", themeToggle);





