import type { JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}

export default function MainLayout(props: Props) {
  return (
    <div>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
}
