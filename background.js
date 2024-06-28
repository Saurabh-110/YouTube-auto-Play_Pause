let currentTabId;

chrome.tabs.onActivated.addListener(activeInfo => {
  currentTabId = activeInfo.tabId;
  checkTabStatus();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === currentTabId && changeInfo.status === 'complete') {
    checkTabStatus();
  }
});

chrome.windows.onFocusChanged.addListener(windowId => {
  checkTabStatus();
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (tabId === currentTabId) {
    currentTabId = null;
  }
});

function checkTabStatus() {
  if (currentTabId) {
    chrome.tabs.get(currentTabId, tab => {
      if (tab && tab.url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
          target: { tabId: currentTabId },
          files: ['content.js']
        }).then(() => {
          console.log('Content script injected successfully.');
        }).catch(err => {
          console.error('Error injecting content script:', err);
        });
      }
    });
  }
}
