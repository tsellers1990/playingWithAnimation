var isClickable = true;
var pos = 0;
var stopped = false;

const stopMove = () => {
    stopped = true
}

const boxMoveDown = () =>{
    if (isClickable){
        stopped = false
        var elem = document.getElementById("animationBox");
        pos = this.pos
        var id = setInterval(frameLower, 10);
        
        
        function frameLower() {
            if (pos >= 350) { //if the position is @ the end location
                isClickable = true;
                clearInterval(id); //stop the interval
    
            } else if(stopped){
                clearInterval(id);
                isClickable = true;
            } else{
                isClickable = false;
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos+ 'px';
            }
        }
    }
    
}

const boxMoveUp = () => {
    if(isClickable){
        stopped = false
        var elem = document.getElementById("animationBox");
        pos = this.pos;
        var id = setInterval(frameUpper, 10);
        
        
        function frameUpper() {
            if (pos == 0) { //if the position is @ the end location
                isClickable = true;
                clearInterval(id); //stop the interval
            } else if(stopped){
                clearInterval(id);
                isClickable = true;
                console.log(isClickable)
            } else{
                isClickable = false;
                pos--;
                elem.style.top = pos + 'px';
                elem.style.left = pos+ 'px';    
            }
        }
    }
}


