chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    // Retrieve the stored site URL and music URL from Chrome storage
    chrome.storage.sync.get(["site", "music"], (result) => {
      const storedSite = result.site;
      const music = result.music;

      if (storedSite && tab.url.includes(storedSite)) {
        console.log(`Detected site URL match: ${storedSite}`);
        if (music) {
          console.log(`Music URL found: ${music}`);
          chrome.tabs.sendMessage(
            tabId,
            { action: "playMusic", musicUrl: music },
            (response) => {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
              } else {
                console.log("Content script response:", response);
              }
            }
          );
        } else {
          console.log(`No music URL found for site: ${storedSite}`);
        }
      } else {
        console.log(
          `No matching site URL found or no stored site URL. Stored site: ${storedSite}`
        );
      }
    });
  }
});
