function MovieButton(props: any) {
  // Need absolute size?
  return (
    <button
      onClick={props.handleClick}
      className="transition ease-in-out delay-100 bg-neutral hover:border-primary-1 text-light-1 py-1 px-2 rounded"
    >
      <div className="items-center px-1">
        <img src={props.image} alt={props.name} />
        <div className="px-1">{props.name}</div>
      </div>
    </button>
  );
}

export default MovieButton;
