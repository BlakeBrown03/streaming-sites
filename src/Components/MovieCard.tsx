export default function MovieCard(props: any) {
	return (
		<div className="mx-4 my-4 border-2 border-gray-300 bg-gray-300 rounded-md shadow-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200 overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg">
			<img
				src={props.movie.imageSet.verticalPoster.w240}
				alt={props.movie.title}
			/>
			<h2 className="text-2xl font-bold text-center">
				{props.movie.title}
			</h2>
			˝<p className="text-sm">{props.movie.plot}</p>
		</div>
	);
}
