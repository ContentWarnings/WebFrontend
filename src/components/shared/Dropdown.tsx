function Dropdown(props: any) {
  let options = [];

  // Generate a random ID string.
  let id: string = btoa(Math.floor(Math.random()*100000000000000).toString(36)).replaceAll("=", "");

  if (props.id)
    id = props.id;

  for (let i = 0; i < props.options.length; i++) {

    if (props.default === props.options[i].value) {
      options.push(
        <option selected value={props.options[i].value}>{props.options[i].display}</option>
      )
    } else {
      options.push(
        <option value={props.options[i].value}>{props.options[i].display}</option>
      )
    }
  }

  return (
    <label data-testid="dropdown">
      {props.label}
      <select id={id} onChange={props.handleChange} className="bg-light-2 text-gray-700 rounded-lg mx-auto text-lg px-2 py-1 mx-2">{options}</select>
    </label>
  );
}

export default Dropdown;
