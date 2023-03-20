import { FaLaptopMedical } from "react-icons/fa";
import Importer from "../../helpers/Importer";
import QRCode from "react-qr-code";

function AddDevice() {
  const exportString = "https://moviementor.app/?in=" + Importer.export();

  return (
    <div className="mb-4">
      <div className="flex items-center text-2xl">
        <FaLaptopMedical className="mr-2" />
        <h1 className="font-bold">Add Device</h1>
      </div>
      <div className="mt-2 flex">
        <div className="mr-2 h-auto w-40 bg-light-1 p-2">
          <QRCode size={256} value={exportString} className="h-auto w-full" />
        </div>
        <div className="flex flex-col">
          <h2>
            Scan the QR code or type in the URL below to transfer content
            warning settings between devices.{" "}
            <span className="underline">This does not log you in.</span>
          </h2>
          <p className="text-center text-lg font-bold">
            <br />
            {exportString}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddDevice;
