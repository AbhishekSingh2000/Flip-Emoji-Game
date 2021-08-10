var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");
var btn3 = document.querySelector("#button3");
var btn4 = document.querySelector("#button4");
var btn5 = document.querySelector("#button5");
var btn6 = document.querySelector("#button6");
var btn7 = document.querySelector("#button7");
var btn8 = document.querySelector("#button8");
var btn9 = document.querySelector("#button9");
var btn10 = document.querySelector("#button10");
var btn11 = document.querySelector("#button11");
var btn12 = document.querySelector("#button12");
var btn13 = document.querySelector("#button13");
var btn14 = document.querySelector("#button14");
var btn15 = document.querySelector("#button15");
var btn16 = document.querySelector("#button16");
var btns = document.querySelectorAll(".buttonS");
var output = document.querySelector("#output");
var startbtn = document.querySelector("#startbutton");

startbtn.addEventListener("click", showEmo);

function showEmo(){
    btn1.innerText="😂";
    btn2.innerText="🤐";
    btn3.innerText="🙃";
    btn4.innerText="😎";
    btn5.innerText="🤑";
    btn6.innerText="😴";
    btn7.innerText="😛";
    btn8.innerText="🤐";
    btn9.innerText="😴";
    btn10.innerText="🙃";
    btn11.innerText="😁";
    btn12.innerText="😂";
    btn13.innerText="🤑";
    btn14.innerText="😎";
    btn15.innerText="😁";
    btn16.innerText="😛";

    function stopEmoShow(){
        btn1.innerText="";
        btn2.innerText="";
        btn3.innerText="";
        btn4.innerText="";
        btn5.innerText="";
        btn6.innerText="";
        btn7.innerText="";
        btn8.innerText="";
        btn9.innerText="";
        btn10.innerText="";
        btn11.innerText="";
        btn12.innerText="";
        btn13.innerText="";
        btn14.innerText="";
        btn15.innerText="";
        btn16.innerText="";
    }
    setTimeout(stopEmoShow,2500);
    startbtn.disabled="true";

    var score = 0;

    btn1.addEventListener("click",()=>{
        btn1.innerText="😂";
        if(btn12.addEventListener("click",()=>{btn12.innerText="😂"; output.innerHTML=`Score: ${score= score+1}`;})=="true"){score++;}
        else{output.innerHTML=`score:${score}`;}
    });

    btn12.addEventListener("click",()=>{
        btn12.innerText="😂";
        if(btn1.addEventListener("click",()=>{btn1.innerText="😂"; output.innerHTML=`Score: ${score= score+1}`;})=="true"){score++;}
        else{output.innerHTML=`score:${score}`;}
    });


    btn2.addEventListener("click",()=>{
        btn2.innerText="🤐";
        if(btn8.addEventListener("click",()=>{btn8.innerText="🤐"; output.innerHTML=`Score: ${score= score+1}`;})=="true"){score++;}
        else{output.innerHTML=`score:${score}`;}
    });

    btn8.addEventListener("click",()=>{
        btn8.innerText="🤐";
        if(btn2.addEventListener("click",()=>{btn2.innerText="🤐"; output.innerHTML=`Score: ${score= score+1}`;})=="true"){score++;}
        else{output.innerHTML=`score:${score}`;}
    });

}

