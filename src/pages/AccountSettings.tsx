import MyProfile from "../components/Settings/MyProfile";
import DangerZone from "../components/Settings/DangerZone";
import AddDevice from "../components/Settings/AddDevice";
import MyProfileSubmission from "../components/Settings/MyProfileSubmissions";
import NoProfile from "../components/Settings/NoProfile";

let email = "";

const jwtToken = localStorage.getItem("token");

if (jwtToken && jwtToken !== "") {
  email = JSON.parse(atob(jwtToken.split(".")[1])).email;
}

function AccountSettings() {
  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="rounded-lg bg-dark-1 py-4 px-8 text-light-1">
        {email !== "" && <MyProfile email={email} />}
        <AddDevice />
        <DangerZone email={email} />
        {email !== "" ? <MyProfileSubmission /> : <NoProfile />}
      </div>
    </div>
  );
}

export default AccountSettings;
