function combineTwoArrays(arr1, arr2) {
	var combinedArray = [];

	for (var i = 0; i < arr1.length; i++) {
		combinedArray.push(arr1[i]);
	}
	for (var j = 0; j < arr2.length; j++) {
		combinedArray.push(arr2[j]);
	}

	return combinedArray.sort();
}

console.log(combineTwoArrays([11, 22, 33], [1, 2, 3]));
