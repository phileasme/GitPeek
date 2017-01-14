var GIT_PEEK_IS_OPEN = false

function openGitPeek(lineID, rawContent) {

	if (!GIT_PEEK_IS_OPEN) {
		var popup = document.createElement('div')
		popup.id = 'gitPeek'

		for ( var i = 0; i < rawContent.length; i++) {
			var textNode = document.createTextNode(rawContent[i])
			var pElem = document.createElement('p')
			pElem.appendChild(textNode)
			popup.appendChild(pElem)
		}

		// var pre = document.createElement('pre')
		// var code = document.createElement('code')
		// code.className = 'javascript'
		// code.id = 'gitPeek-code'
		// code.innerHTML = unescape(rawContent)
		// pre.appendChild(code)

		var codeLine = document.getElementById(lineID)
		codeLine.appendChild(popup)

		// hljs.highlightBlock(code)

		document.addEventListener('click', closeGitPeak)
		GIT_PEEK_IS_OPEN = true
	}
}

function closeGitPeak(e) {
	if (e.target.id !== 'gitPeek') {
		var gitPeek = document.getElementById('gitPeek')
		gitPeek.parentNode.removeChild(gitPeek)
		GIT_PEEK_IS_OPEN = false
		document.removeEventListener('click', closeGitPeak)
	}
}
