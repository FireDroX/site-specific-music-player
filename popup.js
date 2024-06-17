document.addEventListener("DOMContentLoaded", () => {
  // Load stored site and music URL on popup load
  chrome.storage.sync.get(["site", "music"], (data) => {
    if (data.site) {
      document.getElementById("site").value = data.site;
    }
    if (data.music) {
      if (isPredefinedMusic(data.music)) {
        document.getElementById("music").value = data.music;
      } else {
        document.getElementById("customUrl").value = data.music;
      }
    }
  });

  // Save the selected music URL
  document.getElementById("save").addEventListener("click", () => {
    const site = document.getElementById("site").value;
    const music = document.getElementById("music").value;
    const customUrl = document.getElementById("customUrl").value;

    const musicToSave = customUrl || music;

    if (site && musicToSave) {
      // Clear all storage first
      chrome.storage.sync.clear(() => {
        // Then set the new values
        chrome.storage.sync.set({ site, music: musicToSave }, () => {
          alert("Music saved for site: " + site);
        });
      });
    } else {
      alert("Please select a music option or enter a custom URL.");
    }
  });

  // Stop the music
  document.getElementById("stop").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stopMusic" });
      }
    });
  });

  function isPredefinedMusic(url) {
    const predefinedMusic = [
      "https://www.youtube.com/watch?v=yyjUmv1gJEg",
      "https://www.youtube.com/watch?v=lttQ47yZ-5A",
      "https://www.youtube.com/watch?v=o5xykMvJejk",
      "https://www.youtube.com/watch?v=yaYBy0Jc7BA",
      "https://www.youtube.com/watch?v=oM6jMvEz81s",
      "https://www.youtube.com/watch?v=-iULUmXwp3Q",
      "https://www.youtube.com/watch?v=luZA3xUcE50",
    ];
    return predefinedMusic.includes(url);
  }
});
