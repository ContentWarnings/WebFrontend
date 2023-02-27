function TextBox(props: any) {
  // Generate a random ID string.
  let id: string = btoa(Math.floor(Math.random()*100000000000000).toString(36)).replaceAll("=", "");
  let type: string = "text";

  if (props.id)
    id = props.id;

  if (props.type)
    type = props.type;

  return (
    <input type={type} id={id} name={id} onChange={props.handleChange} placeholder={props.placeholder} value={props.defaultValue} className="bg-light-2 text-gray-700 rounded-lg mx-auto text-lg px-2 py-1 w-full my-2"/>
  );
}

export default TextBox;
