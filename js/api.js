

function gitpeek(path){
var xhr = new XMLHttpRequest();
var getLink = "";
var currentPath = "https://raw.githubusercontent.com"+window.location.pathname+"/../";
	if ( path.length > 0 && path != undefined){
		if(/\.js$/.test(path)){
			getLink = currentPath+path;
		}else if(/^'.+'$/.test(path)){
			 path = path.replace(/'/g,'');
			 if(/\.js$/.test(path)){
				getLink = currentPath+path;
			}else{
			  getLink = currentPath+path+".js";
			}
		} else{
			getLink = currentPath+path+".js";
		}
	if(/.+\/blob.+/.test(getLink)){
		getLink = getLink.replace(/\/blob/g,'');
	}
	 xhr.open("GET", getLink, false);
	 xhr.send();

	 var result = xhr.responseText;
	 var lines = result.split("\n");
return lines;
	}
}
