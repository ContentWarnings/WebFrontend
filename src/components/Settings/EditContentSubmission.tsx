// References
// https://day.js.org/docs/en/get-set/set

import { Dialog, Transition } from "@headlessui/react";
import { IoIosArrowBack } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { Fragment, useState, useEffect } from "react";
import Primary2Button from "../shared/Primary2Button";
import TextBox from "../shared/TextBox";
import Dropdown from "../shared/Dropdown";
import Backend from "../../helpers/Backend";
import dayjs, { Dayjs } from "dayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FiEdit2 } from "react-icons/fi";

async function getList(setDropdownList: any) {
  let path = "/names";
  const resp = await Backend.getRequest(path);
  const cwList = resp.jsonResponse.cws.sort().filter(function (cw: any) {
    return cw !== "None";
  });
  let dropdownList: any[] = [];
  cwList.map((cw: any) =>
    dropdownList.push({ display: `${cw}`, value: `${cw}` })
  );
  setDropdownList(dropdownList);
}

function EditContentSubmission(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentWarningName, setContentWarningName] = useState("");
  const [contentWarningSummary, setContentWarningSummary] = useState("");
  const [submissionSummary, setSubmissionSummary] = useState("");
  const [dropdownList, setDropdownList] = useState([]);
  const [error, setError] = useState("");
  const [fromTime, setFromTime] = useState<Dayjs | null>(
    dayjs("2022-04-17T00:00")
  );
  const [toTime, setToTime] = useState<Dayjs | null>(dayjs("2022-04-17T00:00"));
  const [originalContentWarningName, setOriginalContentWarningName] =
    useState("");
  const [originalSubmissionSummary, setOriginalSubmissionSummary] =
    useState("");
  const [originalFromTime, setOriginalFromTime] = useState<Dayjs | null>(
    dayjs("2022-04-17T00:00")
  );
  const [originalToTime, setOriginalToTime] = useState<Dayjs | null>(
    dayjs("2022-04-17T00:00")
  );

  const setStartAndEnd = (cwTimeObject: any) => {
    const start = cwTimeObject[0];
    let hours: number = Math.floor(start / 60);
    let mins: number = start % 60;
    setFromTime(dayjs().set("hour", hours).set("minute", mins));
    const end = cwTimeObject[1];
    hours = Math.floor(end / 60);
    mins = end % 60;
    setToTime(dayjs().set("hour", hours).set("minute", mins));
  };

  useEffect(() => {
    getList(setDropdownList);
  }, []);

  const handleDropdown = (e: any) => {
    handleWarningChange(e.target.value);
  };

  const handleWarningChange = (cw: any) => {
    setContentWarningName(cw);
    async function fetchData() {
      let path = `descriptions?name=${cw}`;
      const resp = await Backend.getRequest(path);
      const desc = resp.jsonResponse.response;
      setContentWarningSummary(desc);
    }
    fetchData();
  };

  const openModal = () => {
    setError("");
    setIsOpen(true);
    setSubmissionSummary(props.cw.desc);
    handleWarningChange(props.cw.name);
    setStartAndEnd(props.cw.time[0]);
    setOriginalContentWarningName(contentWarningName);
    setOriginalSubmissionSummary(submissionSummary);
    setOriginalFromTime(fromTime);
    setOriginalToTime(toTime);
  };

  const editCW = () => {
    if (submissionSummary === "") {
      setError(
        "Please review your content submission, the summary is blank and must be added."
      );
      return;
    }
    // Won't compile unless I check if it's null
    if (
      fromTime === null ||
      toTime === null ||
      originalFromTime == null ||
      originalToTime == null
    )
      return;
    const originalFirstTime =
      originalFromTime.hour() * 60 + originalFromTime.minute();
    const firstTime = fromTime.hour() * 60 + fromTime.minute();
    const originalLastTime =
      originalToTime.hour() * 60 + originalToTime.minute();
    const lastTime = toTime.hour() * 60 + toTime.minute();
    if (firstTime > lastTime) {
      setError(
        "Please review your content submission, the start time is greater than the end time."
      );
      return;
    }
    if (
      originalContentWarningName === contentWarningName &&
      originalFirstTime === firstTime &&
      originalLastTime === lastTime &&
      originalSubmissionSummary === submissionSummary
    ) {
      setError(
        "It seems as if no edits were made, please either return or change the submission"
      );
      return;
    }
    const cwInfo = {
      name: contentWarningName,
      movie_id: props.cw.movie_id,
      time: [[firstTime, lastTime]],
      desc: submissionSummary,
    };
    let path = `cw/${props.cw.id}`;
    Backend.postRequest(path, cwInfo)
      .then((resp: any) => {
        const data: number = resp.statusCode;
        if (data < 400) {
          window.location.pathname = `/settings/profile/`;
        } else {
          setError(resp.jsonResponse.detail);
        }
      })
      .catch((err: any) => {
        setError(
          "Could not connect to the server. Please try again in a few minutes!"
        );
      });
  };

  return (
    <>
      <Primary2Button
        handleClick={() => openModal()}
        name="Edit"
        icon={<FiEdit2 />}
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg align-middle text-dark-3 shadow-xl transition-all dark:text-light-1">
                  <div className="flex w-full">
                    <div className="w-full rounded-l bg-light-1 p-4 dark:bg-dark-2">
                      <h1 className="ml-1 mb-2 text-lg font-bold">
                        {props.title}
                      </h1>
                      <div className="flex w-full">
                        <h2 className="p-2">Content</h2>
                        <Dropdown
                          id="selectedCw"
                          options={dropdownList}
                          handleChange={handleDropdown}
                          default={props.cw.name}
                        />
                      </div>
                      <div className="flex items-center">
                        <h2 className="p-2">Timestamp</h2>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimeField
                            value={fromTime}
                            onChange={(newValue) => setFromTime(newValue)}
                            format="HH:mm"
                            className="mx-auto w-full rounded-lg border-2 border-light-3 px-2 text-lg text-gray-700 dark:border-none dark:bg-light-2"
                          />
                          <div className="p-2">to</div>
                          <TimeField
                            value={toTime}
                            onChange={(newValue) => setToTime(newValue)}
                            format="HH:mm"
                            className="mx-auto w-full rounded-lg border-2 border-light-3 px-2 text-lg text-gray-700 dark:border-none dark:bg-light-2"
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="flex">
                        <h2 className="p-2">Summary</h2>
                        <TextBox
                          defaultValue={submissionSummary}
                          handleChange={(newValue: any) =>
                            setSubmissionSummary(newValue.target.value)
                          }
                        />
                      </div>
                      {error !== "" && (
                        <p className="text-error">Error: {error}</p>
                      )}
                      <div className="my-2 flex w-full justify-end">
                        <button
                          className="mr-2 flex items-center rounded-lg border border-transparent bg-transparent p-1 text-dark-3 transition delay-100 ease-in-out hover:border-dark-1 dark:text-light-1 dark:hover:border-light-3"
                          onClick={() => setIsOpen(false)}
                        >
                          <IoIosArrowBack className="text-lg" />
                          <div className="pr-1 text-sm">Back</div>
                        </button>
                        <Primary2Button
                          icon={<BsPlusLg />}
                          name="Edit"
                          handleClick={() => editCW()}
                        />
                      </div>
                    </div>
                    <div className="w-fit rounded-r bg-light-2 p-2 dark:bg-dark-1">
                      <h1 className="text-md font-bold">
                        {contentWarningName}
                      </h1>
                      <p>{contentWarningSummary}</p>
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

export default EditContentSubmission;
