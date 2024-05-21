// background.js

// Create context menu item
chrome.contextMenus.create({
  id: "searchSelectedText", // unique id for the context menu item
  title: "Search: %s", 
  contexts:["selection"]
});

// Listener if new context menu is clicked
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "searchSelectedText") {
    var query = info.selectionText;
    chrome.tabs.create({url: "https://www.google.com/search?q=" + encodeURIComponent(query)});
  }
});


// What to do if request action is open_new_tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "open_new_tab") {
        // Open a new tab
        chrome.tabs.create({url: 'https://www.bing.com'});
    }
});