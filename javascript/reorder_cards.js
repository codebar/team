$( document ).ready(function() {
  $("#organisers .cards-container").html($("#organisers .cards-container .card-container").sort(function(){
    return Math.random()-0.5;
  }));


  $("#shuffle").on('click', function(e){
    e.preventDefault();
    var time = 0;
    $("#organisers .card-container .card").each(function(){
      var el = $(this);

      setTimeout( function() {
        el.addClass('hover');
      }, time);

      setTimeout( function() {
        el.removeClass('hover');
      }, time + 2000);
    time = time + 2000;
    });
  });
});
