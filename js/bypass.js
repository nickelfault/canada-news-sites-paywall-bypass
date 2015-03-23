chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: details.url.indexOf("://s.ppjol.net/") != -1 || details.url.indexOf("paywall.js") != -1 || details.url.indexOf("paywall.min.js") != -1
        };
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);