import { createStore } from "redux";
import reducer from "./Reducer";

import {
    WATCH,
    WATCHNEXT,
    AUTOPLAY
} from "../types";

const store = createStore(
    reducer
),
    { dispatch, } = store;

/**
 * @return redux store current state.
 */
export const getState = store.getState;

/**
 * 
 * @param {boolean} answer 
 */
export const setAutoplay = answer => {
    
    dispatch({type: AUTOPLAY, payload: answer});
}
/**
 * 
 * @param {number} id 
 * @description selects video with given id from redux store
 *  and addeds it to watch state.
 */
export const watch = (id) => {
    dispatch({ type: WATCH, payload: id });
}

/**
 * 
 * @param {number} id 
 * @description automaticaly loads a video in playlist in the video player.
 */
export const watchNext = () => {
    dispatch({ type: WATCHNEXT });
}

/**
 * @description wrapper of redux store.subscribe
 * @param {function} listener takes a listener function.
 * @returns  unsubscribe function.
 */
export const subscribe = listener => {
    const unsubscribe = store.subscribe(listener);
    return unsubscribe;
}