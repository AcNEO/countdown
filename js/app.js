$(document).ready(function(){
  $("#counter").html("Carregando contador...");
  update();
});

function update(){
  $("#counter").html(countdown( new Date(2017, 9, 14) ).toString());
  setTimeout(function(){ update(); }, 1000);
}
