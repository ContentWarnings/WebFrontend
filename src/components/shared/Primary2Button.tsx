function Primary2Button(props: any) {
  return (
    <button
      onClick={props.handleClick}
      className="transition ease-in-out delay-100 bg-primary-2 hover:bg-primary-1 border-primary-2 hover:border-primary-1 text-light-1 py-1 px-2 rounded-lg"
    >
      <div className="flex items-center px-2">
        <div className="px-1">{props.icon}</div>
        <div className="px-1 font-sans font-bold">{props.name}</div>
      </div>
    </button>
  );
}

export default Primary2Button;
