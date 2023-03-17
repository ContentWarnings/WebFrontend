function WarningButton(props: any) {
  let role = "submit";
  if (props.role) role = props.role;

  return (
    <button
      role={role}
      onClick={props.handleClick}
      className={
        "mr-1 ml-1 rounded-lg border border-transparent bg-red-700 py-1 px-2 text-light-1 transition delay-100 ease-in-out hover:bg-red-600"
      }
    >
      <div className="flex items-center px-1">
        {props.icon && <div className="mr-2">{props.icon}</div>}
        <div className="px-1 font-sans font-bold">{props.name}</div>
      </div>
    </button>
  );
}

export default WarningButton;
