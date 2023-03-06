import { IoIosWarning } from "react-icons/io";

function FlaggedContent() {
  return (
    <div className="flex">
      <IoIosWarning className="text-5xl text-light-1" />
      <div className="flex flex-col text-light-1">
        <h3 className="font-bold">Proceed with caution.</h3>
        <p>This contains material you previously flagged.</p>
      </div>
    </div>
  );
}

export default FlaggedContent;
