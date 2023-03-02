// References
// https://stackoverflow.com/questions/45283030/html5-input-type-time-without-am-pm-and-with-min-max

import { Dialog, Transition } from "@headlessui/react";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { Fragment, useState } from "react";
import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import Dropdown from "../shared/Dropdown";
import Backend from "../../helpers/Backend";

async function getList(setDropdownList: any) {
  let path = "/names";
  const resp = await Backend.getRequest(path);
  const cwList = resp.jsonResponse.cws.sort();
  let dropdownList: any[] = [];
  cwList.map((cw: any) =>
    dropdownList.push({ display: `${cw}`, value: `${cw}` })
  );
  setDropdownList(dropdownList);
}

async function submitCw(movieId: number) {
  const formData = document.forms[1];
  const fromTime = formData.fromTime.value;
  const ToTime = formData.fromTime.value;
  const summary = formData.summary.value;
  const cw = formData.selectedCw.value;
  const movieInfo = {
    name: cw,
    movie_id: movieId,
    time: [[1, 2]],
    desc: summary,
  };
  console.log(summary);
  // const response = await Backend.postRequest("movie", movieInfo);
}

function AddContentWarning(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentWarningName, setContentWarningName] = useState("");
  const [summary, setSummary] = useState("");
  const [dropdownList, setDropdownList] = useState([]);
  getList(setDropdownList);

  const handleDropdown = (e: any) => {
    handleWarningChange(e.target.value);
  };

  const handleWarningChange = (cw: any) => {
    setContentWarningName(cw);
    async function fetchData() {
      let path = `descriptions?name=${cw}`;
      const resp = await Backend.getRequest(path);
      const desc = resp.jsonResponse.response;
      setSummary(desc);
    }
    fetchData();
  };

  const openModal = () => {
    setIsOpen(true);
    handleWarningChange("Abandonment");
  };

  return (
    <>
      <button
        onClick={() => openModal()}
        className="text-2xl text-light-1 transition duration-100 ease-in-out hover:opacity-50"
      >
        <BsPlusLg />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg align-middle text-light-1 shadow-xl transition-all">
                  <div className="flex w-full">
                    <div className="w-full rounded-l bg-dark-2 p-4">
                      <h1 className="ml-1 mb-2 text-lg font-bold">
                        Submit Content Warning
                      </h1>
                      <form id="cwSubmission">
                        <div className="flex w-full">
                          <h2 className="p-2">Content</h2>
                          <Dropdown
                            id="selectedCw"
                            options={dropdownList}
                            handleChange={handleDropdown}
                          />
                        </div>
                        <div className="flex">
                          <h2 className="p-2">Timestamp</h2>
                          <TextBox id="fromTime" type={"time"} />
                          <div className="p-2">to</div>
                          <TextBox id="toTime" type={"time"} />
                        </div>
                        <div className="flex">
                          <h2 className="p-2">Summary</h2>
                          <TextBox id="summary" />
                        </div>
                        <div className="my-2 flex w-full justify-end">
                          <button
                            className="mr-2 flex items-center rounded-lg border border-transparent bg-transparent p-1 text-light-1 transition delay-100 ease-in-out hover:border-light-3"
                            onClick={() => setIsOpen(false)}
                          >
                            <IoIosArrowBack className="text-lg" />
                            <div className="pr-1 text-sm">Back</div>
                          </button>

                          <Primary2Button
                            icon={<BsPlusLg />}
                            name="Submit"
                            handleClick={submitCw(props.movieId)}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="w-fit rounded-r bg-dark-1 p-2">
                      <h1 className="text-md font-bold">
                        {contentWarningName}
                      </h1>
                      <p>{summary}</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AddContentWarning;
