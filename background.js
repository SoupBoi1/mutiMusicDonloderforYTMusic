const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.runtime.onInstalled.addListener(() => {
    console.log('YouTube Music Extension Installed!');
  });
  

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "downloadVideo") {
        let downloadURL = "https://ogmp3.cc/2/";
        
        chrome.tabs.create({ url: downloadURL }, (tab) => {
          setTimeout(() => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: pasteAndDownload,
                args: [message.url]
            });
        }, 3000);

        });
    }
});

function pasteAndDownload(videoURL) {
  console.log("hjhhjknnij")
    let inputBox = document.querySelector("url");
    let downloadButton = document.querySelector("convert-button");
    console.log("WORKINGG");
    if (inputBox && downloadButton) {
        inputBox.value = videoURL;
        downloadButton.click();
    }
}
