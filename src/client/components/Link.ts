import { send } from "../state";

type LinkProps = {
  href: string;
  label: string;
};

function Link(props: LinkProps) {
  const a = document.createElement("a");
  a.href = props.href;
  a.textContent = props.label;
  a.onclick = function (event) {
    event.preventDefault();
    // @ts-ignore
    const url = new URL(event.target.href);
    send({ type: "NAVIGATE_PAGE", payload: { path: url.pathname } });
  };
  return a;
}

export default Link;
