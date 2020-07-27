"strict mode"

import { uploadVideos } from "../../context/videos/State";
import { nanoid } from "nanoid";
import { setAutoplay, getState } from "../../context/player/State";
import upload from "./upload_video.svg";
import customFont from "./Righteous-Regular.ttf";

const temp = document.createElement('template');
temp.innerHTML = `
<style>
    @font-face{
        font-family: customFont;
        src: url(${customFont});
        } 
        
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #ffff;
        font-family: customFont;
    }

    nav {
        float:right;
        margin:auto;
        display:grid;
        grid-template-columns:repeat(6, auto);
        grid-template-rows: repeat(1, auto);
        grip-gap:1px;
        width:500px;
    }
    nav * {
        cursor:pointer;
        margin:auto;
    }
  
    .aboutbtn{
        grid-column:6;
        border:none;
        height:30px;
        width:60px;
        background-color:#008CFF;
        font-size: 0.95em;
    }
    /*autoplay checkbox custom style.*/
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #ccc;
        transition: 4s;
        -webkit-transition: 4s;
    }
    
    .slider::before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 4px;
        bottom: 4px;
        background-color: white;
    }
    
    input:checked+.slider {
        background-color: #33373a;
    }
    
    input:focus+.slider {
        box-shadow: 0 0 1px rgba(9, 84, 146, 0.247);
    }
    
    input:checked+.slider::before {
        transform: translateX(26px);
    }
    
    .slider.round {
        border-radius: 2px;
        height:25px;
    }
    
    .slider.slider.round::before {
        border-radius: 10%;
    }

    .switch {
        grid-column:3;
        position: relative;
        display: inline-block;
        width: 50px;
    }
    
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /*input file cutomize css*/
    input[type="file"] {
        position:absolute;
        z-index: -1;
        width:30px;
      }
    #upload:focus{
        outline:1px solid #222;
    }
    .upload-wrapper {
        grid-column:4;
        position: relative;
        width:30px;
      }
      
    .uploadbtn {
        display: flex;
        justify-content:center;
        cursor: pointer; 
        width:100px;
        height:60px;
        background:#222;
    }
    .uploadbtn svg {
        height:60px;
        width:100px;
        pointer-events: none;
    }  


</style>
<nav> 
    <label  class="switch" title="autoplay">
        <input type="checkbox"  id="autoplay"/>
        <span class="slider round"></span>
    </label>

    <div class="upload-wrapper">
        <input type="file" multiple accept="video/*" id="upload" />
        <label class="uploadbtn" for="upload" >${upload}</label>
    </div>

    <button id="about" class="aboutbtn">About</button>
 </nav>
`;


class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }
    connectedCallback() {
        const root = this.shadowRoot,
            autoplay = root.querySelector('#autoplay'),
            upload = root.querySelector('input[type="file"]'),
            aboutBtn = root.querySelector('#about');

        autoplay.addEventListener('click', this.autoplay);
        upload.addEventListener('change', this.upload);
        aboutBtn.addEventListener('click', this.about(this));
    }

    /**
     * 
     * @param {Event} e 
     * @description adds uploaded videos to reducx store.
     */
    upload(e) {

        const files = e.target.files,
            videos = [],
            allowedVideoFormats = /\.(avi|divx|flv|mkv|mov|mp4|mpeg|mpg|ogm|ogv|ogx|rm|rmvb|smil|webm|wmv|xvid)$/,
            allowedVideoTypes = /^video\/(avi|divx|flv|mkv|mov|mp4|mpeg|mpg|ogm|ogv|ogx|rm|rmvb|smil|webm|wmv|xvid)$/;

        for (let i = 0; i < files.length; i++) {

            let file = files.item(i),
                { name, type, size } = file,
                formatIsOkay = allowedVideoFormats.test(name),
                typeIsOkay = allowedVideoTypes.test(type);

            if (formatIsOkay && typeIsOkay) {
                videos.push({
                    id: nanoid(),
                    name,
                    type,
                    size,
                    src: URL.createObjectURL(new Blob([file], { type }))
                });
            }
        }

        uploadVideos(videos);
        e.target.value = null;
        e.target.blur();
    }
    /**
    * 
    * @param {Event} e 
    * @description toggles autoplay mode.
    */
    autoplay(e) {
        e.stopImmediatePropagation();

        let state = getState();

        setAutoplay(state.autoplay === true ? false : true);

        e.target.blur();
    }
    /**
     * 
     * @param {Event} e 
     * @description displays app about information card.
     */
    about(root) {
       return (e) => {
        e.stopImmediatePropagation();
       
        if(root.shadowRoot.children.length === 3){
            root.shadowRoot.removeChild(root.shadowRoot.children[2]);
        }else if (root.shadowRoot.children.length === 2){
            import("../appInfo/About.js")
            .then(module => {
                const aboutComponent = module.default;
                aboutComponent.onclick = e => root.shadowRoot.removeChild(aboutComponent);
                document.addEventListener('click', e => {
                    if(root.shadowRoot.children.length === 3){
                        root.shadowRoot.removeChild(root.shadowRoot.children[2]);
                    }
                });
                root.shadowRoot.appendChild(aboutComponent);
            })
            .catch(err => console.error(err));
        }

        e.target.blur();
       }
    }

}
window.customElements.define('navbar-card', Navbar);

const navbarCard = document.createElement('navbar-card');

export default navbarCard;