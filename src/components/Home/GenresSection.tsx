import GenreButton from "./GenreButton";

function GenresSection(props: any) {
  return (
    <div>
      <div className="flex grid grid-cols-1 gap-8 xl:grid-cols-4 lg:-grid-cols-3 md:grid-cols-2">
        <GenreButton img="bg-action-image" name="Action" link="/action" />
        <GenreButton img="bg-action-image" name="Action" link="/action" />
        <GenreButton img="bg-action-image" name="Action" link="/action" />
        <GenreButton img="bg-action-image" name="Action" link="/action" />
        <GenreButton img="bg-action-image" name="Action" link="/action" />
      </div>
    </div>
  );
}

export default GenresSection;
