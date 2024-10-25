import type { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";
import Titlebar from "~/components/windowBar";

interface Props {
	children: JSX.Element;
	class?: string;
}

export function RootLayout(props: Props) {
	return (
		<main class={twMerge("relative flex h-screen flex-row", props.class)}>
			{props.children}
		</main>
	);
}

export function Topbar(props: Props) {
	return (
		<header
			class={twMerge(
				"fixed top-0 left-0 flex h-10 w-screen items-center border-b-[1px] border-b-foreground/10 bg-muted/70",
				props.class,
			)}
		>
			<div class="px-2">{props.children}</div>
			<Titlebar />
		</header>
	);
}

export function LeftBar(props: Props) {
	return (
		<aside class="mt-10 w-[250px] border-r-[1px] border-r-foreground/10 bg-muted/50 p-2">
			<section>{props.children}</section>
		</aside>
	);
}

export function RightBar(props: Props) {
	return (
		<aside class="mt-10 w-[250px] border-l-[1px] border-l-foreground/10 bg-muted/50 p-2">
			<section>{props.children}</section>
		</aside>
	);
}

export function Content(props: Props) {
	return <section class="mt-10 flex-1 bg-muted/30">{props.children}</section>;
}
