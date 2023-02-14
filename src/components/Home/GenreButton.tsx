function GenreButton(props: any) {
  const handleClick = () => {
    console.log(`${props.link} Button was clicked`);
  };

  return (
    <button
      onClick={handleClick}
      // className={`transition ease-in-out delay-100 ${props.img} hover:light-1 hover:border-light-1 py-10 rounded border-2 border-dark-2`}
      className={`transition ease-in-out delay-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:light-1 hover:border-light-1 py-10 rounded border-2 border-dark-2`}
    >
      <div className="items-center text-light-1 text-3xl font-bold">
        <div>{props.name}</div>
      </div>
    </button>
  );
}

export default GenreButton;
