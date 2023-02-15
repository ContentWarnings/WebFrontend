import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Bitmask-based CW importer. Is plcaed here since it should run on every MM page.
let import_str = (new URL(window.location.href)).searchParams.get("import");
if (import_str !== null && import_str !== "") {
    // let final;
    // // TODO: Get CWs from API
    // let cws: Array<string>;

    // // Data given -> JSON object
    // let import_base16: Number = parseInt(import_str, 16);
    // let import_base3: String = import_base16.toString(3);

    // for (let i = 0; i < import_base3.length; i++) {
    //     let current_value = import_base3[i];
    //     let current_cw: string = cws[i];
    //     final[current_cw] = current_value;
    // }

    // // Set JSON to LocalStorage
    // localStorage.setItem("cw", JSON.stringify(final));
}