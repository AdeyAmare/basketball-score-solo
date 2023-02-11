let homeScore = 0;
let guestScore = 0;

let home_sc = document.getElementById('home');
let guest_sc = document.getElementById('guest');
let homeHeader = document.getElementById("home-header");
let guestHeader = document.getElementById("guest-header");

function addPoints(team, point) {
    if (team === "home") {
        homeScore += point;
        home_sc.textContent = homeScore;
    } else if (team = "guest") {
        guestScore += point;
        guest_sc.textContent = guestScore;
    }
    highlight_leader();
}

function highlight_leader() {
    if (homeScore > guestScore) {
        homeHeader.style.color = "lightgreen"
        guestHeader.style.color = "white"
    } else if (homeScore < guestScore) {
        guestHeader.style.color = "lightgreen"
        homeHeader.style.color = "white"
    }
}
function newGame() {
    homeScore = 0;
    guestScore = 0;
    guest_sc.textContent = "0";
    home_sc.textContent = "0";
    guestHeader.style.color = "white";
    homeHeader.style.color = "white"
}

