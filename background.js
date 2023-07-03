chrome.runtime.onMessage.addListener(
	function (req, sender, callback) {
		var rv, el;
		//console.log(req.text);
		if (req.text.length > 0) {
			el = document.createElement('textarea');
			document.body.appendChild(el);
			el.value = req.text;
			el.select();

			rv = document.execCommand("copy");

			document.body.removeChild(el);
		}
	}
);