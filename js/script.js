$(document).ready(function(){
  $("#myButton").click(function(){
      $("#hide").slideToggle();
      
  });
});



$(document).ready(function(){
  var toggleText = true;
  $(".btn_link").click(function(){
      if(toggleText){
          $(this).text("Gizlət");
      }else{
          $(this).text("Daha çox filtr");
      }
      toggleText = !toggleText;
  });
});




