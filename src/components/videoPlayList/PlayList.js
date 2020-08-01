"strict mode"
import styles from "./styles";
import svgBtn from "./svg/remove.svg";
import {
    subscribe,
    remove,
    getState
} from "../../context/videos/State";

import {
    watch,
    subscribe as subToPlayer
} from "../../context/player/State";


const temp = document.createElement('template');
temp.innerHTML = `
<style>
    ${styles()}
</style>
<section id="videoPlaylist"> 
</section>
`;

class PlayList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }

    connectedCallback() {

        subscribe(this.beforeDisplayingVideoToUi(this));
        subToPlayer(this.updateUI(this));
    }
    /**
     * @param {this} playlist
     * @description listens for changes to redux store, only allows video(s) not already displayed to be displayed.
     */
    beforeDisplayingVideoToUi(playlist) {

        return () => {

            const state = getState();

            const videoPlaylist = playlist.shadowRoot.querySelector('#videoPlaylist');

            const visibleVideos = [...videoPlaylist.children].map(videoComponent => videoComponent.getAttribute('data-name'));

            let loadedVideos = state.videos;

            if (visibleVideos.length > 0) {
                for (let videoObject of loadedVideos) {
                    if (visibleVideos.includes(videoObject.name)) {
                        loadedVideos = loadedVideos.filter(source => source.name !== videoObject.name);
                    }
                }

                playlist.displayVideo(loadedVideos);
            } else {

                playlist.displayVideo(loadedVideos);

            }
        }

    }
    /**
     * @param {this} playlist
     * @description listens for changes to redux store, removes stale video(s) already viewed by user using auto load.
     */
    updateUI (playlist) {
        return () => {
            let state = getState();
            let videoListComponent = playlist.shadowRoot.querySelector('#videoPlaylist');
            let videoComponents = [...videoListComponent.children];
            let videosinUiIds = videoComponents.map(videoComponent => videoComponent.getAttribute('id'));
            let videosInStateIds = state.videos.map(source => source.id);

            if(videosinUiIds.length !== videosInStateIds.length){

                let staleVideosInUiIds = videosinUiIds.filter(id => !videosInStateIds.includes(id));
                
                if(staleVideosInUiIds.length > 0) staleVideosInUiIds.forEach(id => {
                   for (let videoComponent of videoComponents){
                       if(videoComponent.getAttribute('id') === id) videoListComponent.removeChild(videoComponent);
                   }
                });

            }
        }
    }
    /**
     * 
     * @param {ArrayLike} videos an array of objects.
     * @description displays videos added in redux store.
     */
    displayVideo(videos) {
        const userInterface = this.shadowRoot.querySelector('#videoPlaylist');

        for (let videoObject of videos) {
            userInterface.appendChild(this.videoElement(videoObject));
        }
    }
    /**
     * 
     * @param {object} source 
     * @description creates a video element.
     */
    videoElement(source) {

        const root = this.shadowRoot;
        const removeBtn = document.createElement('span');
        removeBtn.classList.add('remove');
        removeBtn.innerHTML = svgBtn;
        removeBtn.onclick = e => {
            e.stopImmediatePropagation();
            root.querySelector('#videoPlaylist')
                .removeChild(e.target.parentElement);
            remove(source.id);
        }

        const durationCard = document.createElement('div');
        durationCard.classList.add('duration');


        const video = document.createElement('video');
        video.src = source.src;
        video.currentTime += 2; //seconds.
        video.onloadedmetadata = () => {
            // convert seconds to hours
            let hours = Math.floor(video.duration / 60);
            // convert seconds to minutes
            let minutes = Math.floor(video.duration / 60) >= 60 ? Math.floor((video.duration / 60) % 60) : Math.floor(video.duration / 60);
            // rounding seconds to the nearest 10 (downwards)
            let seconds = Math.floor(video.duration - Math.floor(video.duration / 60) * 60); 
            // holds video time length
            let duration;

            if (seconds < 10) seconds = `0${seconds}`;

            if (minutes < 10) minutes = `0${minutes}`;

            if (hours < 10) hours = `0${hours}`;

            if (hours > 60) {

                hours = Math.floor(Math.floor(video.duration / 60) / 60);
                hours = hours < 10 ? `0${hours}` : hours;
                duration = `${hours}:${minutes}:${seconds}`;

            } else if (hours === minutes) {
                duration = `${minutes}:${seconds}`;
            }

            durationCard.textContent = duration;
        }
        video.oncontextmenu = e => {
            e.preventDefault()
        }



        const component = document.createElement('article');
        component.classList.add('nextVideo');
        component.id = source.id;
        component.setAttribute('data-name', source.name);
        component.setAttribute('title',source.name);
        component.onclick = e => {
            // actually your click on the video element instead of article element.
            // e.target is <video></video>.
            e.stopImmediatePropagation();
            watch(source.id);
            root.querySelector('#videoPlaylist')
                .removeChild(e.target.parentElement);

            remove(source.id);
        }

        [durationCard, video, removeBtn].forEach(element => {
            component.appendChild(element);
        });

        return (component);

    }

}

window.customElements.define('playlist-card', PlayList);

const playlistCard = document.createElement('playlist-card');

export default playlistCard;