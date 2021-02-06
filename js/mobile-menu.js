$(document).ready(() => {
    var menu_enabled = false;
    var menu = $('#header .menu');
    var btn = $('#hamburger #btn-img');
    var open_menu = "images/icon-hamburger.svg";
    var close_menu = "images/icon-close.svg";

    $('#hamburger').click(() => {
        if(menu_enabled == false){
            // Menu animation
            menu.animate({
                top: '0'
            });
            
            // Change menu button to close
            btn.attr('src', close_menu);

            // Disable scrolling 
            $('html, body').css({
                'overflow': 'hidden',            
                'height': '100%'            
            });

            // Conditional toggle
            menu_enabled = true;
        }else{
            // Change menu button to hamburger
            btn.attr('src', open_menu);

            // Enable scrolling 
            $('html, body').css({
                'overflow': 'auto',            
                'height': 'auto'            
            });

            // Conditional toggle
            menu_enabled = false;

            // Menu animation
            menu.animate({
                top: '-100%'
            });
        };
    });
});
