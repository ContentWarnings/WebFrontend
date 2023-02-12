function GenreButton(props: any) {
  // Need absolute size
  return (
    <button
      onClick={props.handleClick}
      className={`transition ease-in-out delay-100 ${props.img} hover:border-light-1  py-1 px-2 rounded`}
    >
      <div className="items-center text-light-1 text-3xl font-bold">
        <div className="px-1">{props.name}</div>
      </div>
    </button>
  );
}

export default GenreButton;
