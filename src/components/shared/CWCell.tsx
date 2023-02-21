function GenreCell(props: any) {
  let color: string = "bg-dark-1";
  let do_bold: string = "";
  if (props.flag) {
    color = "bg-secondary-2";
    do_bold = " font-bold";
  }

  return (
    <div
      onClick={props.handleClick}
      className={color + " text-light-1 py-1 px-2 rounded-lg mr-2 mb-2 w-fit"}
    >
      <div className="flex items-center px-2">
        <div className={"px-1 font-sans" + do_bold}>{props.genre}</div>
      </div>
    </div>
  );
}

export default GenreCell;
