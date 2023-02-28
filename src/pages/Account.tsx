import SignIn from "../components/Account/SignIn";
import Register from "../components/Account/Register";
import Verify from "../components/Account/Verify";
import PasswordReset from "../components/Account/PasswordReset";
import PasswordResetCommit from "../components/Account/PasswordResetCommit";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";

function Account() {
  return (
    <div className="relative px-6 h-fit mb-10">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwd-reset" element={<PasswordReset />} />
        <Route path="/verify/passwd" element={<PasswordResetCommit />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Account;
