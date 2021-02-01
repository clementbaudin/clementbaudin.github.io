var team = document.getElementById("team-music");
document.getElementById("play").addEventListener("click", function () {team.play();}, true);
document.getElementById("pause").addEventListener("click", function () {team.pause();}, true);

function decrease() {
    var count = document.getElementById("my-count");
    count.innerHTML = "coucou";
    clearInterval(intervalID);
}

function decount() {
    var i = 10;
    var intervalID = setInterval(decrease, 1000);
    if(i>=0) {
        var count = document.getElementById("my-count");
        count.innerHTML = i;
        i--;
    } else {
        clearInterval(intervalID);
    }
}
decount();
