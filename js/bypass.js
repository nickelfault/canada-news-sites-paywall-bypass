chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: details.url.indexOf("://s.ppjol.net/pp.js") != -1 || details.url.indexOf("paywall.js") != -1
        };
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);