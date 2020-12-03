import {
    WATCH,
    WATCHNEXT,
    AUTOPLAY
} from "../types";
import {
    getState,
    remove
} from "../videos/State";

/**
 * 
 * @param {object} state holds initial state object.
 * @param {object} action 
 * @description maintains state management of redux store.
 */
export default function reducer(state = {
    watch: null,
    watching: null,
    autoplay: false
}, action) {

    switch (action.type) {

        case WATCH:
            var playlist = getState();

            let index = playlist.videos.findIndex(element => element.id === action.payload);

            return {
                ...state,
                watch: playlist.videos[index] || null,
                watching: index
            }
        case WATCHNEXT:
            var playlist = getState();

            let watchIndex = state.watching,
                reset = () => {
                    state.autoplay = false;
                    return state.watching = null;
                },
                /**
                 * @description passes id of video to be loaded next into the
                 * video player and updates the video play list array.
                 * @return {object} video
                 */
                watchNext = () => {
                    let video = playlist.videos[watchIndex];
                    remove(video.id);
                    return video;
                }
            return {
                ...state,
                watch: watchNext() || reset(),
                watching: watchIndex
            }
        case  AUTOPLAY:
            return {
                ...state,
                autoplay:action.payload
            }

        default:

            return state;
    }
}