var GIT_PEEK_IS_OPEN = false

function openGitPeek(lineID, rawContent) {

	if (!GIT_PEEK_IS_OPEN && !document.getElementById('gitPeek')) {
		var popup = document.createElement('div')
		popup.style.zIndex = "9001";
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

		// Setting dialog box at the same level the line.
		var codeLine = document.getElementById(lineID)
		var codeLine_coordinates = codeLine.getBoundingClientRect();
		popup.style.top = -10+codeLine_coordinates.top+"px";
		popup.style.left = 100+codeLine_coordinates.left+"px";
		document.getElementsByTagName('body')[0].appendChild(popup);

		// hljs.highlightBlock(code)

		document.addEventListener('click', closeGitPeek)
		GIT_PEEK_IS_OPEN = true
	}
}

function closeGitPeek(e) {
	if (e.target.id !== 'gitPeek') {
		var gitPeek = document.getElementById('gitPeek')
		gitPeek.parentNode.removeChild(gitPeek)
		GIT_PEEK_IS_OPEN = false
		document.removeEventListener('click', closeGitPeek)
	}
}