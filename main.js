document.write("9.to calculate the days left before Christmas."+"<br>");
function test9(today){
    // var today=new Date();
    var year=today.getFullYear();
    var xm=new Date(year,11,25);
    if(today.getMonth==11 && today.getDate()>25){
        xm.setFullYear(xm.getFullYear()+1);
    }
    var x=1000*60*60*24;
    
    return Math.ceil((xm.getTime()-today.getTime())/x)+" days left until Christmas!";
}
document.write(test9(new Date)+"<br><br>");