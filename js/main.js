
$(function(){
    
   // $("#tablen,#tablew,#tablee,#tables").css("display","none");
    $("#north").click(function(){
        event.preventDefault()
        $("#tablen,#tablew,#tablee,#tables").fadeOut(function(){
            $("#tablen").fadeIn();
        });
       
    });
    $("#west").click(function(){
        event.preventDefault()
        $("#tablen,#tablew,#tablee,#tables").fadeOut(function(){
            $("#tablew").fadeIn();
        });
   
    });
    $("#east").click(function(){
        event.preventDefault()
        $("#tablen,#tablew,#tablee,#tables").fadeOut(function(){
            $("#tablee").fadeIn();
        });
   
    });
    $("#south").click(function(){
        event.preventDefault()
        $("#tablen,#tablew,#tablee,#tables").fadeOut(function(){
            $("#tables").fadeIn();
        });

    });
})
    

$(function(){
    var $window = $(window);
var $elem = $("#connection");
var $elem2 = $("#pac");
var $elem3 = $("#about");

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate");
     
        
    }
    if (isScrolledIntoView($elem2, $window)) {
        $("#package").addClass("animate");
        $("#packImage").addClass("animate");
        
    }
    if (isScrolledIntoView($elem3, $window)) {
        $("#abText").addClass("animate");
        $("#abImage").addClass("animate");
      
        
    }
});



    var $window = $(window);
var $elem = $("#pac")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
        
    }
});


    var $window = $(window);
var $elem = $("#pills")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
        
    }
    var el=document.getElementById("nav");
    var topnav=el.getBoundingClientRect().top;
    console.log(topnav<=0)
    if(topnav<=0){
        $("#navb").css(
            {
              
                'opacity' : '1'
            }
        );
    
       
    
    }
    else{
        $("#navb").css(
            {
              
                'opacity' : '0'
            }
        );
    }
});
})
