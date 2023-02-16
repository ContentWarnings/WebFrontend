import { IoIosWarning } from "react-icons/io";

function MovieEntry() {
  return (
    <div className="relative lg:mx-20 h-screen mb-10 mt-32">
      <div className="flex">
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMTI2MTY5Y2UtZDljZC00ZjcxLWI2ZTItMGQzNjY0MmM0NzI4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
          }
          className="h-96 w-60 rounded-lg hover:border-2 mr-10"
          alt={"Name"}
        />
        <div className="flex flex-col">
          <h1 className="text-7xl text-light-1 font-bold">
            DC League of Super-Pets
          </h1>
          <h2 className="text-4xl text-light-3 my-3">
            July 27, 2022 - 1 hr 24min
          </h2>
          <div className="flex grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
            <h6 className="text-white">Trigger 1</h6>
            <h6 className="text-white">Trigger 2</h6>
            <h6 className="text-white">Trigger 3</h6>
            <h6 className="text-white">Trigger 4</h6>
          </div>
          <div>STAR RATING HERE </div>
          <div className="flex grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
            <h6 className="text-white">Genre 1</h6>
            <h6 className="text-white">Genre 2</h6>
            <h6 className="text-white">Genre 3</h6>
            <h6 className="text-white">Genre 4</h6>
          </div>
          <div className="flex mt-5">
            <IoIosWarning className="text-5xl text-light-1" />
            <div className="flex flex-col text-light-1">
              <h3 className="font-bold">Proceed with caution.</h3>
              <p>This contains material you previously flagged.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-light-1">
        <h1 className="text-3xl font-bold">Summary</h1>
        <p className="text-1xl">
          When Superman and the rest of the Justice League are kidnapped, Krypto
          the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB
          the potbellied pig, Merton the turtle and Chip the squirrel - to
          master their own newfound powers.
        </p>
      </div>
      <div className="mt-5 text-light-1">
        <h1 className="text-3xl font-bold">Content Warnings</h1>
      </div>
    </div>
  );
}

export default MovieEntry;
