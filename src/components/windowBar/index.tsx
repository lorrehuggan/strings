import { Minus, X } from "lucide-solid";
import { Window } from "@tauri-apps/api/window";

const appWindow = new Window("main");

export default function WindowBar() {
	return (
		<div
			data-tauri-drag-region
			class="flex size-full items-center justify-between rounded-t-[8px] px-2 text-muted-foreground"
		>
			<div class="font-bold text-xs" />
			<div class="flex items-center">
				<button
					class="cursor-pointer rounded p-1 transition-colors duration-300 ease-out hover:bg-muted-foreground/30"
					onClick={() => appWindow.minimize()}
					type="button"
				>
					<Minus size={16} />
				</button>
				<button
					class="cursor-pointer rounded p-1 transition-colors duration-300 ease-out hover:bg-destructive hover:text-white"
					onClick={() => appWindow.close()}
					type="button"
				>
					<X size={16} />
				</button>
			</div>
		</div>
	);
}
