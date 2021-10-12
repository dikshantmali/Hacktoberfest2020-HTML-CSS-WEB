$(window).on('load', function () { 
    jQuery('#status').fadeOut(4000); 
    $('#pageloader').delay(2).fadeOut(4000); 
    $('body').delay(1000).css({'overflow':'visible'});
});