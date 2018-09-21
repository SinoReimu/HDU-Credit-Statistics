var isStarting = false;
function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
    console.log(host)
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {

     if(getDomainFromUrl(tab.url).toLowerCase()=="jxgl.hdu.edu.cn"){
       chrome.pageAction.show(tabId);
     } else {
       chrome.pageAction.hide(tabId);
     }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);