

// Move tracker
 let playerEx = [];
 let playerOh = [];

 //Turn Zero for Ex, 1 for Oh
let turn = 0;

//- ABANDONED: HALFWAY THROUGH I REALIZED IT WASN'T GOING TO WORK :(
//*** When Player tally reaches one of the numbers in the array, they win! ****
// const winConditions = [27,90,600,126,235,356,137,345];

var winningCondition = ['ABC','ADG','AEI','BEF','BEH','CEG','CFI','GHI'];

//- ABANDONED: HALFWAY THROUGH I REALIZED IT WASN'T GOING TO WORK :(
// ****Square Value for Win Tracker***
// square1 = 15
// square2 = 5
// square3 = 7
// square4 = 11
// square5 = 30
// square6 = 49
// square7 = 100
// square8 = 200
// square9 = 300




// $(document).ready(function() {
//     $('.gallerythumbnail').on('click', function() {
//         var img = $('<img />', {src    : this.src,
//                                 'class': 'fullImage'
//                   });

//         $('.showimagediv').html(img).show();
//     });
// });

// $(document).ready(function() {


// $("#one").onclick(function(){
// 	$("#one").attr("src", "ex.png")
// })
//

// document.getElementById("one").innerHTML="<img src="oh.png" />";






//This WORKS  --- DON'T USE THIS; USE PRETTY BUTTONS INSTEAD ****************
// $(function() {

// $('#one').on('click', function(){
// 	$('#one').prepend('<img src="ex.png" />');
// 	turn +=1
//      });

// });

// if(turn === 1){









// CHANGE THIS SO THAT ON CLICK IT CHANGES THE BUTTON TO ONE WITH A COLORED BACKGROUND
// $(function() {
//
// $('#one').on('click', function(){
// 	$('#one').append('<img src="ex.png" />');
// 	turn +=1
//      });
//
// });


// $(function() {
//
//     $('#two').on('click', function(){
//         // $('#two').prepend('<img src="ex.png" />');
//             if(turn %2 === 0) {
//             $("#two").css({"background-image": "url('ex.png')"});
//         } else {
//             $("#two").css({"background-image": "url('oh.png')"});
//         }
//         turn +=1
//         console.log(turn);
//     });
//
//
//
// });

$(function() {

    // if( $('#leftmenu').is(':empty') )
        if($("#one").is(':empty')) {
             $('#one').one('click', function() {
                 // $('#two').prepend('<img src="ex.png" />');
                 if (turn % 2 === 0) {
                     $("#one").css("background-image", "url('ex.png')");
                     $("#one").addClass('ex');
                     playerEx.push("A");
                     $("h2").text("Make your move, Player O!");
                     console.log(playerEx);
                 }
                 else {
                     $("#one").css("background-image", "url('oh.png')");
                     // playerOh.push("A" + playerOh[]);
                     $("one").addClass('oh');
                     $("h2").text("Make your move, Player X!");
                     console.log(playerOh);
                 }
                 turn += 1
                 if( turn >= 3) {
                     findWinner(playerEx, winningCondition);
                     findWinner(playerOh, winningCondition);
                 }
                 else {

                 }

                 console.log(turn);
             })
        }
    })

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#two").is(':empty')) {
        $('#two').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#two").css("background-image", "url('ex.png')");
                playerEx.push("B");
                $("h2").text("Make your move, Player O!");
                console.log(playerEx);

            }
            else {
                $("#two").css("background-image", "url('oh.png')");
                playerOh.push("B");
                $("h2").text("Make your move, Player X!");
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#three").is(':empty')) {
        $('#three').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#three").css("background-image", "url('ex.png')");
                playerEx.push("C");
                $("h2").text("Make your move, Player O!");
                console.log(playerEx);

            }
            else {
                $("#three").css("background-image", "url('oh.png')");
                playerOh.push("C");
                $("h2").text("Make your move, Player X!");
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})



$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#four").is(':empty')) {
        $('#four').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#four").css("background-image", "url('ex.png')");
                playerEx.push("D");
                $("h2").text("Make your move, Player O!");
                console.log(playerEx);

            }
            else {
                $("#four").css("background-image", "url('oh.png')");
                playerOh.push("D");
                $("h2").text("Make your move, Player X!")
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})



$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#five").is(':empty')) {
        $('#five').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#five").css("background-image", "url('ex.png')");
                playerEx.push("E");
                $("h2").text("Make your move, Player O!");
                console.log(playerEx);

            }
            else {
                $("#five").css("background-image", "url('oh.png')");
                playerOh.push("E");
                $("h2").text("Make your move, Player X!");
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#six").is(':empty')) {
        $('#six').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#six").css("background-image", "url('ex.png')");
                playerEx.push("F");
                $("h2").text("Make your move, Player O!");
                console.log(playerEx);

            }
            else {
                $("#six").css("background-image", "url('oh.png')");
                playerOh.push("F");
                $("h2").text("Make your move, Player X!")
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#seven").is(':empty')) {
        $('#seven').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#seven").css("background-image", "url('ex.png')");
                playerEx.push("G");
                $("h2").text("Make your move, Player O!")
                console.log(playerEx);

            }
            else {
                $("#seven").css("background-image", "url('oh.png')");
                playerOh.push("G");
                $("h2").text("Make your move, Player X!");
                console.log(playerOh);

            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#eight").is(':empty')) {
        $('#eight').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#eight").css("background-image", "url('ex.png')");
                playerEx.push("H");
                $("h2").text("Make your move, Player O!")
                console.log(playerEx);
            }
            else {
                $("#eight").css("background-image", "url('oh.png')");
                playerEx.push("H");
                console.log(playerOh);
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#nine").is(':empty')) {
        $('#nine').one('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#nine").css("background-image", "url('ex.png')");
                playerEx.push("I");
                $("h2").text("Make your move, Player O!")
                console.log(playerEx);

            }
            else {
                $("#nine").css("background-image", "url('oh.png')");
                playerEx.push("I");
                console.log(playerOh);

            }
            turn += 1

            console.log(turn);
        })
    }
})


function findWinner(array, winningCondition) {
    if (array === winningCondition)
        alert("Winner!!");

    if (array.length != winningCondition.length)
        console.log("false");
        return false;

    player.sort();
    winningCondition.sort();

    for (let i = 0; i < array.length; ++i) {
        if (array[i] !== winningCondition[i])
            console.log("false");
            return false;
    }
    alert("Winner!");
    return true;
}




//
//
//
//
// $(function() {
//
//     $('#two').on('click', function(){
//         // $('#two').prepend('<img src="ex.png" />');
//         $("#two").css({"background-image": "url('ex.png')"});
//         turn +=1
//         console.log(turn);
//     });
//
//
//
// });


// FIGURE OUT VARIABLE FOR THE TURNS; FOR TURN=1 -EX; FOR TURN=0 -> OH
// if(turn === 1){
//
//
//
// }



// $(function() {

// $('#one').on('click', function(){
// 	$('#one').slideToggle(200);

//      });

// });








 // var oDiv = document.getElementById('one');
 //    oDiv.addEventListener('click', function() {
 //        this.setAttribute('style', 'background-image: ex.png');
 //    }, false);

// $('#one').onclick("<img src='oh.png' />");




