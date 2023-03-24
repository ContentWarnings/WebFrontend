function TextBox(props: any) {
  // Generate a random ID string.
  let id: string = btoa(
    Math.floor(Math.random() * 100000000000000).toString(36)
  ).replaceAll("=", "");
  let type: string = "text";

  if (props.id) id = props.id;

  if (props.type) type = props.type;

  return (
    <input
      data-testid="text-box"
      autoComplete={props.autoComplete}
      type={type}
      id={id}
      name={id}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      value={props.defaultValue}
      className="mx-auto my-2 w-full rounded-lg border-2 border-light-3 px-2 py-1 text-lg text-gray-700 dark:border-none dark:bg-light-2"
    />
  );
}

export default TextBox;
