var bot ;
var indicator; 
var life; 
var  ca1cd3c3055991bf20499ee86739f7e2;
var secsub; 
var sub ;
var answert; 
var sb; 
var sbs; 
var prep; 
var ans; 
var bot;  
var you;  
var res; 
Object.freeze(ca1cd3c3055991bf20499ee86739f7e2);
Object.freeze(life);

var text;
var rand2 = function(){
    bot =document.getElementById("answerbot");
    indicator = document.getElementById("indi");
   life =0;
     ca1cd3c3055991bf20499ee86739f7e2 =0;
   secsub=document.getElementById("submitss");
   sub=document.getElementById("submitss");
   answert =document.getElementById("answers");
   sb =document.getElementById("submit");
   sbs =document.getElementById("submits");
   prep =document.getElementById("prepare");
   ans =document.getElementById("answers");
   bot  =document.getElementById("answerbot");
    you  =document.getElementById("you");
   res  =document.getElementById("result");
    bot =document.getElementById("answerbot");
    indicator = document.getElementById("indi");
    

   varda1cd3c3055991bf20499ee86739f7e2 = 5+life;
     ca1cd3c3055991bf20499ee86739f7e2 =0;
   secsub=document.getElementById("submitss");
   sub=document.getElementById("submitss");
   answert =document.getElementById("answers");
   sb =document.getElementById("submit");
   sbs =document.getElementById("submits");
   prep =document.getElementById("prepare");
   ans =document.getElementById("answers");
   bot  =document.getElementById("answerbot");
    you  =document.getElementById("you");
   res  =document.getElementById("result");
    if(life >0){
        alert("You HAVE BEEN CAUGH USING CHEAT ");
        location.reload();
    
    }
    
    var timeleft = 4;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            document.getElementById("timer").style.display ="none";
            document.getElementById("indi").style.display ="none";
            document.getElementById("answers").disabled = false;
            document.getElementById("submit").disabled = false;
             clearInterval(downloadTimer);
            }
            document.getElementById("timer").innerHTML= "Game start in:"+timeleft;
            timeleft -= 1;
        }, 1000);


    if (Math.random() < 0.5) {
        text="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>"
        ;
    }
    else if (Math.random() < 0.3) {
        text="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
    } else {
        text="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
    }
    bot.innerHTML ="CPU:"+text;
    bot.style.display ="none";
    indicator.style.display ="block";
    secsub.style.display ="none";
    sub.style.display ="none"; 
    answert.style.display ="block"; 
    sb.style.display ="block";
    document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
    document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
    var audio = document.getElementById("audio");
        audio.play();
        prep.style.display ="none";

}
bot =document.getElementById("answerbot");
indicator = document.getElementById("indi");
secsub=document.getElementById("submitss");
sub=document.getElementById("submitss");
answert =document.getElementById("answers");
sb =document.getElementById("submit");
sbs =document.getElementById("submits");
prep =document.getElementById("prepare");
ans =document.getElementById("answers");
bot  =document.getElementById("answerbot");
you  =document.getElementById("you");
res  =document.getElementById("result");
prep.style.display ="none";
indicator.style.display ="none";
sbs.style.display ="none"; 
ans.style.display ="none"; 
sb.style.display ="none";
you.style.display ="none";
bot.style.display ="none";




var rand = function(){

    if(life >0){
        alert("You HAVE BEEN CAUGH USING CHEAT ");
        location.reload();
    
    }
    prep.style.display ="block";
    ans.disabled = true;
    sb.disabled = true;

    var timeleft = 4;

    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            prep.style.display ="none";
            ans.disabled = false;
            sb.disabled = false;
             clearInterval(downloadTimer);
            }

            document.getElementById("prepare").innerHTML= "Please wait while CPU apponent is preparing:"+timeleft;
            timeleft -= 1;
        }, 1000);


    if (Math.random() < 0.5) {
        text="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
    }
    else if (Math.random() < 0.3) {
        text="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
    } else {
        text="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
    }

    res.style.display ="none";
    bot.innerHTML ="CPU:"+text;
    bot.style.display ="none"; 
    you.style.display ="none";
    sbs.style.display ="none"; 
    ans.style.display ="block"; 
    sb.style.display ="block";
document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;

}



var answer = function(){

    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("indi").style.display ="none";
    var answers = document.getElementById("answers").value;
    if(answers == "Paper" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2++;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio2 = document.getElementById("win");
        audio2.play();



    }
    else if(answers == "Rock" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
    }
    else if(answers == "Scissor" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2++;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Paper" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;

    }
    else if(answers == "Rock" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2++;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Scissor" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio3 = document.getElementById("audio3");

        audio3.play();
    }
    else if(answers == "Rock" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
    }
    else if(answers == "Scissor" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
    }
    else if(answers == "Paper" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+varda1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = ca1cd3c3055991bf20499ee86739f7e2;
        document.getElementById("score").innerHTML = "Score:"+ca1cd3c3055991bf20499ee86739f7e2;
    }
    else{
        alert("Invalid Answer");
    }
if(varda1cd3c3055991bf20499ee86739f7e2 == 0){
        document.getElementById("answerbot").innerHTML ="Game Over";
        document.getElementById("indi").style.display ="none";
    document.getElementById("submits").style.display ="none"; 
    document.getElementById("answers").style.display ="none"; 
    document.getElementById("submit").style.display ="none";
    document.getElementById("submitss").style.display ="none";
    document.getElementById("submits").style.display ="none";
    document.getElementById("answers").style.display ="none";
    document.getElementById("life").style.display ="none";
    document.getElementById("you").style.display ="none";
    document.getElementById("result").style.display ="none";
    document.getElementById("score").innerHTML = "Your Final score is:"+ca1cd3c3055991bf20499ee86739f7e2;

    }
if(life >0){
        alert("You HAVE BEEN CAUGH USING CHEAT ");
        location.reload();
    
    }

}

window.console.log = function(){
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');

    console.error('%cHello', 'color: green; background: yellow; font-size: 80px;','Disable for reason if you trying to use console for cheating then you fool ,...');
    console.error('Sorry , developers tools are blocked here....');
    window.console.log = function() {
        return false;
    }
  }
  
  console.log('test');



/*
*/
