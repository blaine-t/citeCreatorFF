// Add an event listener to a button or any user input element
document.getElementById('allUrlButton').addEventListener('click', function () {
  // Check if popup to do immediate close or if option page to do a more controlled action
  if (document.getElementById('allUrlButton').classList.contains('popup')) {
    // Request the "host_permissions" to access all URLs
    chrome.permissions.request({ origins: ['<all_urls>'] });
    // Close popup so user can see permission popup
    window.close();
  } else {
    // Request the "host_permissions" to access all URLs
    chrome.permissions.request({ origins: ['<all_urls>'] })
      .then(function (granted) {
        if (granted) {
          // Permission granted, you can now access all URLs
          console.log('Permission granted for all URLs');
          document.getElementById('allUrlDiv').hidden = true;
        } else {
          // Permission denied or not granted
          console.log('Permission denied for all URLs');
        }
      })
      .catch(function (error) {
        // An error occurred while requesting permissions
        console.error('Error requesting permissions:', error);
      });
  }
});


chrome.permissions.contains({ origins: ["<all_urls>"] })
  .then((isGranted) => {
    if (!isGranted) {
      // Permission is not granted
      document.getElementById('allUrlDiv').hidden = false;
    }
  });