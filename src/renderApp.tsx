import React, { FC } from "react";
import ReactDOM from "react-dom";

export const renderApp = () => {
  const App: FC = () => (
    <div>
      <h1>Hello App</h1>
    </div>
  );

  const target = document.getElementById("react-root");

  ReactDOM.render(<App />, target);
};
