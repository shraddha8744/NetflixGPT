import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const Login = () => {
  const [isLoginForm, setLoginForm] = useState("Log in");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = () => {
    setLoginForm(isLoginForm === "Log in" ? "Sign up" : "Log in");
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Validate the form data
    const message = checkvalidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    const photoURL =
      "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

    if (isLoginForm === "Sign up") {
      // Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential.user);
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorMessage} - ${errorCode}`);
        });
    } else {
      // Login logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="absolute w-3/12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80 p-4"
      >
        <h1 className="mx-3 mt-6 mb-3 font-bold text-3xl">{isLoginForm}</h1>
        {isLoginForm === "Sign up" && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 mx-2 w-[95%] bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 my-4 mx-2 w-[95%] bg-gray-700 "
          ref={email}
          required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 mx-2 w-[95%] bg-slate-700"
          required
        />
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        <button
          className="p-3 my-4 mx-2 w-[95%] bg-red-600 opacity-100 rounded-sm font-bold"
          onClick={handleButtonClick}
        >
          {isLoginForm}
        </button>
        <br />
        {isLoginForm === "Log in" ? (
          <p className="my-5 ml-3">
            New to Netflix?{" "}
            <span
              onClick={handleSignup}
              className="text-blue-400 cursor-pointer"
            >
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="my-3 ml-3">
            Already Registered?{" "}
            <span
              onClick={handleSignup}
              className="text-blue-400 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
