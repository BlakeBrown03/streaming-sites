import { useContext, useEffect } from "react";
import StreamingClientContext from "../StreamingClientContext";
import * as streamingAvailability from "streaming-availability";

export default function Home() {
	const client: streamingAvailability.Client = useContext(
		StreamingClientContext
	);

	async function getShow() {
		const show: streamingAvailability.Show = await client.showsApi.getShow({
			id: "tt0944947"
		});
		console.log(show);
	}

	useEffect(() => {
		getShow();
	}, []);

	return (
		<div className="flex items-center justify-items justify-center dark:text-slate-200 dark:bg-slate-800">
			<h1 className="text-8xl">Home</h1>
		</div>
	);
}
