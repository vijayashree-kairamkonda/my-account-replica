import { Navigate, Route, Routes } from "react-router-dom";
import { AccountBillingPreference } from "./pages/AccountTab/AccBillingPref";
import { AccountPlansServices } from "./pages/AccountTab/AccountPlansServices";
import { AccountProfile } from "./pages/AccountTab/AccountProfile";
import { Account } from "./pages/AccountTab/Accounts";
import { AccountSettings } from "./pages/AccountTab/AccountSettings";
import { Billing } from "./pages/Billing";
import { Home } from "./pages/Home";
import { Notifications } from "./pages/Notifications";
import { Support } from "./pages/Support";

export const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/account" />} />
      <Route path="/account" element={<Account />}>
        <Route path="/account" element={<Navigate to="/account/profile" />} />
        <Route index path="/account/profile" element={<AccountProfile />} />
        <Route
          path="/account/preferences"
          element={<AccountBillingPreference />}
        />
        <Route
          path="/account/plans-services"
          element={<AccountPlansServices />}
        />
        <Route path="/account/settings" element={<AccountSettings />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};
