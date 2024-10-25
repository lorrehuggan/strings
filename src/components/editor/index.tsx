import StarterKit from "@tiptap/starter-kit";
import { createTiptapEditor } from "solid-tiptap";
import ZettelExtension from "~/lib/editor/mark/zettel";
import { invoke } from "@tauri-apps/api/core";
import { debounce } from "~/lib/utils";

export default function EditorContainer() {
	let ref!: HTMLDivElement;

	const extensions = [StarterKit, ZettelExtension];

	const editor = createTiptapEditor(() => ({
		element: ref,
		extensions,
		content: "<h1>Hello World</h1>",
		editorProps: {
			attributes: {
				class: "prose prose-invert focus:outline-none min-w-full",
			},
		},
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			const content = {
				html,
			};

			const send = debounce(() => {
				invoke("save_markdown", { content }).then((response) => { });
			}, 500);

			send();
		},
	}));

	return <div class="mx-auto w-[724px] p-8" ref={ref} />;
}
