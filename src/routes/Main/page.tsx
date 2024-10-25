import EditorContainer from "~/components/editor";
import { Content, LeftBar, RightBar, RootLayout, Topbar } from "~/layouts/main";

export default function Page() {
	return (
		<RootLayout>
			<Topbar children />
			<LeftBar children />
			<Content>
				<EditorContainer />
			</Content>
			<RightBar children />
		</RootLayout>
	);
}
