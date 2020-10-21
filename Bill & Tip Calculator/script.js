function calctip(){

    var billamt = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;
    var numppl = document.getElementById("numppl").value;

    if(billamt===""||service==0){
        alert("Please Enter Values");
        return;
    }

    if(numppl===""||numppl<=1){
        numppl=1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    var total = (service*billamt)/(100*numppl);
    //ka
    document.getElementById("tottip").style.display="block";
    document.getElementById("tip").innerHTML=total;
};
document.getElementById("calc").onclick = function(){
    calctip();
};
