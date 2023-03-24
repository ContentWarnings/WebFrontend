function MovieButton(props: any) {
  return (
    <a
      data-testid="movie-button"
      href={"/movie/" + props.id}
      className="rounded py-1 px-2 text-dark-3 transition delay-100 ease-in-out dark:text-light-1"
    >
      <div className="h-100 m-auto w-40 items-center px-1">
        <img
          className="rounded-lg border-2 border-transparent hover:border-primary-1 dark:hover:border-light-1"
          src={props.image}
          alt={props.name}
        />
        <div className="mt-2 px-1 text-left">{props.name}</div>
      </div>
    </a>
  );
}

export default MovieButton;
