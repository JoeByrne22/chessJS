// console.log('hello world');

$( document ).ready(function() {

    playerTurn = 'white';

    $('[piece]').each(function() {
        let player = $(this).attr('player');
        let piece = $(this).attr('piece');
        
        if (piece == '' || player == '' ) {
            $(this).attr('empty', 'true');
            $(this).removeAttr('player');
            $(this).removeAttr('piece');

            // console.log('$(this) empty', $(this));
            return
        }
        // console.log($(this));
        $(this).attr('empty', 'false');
        backgroundColour = $(this).css('background-color')
        $(this).css("background" , "url(./pieces/" + player + "/" + piece + ".svg)").css("background-color", backgroundColour);

        // if ($(this).hasClass(dark)) {
        //     $(this).css("background-color" , "grey");
        // }
    })

    $('[empty]').on('click', function() {
        console.log('playerTurn', playerTurn);
    });

});

