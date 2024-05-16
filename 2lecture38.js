// genrete a randeo color

 const randomColor =  function(){
    const hex = "0123456789ABCDEF";
    let  color  = "#";
    for (let i = 0; i < 6; i++) {
       
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
 const body =   document.querySelector('body')


 const startChengingColor = function  () {
   var intervalId =   setInterval(changBgColor , 1000);

     
     function  changBgColor(){
         body.style.backgroundColor = randomColor();

     }
 };
 const stopChengingColor = function(){
  clearInterval(intervalId);

 }


 const start = document.querySelector('#start')
start.addEventListener('click' , startChengingColor)

const stop = document.querySelector('#stop')
start.addEventListener('click' , stopChengingColor)
