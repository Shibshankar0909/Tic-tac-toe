let turn='X';
var b=true;
var b1=false;
var count=1;
let audioTurn=new Audio("ting.mp3");
let audioWin=new Audio("gameover.mp3");
const changeTurn=()=>{
    if(turn=='X'){
        return turn='0';
    }else{
        return turn='X';
    }
}

document.querySelector('.submit').addEventListener('click',()=>{
    if(document.querySelector('.player1').value==''){
        document.querySelector('.player1').value='Player1';
    }
    if(document.querySelector('.player2').value==''){
        document.querySelector('.player2').value='Player2';
    }
    document.querySelector('.turn').innerHTML='Turn for '+document.querySelector('.player1').value;
    document.querySelector('.container').classList.add('restore');
    document.querySelector('.info').classList.add('restore');
    document.querySelector('.player').classList.add('remove');
    let text=document.querySelectorAll('.box');
Array.from(text).forEach(box=>{
    let boxtext= box.querySelector('.boxtext');
    box.addEventListener('click',(e)=>{    
    console.log(count);
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if(b&&!b1){
                if(count%2==0){
                    document.querySelector('.turn').innerHTML='Turn for '+document.querySelector('.player1').value;
                    count++;
                }else{
                    document.querySelector('.turn').innerHTML='Turn for '+document.querySelector('.player2').value;
                    count++;
                }
            }
        }
        let textbox=document.querySelectorAll('.boxtext');
        if(b){
            if((textbox[0].innerText!=='')&&(textbox[1].innerText!=='')&&(textbox[2].innerText!=='')&&(textbox[3].innerText!=='')&&(textbox[4].innerText!=='')&&(textbox[5].innerText!=='')&&(textbox[6].innerText!=='')&&(textbox[7].innerText!=='')&&(textbox[8].innerText!=='')){
            b1=true;
            }
        }
        if(b1&&b){
            document.querySelector('.turn').innerHTML='Match Draw';
        }
    })
})
})



const changePlayer=()=>{
    if(player==player1){
       return player=player2;
    }else{
       return player=player1;
    }
}

const checkWin=()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
            audioWin.play();
            turn='X';
            b=false;
            document.querySelector('.imgbox').classList.remove('remove');
            if(count%2==0){
                document.querySelector('.turn').innerHTML='Winner is '+document.querySelector('.player2').value;
                count=1;
            }else{
                document.querySelector('.turn').innerHTML='Winner is '+document.querySelector('.player1').value;
                count=1;
            }
        }
    })
}

let reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText='';
    })
    turn='X';
    document.querySelector('.imgbox').classList.add('remove');
    document.querySelector('.turn').innerHTML='Turn for '+document.querySelector('.player1').value;
    count=1;
turn='X';
b=true;
b1=false;
})
