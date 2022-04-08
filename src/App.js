import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const auth = getAuth(app);

  const [user, setUser] = useState({});

  const handleClick = (name) => {
    if (name === "google") {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => setUser(res.user))
        .catch((err) => console.error(err.message));
    } else if (name === "github") {
      signInWithPopup(auth, new GithubAuthProvider())
        .then((res) => setUser(res.user))
        .catch((err) => console.error(err.message));
    } else {
      console.log("facebook provider");
    }
  };

  return (
    <div className="bg-emerald-50 w-screen h-screen">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="bg-emerald-100 text-emerald-800 text-3xl text-center p-4 mb-8 font-bold">
          Firebase Authentication
        </h1>

        {/* auth trigger button */}
        <div className="shadow flex gap-3 items-center">
          <h3 className="p-6 text-center text-emerald-700 text-3xl font-semibold bg-emerald-100">
            Sign in with
          </h3>
          {/* button container */}
          <div className="flex gap-3 flex-grow-1">
            <button
              className="p-3 flex gap-2 bg-emerald-700 hover:bg-emerald-600 text-emerald-200 hover:text-emerald-50 transition-all rounded"
              onClick={() => handleClick("google")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Google
            </button>
            <button
              className="p-3 flex gap-2 bg-sky-700 hover:bg-sky-600 text-sky-200 hover:text-sky-50 transition-all rounded"
              onClick={() => handleClick("facebook")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Facebook
            </button>
            <button
              className="p-3 flex gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-slate-50 transition-all rounded"
              onClick={() => handleClick("github")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Github
            </button>
          </div>
        </div>

        {/* User */}
        <div className="flex items-center bg-emerald-200 mt-8">
          <img
            className="self-stretch"
            src={user.photoURL}
            alt={user.displayName}
          />
          <div className="p-4">
            <h4 className="text-2xl text-600 font-semibold">
              {user.displayName}
            </h4>
            <p className="py-2">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
