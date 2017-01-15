function wrappedGitPeek(lastId) {
	return function(text) {
		openGitPeek(lastId, text)
	}
}

if (document.addEventListener ) {
	document.addEventListener("click", function(event) {
		var targetElement = event.target || event.srcElement

		var filePath  = getFilePath(targetElement.innerText)
		var lastId = getLastId(targetElement)
		fetchFileContent(filePath, wrappedGitPeek(lastId))
	})
}

function getFilePath(text) {
	var contentURL = ""
	var currentPath = GITHUB_CONTENT + window.location.pathname + '/../'

	if (text.length > 0 && text != undefined){
		if (/\.js$/.test(text)){
			contentURL = currentPath + text
		} else if (/^'.+'$/.test(text)) {
			 text = text.replace(/'/g,'')
			 if(/\.js$/.test(text)){
				 contentURL = currentPath + text;
			 }else{
			  contentURL = currentPath + text + ".js"
			}
		} else{
			contentURL = currentPath + text + ".js"
		}

		return contentURL.replace(/\/blob/g,'')
	}
}

function getLastId(element){
	var count = 5;
	var currentElement = element;
	while (--count > 0 ){
		if (currentElement.getAttribute('id')){
			return currentElement.getAttribute('id');
		}
		currentElement = currentElement.parentElement;
	}
}
