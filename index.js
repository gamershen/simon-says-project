let buttonColors = ["red", "green", "blue", "yellow"]
let gamePattern = [];
let playerPattern = []
let randomChosenColor = ""
let Level = 1

function startGame() {
    Level = 1
    // gamePattern = [];// reset the list every new game
    // playerPattern = [] // reset the list every new game
    $(".heading").text("Level " + Level)
    nextSequence()
}




// generate random sequence 
function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 2)
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern)
    playSequence(gamePattern);

}

function playSequence(gamePattern) {
    for (i = 0; i <= gamePattern.length; i++) { /* loop move too fast it reached the end and play the last one,
 it doesnt play the rest because they have the fadein timeout*/

        $(".btn-" + gamePattern[i]).fadeIn(200).fadeOut(200).fadeIn(200);
        
    }
}



// player click
function buttonRed() {
    playerPattern.push("red") // add the color to the sequence

    $(".btn-red").addClass("pressed")
    setTimeout(function () { $(".btn-red").removeClass("pressed") }, 200) // add animation on click


    // if (playerPattern == gamePattern) { // check if player click = to the game sequence, if yes continue to next level
    //     nextSequence()
    //     Level++
    //     $("h1").text("Level " + Level)
    // }
    // else {
    //     $("h1").text("Failed")
    // }
}


function buttonGreen() {
    playerPattern.push("green") // add the color to the sequence
    $(".btn-green").addClass("pressed")
    setTimeout(function () { $(".btn-green").removeClass("pressed") }, 200) // add animation on click
}


// function Check(playerPattern, gamePattern, level) {
//     if (playerPattern == gamePattern){
//         level++
//         continue
//     }
// }