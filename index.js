var list=0;
function expand(){
  if(list==0){
    $(".list").css("transform","scale(1) rotate(0deg)");
    $(".toggle").css("transform","rotate(45deg)");
    list=1;
  }
  else{
    $(".list").css("transform","scale(0) rotate(-90deg)");
    $(".toggle").css("transform","rotate(0deg)");
    list=0;
  }
}
function newanimals(){
  if(list==1){
    $(".list").css("transform","scale(0) rotate(-90deg)");
    $(".toggle").css("transform","rotate(0deg)");
    swal("Sorry we do not have other mammals yet. We work on it.");
    list=0;
  }
}
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       $(".home").css("transform","scale(1)");

     } else {
        $(".home").css("transform","scale(0)");

     }
   });

  $(".list a:nth-child(1)").on("click",function func(){
    setTimeout(function () {
      $("#ant").css("background-color","rgba(0,0,0,0.6)");
    },100);
    setTimeout(function () {
      $("#ant").css("background-color","rgba(0,0,0,0)");
    }, 500);
});
$(".list a:nth-child(2)").on("click",function func(){
  setTimeout(function () {
    $("#cat").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#cat").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(3)").on("click",function func(){
  setTimeout(function () {
    $("#dog").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#dog").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(4)").on("click",function func(){
  setTimeout(function () {
    $("#fish").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#fish").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(5)").on("click",function func(){
  setTimeout(function () {
    $("#fox").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#fox").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(6)").on("click",function func(){
  setTimeout(function () {
    $("#goat").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#goat").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(7)").on("click",function func(){
  setTimeout(function () {
    $("#racoon").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#racoon").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
$(".list a:nth-child(8)").on("click",function func(){
  setTimeout(function () {
    $("#turtle").css("background-color","rgba(0,0,0,0.6)");
  },100);
  setTimeout(function () {
    $("#turtle").css("background-color","rgba(0,0,0,0)");
  }, 500);
});
