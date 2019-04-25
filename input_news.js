var dt = new Date();
var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + dt.getDate()).slice(-2);
var result = y + m + d;
document.write(result); 

function showElement(){

    var ele2 = document.getElementById('id02').textContent;
    var ele=result+ele2
    document.write(ele); 
}