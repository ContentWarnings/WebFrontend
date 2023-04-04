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
        <FaSpinner className="inline animate-spin text-center text-6xl text-light-3 dark:text-light-1" />
      </div>
    );
  } else {
    return (
      <div className="relative mb-10 mt-32 h-fit md:flex lg:mx-20">
        <Tabs page="triggers" />
        <form className="w-full sm:rounded-lg bg-light-2 py-4 px-8 dark:bg-dark-1">
          <div className="sticky top-20 z-5 flex items-center justify-between bg-light-2 py-2 dark:bg-dark-1">
            <h2 className="w-full text-xl text-dark-3 dark:text-light-1">
              Name
            </h2>
            <div className="flex w-full justify-between text-xl text-dark-3 dark:text-light-1">
              <h1>Show</h1>
              <h1>Warn</h1>
              <h1>Hide</h1>
            </div>
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
