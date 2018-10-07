/* var sname="m_score"; */
function mAddScore(val) {
	scores = JSON.parse(localStorage[sname]);
	if (!scores) {
		scores = [];
	}
	name = prompt("What is your name?");
	v = val.toString();
	p = new Array(5 - v.length + 1).join("0");
	scores.push(p + val.toString() + " " + name);
	scores.sort();
	localStorage[sname] = JSON.stringify(scores.slice(-10));
}

function mShowScore() {
	s = JSON.parse(localStorage[sname]);
	s.sort();
	ss = "Scoreboard\n----------\n";
	n = s.length;
	while (n--) {
		ss += s[n] + "\n";
	}
	alert(ss);
}

function endGame2(gname, score) {
	ctx.clearRect(0, 0, cvs.width, cvs.height);
	ctx.fillStyle = "#000000";
	ctx.font = "bold 30px Arial";
	ctx.fillText(gname, 20, cvs.height / 2 - 20);
	ctx.font = "30px Arial";
	ctx.fillText("Score: " + score.toString(), 50, cvs.height / 2 + 20);
	mAddScore(score);
	mShowScore();
	cvs.onclick = init;
}
if (!localStorage[sname]) {
	localStorage[sname] = JSON.stringify([]);
}
