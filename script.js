let s=0;
let cross=false;

audio=new Audio('bgmusic.mp3');
audiogo= new Audio('gover.wav');
jaudio=new Audio('jump.mp3');

setTimeout(()=>{
    audio.play();
},1000)

document.onkeydown = function(e)
{
    console.log(e.key);
    if(e.key=="ArrowUp")
    {
        fairy=document.querySelector('.fairy');
        fairy.classList.add('animateFairy');
        setTimeout(()=>{
            fairy.classList.remove('animateFairy');
        },700)
        cross=true;
        jaudio.play();
        setTimeout(()=>{
            jaudio.pause();
        },108)
    }
    if(e.key=="ArrowRight")
    {
        fairy=document.querySelector('.fairy');
        fx=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('left'));
        fairy.style.left=fx+112+"px";
    }
    if(e.key=="ArrowLeft")
    {
        fairy=document.querySelector('.fairy');
        fx=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('left'));
        fairy.style.left=fx-112+"px";
    }
    if(e.key=="Enter")
    {
        location.reload();
    }
}

setInterval(()=> {
    fairy=document.querySelector('.fairy');
    gameOver = document.querySelector('.gameOver');
    dinosaur = document.querySelector('.dinosaur');

    fx=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('left'));
    fy=parseInt(window.getComputedStyle(fairy,null).getPropertyValue('top'));

    dx=parseInt(window.getComputedStyle(dinosaur,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dinosaur,null).getPropertyValue('top'));

    offsetX=Math.abs(fx-dx);
    offsetY=Math.abs(fy-dy);

    if(offsetX< 190 && offsetY< 128)
    {
        gameOver.style.visibility='visible';
        dinosaur.classList.remove('animateDino');
        fairy.style.visibility='hidden';
        audio.pause();
        audiogo.play();
        audiogo.volume=0.6;
        setTimeout(()=>{
            audiogo.pause();
        },2000)
    }
    else if(cross && offsetX<210)
    {
        s+=1;
        updateScore(s);
        cross=false;
        setTimeout(()=>{    
        aniDur=parseFloat(window.getComputedStyle(dinosaur,null).getPropertyValue('animation-duration'));
        newDur=aniDur-0.1;
        dinosaur.style.animationDuration = newDur+'s';
        }, 1000)
    }

}, 100)

function updateScore(s)
{
    score.innerHTML = "Your Score : "+s;
}