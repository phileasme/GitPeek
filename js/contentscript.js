
if (document.addEventListener ) {
    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        console.log("get ID OF LINE" + getLastId(targetElement));
        // console.log();
        var textArray = gitpeek(targetElement.innerText);
				openGitPeek(getLastId(targetElement), textArray)
	});
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

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/script.js');
s.onload = function() {
    this.remove();
};
// Add event listener for whatever click on anchor element send to  backend process
(document.head || document.documentElement).appendChild(s);

