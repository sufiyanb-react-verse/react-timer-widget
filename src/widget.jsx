import React from "react";
import { createRoot } from "react-dom/client";
import Timer from "./Timer";

const TimerWidget = {
  mount(selector) {
    const container =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    console.log('version check', 'v1.1.3')
    if (!container) {
      throw new Error("TimerWidget: container not found");
    }

    Object.assign(container.style, {
        position: 'fixed',
        right: '20%',
        bottom: '20%',
        zIndex: '9999999'
    })
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
  },
//   mount(options = {}) {
//     // Create container
//     const container = document.createElement("div");

//     container.id = "react-timer-widget";

//     // Floating position
//     Object.assign(container.style, {
//       position: "fixed",
//       right: "20px",
//       bottom: "20px",
//       zIndex: "999999",
//     });

//     document.body.appendChild(container);

//     const root = createRoot(container);

//     root.render(
//       <Timer {...options} />
//     );

//     return {
//       unmount() {
//         root.unmount();
//         container.remove();
//       }
//     };
//   }
};

window.TimerWidget = TimerWidget;