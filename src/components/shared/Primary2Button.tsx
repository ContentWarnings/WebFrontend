function Primary2Button(props: any) {
  let role = "submit";
  if (props.role)
    role = props.role;

  // Often, a <button> should be an <a>.
  if (props.href) {
    return <a
      href={props.href}
      className={"transition ease-in-out delay-100 bg-primary-2 hover:bg-primary-1 border-primary-2 hover:border-primary-1 text-light-1 py-1 px-2 rounded-lg mr-1 ml-1"}
    >
      <div className="flex items-center px-1">
        {props.icon && <div className="mr-2">{props.icon}</div>}
        <div className="px-1 font-sans font-bold">{props.name}</div>
      </div>
    </a>
  }

  return (
    <button
      role={role}
      onClick={props.handleClick}
      className={"transition ease-in-out delay-100 bg-primary-2 hover:bg-primary-1 border-primary-2 hover:border-primary-1 text-light-1 py-1 px-2 rounded-lg mr-1 ml-1"}
    >
      <div className="flex items-center px-1">
        {props.icon && <div className="mr-2">{props.icon}</div>}
        <div className="px-1 font-sans font-bold">{props.name}</div>
      </div>
    </button>
  );
}

export default Primary2Button;
