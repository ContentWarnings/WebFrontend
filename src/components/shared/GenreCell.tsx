function GenreCell(props: any) {
  return (
    <div
      data-testid="genre-cell"
      onClick={props.handleClick}
      className={
        "mr-2 mb-2 w-fit rounded-lg bg-light-3 py-1 px-2 text-dark-1 dark:bg-dark-1 dark:text-light-1"
      }
    >
      <div className="flex items-center px-2">
        <div className="mr-2">
          <img
            className="h-6"
            src={`/genre/${props.genre.toLowerCase()}.svg`}
            alt={props.genre}
          />
        </div>
        <div className="px-1 font-sans font-bold">{props.genre}</div>
      </div>
    </div>
  );
}

export default GenreCell;
