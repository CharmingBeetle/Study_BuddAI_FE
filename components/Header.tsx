import React, { useContext } from "react";
import { UserContext } from "../src/contexts/User";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import NavBarOtherPages from "./NavBarOtherPages"
import '@clerk/clerk-react';
import useUserContext from "../src/contexts/useUserContext";

const Header: React.FC = () => {
  // Access the context
  const context = useContext(UserContext);
  const location = useLocation();
  const hideOnRoutes = ["/","/login", "/createaccount"];
  const shouldShowUserProfile = !hideOnRoutes.includes(location.pathname);
  const { loggedInUser } = useUserContext()
  const username = loggedInUser.username;

  if (!context) {
    return <h1 className="title">Study BuddAI LOGO</h1>;
  }

  return (
    <div className="header-container text-white py-4 ">
      {shouldShowUserProfile && (
        <div className="userProfile">
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl="/homepage">
              <button>Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal" fallbackRedirectUrl="/homepage">
              <button>Sign Up</button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
      <img className="logo" src="/tranparentlogo.png"  alt="logo"/>
      <h2 className=" welcome-msg">Welcome {username}</h2>
      <NavBarOtherPages />
    </div>
  );
};

export default Header;
