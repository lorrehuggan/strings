import StarterKit from "@tiptap/starter-kit";
import { createTiptapEditor } from "solid-tiptap";

export function createEditor(ref: HTMLElement) {
  const editor = createTiptapEditor(() => ({
    element: ref,
    extensions: [StarterKit],
    content: "",
  }));
  return editor;
}
