"strict mode"

import Main from "./main/MainContent"
import NavBar from "./utils/NavBar";
import Footer from "./utils/Footer";

/**
 * @param {HTMLElement} root 
 * @description Appends NavBar, Main & Footer components to root HTMLElement.
 */
function App(root) {
    [NavBar, Main, Footer]
        .forEach(component =>
            root.appendChild(component))

}

export default App;