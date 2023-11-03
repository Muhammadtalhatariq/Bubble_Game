var timer = 60;
var score = 0;
var hitsco = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoval").textContent = score;
}



function newHitVal() {
    hitsco = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitsco;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${rn}</div>`;

    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimmer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timmerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}


document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clicknum = Number(dets.target.textContent);

    if (clicknum === hitsco) {
        increaseScore();
        makeBubble();
        newHitVal();
    }
})


runTimmer();
makeBubble();
newHitVal();

