import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.ts";
import ReactGA from "react-ga4";
import { BrowserRouter as Router } from "react-router-dom";
// @ts-ignore
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content is available. Reload to update?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("The app is ready to work offline");
  },
});

const TRACKING_ID = "G-JJBPF5FMJ4";
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
