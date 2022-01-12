
// We do not have access to document, background page, navigator.clipboard here so we cannot implement the copy to clipboard here, using contextMenu for instance
browser.tabs.onHighlighted.addListener(async function(highlightInfo) {
  // To match the default color of chromium extension tabs-to-clipboard-chromium-extension, it is probably not exactly the same
  // TODO : match chromium default badge color exactly or specify the same color in both extension
  browser.browserAction.setBadgeBackgroundColor(
    {
      color: "RoyalBlue"
    }
  );
  browser.browserAction.setBadgeTextColor(
    {
      color: "white"
    }
  );
  browser.browserAction.setBadgeText(
    {
      text: "" + highlightInfo.tabIds.length
    }
  );
});
