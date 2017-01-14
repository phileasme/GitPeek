//Acts as a CSS selector
/** Allows use to uniquely identify an HTML element **/
function getPath(element) {
  var path, node = element;
  while(node){
    var name = node.localName;
    if (!name) break;
    name = name.toLowerCase();
    if (inParentSameNodeName(node) > 1) {
    	name += ':eq(' + (indexInParent(node))  + ')';
    }
    path = name + (path ? '>' + path : '');
    node = node.parentNode;
  }
  return path;
}

// Gets the index of the element among others who have the same nodeName
function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i=0; i<children.length; i++) {
    if (children[i]==node) return num;
    if (children[i].nodeType==1 && children[i].nodeName == node.nodeName) {
    	num++;
	}
  }
 return -1;
}


// Get number of elements containing the same nodeName
function inParentSameNodeName(node) {
 var children = node.parentNode.childNodes;
 var num = 0;
 for (var i=0; i<children.length; i++) {
   if (children[i].nodeType==1 && children[i].nodeName == node.nodeName) {
   	num++;
   }
 }
 return num;
}
// CSS Selector element finder ** Copyright by Phileas Hocquard **
function findElementFromPath(path) {
	if (path > 0) throw 'Requires one element.';
		var mainIterator = 0; var innerIterator = 0;
		var arrayOfPath = path.split("\u003e");
		var currentNodeList = document.getElementsByTagName('html')[0];
		if (currentNodeList.localName === arrayOfPath[0]) {
			++mainIterator;
			while(true) {
				var oldIterator = mainIterator;
				if(mainIterator < arrayOfPath.length) {
					 currentNodeList = currentNodeList.childNodes;
					  try {
						var currentSplit = [];
						var currentSplitCounter = 0;
						for(var i = 0; i<currentNodeList.length; i++) {
							try {
								if(/[a-zA-Z]+(:eq\(\d+\))/.test(arrayOfPath[mainIterator])) {
									currentSplit = arrayOfPath[mainIterator].split(/(:eq\(|\))/);
									currentSplit[2] = parseInt(currentSplit[2]);
									if (currentNodeList[i]) {

										if(currentSplit[0] === (currentNodeList[i].localName ? currentNodeList[i].localName.toLowerCase() : undefined)) {

											if(currentSplitCounter === currentSplit[2]) {
												currentNodeList = currentNodeList[i];
												mainIterator++;
												break;
											}
											currentSplitCounter++;
										}
									}
								}
								else if(arrayOfPath[mainIterator] === (currentNodeList[i].localName ? currentNodeList[i].localName.toLowerCase() : undefined)) {
									mainIterator++;
									currentNodeList = currentNodeList[i];
								}
							} catch(err) {
								console.log('err' + err.message);
							}
						}
					  } catch(err) {
						console.log('err' + err.message);
					  }
					  if (oldIterator == mainIterator) {
						  break;
					  }
					}else{
						break;
					}
				}
			}
			return currentNodeList;
		}
if (document.addEventListener ) {
    document.addEventListener("click", function(event) {
        var targetElement = event.target || event.srcElement;
        console.log("get ID OF LINE" + getLastId(targetElement));
        var textArray = gitpeek(findElementFromPath(getPath(targetElement)).innerText);
				openGitPeek(getLastId(targetElement), textArray)
	});
} else if (document.attachEvent) {
    document.attachEvent("onclick", function() {
        var targetElement = event.target || event.srcElement;
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

