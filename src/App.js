import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProfilePage from "./pages/profile/ProfilePage";
import RegisterForm from "./pages/profile/RegisterForm";
import LoginForm from "./pages/profile/LoginForm";
import ChangePassword from "./components/profile/ChangePassword";
import EditProfilePage from "./pages/profile/EditProfilePage";
import Auth from "./components/Auth";
import VerifyAccount from "./components/profile/VerifyAccount";
import VerifyChange from "./components/profile/VerifyChange";
import BlogDetail from "../src/components/blog/BlogDetail";
import CreateBlog from "./pages/blog/CreateBlog";

function App() {
  return (
    <div className="App">
      <Auth>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
            <Route exact path="write" element={<CreateBlog />} />
            <Route exact path="profile" element={<ProfilePage />} />
            <Route exact path="register" element={<RegisterForm />} />
            <Route exact path="login" element={<LoginForm />} />
            <Route exact path="changePassword" element={<ChangePassword />} />
            <Route exact path="editProfile" element={<EditProfilePage />} />
            <Route path="/verification/:token" element={<VerifyAccount />} />
            <Route
              path="/verification-change-email/:token"
              element={<VerifyChange />}
            />
            <Route path="/blog/:id" element={<BlogDetail />} />

            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </BrowserRouter>
      </Auth>
    </div>
  );
}

export default App;
