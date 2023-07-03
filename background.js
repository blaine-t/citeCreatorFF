chrome.runtime.onMessage.addListener(function (req, sender, callback) {
	if (req.text.length > 0) {
		navigator.clipboard.writeText(req.text)
			.then(() => {
				console.log('Cite copied to clipboard');
			})
			.catch((error) => {
				console.error('Unable to copy cite to clipboard:', error);
			});
	}
});
