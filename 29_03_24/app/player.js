//Date:
const playList = {
  playListInfo: {
    title: "Hip-hop hits",
    coverImgUrl: "./img/cover.jpg",
  },
  tracks: [
    {
      trackId: "1",
      artistName: "Eminem",
      trackTitle: "Rap God",
      trackFileUrl: "./audio/eminem_-_rap_god.mp3",
      trackCoverImgUrl: "./img/eminem.jpg",
    },
    {
      trackId: "2",
      artistName: "50 cent",
      trackTitle: "In da Club",
      trackFileUrl: "./audio/50cent_-_in_da_club.mp3",
      trackCoverImgUrl: "./img/50cent.jpg",
    },
    {
      trackId: "3",
      artistName: "The Weeknd feat. Daft Punk",
      trackTitle: "Starboy",
      trackFileUrl: "./audio/theweeknd_feat_daft_punk_-_starboy.mp3",
      trackCoverImgUrl: "./img/theweeknd.jpg",
    },
  ],
};

//Render:
function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTracksList(anyPlayList.tracks);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playListTitleElement = document.createElement("h1");
  playListTitleElement.innerText = anyPlayListInfo.title;
  document.body.append(playListTitleElement);

  const playListCoverElement = document.createElement("img");
  playListCoverElement.src = anyPlayListInfo.coverImgUrl;
  playListCoverElement.style.with = "150px";
  playListCoverElement.style.height = "150px";
  document.body.append(playListCoverElement);
}

function renderTracksList(anyTracks) {
  const trackListElement = document.createElement("ul");
  for (let i = 0; i < anyTracks.length; i++) {
    const trackElement = createTrack(anyTracks[i]);

    trackListElement.append(trackElement);
  }

  document.body.append(trackListElement);
}

function createTrack(anyTrack) {
  const trackElement = document.createElement("li");
  trackElement.style.listStyleType = "none";

  const trackCoverElement = document.createElement("img");
  trackCoverElement.src = anyTrack.trackCoverImgUrl;
  trackCoverElement.style.width = "65px";
  trackCoverElement.style.height = "70px";

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;

  trackElement.append(trackCoverElement);
  trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle);
  trackElement.append(audio);

  return trackElement;
}

renderPlayList(playList);