document.addEventListener('DOMContentLoaded', function () {

	chrome.storage.local.get(null, function (settings) {
		if (settings.enabled == 0) {
			document.getElementById('cm_myonoffswitch').checked = false;
			console.log('Cite Creator disabled');
		}
		else {
			document.getElementById('cm_myonoffswitch').checked = true;
			console.log('Cite Creator enabled');
		}

		if (settings.copyselected == 1) {
			document.getElementById('copyselected').checked = true;
			console.log('Copy Selected enabled');
		}
		else {
			document.getElementById('copyselected').checked = false;
			console.log('Copy Selected disabled');
		}

		if (settings.citeboxleft == 1) {
			document.getElementById('citeboxleft').checked = true;
			console.log('Cite Box Left enabled');
		}
		else {
			document.getElementById('citeboxleft').checked = false;
			console.log('Cite Box Left disabled');
		}

		if (settings.suppressrating == 1) {
			document.getElementById('suppressrating').checked = true;
			console.log('Suppress Rating enabled');
		}
		else {
			document.getElementById('suppressrating').checked = false;
			console.log('Suppress Rating disabled');
		}

		if (settings.largefont == 1) {
			document.getElementById('largefont').checked = true;
			console.log('Large Font enabled');
		}
		else {
			document.getElementById('largefont').checked = false;
			console.log('Large Font disabled');
		}

		switch (settings.citeformat) {
			case 1:
				document.getElementById('citeformat_frontloaded').checked = true;
				document.getElementById('customciteformat').disabled = true;
				console.log('Frontloaded cite format');
				break;
			case 2:
				document.getElementById('citeformat_custom').checked = true;
				document.getElementById('customciteformat').disabled = false;
				console.log('Custom cite format');
				break;
			default:
				document.getElementById('citeformat_standard').checked = true;
				document.getElementById('customciteformat').disabled = true;
				console.log('Standard cite format');
				break;
		}

		if (settings.customciteformat) {
			document.getElementById('customciteformat').value = settings.customciteformat;
			console.log(settings.customciteformat);
		}
	});

	document.querySelector('#cm_myonoffswitch').addEventListener('change', onOffHandler);
	document.querySelector('#copyselected').addEventListener('change', copySelectedHandler);
	document.querySelector('#citeboxleft').addEventListener('change', citeBoxLeftHandler);
	document.querySelector('#suppressrating').addEventListener('change', suppressRatingHandler);
	document.querySelector('#largefont').addEventListener('change', largeFontHandler);
	document.getElementById('citeformat_standard').addEventListener('click', citeFormatHandler, false);
	document.getElementById('citeformat_frontloaded').addEventListener('click', citeFormatHandler, false);
	document.getElementById('citeformat_custom').addEventListener('click', citeFormatHandler, false);
	document.querySelector('#customciteformat').addEventListener('input', customCiteFormatHandler);
});

function onOffHandler() {
	if (document.getElementById('cm_myonoffswitch').checked) {
		chrome.storage.local.set({ 'enabled': 1 }, function () {
			console.log('Cite Creator enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'enabled': 0 }, function () {
			console.log('Cite Creator disabled');
		});
	}
}

function copySelectedHandler() {
	if (document.getElementById('copyselected').checked) {
		chrome.storage.local.set({ 'copyselected': 1 }, function () {
			console.log('Copy Selected enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'copyselected': 0 }, function () {
			console.log('Copy Selected disabled');
		});
	}
}

function citeBoxLeftHandler() {
	if (document.getElementById('citeboxleft').checked) {
		chrome.storage.local.set({ 'citeboxleft': 1 }, function () {
			console.log('Cite Box Left enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'citeboxleft': 0 }, function () {
			console.log('Cite Box Left disabled');
		});
	}
}

function suppressRatingHandler() {
	if (document.getElementById('suppressrating').checked) {
		chrome.storage.local.set({ 'suppressrating': 1 }, function () {
			console.log('Suppress Rating enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'suppressrating': 0 }, function () {
			console.log('Suppress Rating disabled');
		});
	}
}

function largeFontHandler() {
	if (document.getElementById('largefont').checked) {
		chrome.storage.local.set({ 'largefont': 1 }, function () {
			console.log('Large Font enabled');
		});
	}
	else {
		chrome.storage.local.set({ 'largefont': 0 }, function () {
			console.log('Large Font disabled');
		});
	}
}
function citeFormatHandler() {
	if (document.getElementById('citeformat_standard').checked == true) {
		document.getElementById('customciteformat').disabled = true;
		chrome.storage.local.set({ 'citeformat': 0 }, function () {
			console.log('Standard cite format');
		});
	}
	else if (document.getElementById('citeformat_frontloaded').checked == true) {
		document.getElementById('customciteformat').disabled = true;
		chrome.storage.local.set({ 'citeformat': 1 }, function () {
			console.log('Frontloaded cite format');
		});
	}
	else if (document.getElementById('citeformat_custom').checked == true) {
		document.getElementById('customciteformat').disabled = false;
		chrome.storage.local.set({ 'citeformat': 2 }, function () {
			console.log('Custom cite format');
		});
	}
}

function customCiteFormatHandler() {
	chrome.storage.local.set({ 'customciteformat': document.getElementById('customciteformat').value }, function () {
		//console.log(document.getElementById('customciteformat').value);
	});
}