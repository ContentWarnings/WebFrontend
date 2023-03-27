// References
// https://www.hyperui.dev/blog/text-shadow-with-tailwindcss

function GenreButton(props: any) {
  return (
    <a
      href={`/search?genre=${props.name}`}
      className={`flex grow transition delay-100 ease-in-out ${props.img} rounded border-2 border-transparent bg-cover py-10 hover:border-secondary-2 dark:hover:border-light-1`}
    >
      <div
        data-testid="genre-button"
        className="m-auto w-80 text-center text-3xl font-bold text-light-1 [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]"
      >
        {props.name}
      </div>
    </a>
  );
}

export default GenreButton;
