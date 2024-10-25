type DebouncedFunction<T extends (...args: any[]) => any> = (
	...args: Parameters<T>
) => void;

export function debounce<T extends (...args: any[]) => any>(
	func: T,
	delay: number,
): DebouncedFunction<T> {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	} as DebouncedFunction<T>;
}
