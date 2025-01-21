import { useContext, useEffect, useState } from "react";
import StreamingClientContext from "../StreamingClientContext";
import * as streamingAvailability from "streaming-availability";
import MovieCard from "../Components/MovieCard";

export default function Home() {
	const client: streamingAvailability.Client = useContext(
		StreamingClientContext
	);
	const [movies, setMovies] = useState<streamingAvailability.Show[]>([]);

	async function getShow() {
		const show = await client.showsApi.getTopShows({
			country: "us",
			service: "netflix",
			showType: "movie"
		});
		setMovies(show);
	}

	useEffect(() => {
		getShow();
	}, []);

	return (
		<>
			<div className="flex items-center justify-items justify-center dark:text-slate-200 dark:bg-slate-800">
				<h1 className="text-8xl">Home</h1>
			</div>
			<div className="flex my-4 flex-grow justify-center">
				{movies ? (
					movies.map(movie => {
						return <MovieCard key={movie.id} movie={movie} />;
					})
				) : (
					<></>
				)}
			</div>
		</>
	);
}
