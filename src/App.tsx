import "./App.css";
import Home from "./Pages/Home";
import StreamingClientContext from "./StreamingClientContext";
import * as streamingAvailability from "streaming-availability";
import { useContext } from "react";

function App() {
	const client: streamingAvailability.Client =
		useContext<streamingAvailability.Client>(StreamingClientContext);

	return (
		<div>
			<StreamingClientContext.Provider value={client}>
				<Home />
			</StreamingClientContext.Provider>
		</div>
	);
}

export default App;
