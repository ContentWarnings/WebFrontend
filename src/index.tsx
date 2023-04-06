import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Importer from "./helpers/Importer";
import Toast from "./helpers/Toast";
import URLHelper from "./helpers/URLHelper";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// Bitmask-based CW importer. Is plcaed here since it should run on every MM page.
let import_str: string = URLHelper.populateDefaultFromURL("in", "");
if (import_str !== "") {
    Importer.import(import_str);
    Toast.toast("Content warning preferences imported successfully!");
    if (window.location.pathname !== "/") {
        window.location.reload();
    }
}

// Initialize empty CW database.
if (!localStorage.getItem("cw") || localStorage.getItem("cw") === "") {
    Importer.init();
    if (window.location.pathname !== "/") {
        window.location.reload();
    }
}
