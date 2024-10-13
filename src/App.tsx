import { createTiptapEditor } from "solid-tiptap";
import StarterKit from "@tiptap/starter-kit";

function App() {
  let ref!: HTMLDivElement;

  const editor = createTiptapEditor(() => ({
    element: ref!,
    extensions: [StarterKit],
    content: `<p>Example Text</p>`,
  }));

  return <div id="editor" ref={ref} />;
}

export default App;
