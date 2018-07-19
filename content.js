setTimeout(function () {
    var remaining = document.getElementById('remaining');
    var blueRemaining = remaining.firstChild;
    var redRemaining = remaining.lastChild;
    var score = document.createElement('span')
    score.innerText = '-';
    score.className = 'score-span';
    remaining.innerHTML = '';
    remaining.appendChild(blueRemaining);
    remaining.appendChild(score);
    remaining.appendChild(redRemaining);
}, 1000)
