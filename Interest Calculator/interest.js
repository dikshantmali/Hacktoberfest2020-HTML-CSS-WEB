function simple_interest (principle, tenure, rate) {
    var result;
    try{
            tenure = tenure / 12;

            result    =  (principle*tenure*rate/100);
            return result;
    }
    catch(e){
            alert('simple_interest :' + e);
    }
     
}

function compound_interest(principle, tenure, rate) {
    var n = 12;
    var ci;
    try{
            tenure = tenure / 12;

            ci =  (principle* Math.pow((1 + (rate/(n*100))), (n*tenure)));
            return (ci-principle);
    }
    catch(e){
        alert('compound_interest :' + e);
    }
}

