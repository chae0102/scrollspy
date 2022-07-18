$(function() {

    var link = $('#navbar a.dot');
    link.on('click', function(e) {

        var target = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);

        $(this).addClass('active');

        e.preventDefault();
    });

    $(window).on('scroll', function(){
        findPosition();
    });

    function findPosition(){
        $('section').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('active');
                $('#navbar').find('[date-scroll="'+ $(this).attr('id') +'"]').addClass('active');
            }
        });
    }

    findPosition();
    
});