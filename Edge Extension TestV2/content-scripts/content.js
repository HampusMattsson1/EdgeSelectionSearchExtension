
// what to do if a specific key is pressed
document.addEventListener('keydown', function(e) {
    // Send a message to the background script
	if (e.ctrlKey && e.shiftKey && e.key === 'E')
	{
		chrome.runtime.sendMessage({action: "open_new_tab"});
	}
});