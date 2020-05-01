var ball = document.getElementById("ball");
var container=document.getElementById("container");
ball.style.top = '1px';
ball.style.left = '1px';

document.addEventListener('keypress', move);

function move(event) {
   keycode = event.keyCode;
   var top = parseInt(ball.style.top);
    var left=parseInt(ball.style.left);

    if (keycode == 119 || keycode==87) {
        console.log("W");
        if (top - 5 >= 0) {
            top -= 5;
            ball.style.top = top + 'px';
        }
        
    }
    if (keycode == 97 || keycode==65) {
        console.log("A");
        if(left-5>=0){
            left-=5;
            ball.style.left=left+'px';
        }
    }
    if (keycode == 115 || keycode==83) {
        console.log("S");
        if (top + 5 < container.offsetHeight - ball.offsetHeight - 5) {
            top += 5;
            ball.style.top = top + 'px';
        }

    }
    if (keycode == 100 || keycode==68) {
        console.log("D");
        if(left+5<container.offsetWidth-ball.offsetWidth-5){
            left+=5;
            ball.style.left=left+'px';
        }
    }

}   