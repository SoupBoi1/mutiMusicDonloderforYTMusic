// Send a message to the content script to get the current song
/*
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getCurrentSong'}, (response) => {
      const songInfo = response;
  
      const songInfoElement = document.getElementById('song-info');
      if (songInfo) {
        songInfoElement.innerHTML = `<strong>Song:</strong> ${songInfo.song} <br> <strong>Artist:</strong> ${songInfo.artist} <br> <h1>${tabs[0].url}</h1>`;
      } else {
        songInfoElement.innerHTML = '<strong>No song playing.</strong>';
      }
    });
    
  });
  */
  


function donloadplaylist(){
    console.log("mutidf");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getplaylist'}, (response) => {
          const songsInfo = response;
        });
    });
}

function donloadvideo(){
    console.log("sing;bdkn");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getplaylist'}, (response) => {
            const songsInfo = response;
        });
    });
}

const button = document.getElementById("myButton");


button.addEventListener("click",donloadplaylist() );