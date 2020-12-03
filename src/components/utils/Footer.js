"strict mode"
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
    
    footer {
        position: fixed;
        right:calc(50% - 50px);
        bottom: 20px;
        font-size: 0.75em;
        width:100px;
        text-align:center;
        z-index:2;
    }
    @media only screen and (min-width:1000px){
        footer{
            right:calc(30% - 50px);
          
            }
        }
</style>
<footer >&copy; 2020 - 2021 KT Motshoana</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));
    }
}

window.customElements.define('footer-card', Footer);

const footerCard = document.createElement('footer-card');

export default footerCard;
