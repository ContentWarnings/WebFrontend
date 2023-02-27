// References
// https://headlessui.com/react/dialog

// import { Dialog, Transition } from "@headlessui/react";
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";

function getTime(time: number): String {
  let hours: number = Math.floor(time / 60);
  let mins: number = time % 60;
  let minString = "";
  if (mins % 10 == mins) {
    minString = "0" + mins;
  } else {
    minString = mins.toString();
  }

  return "0" + hours + ":" + minString;
}

function getStartAndEnd(cwTimeObject: any): string {
  const start = getTime(cwTimeObject[0]);
  const end = getTime(cwTimeObject[1]);
  return start + " - " + end;
}

function examineTime(cw: any): string {
  if (cw.time.length > 1) return "Multiple Instances";
  return getStartAndEnd(cw.time[0]);
}

function ContentWarningButton(props: any) {
  // const [isOpen, setIsOpen] = useState(true);
  const time = examineTime(props.cw);
  // const handleClick = () => {
  //   console.log(`${props.link} Button was clicked`);
  // };
  const headerColor = props.flag ? "bg-secondary-3" : "bg-dark-3";

  return (
    // <>
    //   <div className="flex items-center justify-center">
    //     <button
    //       onClick={() => setIsOpen(true)}
    //       className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    //     >
    //       Open dialog
    //     </button>
    //   </div>

    //   <Transition appear show={isOpen} as={Fragment}>
    //     <Dialog as="div" className="relative z-10" onClose={closeModal}>
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="fixed inset-0 bg-black bg-opacity-25" />
    //       </Transition.Child>

    //       <div className="fixed inset-0 overflow-y-auto">
    //         <div className="flex min-h-full items-center justify-center p-4 text-center">
    //           <Transition.Child
    //             as={Fragment}
    //             enter="ease-out duration-300"
    //             enterFrom="opacity-0 scale-95"
    //             enterTo="opacity-100 scale-100"
    //             leave="ease-in duration-200"
    //             leaveFrom="opacity-100 scale-100"
    //             leaveTo="opacity-0 scale-95"
    //           >
    //             <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
    //               <Dialog.Title
    //                 as="h3"
    //                 className="text-lg font-medium leading-6 text-gray-900"
    //               >
    //                 Payment successful
    //               </Dialog.Title>
    //               <div className="mt-2">
    //                 <p className="text-sm text-gray-500">
    //                   Your payment has been successfully submitted. We’ve sent
    //                   you an email with all of the details of your order.
    //                 </p>
    //               </div>

    //               <div className="mt-4">
    //                 <button
    //                   type="button"
    //                   className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    //                   onClick={closeModal}
    //                 >
    //                   Got it, thanks!
    //                 </button>
    //               </div>
    //             </Dialog.Panel>
    //           </Transition.Child>
    //         </div>
    //       </div>
    //     </Dialog>
    //   </Transition>
    // </>
    <button
      onClick={() => console.log("Hurrah!")}
      className={`h-22 transition ease-in-out delay-100 bg-dark-1 text-light-1 rounded-lg`}
    >
      <div className={`${headerColor} text-light-1 h-2 w-full rounded-t-lg`} />
      <div className="flex items-center justify-between px-2 mb-">
        <div className="flex items-center">
          {props.flag && <IoIosWarning className="text-5xl text-light-1" />}
          <div className="text-md font-bold ml-1 my-5">{props.cw.name}</div>
        </div>
        <div className="text-light-3">{time}</div>
      </div>
    </button>
  );
}

export default ContentWarningButton;
