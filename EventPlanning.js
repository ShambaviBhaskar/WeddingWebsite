function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var score = scores[k].score;
        var li = createElement('li', score);
        li.parent("myeventslist");
    }
}