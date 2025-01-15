import { createContext } from "react";
import * as streamingAvailability from "streaming-availability";
import { key } from "../ApiKeys.json";

const client: streamingAvailability.Client = new streamingAvailability.Client(
	new streamingAvailability.Configuration({ apiKey: key })
);

const StreamingClientContext =
	createContext<streamingAvailability.Client>(client);

export default StreamingClientContext;
