import { Dialog, Transition } from "@headlessui/react";
import { IoIosWarning, IoIosArrowBack } from "react-icons/io";
import { Fragment, useEffect, useState } from "react";
import Backend from "../../helpers/Backend";
import { FaSpinner } from "react-icons/fa";

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
  const [title, setTitle] = useState("");
  const headerColor = props.flag ? "bg-secondary-3" : "bg-dark-3";

  useEffect(() => {
    findMovie(props.cw.movie_id, setTitle);
  }, [props.cw.movie_id]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`h-22 rounded-lg bg-dark-2 text-light-1 transition delay-100 ease-in-out hover:opacity-75 hover:shadow-md`}
      >
        <div className={`${headerColor} h-2 w-full rounded-t-lg`} />
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center">
            {props.flag && <IoIosWarning className="text-5xl text-light-1" />}
            <div className="my-5 ml-1 text-lg font-bold">{props.cw.name}</div>
          </div>
          {title.length !== 0 ? (
            <div className="text-light-3">{title}</div>
          ) : (
            <FaSpinner className="animate-spin" />
          )}
        </div>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-dark-2 align-middle text-light-1 shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="h-22 rounded-t-lg bg-dark-1 text-light-1"
                  >
                    <div
                      className={`${headerColor} h-2 w-full rounded-t-lg text-light-1`}
                    />
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center">
                        {props.flag && (
                          <IoIosWarning className="text-5xl text-light-1" />
                        )}
                        <div className="my-5 ml-1 text-lg font-bold">
                          {props.cw.name}
                        </div>
                      </div>
                      <div className="text-light-3">
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
                        <h1 className="text-md font-bold">Summary</h1>
                        <p className="text-sm">{props.cw.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="my-2 flex w-full justify-center">
                    <button
                      className="flex items-center rounded-lg border border-transparent bg-transparent p-1 text-light-1 transition delay-100 ease-in-out hover:border-light-3"
                      onClick={() => setIsOpen(false)}
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
