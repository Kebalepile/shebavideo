import PrettyJSON from "../utils/PrettyJSON";
const temp = document.createElement('template');
temp.innerHTML = `
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color:#00ccff;
    font-family: 'Comic Neue', cursive;
}
textarea{
    position: fixed; 
    text-align: left;
    overflow-y:hidden;
    right:calc(50% - 200px);
    top:calc(50% - 270px);
    font-size: 13px;
    padding:10px;
    width:400px;
    height:540px;
    word-break: break-word;
    background-color:transparent;
    z-index:3;
    resize:none;
}
textarea:hover{
    border:1px solid white;
    border-radius:1px;
}
</style>
<textarea disabled></textarea>
`;
class About extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector('textarea').textContent = PrettyJSON({
            "name": "sheba videos",
            "version": "1.0.1",
            "created by": "K.T Motshoana",
            "description": ["webapp video player with built in keyboard control", "picture in picture mode", "autoplay and speed extension up to 5x speed"],
            "formats supported": [
                " avi", "divx", "flv", " mkv", "mov", "mp4", "mpeg", "mpg", "ogm", "ogv", "ogx", "rm", "rmvb", "smil", "webm", "wmv", "xvid"
            ]
        },4);
    }
}

window.customElements.define('about-card', About);
const aboutCard = document.createElement('about-card');

export default aboutCard;