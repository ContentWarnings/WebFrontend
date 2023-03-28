import { Dialog, Transition } from "@headlessui/react";
import { IoIosWarning, IoIosArrowBack } from "react-icons/io";
import { Fragment, useState } from "react";
import { BiReset } from "react-icons/bi";
import WarningButton from "./WarningButton";
import Importer from "../../helpers/Importer";

function ResetAccountButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleReset = () => {
    Importer.init();
    setIsOpen(true);
  };

  const handleClose = () => {
    window.location.pathname = "/settings";
  };

  return (
    <>
      <WarningButton
        name="Reset"
        icon={<BiReset />}
        handleClick={handleReset}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-light-1 bg-opacity-50 dark:bg-dark-3" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-light-1 align-middle text-dark-3 shadow-xl transition-all dark:bg-dark-2 dark:text-light-1">
                  <Dialog.Title
                    as="div"
                    className="h-22 rounded-t-lg bg-light-2 text-dark-3 dark:bg-dark-1 dark:text-light-1"
                  >
                    <div className="h-2 w-full rounded-t-lg bg-warning" />
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center">
                        <IoIosWarning className="text-5xl text-dark-3 dark:text-light-1" />
                        <div className="my-5 text-center text-lg font-bold">
                          Content warning settings successfully reset
                        </div>
                      </div>
                    </div>
                  </Dialog.Title>

                  <div className="mx-4 mt-2 mb-5">
                    <div className="my-2 flex w-full justify-center">
                      <button
                        className="flex items-center rounded-lg border border-transparent bg-transparent p-1 text-dark-3 transition delay-100 ease-in-out hover:border-secondary-2 dark:text-light-1 dark:hover:border-light-3"
                        onClick={handleClose}
                      >
                        <IoIosArrowBack className="text-lg" />
                        <div className="pr-1 text-sm">Back</div>
                      </button>
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

export default ResetAccountButton;
