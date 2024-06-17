chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "playMusic") {
    const musicUrl = message.musicUrl;
    playMusic(musicUrl);
    console.log("Starting: " + musicUrl);
    sendResponse("Music started");
  } else if (message.action === "stopMusic") {
    stopMusic();
    console.log("Stopping music");
    sendResponse("Music stopped");
  }
});

function playMusic(musicUrl) {
  const videoId = getYouTubeVideoId(musicUrl);
  if (videoId) {
    const player = document.createElement("iframe");
    player.id = "musicPlayer";
    player.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`
    );
    player.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    player.style.display = "none";
    document.body.appendChild(player);
  } else {
    console.log("Invalid YouTube URL:", musicUrl);
  }
}

function stopMusic() {
  const player = document.getElementById("musicPlayer");
  if (player) {
    player.remove();
  } else {
    console.log("No music player found.");
  }
}

function getYouTubeVideoId(url) {
  const regex = /[?&]v=([^&#]*)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
