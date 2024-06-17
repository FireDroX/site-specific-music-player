# Site-Specific Music Player Chrome Extension

</br>

[![ChromeAPI][ChromeAPI]][ChromeAPI-url]
[![contributors][contributors-shield]][contributors-url]
[![stars][stars-icon]][stars-url]
[![Discord][discord-icon]][discord-url]

## Description

This Chrome extension allows you to play specific music when you visit certain websites. You can choose from a predefined list of music tracks or enter a custom YouTube URL. When you visit the specified website, the chosen music will automatically play in the background. You can also stop the music using a button in the extension popup.

## Features

- Select a website URL for which you want to play music.
- Choose from a list of predefined YouTube music tracks or enter a custom YouTube URL.
- Automatically plays the selected music when you visit the specified website.
- Ability to stop the music using a button in the extension popup.
- Stores your settings using Chrome's storage API.

## Installation

1. Clone this repository to your local machine.

   ```sh
   git clone https://github.com/FireDroX/site-specific-music-player.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by clicking the toggle switch in the top right corner.

4. Click the "Load unpacked" button and select the directory where you cloned this repository.

## Usage

1. Click the extension icon to open the popup.

2. Enter the URL of the website for which you want to set the music (e.g., `https://www.amazon.fr/`).

3. Select a music track from the dropdown menu or enter a custom YouTube URL in the input field.

4. Click the "Save" button to save your settings.

5. Visit the specified website, and the selected music will automatically play in the background.

6. To stop the music, open the extension popup and click the "Stop Music" button.

## Files

- `index.html`: The HTML file for the extension popup.
- `popup.js`: JavaScript file for handling the popup's logic, including saving and loading settings, and sending messages to the background and content scripts.
- `background.js`: Background script that listens for tab updates and triggers the content script to play music if the site URL matches the stored URL.
- `content.js`: Content script that receives messages from the background script to play or stop music.
- `manifest.json`: Configuration file for the Chrome extension, specifying permissions, scripts, and other settings.

## Code Overview

### index.html

Contains the HTML structure for the extension popup, including input fields and buttons for saving settings and stopping music.

### popup.js

Handles the following:

- Loading stored site and music URL when the popup opens.
- Saving the site URL and selected music URL to Chrome storage.
- Sending a message to the content script to stop the music.

### background.js

Handles the following:

- Listens for tab updates.
- Retrieves stored site URL and music URL from Chrome storage.
- Sends a message to the content script to play music if the site URL matches the current tab URL.

### content.js

Handles the following:

- Receives messages from the background script to play or stop music.
- Plays music by creating an invisible iframe with the YouTube embed URL.
- Stops music by removing the iframe from the DOM.

## Permissions

The extension requires the following permissions:

- `tabs`: To access tab URL information.
- `activeTab`: To interact with the active tab.
- `storage`: To store and retrieve user settings.
- `scripting`: To inject scripts into web pages.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## Others

FireDroX - [GitHub Profile](https://github.com/FireDroX)\
CSS Colors - [Realtime Colors](https://www.realtimecolors.com/?colors=13141b-f2f3f7-31375e-858ac7-4753b8&fonts=Inter-Inter)\
Original Idea - Wii Shop Music for Amazon.com (extension)

[ChromeAPI]: https://img.shields.io/badge/chrome%20api-20232A?style=for-the-badge&logo=googlechrome&logoColor=4285F4&colorB=555
[ChromeAPI-url]: https://developer.chrome.com/docs/extensions/reference
[contributors-shield]: https://img.shields.io/github/contributors/firedrox/site-specific-music-player.svg?style=for-the-badge
[contributors-url]: https://github.com/FireDroX/site-specific-music-player/graphs/contributors
[stars-icon]: https://img.shields.io/github/stars/firedrox/site-specific-music-player.svg?style=for-the-badge
[stars-url]: https://github.com/FireDroX/site-specific-music-player/stargazers
[discord-icon]: https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&colorB=555
[discord-url]: https://discord.gg/Zmmqd9Tbnn
