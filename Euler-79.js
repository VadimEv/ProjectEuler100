function passcodeDerivation(arr) {
    var log = String(arr).split(',', 50);
    var ans = "";
    for (;;) {
        var head = [];
        var body = [];
        for (var i in log) {
            var n = log[i][0];
            head[n] = 1;
            for (var j = 1; j < log[i].length; j++) {
                var n = log[i][j];
                body[n] = 1;
            }
        }
        var h = "";
        for (var i in head) {
            if (head[i] && !body[i]) {
                h = i;
                break;
            }
        }
        if (h == "") {
            return Number(ans);
        }
        ans += h;
        var log2 = [];
        for (var i in log) {
            if (log[i][0] == h) {
                log[i] = log[i].slice(1);
            }
            if (log[i] != "") {
                log2.push(log[i]);
            }
        }
        log = log2;
    }    
}

const keylog = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];

passcodeDerivation(keylog);