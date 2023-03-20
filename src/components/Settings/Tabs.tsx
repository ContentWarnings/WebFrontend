function Tabs(props: any) {
  const buttonColorOne =
    props.page === "account" ? "bg-transparent" : "bg-primary-2";
  const buttonColorTwo =
    props.page === "account" ? "bg-primary-2" : "bg-transparent";
  const buttonHoverOne =
    props.page === "account"
      ? "hover:border-light-3"
      : "hover:border-light-3 hover:bg-primary-1";
  const buttonHoverTwo =
    props.page === "account"
      ? "hover:border-light-3 hover:bg-primary-1"
      : "hover:border-light-3";

  return (
    <div className="mr-4 flex flex-col text-xl font-bold text-light-1">
      <a
        className={`mb-1 items-center rounded-lg border border-transparent ${buttonColorOne} p-1 px-4 transition delay-100 ease-in-out ${buttonHoverOne}`}
        href="/settings"
      >
        Triggers
      </a>
      <a
        className={`w-max items-center rounded-lg border border-transparent ${buttonColorTwo} p-1 px-4 transition delay-100 ease-in-out ${buttonHoverTwo}`}
        href="/settings/profile"
      >
        My Profile
      </a>
    </div>
  );
}

export default Tabs;
