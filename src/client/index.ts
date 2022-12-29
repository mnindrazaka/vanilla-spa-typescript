import { send, render } from "./state";

render();
send({ type: "FETCH" });
