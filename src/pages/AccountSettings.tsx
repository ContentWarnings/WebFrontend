import MyProfile from "../components/Settings/MyProfile";
import DangerZone from "../components/Settings/DangerZone";
import AddDevice from "../components/Settings/AddDevice";
import MyProfileSubmission from "../components/Settings/MyProfileSubmissions";
import NoProfile from "../components/Settings/NoProfile";
import Tabs from "../components/Settings/Tabs";

let email = "";

const jwtToken = localStorage.getItem("token");

if (jwtToken && jwtToken !== "") {
  email = JSON.parse(atob(jwtToken.split(".")[1])).email;
}

function AccountSettings() {
  return (
    <div className="relative mb-10 mt-32 h-fit sm:flex lg:mx-20">
      <Tabs page="account" />
      <div className="rounded-lg bg-light-2 py-4 px-8 text-dark-3 dark:bg-dark-1 dark:text-light-1">
        {email !== "" && <MyProfile email={email} />}
        <AddDevice />
        <DangerZone email={email} />
        {email !== "" ? <MyProfileSubmission /> : <NoProfile />}
      </div>
    </div>
  );
}

export default AccountSettings;
