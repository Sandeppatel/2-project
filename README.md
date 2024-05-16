# 2-project
learning html css and js new project
------- html
second project
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="2lecture38.css">
</head>
<body>
    <div class="main">
      
    </div> 
    <h1>start chould the backgraound color every seconk</h1>
    <div class="part1">
      <button id="start">start</button>
      <button id="stop">stop</button>
    </div>

    <script src="2lecture38.js"></script>
</body>
</html>
-----------


-------- css--
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: gilroy;
}
html , body{
    height: 100%;
    width: 100%;
}
body{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.part1{
    height: 100px;
    width: 200px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
#start{
    
    z-index: 99;
    padding: 10px 20px;
    position: relative;
    color: lightseagreen;
    font-size: 18px;
    font-weight: 600;

}
#start::after{
    content: "";
    height: 100%;
    width: 0%;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    transition: all ease 0.5s;
    z-index: -1;
}
#start:hover::after{
    width: 100%;
}
#stop{
    z-index: 99;
    padding: 10px 20px;
    position: relative;
    color: lightseagreen;
    font-size: 18px;
    font-weight: 600;
}
#stop::after{
    content: "";
    height: 100%;
    width: 0%;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    transition: all ease 0.5s;
    z-index: -1;
}
#stop:hover::after{
    width: 100%;
}
body h1{
    font-size: 50px;
    -webkit-text-stroke-color: lightseagreen;
    -webkit-text-stroke-width: 2px;
}
----


-------js// genrete a randeo color ---

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

------
