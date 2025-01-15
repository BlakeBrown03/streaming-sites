import * as streamingAvailability from "streaming-availability";
import dotenv

export default function Home(props: any) {
	const API_KEY = process.env.API_KEY;

	return (
		<div className="flex items-center justify-items-center">
			<h1>Home</h1>
		</div>
	);
}
