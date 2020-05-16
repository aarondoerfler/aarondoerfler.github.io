$(document).ready(function(){
    // $("#name-title").html("🙏🏿");
    console.log('Hello world');

    $( "#projects-link" ).click(function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top},
            1000);
    });
    
       $( "#blogpost-link").click(function() {
        $('html, body').animate({scrollTop: $('#blogpost').offset().top},
            1000);
    });
    
     $( "#creativecloud-link").click(function() {
        $('html, body').animate({scrollTop: $('#creativecloud').offset().top},
            1000);
    });
    
    setTimeout( function() {
        $('#name-title').html("<h1>🔥</h1>");
        }, 2000 );
        
    
});