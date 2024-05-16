//  2lecture38.js
const randomColor =  function () {
    const hex = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i <6; i++) {
        color += hex[Math.floor(Math.random() *16)]
    }
   return color
}
//  console.log(Math.floor(Math.random() *16))

const body = document.querySelector('body')



const startchegingColor =   function(){
    let setIntervalId =   setInterval(chngeBgColor , 1000)
    
      function  chngeBgColor(){

    body.style.backgroundColor = randomColor()

  }
}

const  stopchegingColor = function(){
    clearInterval(setIntervalId)
} 

 const start =  document.querySelector("#start")
 start.addEventListener('click' , startchegingColor)


const stop  = document.querySelector("stop")
stop.addEventListener('click' , stopchigingColor)
