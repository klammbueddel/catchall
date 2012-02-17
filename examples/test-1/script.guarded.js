var catchall = catchall || {
    onerror: function(err) {
        try {
            console.error(err.stack);
        } catch (e) {
            catchall.onerror(e);
        }
    }
};

catchall.onerror = function(e) {
    try {
        console.log("Error!!!");
        console.error(e.stack);
    } catch (e) {
        catchall.onerror(e);
    }
};

function ttt() {
    try {
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
        console.log("HELLO");
    } catch (e) {
        catchall.onerror(e);
    }
}

var fn = function() {
    try {
        setTimeout(function() {
            try {
                (function() {
                    try {
                        var fnn = throwIt(function() {
                            try {
                                console.log("not accessible");
                            } catch (e) {
                                catchall.onerror(e);
                            }
                        });
                    } catch (e) {
                        catchall.onerror(e);
                    }
                })();
            } catch (e) {
                catchall.onerror(e);
            }
        }, 1e3);
    } catch (e) {
        catchall.onerror(e);
    }
};

fn();