import StreamingClientContext from "../StreamingClientContext";
import * as streamingAvailability from "streaming-availability";
import { useContext, useEffect } from "react";

export default function Home(props: any) {
	const client: streamingAvailability.Client =
		useContext<streamingAvailability.Client>(StreamingClientContext);

	return (
		<StreamingClientContext.Provider value={client}>
			<div className="flex items-center justify-items-center">
				<h1>Home</h1>
			</div>
		</StreamingClientContext.Provider>
	);
}
