import React, { useState, useEffect } from "react";
import { auth, db } from "../FormLogin/firebase";
import { doc, getDoc } from "firebase/firestore";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const user = auth.currentUser;
        if (!user) {
          setError("No logged-in user found.");
          setLoading(false);
          return;
        }

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data());
        } else {
          setError("User data not found.");
        }
      } catch (err) {
        setError("Failed to fetch user data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading profile...</div>;
  if (error) return <div className="text-center mt-20 text-red-600">{error}</div>;

  return (
    <div>
      <HeaderHomePage />
      <div>
        <div className="md:ml-52">
          <div>
            <div className="flex justify-center gap-4 m-2 md:flex md:justify-start md:ml-24">
              <div className="bg-slate-400 rounded-full p-2 m-0 ml-[-5rem]">
                {userData.imageUrl ? (
                  <img
                    src={userData.imageUrl}
                    className="w-24 h-24 object-cover rounded-full"
                    alt="Profile"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                    No Image
                  </div>
                )}
                <div className="flex items-center justify-center text-white font-bold">
                  86%
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                {userData.username} {userData.lastname} , {userData.age}
                <span className="material-symbols-outlined"> check_circle</span>
              </div>
            </div>
          </div>

          <div>
            <p className="ml-6">
              Hello my name is {userData.username} {userData.lastname}. I am {userData.age} year
              old. Currently a third year Student at ITI.
            </p>
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">
              My Favorite Sport
            </p>
            <div className="flex">
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                    Football
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                    Volleyball
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-24 rounded-full h-12 font-medium cursor-pointer">
                    Basketball
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">My Favorite Song</p>
            <div className="flex">
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Vannda
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    G-Davith
                  </button>
                </Link>
              </div>
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Tena
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-32 rounded-full h-12 font-medium cursor-pointer">
                    Suly Pheng
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">Location</p>
            <ToggleSwitch />
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">Interest</p>
            <div className="flex">
              <div className="m-2 ml-5">
                <Link to="#">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    {userData.interest || "Women"}
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="#">
                  <button className="bg-gray-300 w-40 rounded-full h-12 font-medium cursor-pointer">
                    Good English
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-1xl font-bold flex ml-6">Sitting</p>
            <div className="flex">
              <div className="m-2 ml-5">
                <Link to="/sitting">
                  <button className="bg-gray-300 w-28 rounded-full h-12 font-medium cursor-pointer">
                    Sitting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
