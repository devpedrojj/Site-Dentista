//codigo menu DESKTOP

$('nav.desktop a').hover(function(){
    $('nav li').removeClass('selected')
    $(this).parent().addClass('selected')
})

