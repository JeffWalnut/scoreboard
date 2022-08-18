//variables
var homeScore = 0
var homeScoreText = document.getElementById("home-score")
var guestScore = 0
var guestScoreText = document.getElementById("guest-score")

//Home add points
function homePlusOne() {
    homeScore += 1
    homeScoreText.textContent = homeScore
    console.log("Home now has " + homeScore + " points!")
}

function homePlusTwo() {
    homeScore += 2
    homeScoreText.textContent = homeScore
    console.log("Home now has " + homeScore + " points!")
}

function homePlusThree() {
    homeScore += 3
    homeScoreText.textContent = homeScore
    console.log("Home now has " + homeScore + " points!")
}

//Guest add points

function guestPlusOne() {
    guestScore += 1
    guestScoreText.textContent = guestScore
    console.log("Guest now has " + guestScore + " points.")
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreText.textContent = guestScore
    console.log("Guest now has " + guestScore + " points.")
}

function guestPlusThree() {
    guestScore += 3
    guestScoreText.textContent = guestScore
    console.log("Guest now has " + guestScore + " points.")
}