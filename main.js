
var bot =document.getElementById("answerbot");
var indicator = document.getElementById("indi");
var life =10;
var score =0;
var secsub=document.getElementById("submitss");
var sub=document.getElementById("submitss");
var answert =document.getElementById("answers");
var sb =document.getElementById("submit");
var sbs =document.getElementById("submits");
var prep =document.getElementById("prepare");
var ans =document.getElementById("answers");
var bot  =document.getElementById("answerbot");
var you  =document.getElementById("you");
var res  =document.getElementById("result");
  
//function kill(){} is accessible from outside 
//let kill = function(){} is not accessible from outside



var rand2 = function(){



var text;
    var timeleft = 5;
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
    document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
    document.getElementById("score").innerHTML = "Score:"+score;
    var audio = document.getElementById("audio");
        audio.play();
        prep.style.display ="none";

}
prep.style.display ="none";
indicator.style.display ="none";
sbs.style.display ="none"; 
ans.style.display ="none"; 
sb.style.display ="none";
you.style.display ="none";
bot.style.display ="none";




var rand = function(){

var text;
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
document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
document.getElementById("score").innerHTML = "Score:"+score;

}

    

var answer = function(){
var text;
    var audio = document.getElementById("audio");
    audio.play();
    
    document.getElementById("indi").style.display ="none";
    var answers = document.getElementById("answers").value;
    if(answers == "Paper" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();



    }
    else if(answers == "Rock" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
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
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Paper" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;

    }
    else if(answers == "Rock" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Scissor" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio3 = document.getElementById("audio3");

        audio3.play();
    }
    else if(answers == "Rock" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else if(answers == "Scissor" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
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
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else if(answers == "Paper" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "<i class='fas fa-heart' style='font-size:24px;color:red'></i>"+"Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else{
        alert("Invalid Answer");
    }
if(life == 0){
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
    document.getElementById("score").innerHTML = "Your Final score is:"+score;
    
    }




/*





*/


