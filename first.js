let textA=document.getElementById("textA");
let duration = $("#duration").offset().top;
let contacts=$("#contacts").offset().top;
let details=$("#details").offset().top;
console.log(duration)
$("a").click(function(){
    let link=$(this).attr('href')
    let linkscroll=$(link).offset().top;
    $("html,body").animate({scrollTop:linkscroll} , 1000)
})
 $(window).scroll(function(){
     let sWindow=$(window).scrollTop()
    
    })
$("#close").click(function(){
    $("#open").animate({left:'-219px'},500);
    $("#open h4").animate({left:'0px'},500)
})

$("#open h4").click(function(){
    $("#open").animate({left:'0px'},500);
     $("#open").css({position:'fixed'})
 
})

$("#sOne").click(function(){
    $("#sOne").find("div").slideToggle(1000);
$("#sOne").siblings().find("div").slideUp(1000);
})

$("#sTwo").click(function(){
    $("#sTwo").find("div").slideToggle(1000);
$("#sTwo").siblings().find("div").slideUp(1000);
})
$("#sThree").click(function(){
    $("#sThree").find("div").slideToggle(1000);
$("#sThree").siblings().find("div").slideUp(1000);
})

$("#sFour").click(function(){
    $("#sFour").find("div").slideToggle(1000);
$("#sFour").siblings().find("div").slideUp(1000);
})




let countDownDate = new Date("May 10, 2020 12:00:00").getTime(); 
setInterval(function(){
let today = new Date().getTime();
let distance = countDownDate -today;
let THEdays = Math.floor((distance % (1000 * 60 * 60 * 24*30))/(1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mints= Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
let date=`
<div class="col-md-3 text-center ">
<h1>days</h1>
<h3>${THEdays}</h3>
</div>
<div class="col-md-3 text-center">
<h1>hours</h1>
<h3>${hours}</h3>
</div>
<div class="col-md-3 text-center">
<h1>minutes</h1>
<h3>${mints}</h3>
</div>
<div class="col-md-3 text-center">
<h1>seconds</h1>
<h3>${seconds}</h3>
</div>
`
document.getElementById("thetime").innerHTML=date;
},1000)
let count=100;
function remaining(text) 
{
 count--;
 if(count<=0){
    let numOfLetters=
    `
    <span class="text-danger pr-2">your available character finished</span>
    <span>Characyer Reamining</span>`;
    document.getElementById("nums").innerHTML=numOfLetters;
 }else{
let numOfLetters=
`
<span class="text-danger pr-2">${count}</span>
<span>Characyer Reamining</span>`;
document.getElementById("nums").innerHTML=numOfLetters;}
}