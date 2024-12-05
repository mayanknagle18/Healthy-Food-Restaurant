// sidebar that lock the body scroll

$(document).ready(function(){
    $("#hamburger_toggle").on("click", function(){
        $("body").toggleClass("no_scroll");
    })
});