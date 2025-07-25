import React, { useState } from "react";
import { auth, db } from "../FormLogin/firebase";
import { deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    setError(null);

    const user = auth.currentUser;

    if (!user) {
      setError("No user is currently logged in.");
      setLoading(false);
      return;
    }

    try {
      // 1. Delete Firestore user document
      await deleteDoc(doc(db, "users", user.uid));

      // 2. Delete Firebase Auth user
      await deleteUser(user);

      alert("Account deleted successfully.");
      navigate("/register");
    } catch (err) {
      console.error(err);
      setError("Failed to delete account: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Delete Your Account</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleDelete}
        disabled={loading}
        className={`${
          loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        } text-white px-6 py-3 rounded-full font-semibold`}
      >
        {loading ? "Deleting..." : "Delete Account"}
      </button>
    </div>
  );
}

export default DeleteAccount;
