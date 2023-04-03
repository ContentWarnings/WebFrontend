import { Dialog, Transition } from "@headlessui/react";
import { IoIosWarning, IoIosArrowBack } from "react-icons/io";
import { Fragment, useEffect, useState } from "react";
import Backend from "../../helpers/Backend";
import { FaSpinner } from "react-icons/fa";
import WarningButton from "./WarningButton";
import { AiFillDelete } from "react-icons/ai";
import EditContentSubmission from "./EditContentSubmission";
import Toast from "../../helpers/Toast";

function getTime(time: number): String {
  let hours: number = Math.floor(time / 60);
  let mins: number = time % 60;
  let minString = "";
  if (mins % 10 === mins) {
    minString = "0" + mins;
  } else {
    minString = mins.toString();
  }
  if (hours > 10) return hours + ":" + minString;
  return "0" + hours + ":" + minString;
}

function getStartAndEnd(cwTimeObject: any): string {
  const start = getTime(cwTimeObject[0]);
  const end = getTime(cwTimeObject[1]);
  return start + " - " + end;
}

function findMovie(movieId: string, setTitle: any) {
  let path = `movie/${movieId}`;
  Backend.getRequest(path)
    .then((resp: any) => {
      const data: number = resp.statusCode;

      if (data < 400) {
        const data = resp.jsonResponse;
        setTitle(data.title);
      }
    })
    .catch((err: any) => {
      setTitle("404 Error");
    });
  setTitle("");
}

function ContentSubmission(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkDelete, setCheckDelete] = useState(false);
  const [warning, setWarning] = useState("");
  const [title, setTitle] = useState("");
  const headerColor = props.flag ? "bg-secondary-3" : "bg-dark-3";

  useEffect(() => {
    findMovie(props.cw.movie_id, setTitle);
  }, [props.cw.movie_id]);

  const closeModal = () => {
    setWarning("");
    setCheckDelete(false);
    setIsOpen(false);
  };

  const deleteSubmission = () => {
    if (checkDelete === false) {
      setWarning(
        "Are you sure you want to do this? This action will be permanent?"
      );
      setCheckDelete(true);
      return;
    }
    const cwInfo = {
      name: "None",
      movie_id: props.cw.movie_id,
      time: props.cw.time,
      desc: props.cw.desc,
    };
    let path = `cw/${props.cw.id}`;
    Backend.postRequest(path, cwInfo)
      .then((resp: any) => {
        const data: number = resp.statusCode;
        if (data < 400) {
          window.location.pathname = `/settings/profile/`;
        } else {
          Toast.toast(resp.jsonResponse.detail);
        }
      })
      .catch((err: any) => {
        Toast.toast(
          "Could not connect to the server. Please try again in a few minutes!"
        );
      });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`h-22 rounded-lg bg-light-1 text-dark-3 transition delay-100 ease-in-out hover:shadow-md dark:bg-dark-2 dark:text-light-1 dark:hover:opacity-75`}
      >
        <div className={`${headerColor} h-2 w-full rounded-t-lg`} />
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center">
            {props.flag && (
              <IoIosWarning className="text-5xl text-dark-3 dark:text-light-1" />
            )}
            <div className="my-5 ml-1 text-lg font-bold">{props.cw.name}</div>
          </div>
          {title.length !== 0 ? (
            <div className="text-dark-1 dark:text-light-3">{title}</div>
          ) : (
            <FaSpinner className="animate-spin" />
          )}
        </div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    <div className={`${headerColor} h-2 w-full rounded-t-lg`} />
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center">
                        {props.flag && (
                          <IoIosWarning className="text-5xl text-dark-3 dark:text-light-1" />
                        )}
                        <div className="my-5 ml-1 text-lg font-bold">
                          {props.cw.name}
                        </div>
                      </div>
                      <div className="text-dark-1 dark:text-light-3">
                        {props.cw.time.map((time: any, index: any) => (
                          <div key={index}>
                            {getStartAndEnd(time)}
                            <br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mx-4 mt-2 mb-5">
                    {props.cw.desc && (
                      <div>
                        <h1 className="text-lg font-bold">{title}</h1>
                        <h2 className="text-md font-bold">Content Summary</h2>
                        <p className="text-sm">{props.cw.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="my-2 flex w-full justify-center">
                    <EditContentSubmission cw={props.cw} title={title} />
                    <WarningButton
                      name="Delete"
                      icon={<AiFillDelete />}
                      handleClick={deleteSubmission}
                    />
                  </div>
                  {warning.length !== 0 && (
                    <div className="my-1 flex w-full text-center text-warning">
                      {warning}
                    </div>
                  )}
                  <div className="my-2 flex w-full justify-center">
                    <button
                      className="flex items-center rounded-lg border border-transparent bg-transparent p-1 text-dark-3 transition delay-100 ease-in-out hover:border-secondary-2 dark:text-light-1 dark:hover:border-light-3"
                      onClick={closeModal}
                    >
                      <IoIosArrowBack className="text-lg" />
                      <div className="pr-1 text-sm">Back</div>
                    </button>
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

export default ContentSubmission;
