//Challenge: http://codegolf.stackexchange.com/questions/96541/make-an-ascii-bat-fly-around-an-ascii-moon

function j() {
    var a = [];
    for (var i=0; i<105; i++) {
        var b=Math.floor(i/15);
        if (i%15==0) {
            a[b]=[];
        }
        a[b][i%15]='p';
    }
    function g(b,c,d){
        for (var i=c; i<d; i++) {
            a[b][i]='m';
            a[6-b][i]='m';
        }
    }
    g(1,6,9);
    g(2,4,11);
    g(3,3,12);
    return(a);
}

function h() {
    var b='^';
    var c='o';
    var d=[6,24,41,57,71,84,96,78,61,45,31,18,6];
    var w = '';
    for (var i=0; i<13; i++) {
        var a = j();
        var e=Math.floor(d[i]/15);
        var f=d[i]%15;
        a[e][f]=b;
        a[e][f+1]=c;
        a[e][f+2]=b;
        for (var k=0; k<7; k++) {
            for (var l=0; l<15; l++) {
                w+=a[k][l];
            }
            console.log(w);
            w='';
        }
    }
}

h();
