console.log('hello world');

$( document ).ready(function() {

    $('[piece]').each(function() {
        let player = $(this).attr('player');
        let piece = $(this).attr('piece');

        console.log($(this));
        backgroundColour = $(this).css('background-color')
        $(this).css("background" , "url(./pieces/" + player + "/" + piece + ".svg)").css("background-color", backgroundColour);

        // if ($(this).hasClass(dark)) {
        //     $(this).css("background-color" , "grey");
        // }
    })

});

