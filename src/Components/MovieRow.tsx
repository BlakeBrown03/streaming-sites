import MovieCard from "./MovieCard";

export default function MovieRow(props: any) {
	return (
		<div className="relative">
			<div className="flex my-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 px-4">
				{props.movies ? (
					props.movies.map((movie: any) => {
						return (
							<div className="snap-start shrink-0">
								<MovieCard key={movie.id} movie={movie} />
							</div>
						);
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
