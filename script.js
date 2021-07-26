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

            console.log('$(this) empty', $(this));
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
        // console.log('playerTurn', playerTurn);

        targetplayer = $(this).attr('player');
        targetPiece = $(this).attr('piece');

        // console.log('targetplayer', targetplayer);
        // console.log('targetPiece', targetPiece);

            $("[empty='false']").each(function() {   //reset colour
                if($(this).hasClass('light')) {
                    var bgColour = 'white'
                } 
                else {
                    var bgColour = 'grey'
                }
                $(this).css("background-color", bgColour);
            })

        $(this).css("background-color", 'green');

    });

});

