import React from "react";
import { createRoot } from "react-dom/client";
import Timer from "./Timer";

const TimerWidget = {
  mount(selector) {
    const container =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!container) {
      throw new Error("TimerWidget: container not found");
    }

    const root = createRoot(container);

    root.render(
      <React.StrictMode>
        <Timer />
      </React.StrictMode>
    );

    return {
      unmount() {
        root.unmount();
      }
    };
  }
};

window.TimerWidget = TimerWidget;