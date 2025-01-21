import "./App.css";
import Home from "./Pages/Home";
import StreamingClientContext from "./StreamingClientContext";
import * as streamingAvailability from "streaming-availability";
import { useContext } from "react";

function App() {
	const client: streamingAvailability.Client =
		useContext<streamingAvailability.Client>(StreamingClientContext);

	return (
		<div className="dark:bg-slate-800 dark:text-slate-200">
			<StreamingClientContext.Provider value={client}>
				<Home />
			</StreamingClientContext.Provider>
		</div>
	);
}

export default App;
