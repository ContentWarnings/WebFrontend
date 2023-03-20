import { CgDanger } from "react-icons/cg";
import { FaFileExport } from "react-icons/fa";
import DeleteAccountButton from "./DeleteAccountButton";
import ResetAccountButton from "./ResetAccountButton";
import Primary2Button from "../shared/Primary2Button";

function DangerZone(props: any) {
  return (
    <div>
      <div className="flex items-center text-2xl">
        <CgDanger className="mr-2" />
        <h1 className="font-bold">Danger Zone</h1>
      </div>
      {props.email !== "" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Reset Settings</h2>
            <p className="text-light-3">
              Forget all settings, including your list of content warnings.
            </p>
            <ResetAccountButton />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Download Account Data</h2>
            <p className="text-light-3">
              Download a JSON text file containing your account data.
            </p>
            <Primary2Button name="Export" icon={<FaFileExport />} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Delete Account</h2>
            <p className="text-light-3">Permanently delete your account.</p>
            <DeleteAccountButton />
          </div>
        </div>
      ) : (
        <div className="w-full items-center">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Reset Settings</h2>
            <p className="text-light-3">
              Forget all settings, including your list of content warnings.
            </p>
            <ResetAccountButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default DangerZone;
