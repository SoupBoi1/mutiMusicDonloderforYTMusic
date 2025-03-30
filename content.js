// Function to get the current song information


function getCurrentSong() {
  const title = document.querySelector('ytmusic-player-bar yt-formatted-string.title');
  const artist = document.querySelector('ytmusic-player-bar yt-formatted-string.byline');
  if (title && artist) {
    return {
      song: title.innerText.trim(),
      artist: artist.innerText.trim()
    };
  }
  return null;
}
//ytmusic-responsive-list-item-renderer
function getplaylist(){
  
  const list = document.querySelectorAll('ytmusic-responsive-list-item-renderer');
  const letters = new Set();

  for(var ele of list){
    //console.log(ele.querySelector("a").href);
    letters.add(ele.querySelector("a").href);
  }
  return letters;

  

}

function downloadVid(){
  const list = document.querySelectorAll('ytmusic-responsive-list-item-renderer');
  const letters = new Set();

  for(var ele of list){
    console.log(ele.querySelector("a").href);
    letters.add(ele.querySelector("a").href);
  }
  return letters;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.action === 'getplaylist'){
    const songsSET = getplaylist();
    chrome.runtime.sendMessage({
      action: "downloadVideo",
      url: Array.from(songsSET)[0]
    });
    console.log(songsSET);
    sendResponse({songs: Array.from(songsSET)});
  }
  if (request.action === 'getCurrentSong') {
    const songInfo = getCurrentSong();
    chrome.runtime.sendMessage({
      action: "downloadVideo",
      url: songInfo
    });
    sendResponse(songInfo);
  }
  if (request.action === 'download') {
    const songInfo = fillInVid(request.link);
    console.log(request.link);
    sendResponse(songInfo);
  }
});
