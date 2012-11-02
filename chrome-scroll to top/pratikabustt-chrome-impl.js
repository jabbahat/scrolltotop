var pratikabustt_browser_impl = {
	getFixedLocation : function() {
		// #BrowserSpecific location
		return "icons/pratikabu-stt-";
	},
	
	fetchPreferences: function() {
		// #BrowserSpecific method call
		// write the logic to set the location
		pratikabustt_browser_impl.loadFromPreference();
	},
	
	loadFromPreference: function(data) {
		// #BrowserSpecific call
		// Asks background.html for [LocalStorage] settings from Options Page and assigns them to variables
		chrome.extension.sendRequest({method: "getSettings"}, function(response_msg) {
			// #BrowserSpecific this method is somewhat browser specific
			if(!response_msg) {
				return;
			}
			pratikabustt.loadFromResponse(pratikabustt_browser_impl.convertResponse(response_msg));
		});
	},
	
	getRotationCssName: function() {
		// #BrowserSpecific css
		return "-webkit-transform";
	},
	
	getBrowserSpecificUrl: function(imgUrl) {
		// #BrowserSpecific method to get the resource
		return chrome.extension.getURL(imgUrl);
	},
	
	convertResponse: function(rawResponse) {
		// #BrowserSpecific method to convert response to single known format
		return rawResponse;
	}
};