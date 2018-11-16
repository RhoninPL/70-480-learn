var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
    if(i==10){
        close();
    }
}

timedCount();