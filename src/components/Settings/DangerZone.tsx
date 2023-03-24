// References
// https://stackoverflow.com/questions/13405129/create-and-save-a-file-with-javascript
// https://spin.atomicobject.com/2022/03/09/create-export-react-frontend/

import { CgDanger } from "react-icons/cg";
import { FaFileExport } from "react-icons/fa";
import DeleteAccountButton from "./DeleteAccountButton";
import ResetAccountButton from "./ResetAccountButton";
import Primary2Button from "../shared/Primary2Button";
import Backend from "../../helpers/Backend";

async function exportUserData() {
  const resp = await Backend.getRequest("user");
  const data = resp.jsonResponse;
  const fileData = JSON.stringify(data);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "moviementor-user-info.json";
  link.href = url;
  link.click();
}

function DangerZone(props: any) {
  return (
    <div className="mb-4">
      <div className="flex items-center text-2xl">
        <CgDanger className="mr-2" />
        <h1 className="font-bold">Danger Zone</h1>
      </div>
      {props.email !== "" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold">Reset Settings</h2>
            <p className="mb-1 text-center text-dark-1 dark:text-light-3">
              Forget all settings, including your list of content warnings.
            </p>
            <ResetAccountButton />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold">Download Account Data</h2>
            <p className="mb-1 text-center text-dark-1 dark:text-light-3">
              Download a JSON text file containing your account data.
            </p>
            <Primary2Button
              name="Export"
              icon={<FaFileExport />}
              handleClick={exportUserData}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold">Delete Account</h2>
            <p className="mb-1 text-center text-dark-1 dark:text-light-3">
              Permanently delete your account.
              <br />
              <br />
            </p>
            <DeleteAccountButton />
          </div>
        </div>
      ) : (
        <div className="w-full items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-center font-bold">Reset Settings</h2>
            <p className="mb-1 text-center text-dark-1 dark:text-light-3">
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
