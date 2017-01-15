function fetchFileContent(URL, cb){
	var xhr = new XMLHttpRequest()

	xhr.ontimeout = function() {
		console.error('The GitPeek request has timed out')
	}

	xhr.onload = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var result = xhr.responseText
				cb(result.split('\n'))
			} else {
				console.error(xhr.statusText);
			}
		}
	}

	xhr.open('GET', URL, true)
	xhr.send()
}
