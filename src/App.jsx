import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./FormLogin/First";
import Login from "./FormLogin/Login";
import Register from "./FormLogin/Register";
import ImgFindLove from "./HomePage/ImgFindLove";
import Profile from "./Profile/btn_Profile";
import Chat from "./Profile/btn_Chat";
import Chat1 from "./Chat/Chat1";
import BackButton from "./Chat/Btn_Back";
import Sitting from "./Profile/btn_Sitting";
import DeleteAccount from "./Profile/btn_DeleteAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/headerHomepage" element={<HeaderHomePage />} />
        <Route path="/footerHomepage" element={<FooterHomePage />} /> */}
        <Route path="/imgFindLove" element={<ImgFindLove />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/imgFindLove" element={<ImgFindLove />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat1" element={<Chat1 />} />

        <Route path="/back" element={<BackButton />} />

        <Route path="/sitting" element={<Sitting />} />

        <Route path="/deleteAccount" element={<DeleteAccount />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
