function GenreCell(props: any) {
  return (
    <div
      onClick={props.handleClick}
      className={"bg-dark-1 text-light-1 py-1 px-2 rounded-lg mr-2 mb-2 w-fit"}
    >
      <div className="flex items-center px-2">
        <div className="mr-2">
          <img className="h-6" src={`/genre/${props.genre.toLowerCase()}.svg`} alt={props.genre}/>
        </div>
        <div className="px-1 font-sans font-bold">{props.genre}</div>
      </div>
    </div>
  );
}

export default GenreCell;
