function Tabs(props: any) {
  const buttonColorOne =
    props.page === "account"
      ? "bg-light-3 dark:bg-transparent"
      : "bg-primary-2";
  const buttonColorTwo =
    props.page === "account"
      ? "bg-primary-2"
      : "bg-light-3 dark:bg-transparent";
  const buttonHoverOne =
    props.page === "account"
      ? "hover:border-dark-1 dark:hover:border-light-3"
      : "hover:bg-primary-1";
  const buttonHoverTwo =
    props.page === "account"
      ? "hover:bg-primary-1"
      : "hover:border-dark-1 dark:hover:border-light-3";

  return (
    <div className="mr-4 flex flex-col text-xl font-bold text-light-1">
      <a
        className={`mb-1 w-max rounded-lg border border-transparent text-center ${buttonColorOne} p-1 px-4 transition delay-100 ease-in-out ${buttonHoverOne}`}
        href="/settings"
      >
        Content Warnings
      </a>
      <a
        className={`rounded-lg border border-transparent text-center ${buttonColorTwo} p-1 px-4 transition delay-100 ease-in-out ${buttonHoverTwo}`}
        href="/settings/profile"
      >
        My Profile
      </a>
    </div>
  );
}

export default Tabs;
