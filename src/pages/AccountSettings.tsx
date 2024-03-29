import MyProfile from "../components/Settings/MyProfile";
import DangerZone from "../components/Settings/DangerZone";
import AddDevice from "../components/Settings/AddDevice";
import MyProfileSubmission from "../components/Settings/MyProfileSubmissions";
import NoProfile from "../components/Settings/NoProfile";
import Tabs from "../components/Settings/Tabs";
import DisplaySetting from "../components/Settings/DisplaySetting";

let email = "";

const jwtToken = localStorage.getItem("token");

if (jwtToken && jwtToken !== "") {
  email = JSON.parse(atob(jwtToken.split(".")[1])).email;
}

function AccountSettings() {
  return (
    <div className="relative mb-10 mt-32 h-fit md:flex lg:mx-20">
      <Tabs page="account" />
      <div className="sm:rounded-lg bg-light-2 py-4 px-8 text-dark-3 dark:bg-dark-1 dark:text-light-1">
        {email !== "" && <MyProfile email={email} />}
        <DisplaySetting />
        <AddDevice />
        <DangerZone email={email} />
        {email !== "" ? <MyProfileSubmission /> : <NoProfile />}
      </div>
    </div>
  );
}

export default AccountSettings;
