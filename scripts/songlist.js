import {songs as songs} from '../data/songs.js';

const songList = songs;
const songListContainer = document.querySelector('#songlist');

// Some magic code wtf is this is shit
// Sorts songlist alphabetically
songList.sort((a, b) => (a.title > b.title) ? 1 : -1);

for(const i in songList) {
    // Creates the main container
    const newContainer = document.createElement("div");
    newContainer.className = "song-container";

    // Creates the info container
    const newInfo = document.createElement("div");
    newInfo.className = "info";

    // Creates link container 
    const newLinkCon = document.createElement("div");
    newLinkCon.className = "link-container";

    // Creates the title div
    const newTitle = document.createElement("div");
    newTitle.className = "song-title";
    newTitle.innerHTML = songList[i].title;

    // Creates the artist div
    const newArtist = document.createElement("div");
    newArtist.className = "song-artist";
    newArtist.innerHTML = songList[i].artist;

    // Creates the icon
    const newIcon = document.createElement("i");
    newIcon.className = "fa-solid fa-headphones";

    const newLink = document.createElement("a");
    newLink.className = "song-link";
    newLink.innerHTML = "Listen";
    newLink.href = songList[i].link;
    newLink.target = "_blank"

    // Appends title and artist to info container
    // Must be done 1st
    newInfo.appendChild(newTitle);
    newInfo.appendChild(newArtist);

    newLinkCon.appendChild(newIcon);
    newLinkCon.appendChild(newLink);

    // Appends info container and icon to main container
    newContainer.appendChild(newInfo);
    newContainer.appendChild(newLinkCon);

    // Appends finished container to songlist
    songListContainer.appendChild(newContainer);
}