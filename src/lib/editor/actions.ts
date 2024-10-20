import type { Editor } from "@tiptap/core";

export function saveJson(editor: Editor | undefined) {
  if (!editor) return;

  editor.getJSON().then((json: string) => {
    console.log(json);
  });
}
