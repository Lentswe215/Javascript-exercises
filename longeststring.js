function longestString(stringArray) {
	let longestStringArray = [],
		currentLongestString = '';

	for (let i = 0; i < stringArray.length; i++) {
		if (stringArray[i].length >= currentLongestString.length) {
			currentLongestString = stringArray[i];
		}
	}

	for (let j = 0; j < stringArray.length; j++) {
		if (stringArray[j].length == currentLongestString.length) {
			longestStringArray.push(stringArray[j]);
		}
	}

	console.log('Longest string is/are:', longestStringArray);
}
longest(['once', 'upon', 'a', 'time']);
