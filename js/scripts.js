$('document').ready(function(){
    $('.toggle-desc').click(function(event){
       event.preventDefault();
       $(this).siblings('.description').slideToggle();
    });
});
