$(document).ready(function() {
    $('#sidebar-btn').click(function(){
      $('#sidebar').toggleClass('visible');
    })

    var closed = false;
    $("#sidebar-btn").click(function () {
      $('#main').animate({
        marginLeft: (!closed)*16+'%'
      }, 300);
      closed = !closed;
    });
});