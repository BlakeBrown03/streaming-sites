import { useContext, useEffect, useState } from "react";
import StreamingClientContext from "../StreamingClientContext";
import * as streamingAvailability from "streaming-availability";
import MovieRow from "../Components/MovieRow";

export default function Home() {
	const client: streamingAvailability.Client = useContext(
		StreamingClientContext
	);
	const [netflixMovies, setNetflixMovies] = useState<
		streamingAvailability.Show[]
	>([]);
	const [huluMovies, setHuluMovies] = useState<streamingAvailability.Show[]>(
		[]
	);
	const [disneyMovies, setDisneyMovies] = useState<
		streamingAvailability.Show[]
	>([]);
	const [primeMovies, setPrimeMovies] = useState<
		streamingAvailability.Show[]
	>([]);
	const [hboMovies, setHboMovies] = useState<streamingAvailability.Show[]>(
		[]
	);
	async function getShow(service: string) {
		const show = await client.showsApi.getTopShows({
			country: "us",
			service: service,
			showType: "movie"
		});
		if (service === "netflix") {
			setNetflixMovies(show);
		} else if (service === "hulu") {
			setHuluMovies(show);
		} else if (service === "disney") {
			setDisneyMovies(show);
		} else if (service === "prime") {
			setPrimeMovies(show);
		} else if (service === "hbo") {
			setHboMovies(show);
		}
	}

	useEffect(() => {
		getShow("netflix");
		getShow("hulu");
		getShow("disney");
		getShow("prime");
		getShow("hbo");
	}, []);

	return (
		<>
			<div className="flex items-center justify-items justify-center dark:text-slate-200 dark:bg-slate-800">
				<div className="grid grid-cols-1 gap-4">
					<h1 className="text-8xl text-center">Home</h1>
					<h2 className="text-4xl text-center">Netflix</h2>
					<MovieRow movies={netflixMovies} />
					<h2 className="text-4xl text-center">Hulu</h2>
					<MovieRow movies={huluMovies} />
					<h2 className="text-4xl text-center">Disney</h2>
					<MovieRow movies={disneyMovies} />
					<h2 className="text-4xl text-center">Prime</h2>
					<MovieRow movies={primeMovies} />
					<h2 className="text-4xl text-center">HBO</h2>
					<MovieRow movies={hboMovies} />
				</div>
			</div>
		</>
	);
}
