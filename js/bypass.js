chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.indexOf('winnipegfreepress.com') != 1 && details.url.indexOf('v4_main.min.js') != -1) {
			return {
				redirectUrl: chrome.extension.getURL('js/wfp.js')
			};
        }
        return {
            cancel: details.url.indexOf("ppjol.net/") != -1
            	|| details.url.indexOf("ppjol.com/") != -1
            	|| details.url.indexOf("paywall.js") != -1
            	|| details.url.indexOf("paywall.min.js") != -1 
            	|| details.url.indexOf("tinypass.min.js") != -1
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
        "*://*.ottawacitizen.com/*",
        "*://*.winnipegfreepress.com/*",
        "*://*.tinypass.com/*"
	]},
    ["blocking"]
);