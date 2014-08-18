chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('inicial.html', {
    'bounds': {
      'width': 600,
      'height': 600
    }
  });
});