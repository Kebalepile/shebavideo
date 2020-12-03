"strict mode"
import css from "./main.css";
import App from "./components/App";
import sw from "./serviceworker";

/**
 * @description Since we are using HtmlWebpackPlugin WITHOUT a template,
 we should create our own root node in the body element before rendering into it
 */
const root = document.createElement('div');

root.id = "root";

App(root);

document.body.appendChild(root);

sw();
