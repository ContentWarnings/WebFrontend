function MovieButton(props: any) {
  return (
    <a
      data-testid="movie-button"
      href={"/movie/" + props.id}
      className="transition ease-in-out delay-100 text-light-1 py-1 px-2 rounded"
    >
      <div className="items-center px-1 h-100 w-40 m-auto">
        <img className="rounded-lg border-2 border-transparent hover:border-white" src={props.image} alt={props.name} />
        <div className="text-left mt-2 px-1">{props.name}</div>
      </div>
    </a>
  );
}

export default MovieButton;
