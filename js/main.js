// The following code is for the nav bar
// Simply update the colors before to suit your needs
$(document).ready(function(){       
            var scroll_pos = 100;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 110) {
                    // header background color after scrolling
                    $("nav").css('background-color', 'white');
                    // header text color after scrolling
                    $("nav a").css('color', 'black');
                    // hamburger button outline color after scrolling
                    $("button i").css({"color":"black"});
                    // hamburger button icon color after scrolling
                    $(".navbar-toggler").css({"border-color":"black"});
                } else {
                    // header background color before scrolling
                    $("nav").css('background-color', 'transparent');
                    // header text color before scrolling
					$("nav a").css('color', 'white');
                    // hamburger button icon color before scrolling
                    $(".fa-bars").css({"color":"white"});
                    // hamburger button outline color before scrolling
                    $(".navbar-toggler").css({"border-color":"white"});
                }
            });
        });


$('#history').tab('show')
$('#approach').tab('show')
$('#culture').tab('show')
$('#method').tab('show')

