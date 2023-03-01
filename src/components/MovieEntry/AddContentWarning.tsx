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
  const cwList = resp.jsonResponse.cws;
  let dropdownList: any[] = [];
  cwList.map((cw: any) =>
    dropdownList.push({ display: `${cw}`, value: `${cw}` })
  );
  setDropdownList(dropdownList);
}

function AddContentWarning() {
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
    console.log("we went here!");
  };

  const openModal = () => {
    setIsOpen(true);
    handleWarningChange("Abandonment");
  };

  const closeModal = () => {
    setIsOpen(false);
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
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
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
                      <div className="flex w-full">
                        <h2 className="p-2">Content</h2>
                        <Dropdown
                          id="selectedItem"
                          options={dropdownList}
                          handleChange={handleDropdown}
                        />
                      </div>
                      <div className="flex">
                        <h2 className="p-2">Timestamp</h2>
                        <TextBox />
                        <div className="p-2">to</div>
                        <TextBox />
                      </div>
                      <div className="flex">
                        <h2 className="p-2">Summary</h2>
                        <TextBox />
                      </div>
                      <div className="my-2 flex w-full justify-end">
                        <button
                          className="mr-2 flex items-center rounded-lg border border-transparent bg-dark-1 p-1 text-light-1 transition delay-100 ease-in-out hover:border-light-1"
                          onClick={() => closeModal()}
                        >
                          <IoIosArrowBack className="text-lg" />
                          <div className="pr-1 text-sm">Back</div>
                        </button>
                        <Primary2Button icon={<BsPlusLg />} name="Submit" />
                      </div>
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
