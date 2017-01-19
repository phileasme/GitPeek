function fetchFileContent(URL, cb) {
	var xhr = new XMLHttpRequest()

	xhr.ontimeout = function() {
		console.error('The GitPeek request has timed out')
	}

	xhr.onload = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var result = xhr.responseText
				result = result.split('\n')
				var result_length = result.length
				for (var x = 0; x < result_length; x++) {
				  result[x] = result[x].replace(/\s/g,'&nbsp;')
				}
				cb(result);
			} else {
				console.error(xhr.statusText);
			}
		}
	}

	xhr.open('GET', URL, true)
	xhr.send()
}