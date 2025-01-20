export default function MovieCard(props: any) {
	return (
		<div className="">
			<img
				src={props.movie.imageSet.verticalPoster.w240}
				alt={props.movie.title}
			/>
			<h2>{props.movie.title}</h2>
			<p>{props.movie.plot}</p>
		</div>
	);
}
