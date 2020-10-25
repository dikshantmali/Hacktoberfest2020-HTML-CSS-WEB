function playerOneMethod(){
    swal({
        title: "Player One",
        text: "Please select either 'X' or 'O' to continue.",
        content: "input",
        closeModel: true,
    })
    .then((value)=>{
        playerOneSelect = value;
        playerOneSelect = playerOneSelect.toUpperCase();
        if(playerOneSelect!=="" && (playerOneSelect==="X" || playerOneSelect==="O"))
        {
            createArray();
            swal({
                text: "You have select '" + playerOneSelect + "' press Ok to continue.",
                closeModel: true,
            })
            .then(result=>{
                playerTwoMethod();
            })
        }
        else
        {
            swal({
                text: "Invalid Input",
                closeModel: true,
            })
            .then(result=>{
                playerOneMethod();
            })
        } 
    })
    .catch(err=>{
        if(err)
        {
            playerOneMethod();
        }        
    })  
}
function playerTwoMethod(){
    swal({
        title: "Player Two",
        text: "Please select either 'X' or 'O' to continue.",
        content: "input",
        closeModel: true,
    })
    .then((value)=>{
        playerTwoSelect = value;
        playerTwoSelect = playerTwoSelect.toUpperCase();
        if(playerTwoSelect!=="" && playerTwoSelect!==playerOneSelect && (playerTwoSelect==='X' || playerTwoSelect==='O'))
        {
            swal({
                text: "You have select '" + playerTwoSelect + "' press Ok to Start the game.",
                closeModel: true,
            })
        }
        else{
            swal({
                text: "Invalid Input",
                closeModel: true,
            })
            .then(result=>{
                playerTwoMethod();
            })
        }      
    })
    .catch(err=>{
        if(err)
        {
            playerTwoMethod();
        }
    })
}

function tic(id){
    var div = document.getElementById(id).innerText;
    if(div===""){
        var len = turnArray.length;
        document.getElementById(id).innerHTML=turnArray[len-1];
        if(turnArray[len-1]==="X"){
            document.getElementById(id).style.color="#43A7C1";
        }
        else{
            document.getElementById(id).style.color="#D55236";
        }
        collectArray[i] = turnArray.pop();
        if(collectArray[i]===playerOneSelect){
            para.innerText='Player Two Turn "' +playerTwoSelect+ '"';
        }
        else{
            para.innerText='Player One Turn "' +playerOneSelect+ '"';
        }
        checkSequence();
    }
}

function checkSequence(){
    if(div1.innerText===playerOneSelect && div2.innerText===playerOneSelect && div3.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===playerOneSelect && div4.innerText===playerOneSelect && div7.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===playerOneSelect && div5.innerText===playerOneSelect && div9.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div4.innerText===playerOneSelect && div5.innerText===playerOneSelect && div6.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div7.innerText===playerOneSelect && div8.innerText===playerOneSelect && div9.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===playerOneSelect && div6.innerText===playerOneSelect && div9.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div2.innerText===playerOneSelect && div5.innerText===playerOneSelect && div8.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===playerOneSelect && div5.innerText===playerOneSelect && div7.innerText===playerOneSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player One Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===playerTwoSelect && div2.innerText===playerTwoSelect && div3.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===playerTwoSelect && div4.innerText===playerTwoSelect && div7.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText===playerTwoSelect && div5.innerText===playerTwoSelect && div9.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div4.innerText===playerTwoSelect && div5.innerText===playerTwoSelect && div6.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div7.innerText===playerTwoSelect && div8.innerText===playerTwoSelect && div9.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===playerTwoSelect && div6.innerText===playerTwoSelect && div9.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div2.innerText===playerTwoSelect && div5.innerText===playerTwoSelect && div8.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div3.innerText===playerTwoSelect && div5.innerText===playerTwoSelect && div7.innerText===playerTwoSelect)
    {
        swal({
            title: "Congratulations!",
            text: "Player Two Won the match press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })
    }
    else if(div1.innerText!=="" && div2.innerText!=="" && div3.innerText!=="" && div4.innerText!=="" && div5.innerText!=="" && div6.innerText!=="" && div7.innerText!=="" && div8.innerText!=="" && div9.innerText!=="")
    {
        swal({
            title: "DRAW",
            text: "The match is draw press ok to play again."
        })
        .then(result=>{
            window.location.reload();
        })

    }
}

function createArray(){
    if(playerOneSelect==="X")
    {
        turnArray = ["X","O","X","O","X","O","X","O","X"];
        para.innerText = 'Player One Turn "X"';
    }
    else
    {
        turnArray = ["O","X","O","X","O","X","O","X","O"];
        para.innerText = 'Player One Turn "O"';
    }
}

var turnArray = [];
var collectArray = [];
var i=0;
var playerOneSelect;
var playerTwoSelect;
var para = document.getElementById('playerNo');
para.innerText = "Player One Turn";
var outterBox = document.createElement('div');
var row1 = document.createElement('div');
var row2 = document.createElement('div');
var row3 = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
var div7 = document.createElement('div');
var div8 = document.createElement('div');
var div9 = document.createElement('div');

document.getElementById('mainContainer').appendChild(outterBox);
outterBox.appendChild(row1);
outterBox.appendChild(row2);
outterBox.appendChild(row3);

row1.appendChild(div1);
row1.appendChild(div2);
row1.appendChild(div3);

row2.appendChild(div4);
row2.appendChild(div5);
row2.appendChild(div6);

row3.appendChild(div7);
row3.appendChild(div8);
row3.appendChild(div9);

outterBox.setAttribute('class','outerBox');

row1.setAttribute('class','row');
row1.setAttribute('id','row1');

row2.setAttribute('class','row');
row2.setAttribute('id','row2');

row3.setAttribute('class','row');
row3.setAttribute('id','row3');

div1.setAttribute('class','div');
div1.setAttribute('id','div1');
div1.setAttribute('onClick','tic("div1")');

div2.setAttribute('class','div');
div2.setAttribute('id','div2');
div2.setAttribute('onClick','tic("div2")');

div3.setAttribute('class','div');
div3.setAttribute('id','div3');
div3.setAttribute('onClick','tic("div3")');

div4.setAttribute('class','div');
div4.setAttribute('id','div4');
div4.setAttribute('onClick','tic("div4")');

div5.setAttribute('class','div');
div5.setAttribute('id','div5');
div5.setAttribute('onClick','tic("div5")');

div6.setAttribute('class','div');
div6.setAttribute('id','div6');
div6.setAttribute('onClick','tic("div6")');

div7.setAttribute('class','div');
div7.setAttribute('id','div7');
div7.setAttribute('onClick','tic("div7")');

div8.setAttribute('class','div');
div8.setAttribute('id','div8');
div8.setAttribute('onClick','tic("div8")');

div9.setAttribute('class','div');
div9.setAttribute('id','div9');
div9.setAttribute('onClick','tic("div9")');

playerOneMethod();