document.addEventListener('DOMContentLoaded', function () {

	chrome.storage.local.get('enabled', function (settings) {
		if (settings.enabled == 0) {
			document.getElementById('cm_myonoffswitch').checked = false;
			console.log('Cite Maker disabled');
		}
		else {
			document.getElementById('cm_myonoffswitch').checked = true;
			console.log('Cite Maker enabled');
		}
	});

	document.querySelector('#cm_myonoffswitch').addEventListener('change', onOffHandler);

	document.getElementById('cite_popupoptionslink').href = chrome.runtime.getURL("options.html");
	document.getElementById('cite_popupoptionslink').target = '_blank';
});

function onOffHandler() {
	if (document.getElementById('cm_myonoffswitch').checked) {
		chrome.storage.local.set({ 'enabled': 1 }, function () {
			chrome.storage.local.get('enabled', function (settings) {
			});
			console.log('Cite Creator enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'enabled': 0 }, function () {
			console.log('Cite Creator disabled');
		});
	}
}