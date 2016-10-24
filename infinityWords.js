//Challenge: http://codegolf.stackexchange.com/questions/96516/find-the-infinity-words

function gt(a,b) {
    if (a < b) {
        return 1;
    }
    if (a == b) {
        return 3;
    }
    return 0;
}

function infinityWord(x) {
    x = x.toLowerCase();
    var a = [];
    if (x.length == 5 || x.charAt(0) == x.charAt(4)) {
        for (var i = 0; i < 5; i++) {
            a[i] = gt(x.charAt(i), x.charAt(i+1));
        }
        if (a.reduce((a, b) => a + b, 0) == 2 && (a[0] == a[3] || a[0] == a[1])) {
            return true;
        }
    }
    return false;
}

var wordArray = ['CUBIC', 'ERASE', 'FLUFF', 'LABEL', 'MODEM', 'RADAR', 'RIVER',
'SWISS', 'TRUST', 'KNEES', 'QUEEN', 'GROOVE', 'ONLY', 'CHARACTER', 'OFF', 'IT', 
'ORTHO', 'ALPHA', 'EAGLE', 'HARSH', 'NINON', 'PINUP', 'RULER', 'THEFT', 'WIDOW'];

console.log(wordArray.filter(infinityWord));

//console.log('a' > 'b');
