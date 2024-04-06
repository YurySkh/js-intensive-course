import {renderTrack} from "./renderTrack.module.js"

export function renderPlayListTracks(anyTracks) {
	const traksListElement = document.createElement("ul");
	for (let i = 0; i < anyTracks.length; i++) {
	  const trakElement = renderTrack(anyTracks[i]);
	  traksListElement.append(trakElement);
	}
	document.body.append(traksListElement);
 }
