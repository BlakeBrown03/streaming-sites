export default function MovieCard(props: any) {
	return (
		<div>
			<img src={props.movie.poster} alt={props.movie.title} />
			<h2>{props.movie.title}</h2>
			<p>{props.movie.plot}</p>
		</div>
	);
}
