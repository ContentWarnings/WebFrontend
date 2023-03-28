import GenreButton from "./GenreButton";

function GenresSection() {
  return (
    <div data-testid="genres-section" className="px-10">
      <h1 className="mt-20 mb-5 text-2xl font-bold text-dark-3 dark:text-light-1">
        Genres
      </h1>
      <div className="flex flex-wrap gap-4">
        <GenreButton img="bg-action-image" name="Action" />
        <GenreButton img="bg-adventure-image" name="Adventure" />
        <GenreButton img="bg-animation-image" name="Animation" />
        <GenreButton img="bg-comedy-image" name="Comedy" />
        <GenreButton img="bg-crime-image" name="Crime" />
        <GenreButton img="bg-documentary-image" name="Documentary" />
        <GenreButton img="bg-drama-image" name="Drama" />
        <GenreButton img="bg-family-image" name="Family" />
        <GenreButton img="bg-fantasy-image" name="Fantasy" />
        <GenreButton img="bg-history-image" name="History" />
        <GenreButton img="bg-horror-image" name="Horror" />
        <GenreButton img="bg-music-image" name="Music" />
        <GenreButton img="bg-mystery-image" name="Mystery" />
        <GenreButton img="bg-romance-image" name="Romance" />
        <GenreButton img="bg-scifi-image" name="Science Fiction" />
        <GenreButton img="bg-tvmovie-image" name="TV Movie" />
        <GenreButton img="bg-thriller-image" name="Thriller" />
        <GenreButton img="bg-war-image" name="War" />
        <GenreButton img="bg-western-image" name="Western" />
      </div>
    </div>
  );
}

export default GenresSection;
