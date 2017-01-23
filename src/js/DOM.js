
function openGitPeek(lineID, rawContent) {

	if (!GITPEEK_ON && !document.getElementById('gitPeek')) {
		var popup = document.createElement('div')
		popup.id = 'gitPeek'

		var pre = document.createElement('pre')
		var code = document.createElement('code')
		code.className = 'javascript'
		pre.appendChild(code)

		code.innerHTML = rawContent.join('</br>')

		var codeLine = document.getElementById(lineID)
		codeLine.parentNode.insertBefore(popup, codeLine.nextSibling)

		hljs.highlightBlock(code)
		
		code.innerHTML = code.innerHTML.replace(/\@HighlighterJS_Replace_Forward_Slash\@/g, '/');

		popup.appendChild(code)

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
