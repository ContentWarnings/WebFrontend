function GenreButton(props: any) {
  return (
    <a
      href={`/search?genre=${props.name}`}
      // className={`transition ease-in-out delay-100 ${props.img} hover:light-1 hover:border-light-1 py-10 rounded border-2 border-dark-2`}
      className={`flex transition ease-in-out delay-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:light-1 hover:border-light-1 py-10 rounded border-2 border-dark-2`}
    >
      <div className="m-auto text-center text-light-1 text-3xl font-bold">
        {props.name}
      </div>
    </a>
  );
}

export default GenreButton;
