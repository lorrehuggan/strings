import { Mark, markInputRule, markPasteRule } from "@tiptap/core";

const inputRegex = /(\[\[([^\]]+)\]\])/g;

interface ZettelOptions {
	HTMLAttributes: Record<string, string>;
}

declare module "@tiptap/core" {
	interface Commands<ReturnType> {
		zettel: {
			setZettel: () => ReturnType;
			toggleZettel: () => ReturnType;
			unsetZettel: () => ReturnType;
		};
	}
}

const ZettelExtension = Mark.create<ZettelOptions>({
	name: "zettel",

	addOptions() {
		return {
			HTMLAttributes: {},
		};
	},

	addInputRules() {
		return [
			markInputRule({
				find: inputRegex,
				type: this.type,
			}),
		];
	},

	addPasteRules() {
		return [
			markPasteRule({
				find: inputRegex,
				type: this.type,
			}),
		];
	},

	addCommands() {
		return {
			setZettel:
				() =>
				({ commands }) => {
					return commands.setMark("zettel");
				},
			toggleZettel:
				() =>
				({ commands }) => {
					return commands.toggleMark("zettel");
				},
			unsetZettel:
				() =>
				({ commands }) => {
					return commands.unsetMark("zettel");
				},
		};
	},

	renderHTML({ HTMLAttributes, mark }) {
		console.log(mark);
		return [
			"a",
			{
				...HTMLAttributes,
				"data-type": "zettel",
				class: "text-lime-300 no-underline",
			},
			0,
		];
	},

	parseHTML() {
		return [
			{
				tag: 'a[data-type="zettel"]',
				mark: this.name,
			},
		];
	},
});

export default ZettelExtension;
