import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../slices/userSlice";
import { toggleGptSearchView } from "../slices/GptSlice";
import { Netflix_Logo, supported_languages } from "../utils/constant";
import { changeLanguge } from "../slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const gptSearch = useSelector((state) => state.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguge(e.target.value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={Netflix_Logo} alt="" />
      {user && (
        <div className="flex align-middle">
          {gptSearch && (
            <select
              name=""
              id=""
              className="px-3 bg-gray-700 text-white  h-10 font-bold "
              onChange={handleLanguageChange}
            >
              {supported_languages.map((e) => {
                return (
                  <>
                    <option value={e.identifier} key={e.identifier}>
                      {e.name}
                    </option>
                  </>
                );
              })}
            </select>
          )}

          <button
            className=" mx-3 h-9 text-white mt-1 p-2 rounded-md font-semibold  bg-purple-800 hover:bg-opacity-50"
            onClick={handleGptSearch}
          >
            {gptSearch ? "Go To Home" : "Gpt Search"}
          </button>
          <img
            src={user.photoURL}
            alt="logo"
            className="h-10 w-10 rounded-full mt-1"
          />
          <button
            className="border border-white mx-3 h-9 text-white mt-1 p-1 w-24 rounded-md font-semibold text-xl hover:bg-white hover:bg-opacity-50"
            onClick={handleSignOut}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
