import { createStore } from "redux";
import reducer from "./Reducer"
import {
    UPLOADED,
    REMOVE,
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
 * @param {ArrayLike} videos 
 * @description adds video(s) uploaded to redux store.
 */
export const uploadVideos = (videos) => {
    dispatch({ type: UPLOADED, payload: videos });
}

/**
 * 
 * @param {number} id 
 * @description removes video with given id from redux store.
 */
export const remove = (id) => {
    dispatch({ type: REMOVE, payload: id });
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