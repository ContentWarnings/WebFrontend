function MovieButton(props: any) {
  const handleClick = () => {
    console.log(`${props.link} Button was clicked`);
  };

  return (
    <button
      onClick={handleClick}
      className="transition ease-in-out delay-100 bg-neutral hover:border-primary-1 text-light-1 py-1 px-2 rounded-xl"
    >
      <div className="items-center px-1 h-100 w-40">
        <div className="h-60 w-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded"></div>
        {/* <img src={props.image} alt={props.name} /> */}
        <div className="text-left mt-2 px-1">{props.name}</div>
      </div>
    </button>
  );
}

export default MovieButton;
