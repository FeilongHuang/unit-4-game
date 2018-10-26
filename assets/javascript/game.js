//define varibles
var wintimes =0; 
var losetimes =0;
var totalNumber=0;
var randomNumber =Math.floor(Math.random()*103)+18;
var crystal1Number =Math.floor(Math.random()*12)+1;
var crystal2Number =Math.floor(Math.random()*12)+1;
var crystal3Number =Math.floor(Math.random()*12)+1;
var crystal4Number =Math.floor(Math.random()*12)+1;
//link data to html
$("#random-Number").text(randomNumber);
$("#yourTotalScore").text(totalNumber);
//click function
$("#crystal1").on("click", function() {
  totalNumber+=crystal1Number;
});
$("#crystal2").on("click", function() {
  totalNumber+=crystal2Number;
});
$("#crystal3").on("click", function() {
  totalNumber+=crystal3Number;
});
$("#crystal4").on("click", function() {
  totalNumber+=crystal4Number;
});
$(".crystals").on('click',function(){
  $("#yourTotalScore").text(totalNumber);
  if(totalNumber===randomNumber){
    wintimes+=1;
    $("#result").text("You Won!!");
    totalNumber=0;
    randomNumber =Math.floor(Math.random()*103)+18;
    crystal1Number =Math.floor(Math.random()*12)+1;
    crystal2Number =Math.floor(Math.random()*12)+1;
    crystal3Number =Math.floor(Math.random()*12)+1;
    crystal4Number =Math.floor(Math.random()*12)+1;
    $("#wins").text("wins:"+wintimes);
    $("#random-Number").text(randomNumber);
    $("#yourTotalScore").text(totalNumber);
  }
  else if(totalNumber>randomNumber){
    losetimes+=1;
    $("#result").text("You Lost!!");
    totalNumber=0;
    randomNumber =Math.floor(Math.random()*103)+18;
    crystal1Number =Math.floor(Math.random()*12)+1;
    crystal2Number =Math.floor(Math.random()*12)+1;
    crystal3Number =Math.floor(Math.random()*12)+1;
    crystal4Number =Math.floor(Math.random()*12)+1;
    $("#loses").text("loses:"+losetimes);
    $("#random-Number").text(randomNumber);
    $("#yourTotalScore").text(totalNumber);
  }
});
