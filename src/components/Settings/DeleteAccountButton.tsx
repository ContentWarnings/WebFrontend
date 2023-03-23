import { Dialog, Transition } from "@headlessui/react";
import { IoIosWarning, IoIosArrowBack } from "react-icons/io";
import { Fragment, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import WarningButton from "./WarningButton";
import Primary2Button from "../shared/Primary2Button";
import Backend from "../../helpers/Backend";

function DeleteAccountButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openDeleteRequest = () => {
    const path = "user/delete-request";
    Backend.getRequest(path);
    setIsOpen(true);
  };

  return (
    <>
      <WarningButton
        name="Delete"
        icon={<AiFillDelete />}
        handleClick={openDeleteRequest}
      />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-dark-2 align-middle text-light-1 shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="h-22 rounded-t-lg bg-dark-1 text-light-1"
                  >
                    <div className="h-2 w-full rounded-t-lg bg-warning text-light-1" />
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center">
                        <IoIosWarning className="text-5xl text-light-1" />
                        <div className="my-5 text-center text-lg font-bold">
                          Account Deletion Request Sent
                        </div>
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mx-4 mt-2 mb-5">
                    <p className="text-center text-sm">
                      Please check email for additional details on deleting your
                      account.
                    </p>
                    <p className="text-center text-sm">
                      <span className="underline">Note:</span> Deleting your
                      account will not delete your content submissions.
                    </p>
                  </div>
                  <div className="my-2 flex w-full justify-center">
                    <button
                      className="flex items-center rounded-lg border border-transparent bg-transparent p-1 text-light-1 transition delay-100 ease-in-out hover:border-light-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <IoIosArrowBack className="text-lg" />
                      <div className="pr-1 text-sm">Back</div>
                    </button>
                    <Primary2Button name="Open Mail App" href="mailto:" />
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

export default DeleteAccountButton;
