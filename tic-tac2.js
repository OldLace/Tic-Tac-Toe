

// Win tally tracker
 let playerEx = [];
 let playerOh = [];

 //Turn Zero for Ex, 1 for Oh
let turn = 1;

//*** When Player tally reaches one of the numbers in the array, they win! ****
const winConditions = [27,90,600,126,235,356,137,345];


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
             $('#one').on('click', function() {
                 // $('#two').prepend('<img src="ex.png" />');
                 if (turn % 2 === 0) {
                     $("#one").css("background-image", "url('ex.png')");
                     playerEx.push("A");
                     console.log(playerEx);
                 }
                 else if
                     $("#one").css("background-image", "url('oh.png')");
                     playerOh.push("A");
                     console.log(playerOh);
             } else if($('#one').hasTag("img")){

                 }
                 turn += 1

                 console.log(turn);
             })
        }
    })

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#two").is(':empty')) {
        $('#two').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#two").css("background-image", "url('ex.png')");
                playerEx.push("B");
            }
            else {
                $("#two").css("background-image", "url('oh.png')");
                playerOh.push("B");
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#three").is(':empty')) {
        $('#three').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#three").css("background-image", "url('ex.png')");
                playerEx.push("C");
            }
            else {
                $("#three").css("background-image", "url('oh.png')");
                playerOh.push("C");
            }
            turn += 1
            console.log(turn);
        })
    }
})



$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#four").is(':empty')) {
        $('#four').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#four").css("background-image", "url('ex.png')");
                playerEx.push("D");
            }
            else {
                $("#four").css("background-image", "url('oh.png')");
                playerOh.push("D");
            }
            turn += 1
            console.log(turn);
        })
    }
})



$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#five").is(':empty')) {
        $('#five').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#five").css("background-image", "url('ex.png')");
                playerEx.push("E");
            }
            else {
                $("#five").css("background-image", "url('oh.png')");
                playerOh.push("E");
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#six").is(':empty')) {
        $('#six').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#six").css("background-image", "url('ex.png')");
                playerEx.push("F");
            }
            else {
                $("#six").css("background-image", "url('oh.png')");
                playerOh.push("F");
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#seven").is(':empty')) {
        $('#seven').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#seven").css("background-image", "url('ex.png')");
                playerEx.push("G");
            }
            else {
                $("#seven").css("background-image", "url('oh.png')");
                playerOh.push("G");
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#eight").is(':empty')) {
        $('#eight').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#eight").css("background-image", "url('ex.png')");
                playerEx.push("H");
            }
            else {
                $("#eight").css("background-image", "url('oh.png')");
                playerEx.push("H");
            }
            turn += 1
            console.log(turn);
        })
    }
})

$(function() {

    // if( $('#leftmenu').is(':empty') )
    if($("#nine").is(':empty')) {
        $('#nine').on('click', function() {
            // $('#two').prepend('<img src="ex.png" />');
            if (turn % 2 === 0) {
                $("#nine").css("background-image", "url('ex.png')");
                playerEx.push("I");
            }
            else {
                $("#nine").css("background-image", "url('oh.png')");
                playerEx.push("I");
            }
            turn += 1
            console.log(turn);
        })
    }
})





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




