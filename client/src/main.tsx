// react imports
import React from "react";
import ReactDOM from "react-dom/client";
// routing imports
import { BrowserRouter as Router } from "react-router-dom";
// redux store imports
import { Provider } from "react-redux";
import store from "./store/store.ts";
// component imports
import App from "./App.tsx";
// stylign imports
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
