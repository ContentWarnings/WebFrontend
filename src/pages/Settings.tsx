// References
// https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/

import CWInput from "../components/Settings/CWInput";
import Tabs from "../components/Settings/Tabs";
import Backend from "../helpers/Backend";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

async function getList(setCwList: any) {
  let path = "/names";
  const resp = await Backend.getRequest(path);
  const cwList = resp.jsonResponse.cws.sort().filter(function (cw: any) {
    return cw !== "None";
  });
  setCwList(cwList);
}

function Settings() {
  const [isLoading, setIsLoading] = useState(true);
  const [cwList, setCwList] = useState([]);

  useEffect(() => {
    getList(setCwList);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className={"grid h-screen place-items-center"}>
        <FaSpinner className="inline animate-spin text-center text-6xl text-light-1" />
      </div>
    );
  } else {
    return (
      <div className="relative mb-10 mt-32 h-fit sm:flex lg:mx-20">
        <Tabs page="triggers" />
        <form className="w-full rounded-lg bg-dark-1 py-4 px-8">
          <div className="flex justify-end gap-72 text-xl text-light-1">
            <h1>Show</h1>
            <h1>Warn</h1>
            <h1>Hide</h1>
          </div>
          {cwList.map((cw: any, index: any) => (
            <CWInput name={cw} key={index} />
          ))}
        </form>
      </div>
    );
  }
}

export default Settings;
