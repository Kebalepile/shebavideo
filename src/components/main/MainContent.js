"strict mode"

const temp = document.createElement('template');
temp.innerHTML = `
<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #ffff;
    }
    main{
        margin-top:30px auto;
        width:100%;
        display: flex;
        justify-content:center;
        aligin-items:center;
        flex-flow: column wrap;
    }
    @media only screen and (min-width:600px){
        main{
         
            margin:auto;
        }
    }
    @media only screen and (min-width:900px){
        main{
            margin-top:50px 0;
            flex-flow:row nowrap;
        }
    }
</style>
<main></main>
`;


class MainContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }
    /**
     * @description 
     * mounts VideoPlayer && VideoPlayList components, 
     * once MainContent is mounted.
     */
    connectedCallback() {

        const components = [
            import("../videoPlayer/Player.js"),
            import("../videoPlayList/PlayList.js")
        ];

        Promise.all(components)
            .then(components => {
                components.forEach(
                    component => {
                        this.shadowRoot.querySelector('main').appendChild(component.default);
                    });
            })
            .catch(err => console.error(err));
    }
}
window.customElements.define('main-card', MainContent);

const mainCard = document.createElement('main-card');

export default mainCard;