
var playerScore,isWinnerReady;
init();



function init(){
    isWinnerReady = false;
    playerScore=[0,0];
   
    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='cpu';
    
    document.getElementById('hand-0').style.display='none';
    document.getElementById('hand-1').style.display='none';
    
    
 document.querySelector('#score-0').textContent=playerScore[0];
document.querySelector('#score-1').textContent=playerScore[1];

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
}



document.querySelector('.btn-r').addEventListener('click',function(){
if(!isWinnerReady){
var randomVar;
randomVar=Math.floor(Math.random() * 3); 
document.getElementById('hand-0').src='./img/p-0.png';
document.getElementById('hand-1').src='./img/pc-'+randomVar+'.png';
     document.getElementById('hand-0').style.display='inline-block';
    document.getElementById('hand-1').style.display='inline-block';
    
    if(randomVar===1){ playerScore[1]+=1;
      checkWin();                
      }
    
    else if(randomVar===2) {playerScore[0]+=1; checkWin();}
    document.querySelector('#score-0').textContent=playerScore[0];
    document.querySelector('#score-1').textContent=playerScore[1];
}
}
)

document.querySelector('.btn-p').addEventListener('click',function(){
if(!isWinnerReady){
var randomVar;
randomVar=Math.floor(Math.random() * 3); 
document.getElementById('hand-0').src='./img/p-1.png';
document.getElementById('hand-1').src='./img/pc-'+randomVar+'.png';
     document.getElementById('hand-0').style.display='inline-block';
    document.getElementById('hand-1').style.display='inline-block';
    
    if(randomVar===2){ playerScore[1]+=1;checkWin();}
    
    else if(randomVar===0) {playerScore[0]+=1;checkWin();}
    
    document.querySelector('#score-0').textContent=playerScore[0];
    document.querySelector('#score-1').textContent=playerScore[1];
}
}
)


document.querySelector('.btn-s').addEventListener('click',function(){
if(!isWinnerReady){
var randomVar;
randomVar=Math.floor(Math.random() * 3); 
document.getElementById('hand-0').src='./img/p-2.png';
document.getElementById('hand-1').src='./img/pc-'+randomVar+'.png';
     document.getElementById('hand-0').style.display='inline-block';
    document.getElementById('hand-1').style.display='inline-block';
    
     if(randomVar===0) {playerScore[1]+=1;checkWin();}
    
    else if(randomVar===1) {playerScore[0]+=1;checkWin();}
    
    document.querySelector('#score-0').textContent=playerScore[0];
    document.querySelector('#score-1').textContent=playerScore[1];
}
}
)


document.getElementById('btn-newgame').addEventListener('click',init);

function checkWin(){
    if(playerScore[0]<=9 && playerScore[1]<=9)
        isWinnerReady = false;
    else if(playerScore[0]===10){isWinnerReady=true;
 document.querySelector(".player-0-panel").classList.add("active");
  document.getElementById('name-0').textContent='winner';
                               document.getElementById('hand-0').src='./img/prize.gif';
    document.getElementById('hand-1').src='./img/loss.gif';}
    else {isWinnerReady=true;
 document.querySelector(".player-1-panel").classList.add("active");
  document.getElementById('name-1').textContent='winner';
         document.getElementById('hand-0').src='./img/loss.gif';
    document.getElementById('hand-1').src='./img/prize.gif';}
    
}