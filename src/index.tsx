import { render } from "react-dom";
import { registerRoot } from "remotion";
import RemotionVideo from "./RemotionVideo";

import App from "./App";

registerRoot(RemotionVideo);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
