import StarterKit from "@tiptap/starter-kit";
import { createTiptapEditor } from "solid-tiptap";

export default function EditorContainer() {
	let ref!: HTMLDivElement;

	const editor = createTiptapEditor(() => ({
		element: ref,
		extensions: [StarterKit],
		content: "<h1>Hello, World!</h1>",
		editorProps: {
			attributes: {
				class: "prose focus:outline-none min-w-full",
			},
		},
	}));

	return <div class="md:text-xl text-xl" ref={ref} />;
}
