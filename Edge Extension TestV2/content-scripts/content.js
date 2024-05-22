
// what to do if a specific key is pressed
document.addEventListener('keydown', function(e) {
    // Send a message to the background script
	
	var selection = window.getSelection().toString();
	
	if (e.ctrlKey && e.shiftKey && e.key === 'E')
	{
		chrome.runtime.sendMessage({action: "open_new_tab", selection: selection});
	}
	//if (e.ctrlKey && e.shiftKey && e.key === 'H')
	//{
	//	chrome.runtime.sendMessage({action: "open_new_tab2", selection: selection});
	//}
});