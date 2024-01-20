//chrome.webNavigation.onCompleted.addEventListener((tab) => {
//chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
chrome.action.onClicked.addListener((tab) => {
   chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/content.js"]
 });

});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["scripts/content.js"]
    });

  }
});
