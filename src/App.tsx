import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";
import Explore from "./pages/explore";
import PoliciesLayout from "./layouts/policies";
import CommunityGuidelines from "./pages/policies/community-guidelines";
import Licenses from "./pages/policies/licenses";
import PrivacyPolicy from "./pages/policies/privacy-policy";
import PrivacyPreferences from "./pages/policies/privacy-prefences";
import SafetyTips from "./pages/policies/safety-tips";
import TermsOfService from "./pages/policies/terms-of-service";
import ContactUs from "./pages/contact-us";
import SignIn from "./pages/sign-in";
import Register from "./pages/register";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import Profile from "./pages/profile";

function App() {
  const [user, setUser] = useAtom(userAtom);
  // const isUserAuthenticated = !!user;
  console.log(user);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile/>}/>
      </Route>
      <Route element={<PoliciesLayout />}>
        <Route path="community-guidelines" element={<CommunityGuidelines />} />
        <Route path="licenses" element={<Licenses />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="privacy-preferences" element={<PrivacyPreferences />} />
        <Route path="safety-tips" element={<SafetyTips />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
}

export default App;
