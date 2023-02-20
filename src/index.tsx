import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Importer from "./helpers/Importer";
import URLHelper from "./helpers/URLHelper";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Bitmask-based CW importer. Is plcaed here since it should run on every MM page.
let import_str: string = URLHelper.populateDefaultFromURL("in", "");
if (import_str !== "") {
    Importer.import(import_str);
}