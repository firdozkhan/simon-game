let started= false;
let level=0;
let color=['red','blue','yellow','green'];
let userSeq=[];
let compSeq=[];
let highScore=0;
let h3=document.querySelector('h3');
addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();

    }
})

function levelup(){
    userSeq=[];
    level++;
    h3.textContent=`level ${level}`;
    let ran=Math.floor(Math.random()*4);
    let col=color[ran];
    let rancol=document.querySelector(`.${col}`);
    compflash(rancol);
    compSeq.push(col);
}

function compflash(rancol){
    rancol.classList.add('flash');
    setTimeout(function(){
        rancol.classList.remove('flash');
    },500);
    
}

function userflash(){
    this.classList.add('pressed');
    let abc=this;
    setTimeout(function(){
        
        abc.classList.remove('pressed');
    },200);
    userSeq.push(this.classList[1]);
    checkAns(userSeq.length-1);
}
let boxes=document.querySelectorAll('.box');
for(box of boxes){
    box.addEventListener('click',userflash)
}

function checkAns(ind){
    if(!compSeq[0]){
        h3.innerHTML="Game not started!!!<br>Press any key to start the game";
    }
    else if(userSeq[ind]==compSeq[ind]){
        if(userSeq.length==compSeq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        h3.innerHTML=`Game Over!!! Your score is ${level-1}<br> Press any key to start the game`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },200)
        if(highScore<(level-1)){
            highScore=level-1;
            let p=document.querySelector("#highscore").innerText=`Highest Score: ${highScore} `;
        }
        userSeq=[];
        compSeq=[];
        started=false;
        level=0;
    }
}