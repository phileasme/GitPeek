/** onUpdated should fire when the selected tab is changed or a link is clicked **/
var baseURL = "about:blank"; // A default url just in case below code doesn't work
chrome.runtime.reload();
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { // onUpdated should fire when the selected tab is changed or a link is clicked  
    // // if(baseURL != tab.url){
    //     chrome.tabs.query({ url: "https://github.com/*" }, function(tabs)
    //     {
    //         for(var i = 0; i < tabs.length; i++)
    //         {
                chrome.tabs.executeScript(tabId, { file: "main.js" }, function() {});
            }
        // });
    // }
//     baseURL = tab.url;
//     // chrome.tabs.sendMessage(tabId, {action: "refresh_dialog", url: baseURL}, function(response) {});
});

