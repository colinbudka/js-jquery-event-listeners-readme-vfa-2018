//define functions here
function getIt(){
  $("p").on("click", alert("Hey!"))
}
function frameIt(){
 // $("img").on("load", ("tasty"))
}
function pressIt(){
  $("form").on("keydown", 
    function(key){
      if(key.which == 71){
        alert("g was pressed")
      }
    }
  )
}
function submitIt(){
  $("form").on("submit", 
    alert("Your form is going to be submitted now.")
  )
}

$(document).ready(function(){

// call functions here

});
