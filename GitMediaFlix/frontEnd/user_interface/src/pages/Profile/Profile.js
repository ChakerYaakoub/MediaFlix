import React from "react";
import { ProfileSection } from "../../Sections/index";
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";
const Profile = () => {
  const { isLogin, isProfilePage, setIsProfilePage } =
    useContext(OpenSignUpContext);
  setIsProfilePage(true);
  console.log(isProfilePage);
  return (
    <>
      <ProfileSection />
    </>
  );
};

export default Profile;
