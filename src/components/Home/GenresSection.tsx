import GenreButton from "./GenreButton";

function GenresSection(props: any) {
  return (
    <div>
      <h1 className="text-2xl text-light-1 font-bold mt-20 mb-5 px-10">
        Genres
      </h1>
      <div className="flex grid grid-cols-1 gap-8 px-10 xl:grid-cols-4 xl:px-28 lg:grid-cols-3 lg:px-20  md:grid-cols-2 md:px-20">
        <GenreButton img="bg-action-image" name="Action" link="/action" />
        <GenreButton img="bg-action-image" name="Adventure" link="/action" />
        <GenreButton img="bg-action-image" name="Animation" link="/action" />
        <GenreButton img="bg-action-image" name="Comedy" link="/action" />
        <GenreButton img="bg-action-image" name="Crime" link="/action" />
        <GenreButton img="bg-action-image" name="Documentary" link="/action" />
        <GenreButton img="bg-action-image" name="Drama" link="/action" />
        <GenreButton img="bg-action-image" name="Family" link="/action" />
        <GenreButton img="bg-action-image" name="Fantasy" link="/action" />
        <GenreButton img="bg-action-image" name="History" link="/action" />
        <GenreButton img="bg-action-image" name="Horror" link="/action" />
        <GenreButton img="bg-action-image" name="Music" link="/action" />
        <GenreButton img="bg-action-image" name="Mystery" link="/action" />
        <GenreButton img="bg-action-image" name="Romance" link="/action" />
        <GenreButton
          img="bg-action-image"
          name="Science Fiction"
          link="/action"
        />
        <GenreButton img="bg-action-image" name="TV Movie" link="/action" />
        <GenreButton img="bg-action-image" name="Thriller" link="/action" />
        <GenreButton img="bg-action-image" name="War" link="/action" />
        <GenreButton img="bg-action-image" name="Western" link="/action" />
      </div>
    </div>
  );
}

export default GenresSection;
