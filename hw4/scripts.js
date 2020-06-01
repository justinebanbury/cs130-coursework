const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
//1, build URL
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=track&q='+term
//issue fetch command
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  const track1 = data[0]
  const track2 = data[1]
  const track3 = data[2]
  const track4 = data[3]
  const track5 = data[4]
  const template = `

    <section class="track-item preview" data-preview-track="${track1.preview_url}">
        <img src="${track1.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${track1.name}</h3>
            <p>
                ${track1.artist.name}
            </p>
        </div>
    </section>

    <section class="track-item preview" data-preview-track="${track2.preview_url}">
        <img src="${track2.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${track2.name}</h3>
            <p>
                ${track2.artist.name}
            </p>
        </div>
    </section>

    <section class="track-item preview" data-preview-track="${track3.preview_url}">
        <img src="${track3.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${track3.name}</h3>
            <p>
                ${track3.artist.name}
            </p>
        </div>
    </section>

    <section class="track-item preview" data-preview-track="${track4.preview_url}">
        <img src="${track4.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${track4.name}</h3>
            <p>
                ${track4.artist.name}
            </p>
        </div>
    </section>

    <section class="track-item preview" data-preview-track="${track5.preview_url}">
        <img src="${track5.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h3>${track5.name}</h3>
            <p>
                ${track5.artist.name}
            </p>
        </div>
    </section>

  `
document.querySelector('#tracks').innerHTML = template;
});

const trackElements = document.querySelectorAll('track-item.preview');
for (const item of trackElements) {
  item.onclick = (ev) => {
    console.log(ev)
    alert(ev.srcElement.getattribute('data-preview-track'));
  }
}
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section
        of the DOM...`);
};

const getAlbums = (term) => {
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const square = data[0];
    const template =
      `<section class="album-card" id="${square.album.id}">
          <div>
            <img src="${square.album.image_url}l">
            <h3>${square.album.name}</h3>
            <div class="footer">
                <a href="${square.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
      </section>`
      document.querySelector('#albums').innerHTML = template;
  });
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section
        of the DOM...`);
};


or (const track of data) {// A. create the templateconst template = `<section class="track-item preview" data-preview-track="${track.preview_url}"><img src="${track.album.image_url}"><i class="fas fa-play play-track" aria-hidden="true"></i><div class="label"><h3>${track.name}</h3><p>${track.artist.name}</p></div></section>`;// B. Figure out which element in the DOM to targetdocument.querySelector('#tracks').innerHTML += template;}
//after the for loop has completed and the DOM has been populated, we// need to add the click event handlers to play the song:const trackElements = document.querySelectorAll('.track-item');for (const item of trackElements) {item.onclick = (ev) => {const preview_url = ev.srcElement.getAttribute('data-preview-track')audioPlayer.setAudioFile(preview_url);audioPlayer.play();};}
const getArtist = (term) => {
  //1 build URL
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=' + term;
//2. issue fetch  command
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data[0]);
    const artist = data[0];
    const template = `
      <section class="artist-card" id="${artist.id}">
        <div>
            <img src="${artist.image_url}">
            <h3>${artist.name}</h3>
            <div class="footer">
                <a href="${artist.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
        </section>`
    document.querySelector('#artist').innerHTML = template;
  });

    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section
        of the DOM...`);
};

const doSearch = (ev) => {
  // NUmbr 13 iw the "Enter" key on the keyboard
  console.log(ev.keyCode);
  console.log('Enter key has been pressed!');
  if (ev.keyCode == 13) {
    ev.preventDefault();
    search();
  }
};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
