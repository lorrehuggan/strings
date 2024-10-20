/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./style/global.css";

// routes
import Main from "./routes/Main/page";

const root = document.getElementById("root") as HTMLElement;

render(
  () => (
    <Router>
      <Route path="/" component={Main} />
    </Router>
  ),
  root,
);
