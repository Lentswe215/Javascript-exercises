function rightTriangle(hash) {
	for (var i = 0; i < hash; i++) {
		for (var j = 0; j <= i; j++) {
			console.log(' # ');
		}
		console.log('\n');
	}
}

rightTriangle(4);
