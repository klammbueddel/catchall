

catchall.error = function(e) {
	console.log("Error!!!");
	console.error(e.message);
};

function ttt() {
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
	console.log("HELLO")
}


var fn = function() {
	setTimeout(function() {
		var fnn = throwIt(function() {
			console.log('not accessible')
		})
	}, 1000);
}

fn();