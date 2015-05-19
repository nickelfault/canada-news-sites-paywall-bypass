chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: details.url.indexOf("ppjol.net/") != -1 || details.url.indexOf("paywall.js") != -1 || details.url.indexOf("paywall.min.js") != -1
        };
    },
    {urls: [
		"*://*.edmontonjournal.com/*",
        "*://*.montrealgazette.com/*",
        "*://*.leaderpost.com/*",
        "*://*.thestarphoenix.com/*",
        "*://*.theprovince.com/*",
        "*://*.vancouversun.com/*",
        "*://*.timescolonist.com/*",
        "*://*.windsorstar.com/*",
        "*://*.nationalpost.com/*",
        "*://*.financialpost.com/*",
        "*://*.edmontonsun.com/*",
        "*://*.calgarysun.com/*",
        "*://*.ottawasun.com/*",
        "*://*.torontosun.com/*",
        "*://*.winnipegsun.com/*",
        "*://*.thewesternstar.com/*",
        "*://*.ppjol.net/*",
        "*://*.ottawacitizen.com/*"
	]},
    ["blocking"]
);