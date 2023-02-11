import {songs as songs} from '../data/songs.js';

const songList = songs;
const songListContainer = document.querySelector('#songlist');

// Some magic code wtf is this is shit
// Sorts songlist alphabetically
songList.sort((a, b) => (a.title > b.title) ? 1 : -1);

for(const i in songList) {
    const newContainer = document.createElement("div");
    newContainer.className = "song-container";
    
    newContainer.innerHTML = songList[i].title;

    songListContainer.appendChild(newContainer);
}