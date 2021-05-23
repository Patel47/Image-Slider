var count = 1;

setInterval(function(){
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 5){
        count = 1;
    }

}, 5000);