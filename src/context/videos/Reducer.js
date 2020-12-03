import {
    UPLOADED,
    REMOVE
} from "../types";

/**
 * 
 * @param {object} state holds initial state object.
 * @param {object} action 
 * @description maintains state management of redux store.
 */
export default function reducer(state = {
    videos: []
}, action) {

    switch (action.type) {

      
        case UPLOADED:

            const alreadyUploaded = state.videos.reduce((acc, cur) => {
                acc.push(cur.name);
                return acc;
            }, []);

            const uploads = action.payload.filter(object => !alreadyUploaded.includes(object.name));

            return {
                ...state,
                videos: [...state.videos, ...uploads]
            }
        case REMOVE:

            return {
                ...state,
                videos: state.videos.filter(video => video.id !== action.payload)
            }

        default:

            return state;
    }
}