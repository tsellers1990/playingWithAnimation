var boxMoveDown = () =>{
    var elem = document.getElementById("animationBox");
    var currentPosition = animationBox.style.cssText;
    var pos = 0;
    var id = setInterval(frameLower, 10);
    
    
    function frameLower() {
        if (pos == 350) { //if the position is @ the end location
            clearInterval(id); //stop the interval
        } else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos+ 'px';
        }
    }
    
}

var boxMoveUp = () => {
    var elem = document.getElementById("animationBox");
    var currentPosition = animationBox.style.cssText;
    var pos = 350;
    var id = setInterval(frameUpper, 10);
    
    
    function frameUpper() {
        if (pos == 0) { //if the position is @ the end location
            clearInterval(id); //stop the interval
        } else{
            pos--;
            elem.style.top = pos + 'px';
            elem.style.left = pos+ 'px';
        }
    }
}


